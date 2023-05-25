import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from './root-reducer'

export const store = configureStore({
  reducer: rootReducer,
  // Enable Redux DevTools in development mode
  devTools: import.meta.env.DEV
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
