import { useQuery } from '@tanstack/react-query'
import { api } from '../../lib/axios'
import type { Task } from '../../models/Task'

export interface ListTasksResponse {
  message: string
  tasks: Task[]
}

export function useListTasks() {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const response = await api.get<ListTasksResponse>('/tasks')
      return response.data
    },
  })
}
