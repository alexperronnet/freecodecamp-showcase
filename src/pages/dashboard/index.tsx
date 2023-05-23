import { useSeo } from '@/hooks'

import { Accounts } from './accounts'
import styles from './dashboard.module.scss'
import { Hero } from './hero'

export const Dashboard = () => {
  useSeo({ page: 'Dashboard' })

  return (
    <main className={styles.dashboard}>
      <Hero />
      <Accounts />
    </main>
  )
}
