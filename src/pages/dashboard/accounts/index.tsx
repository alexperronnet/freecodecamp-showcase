import { Button } from '@/components'
import { currencyFormatter } from '@/utils'

import styles from './accounts.module.scss'

type Account = {
  number: number
  type: string
  amount: number
  description: string
}

const accounts: Account[] = [
  {
    number: 8349,
    type: 'Checking',
    amount: 2082.79,
    description: 'Available Balance'
  },
  {
    number: 6712,
    type: 'Savings',
    amount: 10_928.42,
    description: 'Available Balance'
  },
  {
    number: 8349,
    type: 'Credit Card',
    amount: 184.3,
    description: 'Current Balance'
  }
]

export const Accounts = () => (
  <section className={styles.accounts}>
    <h3>Accounts</h3>
    <ul className={styles.list}>
      {accounts.map(({ number, type, amount, description }, k) => (
        <li key={k} className={styles.item}>
          <div className={styles.details}>
            <h4>
              Argent Bank {type} (x{number})
            </h4>
            <h5>{currencyFormatter(amount)}</h5>
            <p>{description}</p>
          </div>
          <Button variant='secondary' disabled>
            View transactions
          </Button>
        </li>
      ))}
    </ul>
  </section>
)
