import { TbClipboardText } from 'react-icons/tb'
import styles from './tasks.module.css'
import { useAuth } from '../../contexts/AuthContext'
import type { Task as TaskType } from '../../models/Task'
import { Task } from '../Task'

interface TasksProps {
  tasks: TaskType[]
  onDelete: (taskId: string) => void
  onComplete: (taskId: string, isCompleted: boolean) => void
}

export function Tasks({ tasks, onDelete, onComplete }: TasksProps) {
  const { user } = useAuth()

  const tasksQuantity = tasks.length
  const completedTasks = tasks.filter((task) => task.completed).length

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <TbClipboardText size={50} />
            <div>
              <p>Olá {user?.name}! você ainda não tem tarefas cadastrada.</p>
              <span>Crie tarefas e organize seus itens a fazer.</span>
            </div>
          </section>
        )}
      </div>
    </section>
  )
}
