import { Outlet } from 'react-router-dom'

import { Footer } from './footer'
import styles from './layout.module.scss'
import { Navbar } from './navbar'

export const Layout = () => (
  <div className={styles.layout}>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
)
