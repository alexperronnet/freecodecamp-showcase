import { useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useToast } from '@/hooks'
import { useAppSelector } from '@/store'

export const PrivateRoute = () => {
  const location = useLocation()
  const { isAuthenticated } = useAppSelector(state => state.auth)
  const { pushToast } = useToast()

  useEffect(() => {
    if (!isAuthenticated) {
      pushToast({
        message: 'You are not authorized to access this page',
        status: 'error'
      })
    }
  }, [isAuthenticated, pushToast])

  if (!isAuthenticated) {
    return <Navigate to='/auth' replace state={{ from: location.pathname }} />
  }

  return <Outlet />
}
