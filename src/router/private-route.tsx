import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const PrivateRoute = () => {
  const location = useLocation()
  const isAuthenticated = false // TODO: replace with auth state when ready

  // TODO: add toast message to notify user that they need to login

  if (!isAuthenticated) {
    return <Navigate to='/auth' replace state={{ from: location.pathname }} />
  }

  return <Outlet />
}
