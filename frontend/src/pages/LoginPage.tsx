import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router'
import logo from '../assets/logo.svg'
import type { LoginSchema } from '../schemas/auth/login-schema'
import { loginSchema } from '../schemas/auth/login-schema'
import styles from './auth.module.css'
import { useToast } from '../contexts/ToastContext'
import { isAxiosError } from 'axios'
import { useAuth } from '../contexts/AuthContext'

export function LoginPage() {
  const { login } = useAuth()

  const toast = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  async function onSubmit(data: LoginSchema) {
    try {
      await login(data)

      toast.success({
        title: 'Login realizado com sucesso',
      })
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.status === 401) {
          return toast.error({
            title: 'Erro ao fazer login',
            description: error.response?.data.message,
          })
        }

        return toast.error({
          title: 'Erro ao fazer login',
          description:
            'Ocorreu um erro ao fazer login. Por favor, tente novamente.',
        })
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={logo} alt="Logo" />
      </div>

      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu email"
              {...register('email')}
            />
            {errors.email && (
              <span className={styles.error}>{errors.email.message}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              {...register('password')}
            />
            {errors.password && (
              <span className={styles.error}>{errors.password.message}</span>
            )}
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Entrando...' : 'Entrar'}
          </button>

          <p className={styles.link}>
            Não tem uma conta? <Link to="/register">Cadastre-se</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
