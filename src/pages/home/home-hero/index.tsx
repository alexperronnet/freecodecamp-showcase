import styles from './styles.module.scss'

const promotedContents = ['No fees', 'No minimum deposit', 'High interest rates']

export const HomeHero = () => (
  <header className={styles.hero}>
    <div className={styles.content}>
      <h2 className={styles.title}>Promoted Content</h2>
      <ul className={styles.list}>
        {promotedContents.map((content, k) => (
          <li key={k} className={styles.item}>
            {content}.
          </li>
        ))}
      </ul>
      <p className={styles.text}>Open a savings account with Argent Bank today!</p>
    </div>
  </header>
)
