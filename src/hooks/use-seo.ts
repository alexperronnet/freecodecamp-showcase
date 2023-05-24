import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type SeoProperties = {
  page: string
}

const createMetaTag = (name: string, value: string, property?: string) => {
  let metaTag = document.querySelector(`meta[${property || 'name'}="${name}"]`) as HTMLMetaElement

  if (!metaTag) {
    metaTag = document.createElement('meta')
    metaTag.setAttribute(property || 'name', name)
    document.head.append(metaTag)
  }

  metaTag.content = value
}

export const useSeo = ({ page }: SeoProperties) => {
  const { pathname } = useLocation()
  const title = `Argent Bank — ${page}`
  const url = `https://argent-bank.alexperronnet.dev${pathname}`

  useEffect(() => {
    document.title = title

    createMetaTag('title', title)
    createMetaTag('og:title', title, 'property')
    createMetaTag('og:url', url, 'property')
    createMetaTag('twitter:title', title, 'property')
    createMetaTag('twitter:url', url, 'property')
  }, [title, url])
}
