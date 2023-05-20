import { PropsWithChildren } from 'react'

import styles from './toast-container.module.scss'

export const ToastContainer = ({ children }: PropsWithChildren) => (
  <aside className={styles['toast-container']}>{children}</aside>
)
