import { useEffect, useState } from 'react'

import { Loader } from '@/components'
import { Router } from '@/router'
import { fetchProfile, setIsAuthenticated, useAppDispatch } from '@/store'
import { tokenStorage } from '@/utils'

export const App = () => {
  const [checkingAuth, setCheckingAuth] = useState(true)
  const dispatch = useAppDispatch()

  // Check if the user is authenticated on app load
  useEffect(() => {
    const token = tokenStorage.get()

    if (token) {
      dispatch(setIsAuthenticated())
      dispatch(fetchProfile())
    }

    setCheckingAuth(false)
  }, [dispatch])

  return checkingAuth ? <Loader /> : <Router />
}
