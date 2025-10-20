import { useState } from 'react'
import logo from '../../assets/logo.svg'
import styles from './header.module.css'
import { AiOutlinePlusCircle, AiOutlineLogout } from 'react-icons/ai'
import { useAuth } from '../../contexts/AuthContext'
import { toast } from '../../lib/toast'

interface HeaderProps {
  onAddTask: (taskTitle: string) => void
}

export function Header({ onAddTask }: HeaderProps) {
  const [title, setTitle] = useState('')
  const { user, logout } = useAuth()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    onAddTask(title)
    setTitle('')
  }

  function handleLogout() {
    logout()
    toast.info({
      title: 'Até logo!',
      description: 'Você foi desconectado com sucesso.',
    })
  }

  return (
    <header className={styles.header}>
      <div className={styles.userBar}>
        <div className={styles.greeting}>
          <span className={styles.greetingText}>Olá,</span>
          <strong className={styles.userName}>{user?.name}</strong>
        </div>
        <button
          type="button"
          className={styles.logoutButton}
          onClick={handleLogout}
          title="Sair"
        >
          <AiOutlineLogout size={20} />
          <span>Sair</span>
        </button>
      </div>

      <img src={logo} alt="Logo" />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          placeholder="Adicione uma nova tarefa"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  )
}
