import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../../contexts/AuthContext'

export function AuthLayout() {
  const { isAuthenticated, user } = useAuth()

  if (isAuthenticated && user) {
    return <Navigate to="/" />
  }

  return <Outlet />
}
