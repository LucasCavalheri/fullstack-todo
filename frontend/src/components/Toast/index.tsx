import { useEffect } from 'react'
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
  AiOutlineClose,
} from 'react-icons/ai'
import type { Toast as ToastType } from '../../contexts/ToastContext'
import { useToast } from '../../contexts/ToastContext'
import styles from './toast.module.css'

interface ToastProps {
  toast: ToastType
}

const icons = {
  success: AiOutlineCheckCircle,
  error: AiOutlineCloseCircle,
  info: AiOutlineInfoCircle,
  warning: AiOutlineWarning,
}

export function Toast({ toast }: ToastProps) {
  const { removeToast } = useToast()
  const Icon = icons[toast.type]

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id)
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [toast.id, removeToast])

  return (
    <div className={`${styles.toast} ${styles[toast.type]}`}>
      <Icon className={styles.icon} size={24} />

      <div className={styles.content}>
        <strong>{toast.title}</strong>
        {toast.description && <p>{toast.description}</p>}
      </div>

      <button
        type="button"
        className={styles.closeButton}
        onClick={() => removeToast(toast.id)}
      >
        <AiOutlineClose size={18} />
      </button>
    </div>
  )
}
