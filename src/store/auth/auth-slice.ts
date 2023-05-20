import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit'

import { loginUser, registerUser } from './auth-thunks'

type AuthState = {
  isAuthenticated: boolean
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error?: string
}

const initialState: AuthState = {
  isAuthenticated: false,
  status: 'idle'
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuth: () => initialState,
    setIsAuthenticated: state => {
      state.isAuthenticated = true
      state.status = 'succeeded'
      state.error = undefined
    }
  },
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(loginUser.pending, registerUser.pending), state => {
        state.isAuthenticated = false
        state.status = 'loading'
        state.error = undefined
      })
      .addMatcher(isAnyOf(loginUser.fulfilled, registerUser.fulfilled), state => {
        state.isAuthenticated = true
        state.status = 'succeeded'
        state.error = undefined
      })
      .addMatcher(
        isAnyOf(loginUser.rejected, registerUser.rejected),
        (state, action: PayloadAction<string | undefined>) => {
          state.isAuthenticated = false
          state.status = 'failed'
          state.error = action.payload || 'Something went wrong.'
        }
      )
  }
})

export const { resetAuth, setIsAuthenticated } = authSlice.actions
export const authReducer = authSlice.reducer
