import { useAppSelector } from '@/store'

import styles from './hero.module.scss'

export const Hero = () => {
  const { firstName, lastName } = useAppSelector(state => state.profile.infos) || {}

  return (
    <header className={styles.hero}>
      <h2>
        <span>Welcome Back</span>
        <span>
          {firstName} {lastName}
        </span>
      </h2>
    </header>
  )
}
