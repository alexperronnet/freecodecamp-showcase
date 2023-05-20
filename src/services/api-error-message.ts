import { AxiosError } from 'axios'

type ApiErrorMessage = (error: unknown) => string

export const apiErrorMessage: ApiErrorMessage = error => {
  if (!(error instanceof AxiosError)) {
    return String(error)
  }

  const { response, request, message } = error
  const { status, data } = response || {}

  if (response) {
    switch (status) {
      case 401: {
        return 'Authentication required'
      }
      case 403: {
        return 'Insufficient rights to access resource'
      }
      case 404: {
        return 'Resource not found'
      }
      case 500: {
        return 'Server encountered an unexpected condition'
      }
      case 502: {
        return 'Invalid response from upstream server'
      }
      case 503: {
        return 'Server unable to handle request due to temporary overloading or maintenance'
      }
      case 504: {
        return 'Timeout from upstream server'
      }
      default: {
        return data?.message || message
      }
    }
  }

  if (request) {
    return 'Unable to connect to server'
  }

  return message
}
