import { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Logo } from '@/components'
import { resetAuth, resetProfile, useAppDispatch, useAppSelector } from '@/store'
import { tokenStorage } from '@/utils'

import { MenuItem } from './menu-item'
import styles from './navbar.module.scss'

export const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { isAuthenticated } = useAppSelector(state => state.auth)
  const { firstName } = useAppSelector(state => state.profile.infos) || {}

  const handleLogout = () => {
    tokenStorage.remove()
    dispatch(resetAuth())
    dispatch(resetProfile())
    navigate('/')

    // TODO: add toast notification
  }

  return (
    <nav className={styles.nav}>
      <Link to='/' className={styles.logo}>
        <Logo />
        <h1>Argent Bank</h1>
      </Link>
      <ul className={styles.menu}>
        {isAuthenticated ? (
          <Fragment>
            <MenuItem icon='accountCircle' label={firstName || 'Account'} to='/account' />
            <MenuItem icon='logoutBox' label='Sign Out' type='logout' onClick={handleLogout} />
          </Fragment>
        ) : (
          <MenuItem icon='loginBox' label='Sign In' to='/auth' />
        )}
      </ul>
    </nav>
  )
}
