import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useAppSelector } from '@/store'

export const PrivateRoute = () => {
  const location = useLocation()
  const { isAuthenticated } = useAppSelector(state => state.auth)

  // TODO: add toast message to notify user that they need to login

  if (!isAuthenticated) {
    return <Navigate to='/auth' replace state={{ from: location.pathname }} />
  }

  return <Outlet />
}
