import { forwardRef, InputHTMLAttributes } from 'react'

import styles from './checkbox.module.scss'

type CheckboxProperties = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProperties>(
  ({ label, ...properties }, reference) => (
    <label className={styles.checkbox}>
      <input type='checkbox' ref={reference} {...properties} />
      {label}
    </label>
  )
)

Checkbox.displayName = 'Checkbox'
