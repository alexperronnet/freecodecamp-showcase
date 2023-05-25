import { Navigate, RouteObject, useRoutes } from 'react-router-dom'

import { Layout } from '@/layout'
import * as Pages from '@/pages'
import { useAppSelector } from '@/store'

import { PrivateRoute } from './private-route'

export const AppRoutes = () => {
  // Store
  const { isAuthenticated } = useAppSelector(state => state.auth)

  const routes: RouteObject[] = [
    {
      element: <Layout />,
      children: [
        {
          index: true,
          element: isAuthenticated ? <Navigate to='/dashboard' replace /> : <Pages.Home />
        },
        {
          path: 'auth',
          element: <Pages.Auth />
        },
        // Private routes are nested in a PrivateRoute component
        {
          element: <PrivateRoute />,
          children: [
            {
              path: 'dashboard',
              element: <Pages.Dashboard />
            },
            {
              path: 'account',
              element: <Pages.Account />
            }
          ]
        },
        {
          path: '*',
          element: <Pages.NotFound />
        }
      ]
    }
  ]

  return useRoutes(routes)
}
