import { AnimatePresence, motion } from 'framer-motion'
import { nanoid } from 'nanoid'
import { ComponentProps, createContext, PropsWithChildren, useCallback, useState } from 'react'

import { ToastContainer, ToastElement } from '@/components'

type ToastMessage = Pick<ComponentProps<typeof ToastElement>, 'message' | 'status'>

type Toast = ToastMessage & {
  id: string
}

type ToastContextType = {
  pushToast: (toastMessage: ToastMessage) => void
  removeToast: (id: string) => void
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const removeToast: ToastContextType['removeToast'] = useCallback(id => {
    setToasts(toasts => toasts.filter(t => t.id !== id))
  }, [])

  const pushToast: ToastContextType['pushToast'] = useCallback(
    toastMessage => {
      const id = nanoid()

      setToasts(toasts => {
        const filteredToasts = toasts.filter(toast => toast.message !== toastMessage.message)
        return [...filteredToasts, { id, ...toastMessage }]
      })

      setTimeout(() => removeToast(id), 5000)
    },
    [removeToast]
  )

  const toastVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 }
  }

  return (
    <ToastContext.Provider value={{ pushToast, removeToast }}>
      {children}
      <ToastContainer>
        <AnimatePresence>
          {toasts.map(({ id, ...properties }) => (
            <motion.div
              key={id}
              variants={toastVariants}
              initial='initial'
              animate='animate'
              exit='initial'
            >
              <ToastElement onRemove={() => removeToast(id)} {...properties} />
            </motion.div>
          ))}
        </AnimatePresence>
      </ToastContainer>
    </ToastContext.Provider>
  )
}
