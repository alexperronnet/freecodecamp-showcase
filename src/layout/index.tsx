import { Outlet } from 'react-router-dom'

import { Footer } from './footer'
import { Navbar } from './navbar'

export const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
)
