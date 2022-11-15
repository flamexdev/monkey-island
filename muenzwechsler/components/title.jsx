import styles from '../styles/Home.module.css'

export default function Title() {
  return (
    <header>
      <h1 className={styles.title}>
        Münzwechsler
      </h1>
      <p className={styles.subtitle}>
        Willkommen im Monkey Island
      </p>
    </header>
  )
}