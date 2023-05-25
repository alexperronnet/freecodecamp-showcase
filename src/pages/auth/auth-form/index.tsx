import { Fragment, useEffect } from 'react'
import { RegisterOptions, useForm } from 'react-hook-form'

import { Button, Checkbox, Field } from '@/components'
import { regexValidation } from '@/utils'

import styles from './form.module.scss'

type Mode = 'login' | 'register'

export type AuthFormValues = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  persist: boolean
}

const defaultValues: AuthFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  persist: false
}

type FormProperties = {
  mode: Mode
  onSubmit: (data: AuthFormValues) => void
}

export const AuthForm = ({ mode, onSubmit }: FormProperties) => {
  const { register, handleSubmit, watch, reset, formState } = useForm<AuthFormValues>({
    defaultValues,
    mode: 'onTouched'
  })
  const { errors, isSubmitting } = formState

  const isRegistering = mode === 'register'

  // We need to reset the form when the mode changes
  useEffect(() => {
    reset(defaultValues)
  }, [mode, reset])

  const validationRules = {
    firstName: {
      required: 'Cannot be empty',
      pattern: {
        value: regexValidation.name,
        message: 'Entered value does not match name format'
      }
    },
    lastName: {
      required: 'Cannot be empty',
      pattern: {
        value: regexValidation.name,
        message: 'Entered value does not match name format'
      }
    },
    email: {
      required: 'Cannot be empty',
      pattern: {
        value: regexValidation.email,
        message: 'Entered value does not match email format'
      }
    },
    password: (isRegistering: boolean) => ({
      required: 'Cannot be empty',
      pattern: isRegistering
        ? {
            value: regexValidation.securePassword,
            message:
              'Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character'
          }
        : undefined
    }),
    confirmPassword: () => ({
      required: 'Cannot be empty',
      validate: (value: string) => value === watch('password') || 'The passwords do not match'
    })
  }

  const renderField = (type: string, name: keyof AuthFormValues, validation: RegisterOptions) => (
    <Field
      type={type as 'text' | 'email' | 'password'}
      label={name.split(/(?=[A-Z])/).join(' ')}
      {...register(name, validation)}
      disabled={isSubmitting}
      error={errors[name]?.message}
    />
  )

  return (
    <form key={mode} onSubmit={handleSubmit(onSubmit)} noValidate className={styles.form}>
      {isRegistering && (
        <Fragment>
          {renderField('text', 'firstName', validationRules.firstName)}
          {renderField('text', 'lastName', validationRules.lastName)}
        </Fragment>
      )}
      {renderField('email', 'email', validationRules.email)}
      {renderField('password', 'password', validationRules.password(isRegistering))}
      {isRegistering && renderField('password', 'confirmPassword', validationRules.confirmPassword())}
      <Checkbox
        label={isRegistering ? 'Stay logged in after registration' : 'Remember Me'}
        {...register('persist')}
        disabled={isSubmitting}
      />
      <Button variant='secondary' type='submit' disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : isRegistering ? 'Sign Up' : 'Sign In'}
      </Button>
    </form>
  )
}
