import type { ToastData } from '../contexts/ToastContext'

// Este arquivo exporta uma referência que será preenchida pelo ToastProvider
// Permite usar toast.success() e toast.error() de qualquer lugar da aplicação

interface ToastAPI {
  success: (data: ToastData) => void
  error: (data: ToastData) => void
  info: (data: ToastData) => void
  warning: (data: ToastData) => void
}

export const toast: ToastAPI = {
  success: () => {
    console.warn('ToastProvider not initialized')
  },
  error: () => {
    console.warn('ToastProvider not initialized')
  },
  info: () => {
    console.warn('ToastProvider not initialized')
  },
  warning: () => {
    console.warn('ToastProvider not initialized')
  },
}
