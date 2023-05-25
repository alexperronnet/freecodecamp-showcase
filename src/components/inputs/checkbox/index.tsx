import { forwardRef, InputHTMLAttributes } from 'react'

import styles from './styles.module.scss'

type CheckboxProperties = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

// ! The forwardRef is important for work properly with React Hook Form!!
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProperties>(({ label, ...properties }, reference) => (
  <label className={styles.checkbox}>
    <input type='checkbox' ref={reference} className={styles.input} {...properties} />
    {label}
  </label>
))

Checkbox.displayName = 'Checkbox'
