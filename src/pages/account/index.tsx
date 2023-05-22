import { RegisterOptions, useForm } from 'react-hook-form'

import { Alert, Button, Field } from '@/components'
import { useToast } from '@/hooks'
import { updateProfile, useAppDispatch, useAppSelector } from '@/store'
import { formatString, regexValidation } from '@/utils'

import styles from './account.module.scss'

type FormValues = {
  firstName: string
  lastName: string
}

const defaultValues: FormValues = {
  firstName: '',
  lastName: ''
}

export const Account = () => {
  const dispatch = useAppDispatch()
  const { firstName, lastName, id, createdAt, updatedAt, email } =
    useAppSelector(state => state.profile.infos) || {}
  const { pushToast } = useToast()

  const { register, handleSubmit, formState, reset } = useForm<FormValues>({
    mode: 'onTouched',
    defaultValues
  })

  const { errors, isSubmitting } = formState

  const onSubmit = (data: FormValues) => {
    const { firstName: firstNameInput, lastName: lastNameInput } = data

    const formattedFirstName = formatString.name(firstNameInput)
    const formattedLastName = formatString.name(lastNameInput)

    const emptyFields = !formattedFirstName && !formattedLastName
    const noChangesInFields =
      (firstName === formattedFirstName && lastName === formattedLastName) ||
      (formattedFirstName && !formattedLastName && firstName === formattedFirstName) ||
      (!formattedFirstName && formattedLastName && lastName === formattedLastName)

    if (emptyFields) {
      return pushToast({ status: 'error', message: 'Nothing to update!' })
    }

    if (noChangesInFields) {
      return pushToast({ status: 'error', message: 'We have not detected any changes!' })
    }

    dispatch(updateProfile({ firstName: formattedFirstName, lastName: formattedLastName }))
    pushToast({ status: 'success', message: 'Your profile has been updated!' })
    reset(defaultValues)
  }

  const validationRules = {
    firstName: {
      pattern: { value: regexValidation.name, message: 'Entered value does not match name format' }
    },
    lastName: {
      pattern: { value: regexValidation.name, message: 'Entered value does not match name format' }
    }
  }

  const renderField = (type: string, name: keyof FormValues, validation: RegisterOptions) => (
    <Field
      type={type as 'text'}
      label={name.split(/(?=[A-Z])/).join(' ')}
      {...register(name, validation)}
      disabled={isSubmitting}
      error={errors[name]?.message}
    />
  )

  return (
    <main className={styles.account}>
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Personal Information</h2>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className={styles.form}>
            {renderField('text', 'firstName', validationRules.firstName)}
            {renderField('text', 'lastName', validationRules.lastName)}
            <Field label='Email' type='email' value={email || ''} disabled />
            <Button variant='secondary' type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
        </section>
        <section className={styles.section}>
          <h2>Security</h2>
          <Alert icon='lock' variant='danger'>
            Password update is not available yet.
          </Alert>
          <form className={styles.form}>
            <Field label='Password' type='text' disabled />
            <Field label='Confirm Password' type='text' disabled />
            <Button variant='secondary' disabled>
              Update Password
            </Button>
          </form>
        </section>
        <section className={styles.section}>
          <h2>Danger zone</h2>
          <Alert icon='lock' variant='danger'>
            Delete account is not available yet.
          </Alert>
          <Button variant='danger' disabled>
            Delete Account
          </Button>
        </section>
      </div>
      <aside className={styles.infos}>
        <ul className={styles.list}>
          <li>
            <h3>Account ID:</h3>
            <span>{id}</span>
          </li>
          <li>
            <h3>Created At:</h3>
            <span>{formatString.date(createdAt as string)}</span>
          </li>
          <li>
            <h3>Last Update:</h3>
            <span>{formatString.date(updatedAt as string)}</span>
          </li>
        </ul>
      </aside>
    </main>
  )
}
