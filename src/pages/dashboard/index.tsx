import { Accounts } from './accounts'
import styles from './dashboard.module.scss'
import { Hero } from './hero'

export const Dashboard = () => (
  <main className={styles.dashboard}>
    <Hero />
    <Accounts />
  </main>
)
