import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'

import { tokenStorage } from '@/utils'

const apiUrl = import.meta.env.VITE_API_URL as string

if (!apiUrl) {
  throw new Error('Missing VITE_API_URL env variable')
}

export const apiInstance = axios.create({
  baseURL: apiUrl,
  timeout: 10_000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add a request interceptor to add the token to the request headers
apiInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = tokenStorage.get()

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },

  (error: AxiosError): Promise<AxiosError> => Promise.reject(error)
)
