import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'
import '@/styles/main.scss'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { App } from '@/app'
import { ToastProvider } from '@/contexts'
import { store } from '@/store'

const container = document.querySelector('#root') as HTMLElement
const root = createRoot(container)

root.render(
  <StrictMode>
    <Provider store={store}>
      <ToastProvider>
        <App />
      </ToastProvider>
    </Provider>
  </StrictMode>
)
