import { Navigate, RouteObject, useRoutes } from 'react-router-dom'

import { Layout } from '@/layout'
import * as Pages from '@/pages'

import { PrivateRoute } from './private-route'

export const AppRoutes = () => {
  const isAuthenticated = false // TODO: replace with auth state when ready

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
