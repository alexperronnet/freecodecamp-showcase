import { useNavigate } from 'react-router-dom'

import { Button } from '@/components'
import { useSeo } from '@/hooks'

import styles from './404.module.scss'

export const NotFound = () => {
  useSeo({ page: '404' })

  const navigate = useNavigate()

  const handleBackSafely = () => {
    navigate('/')
  }

  return (
    <main className={styles['not-found']}>
      <h2>404</h2>
      <p>The page you are looking for does not exist or has been moved.</p>
      <Button variant='secondary' onClick={handleBackSafely}>
        Back Safely
      </Button>
    </main>
  )
}
