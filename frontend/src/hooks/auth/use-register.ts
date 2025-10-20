import { useMutation } from '@tanstack/react-query'
import type { User } from '../../models/User'
import type { RegisterSchema } from '../../schemas/auth/register-schema'
import { api } from '../../lib/axios'

export interface RegisterResponse {
  message: string
  user: User
  token: string
}

export function useRegister() {
  return useMutation({
    mutationFn: async (data: RegisterSchema) => {
      const response = await api.post<RegisterResponse>('/auth/register', data)
      return response.data
    },
  })
}
