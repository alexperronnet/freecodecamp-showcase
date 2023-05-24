import classNames from 'classnames/bind'

import { Icon } from '@/components'

import styles from './styles.module.scss'

const cn = classNames.bind(styles)

type ToastElementProperties = {
  message: string
  status: 'success' | 'error'
  onRemove: () => void
}

export const ToastElement = ({ message, status, onRemove }: ToastElementProperties) => (
  <div className={cn('toast-element', status)}>
    <Icon name={status === 'success' ? 'checkDouble' : 'errorWarning'} className={styles.icon} />
    <p className={styles.message}>{message}</p>
    <button onClick={onRemove} className={styles.close}>
      <Icon name='close' className={styles['close-icon']} />
      <span className={styles['close-label']}>Close</span>
    </button>
  </div>
)
