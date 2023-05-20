import { combineReducers } from '@reduxjs/toolkit'

import { authReducer } from './auth/auth-slice'
import { profileReducer } from './profile/profile-slice'

export const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer
})
