import { useEffect, useState } from 'react'

import { Loader } from '@/component'
import { Router } from '@/router'

export const App = () => {
  const [checkingAuth, setCheckingAuth] = useState(true)

  useEffect(() => {
    // TODO: check auth state here when state management is ready
    setTimeout(() => {
      setCheckingAuth(false)
    }, 1000)
  }, [])

  return checkingAuth ? <Loader /> : <Router />
}
