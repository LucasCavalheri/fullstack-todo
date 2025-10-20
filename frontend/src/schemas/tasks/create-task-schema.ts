import z from 'zod'

export const createTaskSchema = z.object({
  title: z.string().min(3, 'Título deve ter pelo menos 3 caracteres'),
})

export type CreateTaskSchema = z.infer<typeof createTaskSchema>
