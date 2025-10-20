import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { toast as toastAPI } from '../lib/toast'

export interface ToastData {
  title: string
  description?: string
}

export interface Toast extends ToastData {
  id: string
  type: 'success' | 'error' | 'info' | 'warning'
}

interface ToastContextData {
  toasts: Toast[]
  success: (data: ToastData) => void
  error: (data: ToastData) => void
  info: (data: ToastData) => void
  warning: (data: ToastData) => void
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const removeToast = useCallback((id: string) => {
    setToasts((state) => state.filter((toast) => toast.id !== id))
  }, [])

  const addToast = useCallback(
    (type: Toast['type'], data: ToastData) => {
      const id = crypto.randomUUID()
      const toast: Toast = {
        id,
        type,
        ...data,
      }

      setToasts((state) => [...state, toast])

      // Auto remove após 5 segundos
      setTimeout(() => {
        removeToast(id)
      }, 5000)
    },
    [removeToast]
  )

  const success = useCallback(
    (data: ToastData) => {
      addToast('success', data)
    },
    [addToast]
  )

  const error = useCallback(
    (data: ToastData) => {
      addToast('error', data)
    },
    [addToast]
  )

  const info = useCallback(
    (data: ToastData) => {
      addToast('info', data)
    },
    [addToast]
  )

  const warning = useCallback(
    (data: ToastData) => {
      addToast('warning', data)
    },
    [addToast]
  )

  // Popula a API global do toast
  useEffect(() => {
    toastAPI.success = success
    toastAPI.error = error
    toastAPI.info = info
    toastAPI.warning = warning
  }, [success, error, info, warning])

  return (
    <ToastContext.Provider
      value={{ toasts, success, error, info, warning, removeToast }}
    >
      {children}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}
