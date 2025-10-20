import { useMutation } from '@tanstack/react-query'
import type { User } from '../../models/User'
import type { LoginSchema } from '../../schemas/auth/login-schema'
import { api } from '../../lib/axios'
export interface LoginResponse {
  message: string
  user: User
  token: string
}

export function useLogin() {
  return useMutation({
    mutationFn: async (data: LoginSchema) => {
      const response = await api.post<LoginResponse>('/auth/login', data)
      return response.data
    },
  })
}
