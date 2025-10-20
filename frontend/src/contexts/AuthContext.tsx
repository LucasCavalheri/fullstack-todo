import {
  createContext,
  useContext,
  type PropsWithChildren,
  useEffect,
  useState,
} from 'react'
import { useNavigate } from 'react-router'
import type { LoginSchema } from '../schemas/auth/login-schema'
import type { RegisterSchema } from '../schemas/auth/register-schema'
import type { User } from '../models/User'
import { api } from '../lib/axios'
import { useLogin, type LoginResponse } from '../hooks/auth/use-login'
import { useRegister, type RegisterResponse } from '../hooks/auth/use-register'

interface AuthContextType {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  login: (data: LoginSchema) => Promise<LoginResponse>
  register: (data: RegisterSchema) => Promise<RegisterResponse>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate()

  const login = useLogin()
  const register = useRegister()

  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const savedToken = localStorage.getItem('token')
    const savedUser = localStorage.getItem('user')

    if (savedToken && savedUser) {
      setToken(savedToken)
      setUser(JSON.parse(savedUser))
      api.defaults.headers.common.Authorization = `Bearer ${savedToken}`
    }
  }, [])

  async function handleLogin(data: LoginSchema) {
    const res = await login.mutateAsync(data)

    setToken(res.token)
    setUser(res.user)
    localStorage.setItem('token', res.token)
    localStorage.setItem('user', JSON.stringify(res.user))
    api.defaults.headers.common.Authorization = `Bearer ${res.token}`

    navigate('/dashboard')

    return res
  }

  async function handleRegister(data: RegisterSchema) {
    const res = await register.mutateAsync(data)

    setToken(res.token)
    setUser(res.user)
    localStorage.setItem('token', res.token)
    localStorage.setItem('user', JSON.stringify(res.user))
    api.defaults.headers.common.Authorization = `Bearer ${res.token}`

    navigate('/dashboard')

    return res
  }

  function logout() {
    setUser(null)
    setToken(null)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    delete api.defaults.headers.common.Authorization

    navigate('/login')
  }

  const value: AuthContextType = {
    user,
    token,
    isAuthenticated: !!token,
    login: handleLogin,
    register: handleRegister,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}
