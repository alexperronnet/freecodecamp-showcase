import { Icon } from '@/components'

import styles from './styles.module.scss'

type AuthHeaderProperties = {
  mode: 'login' | 'register'
}

export const AuthHeader = ({ mode }: AuthHeaderProperties) => (
  <header className={styles.header}>
    <Icon name={mode === 'login' ? 'user' : 'userAdd'} className={styles.icon} />
    <h2 className={styles.title}>{mode === 'login' ? 'Sign In' : 'Sign Up'}</h2>
  </header>
)
