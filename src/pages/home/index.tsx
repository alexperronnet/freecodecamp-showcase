import { useSeo } from '@/hooks'

import { HomeFeatures } from './home-features'
import { HomeHero } from './home-hero'
import styles from './styles.module.scss'

export const Home = () => {
  useSeo({ page: 'Home' })

  return (
    <main className={styles.home}>
      <HomeHero />
      <HomeFeatures />
    </main>
  )
}
