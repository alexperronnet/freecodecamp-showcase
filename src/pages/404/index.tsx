import { useNavigate } from 'react-router-dom'

import { Button } from '@/components'
import { useSeo } from '@/hooks'

import styles from './styles.module.scss'

export const NotFound = () => {
  useSeo({ page: '404' })

  const navigate = useNavigate()

  const handleBackSafely = () => {
    navigate('/')
  }

  return (
    <main className={styles['not-found']}>
      <h2 className={styles.title}>404</h2>
      <p className={styles.text}>The page you are looking for does not exist or has been moved.</p>
      <Button variant='secondary' onClick={handleBackSafely}>
        Back Safely
      </Button>
    </main>
  )
}
