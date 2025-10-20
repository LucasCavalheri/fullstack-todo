import { Header } from '../components/Header'
import { Tasks } from '../components/Tasks'
import { TasksSkeleton } from '../components/TasksSkeleton'
import { useCreateTask } from '../hooks/tasks/use-create-task'
import { useDeleteTask } from '../hooks/tasks/use-delete-task'
import { useListTasks } from '../hooks/tasks/use-list-tasks'
import { useUpdateTask } from '../hooks/tasks/use-update-task'

export function HomePage() {
  const { data: tasks, isLoading: isLoadingTasks } = useListTasks()
  const { mutateAsync: createTaskMutate, isPending: isPendingCreateTask } = useCreateTask()
  const { mutateAsync: deleteTaskMutate } = useDeleteTask()
  const { mutateAsync: updateTaskMutate } = useUpdateTask()

  async function addTask(taskTitle: string) {
    await createTaskMutate({ title: taskTitle })
  }

  async function deleteTaskById(taskId: string) {
    await deleteTaskMutate(taskId)
  }

  async function toggleTaskCompletedById(taskId: string, isCompleted: boolean) {
    await updateTaskMutate({ id: taskId, isCompleted })
  }

  return (
    <>
      <Header onAddTask={addTask} isPendingCreateTask={isPendingCreateTask} />
      {isLoadingTasks ? (
        <TasksSkeleton />
      ) : (
        tasks && (
          <Tasks
            tasks={tasks?.tasks}
            onDelete={deleteTaskById}
            onComplete={toggleTaskCompletedById}
          />
        )
      )}
    </>
  )
}
