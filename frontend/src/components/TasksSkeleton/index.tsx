import styles from './tasks-skeleton.module.css'

export function TasksSkeleton() {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span className={styles.skeleton}>0</span>
        </div>
        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span className={styles.skeleton}>0</span>
        </div>
      </header>

      <div className={styles.list}>
        <SkeletonTask />
        <SkeletonTask />
        <SkeletonTask />
      </div>
    </section>
  )
}

function SkeletonTask() {
  return (
    <div className={styles.skeletonTask}>
      <div className={styles.skeletonCheckbox}></div>
      <div className={styles.skeletonText}>
        <div className={styles.skeletonLine}></div>
      </div>
      <div className={styles.skeletonButton}></div>
    </div>
  )
}
