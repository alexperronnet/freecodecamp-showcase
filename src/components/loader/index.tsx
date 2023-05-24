import { Icon } from '@/components'

import styles from './styles.module.scss'

export const Loader = () => (
  <div className={styles.loader}>
    <Icon name='loader' className={styles.icon} />
    <p className={styles.text}>Loading...</p>
  </div>
)
