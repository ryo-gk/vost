import { reactive } from 'vue'
import { HeadObject } from '@vueuse/head'
import { config } from 'virtual:config'

export type OGPType = 'website' | 'blog' | 'article'

export interface OGPOptions {
  siteName: string
  title: string
  description: string
  url: string
  image?: string
  type: OGPType
}

export function useFavicon() {
  return reactive({
    link: [
      { rel: 'icon', href: config.favicon, type: 'image/png' },
      { rel: 'icon', href: config.favicon, type: 'image/svg+xml' }
    ]
  })
}

export function useOGP(options: OGPOptions): HeadObject {
  const head = {
    meta: [
      { property: 'og:site_name', content: options.siteName },
      { property: 'og:title', content: options.title },
      { property: 'og:description', content: options.description },
      { property: 'og:url', content: options.url },
      { property: 'og:image', content: options?.image ?? '' },// TODO
      { property: 'og:type', content: options.type },
      { name: 'twitter:card', content: 'summary' }
    ],
    htmlAttrs: {
      prefix: `og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# ${options.type}: http://ogp.me/ns/${options.type}#`
    }
  }

  return reactive(head)
}
