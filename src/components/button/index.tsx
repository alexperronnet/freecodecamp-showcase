import classNames from 'classnames/bind'
import { ButtonHTMLAttributes } from 'react'

import styles from './styles.module.scss'

type ButtonProperties = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'danger'
}

const cn = classNames.bind(styles)

export const Button = ({ children, variant = 'primary', ...properties }: ButtonProperties) => (
  <button className={cn('button', variant)} {...properties}>
    {children}
  </button>
)
