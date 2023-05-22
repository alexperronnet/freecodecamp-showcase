import classNames from 'classnames/bind'
import { forwardRef, InputHTMLAttributes, useState } from 'react'

import { Icon } from '@/components'

import styles from './field.module.scss'

type FieldProperties = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  type: 'text' | 'email' | 'password'
  error?: string
}

const cx = classNames.bind(styles)

export const Field = forwardRef<HTMLInputElement, FieldProperties>(
  ({ label, type, error, ...properties }, reference) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible)

    const inputType = type === 'password' && isPasswordVisible ? 'text' : type

    return (
      <label className={cx('field', error && 'field-error')}>
        <span className={styles.label}>{label}</span>
        <div className={styles['input-container']}>
          <input ref={reference} type={inputType} {...properties} />
          {type === 'password' && (
            <button
              type='button'
              onClick={togglePasswordVisibility}
              aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
              className={styles['toggle-password-visibility']}
            >
              <Icon name={isPasswordVisible ? 'eye' : 'eyeClose'} />
              <span>{isPasswordVisible ? 'Hide' : 'Show'}</span>
            </button>
          )}
        </div>
        {error && <span className={styles.error}>{error}</span>}
      </label>
    )
  }
)

Field.displayName = 'Field'
