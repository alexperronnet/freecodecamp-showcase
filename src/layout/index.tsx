import { Outlet } from 'react-router-dom'

import { Footer } from './footer'
import { Navbar } from './navbar'
import styles from './styles.module.scss'

export const Layout = () => (
  <div className={styles.layout}>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
)
