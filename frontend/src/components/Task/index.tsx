import { TbTrash } from 'react-icons/tb'
import styles from './task.module.css'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import type { Task } from '../../models/Task'

interface TaskProps {
  task: Task
  onDelete: (taskId: string) => void
  onComplete: (taskId: string, isCompleted: boolean) => void
}

export function Task({ task, onDelete, onComplete }: TaskProps) {
  console.log(task)

  const isCompleted = task.completed

  console.log(isCompleted)

  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onComplete(task.id, !isCompleted)}
      >
        {isCompleted ? <BsFillCheckCircleFill size={20} /> : <div />}
      </button>

      <p className={task.completed ? styles.textCompleted : ''}>
        {task.title}
      </p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  )
}
