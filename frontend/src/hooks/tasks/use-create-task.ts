import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../../lib/axios'
import type { CreateTaskSchema } from '../../schemas/tasks/create-task-schema'

export function useCreateTask() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateTaskSchema) => {
      const response = await api.post('/tasks', data)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      })
    },
  })
}
