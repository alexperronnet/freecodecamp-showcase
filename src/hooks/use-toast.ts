import { useContext } from 'react'

import { ToastContext } from '@/contexts'

// Custom hook to use the toast context
export const useToast = () => {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}
