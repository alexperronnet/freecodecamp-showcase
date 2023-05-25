// ? Refer to src/contexts/toast-context.tsx for more information

import { PropsWithChildren } from 'react'

import styles from './styles.module.scss'

export const ToastContainer = ({ children }: PropsWithChildren) => (
  <aside className={styles['toast-container']}>{children}</aside>
)
