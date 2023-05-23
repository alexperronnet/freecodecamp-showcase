import { useSeo } from '@/hooks'

import { Features } from './features'
import { Hero } from './hero'
import styles from './home.module.scss'

export const Home = () => {
  useSeo({ page: 'Home' })

  return (
    <main className={styles.home}>
      <Hero />
      <Features />
    </main>
  )
}
