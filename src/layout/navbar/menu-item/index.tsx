import classNames from 'classnames/bind'
import { ComponentProps, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import { Icon } from '@/components'

import styles from './menu-item.module.scss'

const cn = classNames.bind(styles)

type MenuItemProperties = {
  icon: ComponentProps<typeof Icon>['name']
  label: string
  type?: 'default' | 'logout'
  to?: string
  onClick?: () => void
}

export const MenuItem = ({ icon, label, type = 'default', to, onClick }: MenuItemProperties) => {
  const menuItemContent = (
    <Fragment>
      <Icon name={icon} />
      <span>{label}</span>
    </Fragment>
  )

  const menuItemClasses = cn('menu-item', type)

  return (
    <li>
      {to && (
        <NavLink to={to} className={menuItemClasses}>
          {menuItemContent}
        </NavLink>
      )}
      {type === 'logout' && (
        <button type='button' onClick={onClick} className={menuItemClasses}>
          {menuItemContent}
        </button>
      )}
    </li>
  )
}
