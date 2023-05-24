import { ComponentProps } from 'react'

import { Icon } from '@/components'

import styles from './styles.module.scss'

type Feature = {
  icon: ComponentProps<typeof Icon>['name']
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: 'discuss',
    title: 'You are our #1 priority',
    description:
      'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
  },
  {
    icon: 'currency',
    title: 'More savings means higher rates',
    description: 'The more you save with us, the higher your interest rate will be!'
  },
  {
    icon: 'shieldCheck',
    title: 'Security you can trust',
    description: 'We use top of the line encryption to make sure your data and money is always safe.'
  }
]

export const HomeFeatures = () => (
  <section className={styles.features}>
    <h2 className={styles.title}>Features</h2>
    {features.map(({ icon, title, description }, k) => (
      <div key={k} className={styles.feature}>
        <div className={styles['icon-wrapper']}>
          <Icon name={icon} className={styles.icon} />
        </div>
        <h3 className={styles['feature-title']}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    ))}
  </section>
)
