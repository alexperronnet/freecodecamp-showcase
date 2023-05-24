import { PropsWithChildren } from 'react'

import { Alert } from '@/components'

import styles from './styles.module.scss'

type SectionProperties = PropsWithChildren & {
  title: string
  notAvailable?: boolean
}

export const AccountSection = ({ title, notAvailable, children }: SectionProperties) => (
  <section className={styles.section}>
    <h2 className={styles.title}>{title}</h2>
    {notAvailable && (
      <Alert icon='lock' variant='danger'>
        This section is not available yet!
      </Alert>
    )}
    {children}
  </section>
)
