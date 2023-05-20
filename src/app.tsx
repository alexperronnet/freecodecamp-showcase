import { useEffect, useState } from 'react'

import { Loader } from '@/component'
import { Router } from '@/router'
import { tokenStorage } from '@/utils'

export const App = () => {
  const [checkingAuth, setCheckingAuth] = useState(true)

  useEffect(() => {
    const token = tokenStorage.get()

    if (token) {
      // TODO: dispatch action to get user info when store is ready
    }

    setCheckingAuth(false)
  }, [])

  return checkingAuth ? <Loader /> : <Router />
}
