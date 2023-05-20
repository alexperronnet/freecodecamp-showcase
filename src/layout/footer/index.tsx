import styles from './footer.module.scss'

const currentYear = new Date().getFullYear()

export const Footer = () => (
  <footer className={styles.footer}>Copyright {currentYear} &mdash; Argent Bank</footer>
)
