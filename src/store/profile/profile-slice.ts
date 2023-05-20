import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit'

import { fetchProfile, updateProfile } from './profile-thunks'
import { ProfileResponse } from './profile-types'

type ProfileState = {
  infos?: ProfileResponse['body']
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error?: string
}

const initialState: ProfileState = {
  status: 'idle'
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    resetProfile: () => initialState
  },
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(fetchProfile.pending, updateProfile.pending), state => {
        state.infos = undefined
        state.status = 'loading'
        state.error = undefined
      })
      .addMatcher(
        isAnyOf(fetchProfile.fulfilled, updateProfile.fulfilled),
        (state, action: PayloadAction<ProfileResponse>) => {
          state.infos = action.payload.body
          state.status = 'succeeded'
          state.error = undefined
        }
      )
      .addMatcher(
        isAnyOf(fetchProfile.rejected, updateProfile.rejected),
        (state, action: PayloadAction<string | undefined>) => {
          state.infos = undefined
          state.status = 'failed'
          state.error = action.payload || 'Something went wrong.'
        }
      )
  }
})

export const { resetProfile } = profileSlice.actions
export const profileReducer = profileSlice.reducer
