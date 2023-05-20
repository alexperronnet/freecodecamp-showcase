import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'
import '@/styles/main.scss'

import { useEffect, useState } from 'react'

import { Loader } from '@/component'
import { Router } from '@/router'
import { fetchProfile, setIsAuthenticated, useAppDispatch } from '@/store'
import { tokenStorage } from '@/utils'

export const App = () => {
  const [checkingAuth, setCheckingAuth] = useState(true)
  const dispatch = useAppDispatch()

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
