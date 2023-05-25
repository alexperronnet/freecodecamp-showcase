import { AnimatePresence, motion } from 'framer-motion'
import { ComponentProps, useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

import { Alert } from '@/components'
import { useSeo, useToast } from '@/hooks'
import { loginUser, registerUser, resetAuth, useAppDispatch, useAppSelector } from '@/store'
import { formatString } from '@/utils'

import { AuthForm, AuthFormValues } from './auth-form'
import { AuthHeader } from './auth-header'
import styles from './styles.module.scss'

type Mode = ComponentProps<typeof AuthForm>['mode']

export const Auth = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [searchParameters, setSearchParameters] = useSearchParams()
  const [mode, setMode] = useState<Mode>((searchParameters.get('mode') as Mode) || 'login')
  const [from] = useState<string>((location.state as { from: string })?.from || '/dashboard')

  useSeo({ page: mode === 'login' ? 'Login' : 'Register' })

  // Store
  const dispatch = useAppDispatch()
  const { isAuthenticated, error } = useAppSelector(state => state.auth)

  const { pushToast } = useToast()

  // Set the mode in the URL
  useEffect(() => {
    if (mode !== 'login' && mode !== 'register') {
      setMode('login')
    } else {
      setSearchParameters({ mode }, { replace: true })
    }
  }, [mode, setSearchParameters])

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true })

      const modeMessage = mode === 'login' ? 'logged in' : 'registered'

      pushToast({ status: 'success', message: `You have successfully ${modeMessage}` })
    }

    if (error) {
      pushToast({ status: 'error', message: error })
    }
  }, [isAuthenticated, navigate, from, pushToast, mode, error])

  const handleSwitchMode = () => {
    setMode(previousMode => (previousMode === 'login' ? 'register' : 'login'))
    // Reset the auth state on mode switch
    dispatch(resetAuth())
  }

  const onSubmit = (data: AuthFormValues) => {
    const { firstName, lastName, email, password, persist } = data

    // We need to format the new values for consistency with the API
    const newFirstName = formatString.name(firstName)
    const newLastName = formatString.name(lastName)

    if (mode === 'login') {
      dispatch(loginUser({ email, password, persist }))
    } else {
      dispatch(registerUser({ firstName: newFirstName, lastName: newLastName, email, password, persist }))
    }
  }

  return (
    <main className={styles.auth}>
      <Alert icon='question'>
        <span>
          {mode === 'login' ? "Don't have an account yet?" : 'Already have an account?'}
          <button className={styles['toggle-mode']} onClick={handleSwitchMode}>
            {mode === 'login' ? 'Register' : 'Login'}
          </button>
        </span>
      </Alert>
      <AnimatePresence mode='wait'>
        <motion.section
          key={mode}
          className={styles.content}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
        >
          <AuthHeader mode={mode} />
          <AuthForm mode={mode} onSubmit={onSubmit} />
        </motion.section>
      </AnimatePresence>
    </main>
  )
}
