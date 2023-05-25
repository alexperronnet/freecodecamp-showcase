import { useAppSelector } from '@/store'

import styles from './styles.module.scss'

export const DashboardHero = () => {
  const { firstName, lastName } = useAppSelector(state => state.profile.infos) || {}

  return (
    <header className={styles.hero}>
      <h2 className={styles.title}>
        <span className={styles.welcome}>Welcome Back</span>
        <span className={styles.user}>
          {firstName} {lastName}
        </span>
      </h2>
    </header>
  )
}
