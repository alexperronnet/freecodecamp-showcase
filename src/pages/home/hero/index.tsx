import styles from './hero.module.scss'

const promotedContents = ['No fees', 'No minimum deposit', 'High interest rates']

export const Hero = () => (
  <header className={styles.hero}>
    <div className={styles.content}>
      <h2>Promoted Content</h2>
      <ul>
        {promotedContents.map((content, k) => (
          <li key={k}>{content}.</li>
        ))}
      </ul>
      <p>Open a savings account with Argent Bank today!</p>
    </div>
  </header>
)
