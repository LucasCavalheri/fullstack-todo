import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../../lib/axios'
import type { UpdateTaskSchema } from '../../schemas/tasks/update-task-schema'

export function useUpdateTask() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: UpdateTaskSchema) => {
      await api.patch(`/tasks/${data.id}`, {
        completed: data.isCompleted,
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      })
    },
  })
}
