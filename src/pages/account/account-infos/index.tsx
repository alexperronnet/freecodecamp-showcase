import { useAppSelector } from '@/store'
import { formatString } from '@/utils'

import styles from './styles.module.scss'

export const AccountInfos = () => {
  // Store
  const { id, createdAt, updatedAt } = useAppSelector(state => state.profile.infos) || {}

  // For a better UX, we format the dates
  const formattedCreatedAt = formatString.date(createdAt as string)
  const formattedUpdatedAt = formatString.date(updatedAt as string)

  const infos = [
    { label: 'Account ID', value: id },
    { label: 'Created At', value: formattedCreatedAt },
    { label: 'Last Update', value: formattedUpdatedAt }
  ]

  return (
    <aside className={styles.infos}>
      <ul className={styles.list}>
        {infos.map(({ label, value }) => (
          <li key={label} className={styles.item}>
            <span className={styles.label}>{label}:</span>
            <span className={styles.value}>{value}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
