import classNames from 'classnames/bind'

import { Icon } from '@/components'

import styles from './toast-element.module.scss'

const cn = classNames.bind(styles)

type ToastElementProperties = {
  message: string
  status: 'success' | 'error'
  onRemove: () => void
}

export const ToastElement = ({ message, status, onRemove }: ToastElementProperties) => (
  <div className={cn('toast-element', status)}>
    <Icon name={status === 'success' ? 'checkDouble' : 'errorWarning'} />
    <p>{message}</p>
    <button onClick={onRemove} className={styles.close}>
      <Icon name='close' />
    </button>
  </div>
)
