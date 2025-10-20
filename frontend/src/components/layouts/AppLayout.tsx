import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../../contexts/AuthContext'

export function AppLayout() {
  const { isAuthenticated, user } = useAuth()

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}
