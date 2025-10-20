import z from 'zod'

export const updateTaskSchema = z.object({
  id: z.string(),
  isCompleted: z.boolean(),
})

export type UpdateTaskSchema = z.infer<typeof updateTaskSchema>
