import { Features } from './features'
import { Hero } from './hero'
import styles from './home.module.scss'

export const Home = () => (
  <main className={styles.home}>
    <Hero />
    <Features />
  </main>
)
