import { Icon } from '@/components'

import styles from './loader.module.scss'

export const Loader = () => (
  <div className={styles.loader}>
    <Icon name='loader' />
    <p>Loading...</p>
  </div>
)
