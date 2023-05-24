import { useSeo } from '@/hooks'

import { DashboardAccounts } from './dashboard-accounts'
import { DashboardHero } from './dashboard-hero'
import styles from './styles.module.scss'

export const Dashboard = () => {
  useSeo({ page: 'Dashboard' })

  return (
    <main className={styles.dashboard}>
      <DashboardHero />
      <DashboardAccounts />
    </main>
  )
}
