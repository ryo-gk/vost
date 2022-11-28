import { data } from 'virtual:vite-plugin-md-data'

export type FilterBy = (data: Post) => boolean

export interface Post {
  title: string
  slug: string
  body: string
  path: string
  publishedAt: Date
}

// TODO make it dynamic generation
export function getPosts() {
  const posts: Post[] = data.map(d => ({
    title: d.frontmatter?.title,
    slug: d.frontmatter?.slug,
    tags: d.frontmatter?.tags,
    body: d.content,
    path: d.path,
    publishedAt: d.frontmatter?.publishedAt
  }))

  return posts
}

export function parseToText(text: string) {
  return text.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')
}

export function retrieve(text: string, length: number, tailText?: string) {
  return text.substring(0, length) + (tailText ?? '')
}