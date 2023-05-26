import { PropsWithChildren } from 'react'

import { Alert } from '@/components'

import styles from './styles.module.scss'

type SettingsSectionProperties = PropsWithChildren & {
  title: string
  notAvailable?: boolean
}

export const SettingsSection = ({ title, notAvailable, children }: SettingsSectionProperties) => (
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
