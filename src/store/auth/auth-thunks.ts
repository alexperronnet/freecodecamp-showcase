import { createAsyncThunk } from '@reduxjs/toolkit'

import { apiErrorMessage, apiInstance } from '@/services'
import { tokenStorage } from '@/utils'

import { fetchProfile } from '../profile/profile-thunks'
import { AuthResponse, LoginUserPayload, RegisterUserPayload } from './auth-types'

const LOGIN_USER_ENDPOINT = '/login'
const REGISTER_USER_ENDPOINT = '/signup'

export const loginUser = createAsyncThunk<void, LoginUserPayload, { rejectValue: string }>(
  'auth/loginUser',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const { persist, ...loginUserPayload } = payload
      const { data } = await apiInstance.post<AuthResponse>(LOGIN_USER_ENDPOINT, loginUserPayload)
      const { token } = data.body
      persist ? tokenStorage.set(token, 'local') : tokenStorage.set(token)
      dispatch(fetchProfile())
    } catch (error) {
      const errorMessage = apiErrorMessage(error)
      return rejectWithValue(errorMessage)
    }
  }
)

export const registerUser = createAsyncThunk<void, RegisterUserPayload, { rejectValue: string }>(
  'auth/registerUser',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const { persist, ...registerUserPayload } = payload
      const { email: registerUserEmail, password: registerUserPassword } = registerUserPayload
      const loginUserPayload = { email: registerUserEmail, password: registerUserPassword, persist }
      await apiInstance.post<AuthResponse>(REGISTER_USER_ENDPOINT, registerUserPayload)
      dispatch(loginUser(loginUserPayload))
    } catch (error) {
      const errorMessage = apiErrorMessage(error)
      return rejectWithValue(errorMessage)
    }
  }
)
