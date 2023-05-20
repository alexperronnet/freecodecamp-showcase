import { createAsyncThunk } from '@reduxjs/toolkit'

import { apiErrorMessage, apiInstance } from '@/services'

import { ProfileResponse, UpdateProfilePayload } from './profile-types'

const PROFILE_ENDPOINT = '/profile'

export const fetchProfile = createAsyncThunk<ProfileResponse, void, { rejectValue: string }>(
  'profile/fetchProfile',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await apiInstance.post<ProfileResponse>(PROFILE_ENDPOINT)
      return data
    } catch (error) {
      const errorMessage = apiErrorMessage(error)
      return rejectWithValue(errorMessage)
    }
  }
)

export const updateProfile = createAsyncThunk<
  ProfileResponse,
  UpdateProfilePayload,
  { rejectValue: string }
>('profile/updateProfile', async (payload, { rejectWithValue }) => {
  try {
    const { data } = await apiInstance.put<ProfileResponse>(PROFILE_ENDPOINT, payload)
    return data
  } catch (error) {
    const errorMessage = apiErrorMessage(error)
    return rejectWithValue(errorMessage)
  }
})
