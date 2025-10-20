import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router'
import logo from '../assets/logo.svg'
import {
  registerSchema,
  type RegisterSchema,
} from '../schemas/auth/register-schema'
import styles from './auth.module.css'
import { isAxiosError } from 'axios'
import { useToast } from '../contexts/ToastContext'
import { useAuth } from '../contexts/AuthContext'

export function RegisterPage() {
  const { register: registerUser } = useAuth()

  const toast = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  })

  async function onSubmit(data: RegisterSchema) {
    try {
      await registerUser(data)

      toast.success({
        title: 'Cadastro realizado com sucesso',
      })
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.status === 409) {
          return toast.error({
            title: 'Erro ao cadastrar',
            description: error.response?.data.message,
          })
        }

        return toast.error({
          title: 'Erro ao cadastrar',
          description:
            'Ocorreu um erro ao cadastrar. Por favor, tente novamente.',
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
          <h1>Cadastro</h1>

          <div className={styles.inputGroup}>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              placeholder="Digite seu nome"
              {...register('name')}
            />
            {errors.name && (
              <span className={styles.error}>{errors.name.message}</span>
            )}
          </div>

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
              placeholder="Digite sua senha (mínimo 6 caracteres)"
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
            {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
          </button>

          <p className={styles.link}>
            Já tem uma conta? <Link to="/login">Faça login</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
