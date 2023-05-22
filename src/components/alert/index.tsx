import classNames from 'classnames/bind'
import { ComponentProps, PropsWithChildren } from 'react'

import { Icon } from '@/components'

import styles from './alert.module.scss'

type AlertProperties = PropsWithChildren & {
  icon?: ComponentProps<typeof Icon>['name']
  variant?: 'info' | 'danger'
}

const cn = classNames.bind(styles)

export const Alert = ({ icon, variant = 'info', children }: AlertProperties) => (
  <div className={cn('alert', variant)}>
    {icon && <Icon name={icon} />}
    {children}
  </div>
)
