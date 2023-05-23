import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type SeoProperties = {
  page: string
}

export const useSeo = ({ page }: SeoProperties) => {
  const { pathname } = useLocation()
  const title = `Argent Bank — ${page}`
  const url = `https://argent-bank.alexperronnet.dev${pathname}`

  useEffect(() => {
    document.title = title

    let metaTitle = document.querySelector('meta[name="title"]') as HTMLMetaElement
    if (!metaTitle) {
      metaTitle = document.createElement('meta')
      metaTitle.name = 'title'
      document.head.append(metaTitle)
    }
    metaTitle.content = title

    let ogTitleMeta = document.querySelector('meta[property="og:title"]') as HTMLMetaElement
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement('meta')
      ogTitleMeta.setAttribute('property', 'og:title')
      document.head.append(ogTitleMeta)
    }
    ogTitleMeta.content = title

    let ogUrlMeta = document.querySelector('meta[property="og:url"]') as HTMLMetaElement
    if (!ogUrlMeta) {
      ogUrlMeta = document.createElement('meta')
      ogUrlMeta.setAttribute('property', 'og:url')
      document.head.append(ogUrlMeta)
    }
    ogUrlMeta.content = url

    let twitterTitleMeta = document.querySelector(
      'meta[property="twitter:title"]'
    ) as HTMLMetaElement
    if (!twitterTitleMeta) {
      twitterTitleMeta = document.createElement('meta')
      twitterTitleMeta.setAttribute('property', 'twitter:title')
      document.head.append(twitterTitleMeta)
    }
    twitterTitleMeta.content = title

    let twitterUrlMeta = document.querySelector('meta[property="twitter:url"]') as HTMLMetaElement
    if (!twitterUrlMeta) {
      twitterUrlMeta = document.createElement('meta')
      twitterUrlMeta.setAttribute('property', 'twitter:url')
      document.head.append(twitterUrlMeta)
    }
    twitterUrlMeta.content = url
  }, [page, pathname, title, url])
}
