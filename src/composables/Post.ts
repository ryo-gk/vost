import { data } from 'virtual:vite-plugin-md-data'
import { useRouter } from 'vue-router'

export type FilterBy = (data: Post) => boolean

export type Frontmatter = typeof data[number]['frontmatter']
export interface Post extends Omit<Frontmatter, 'publishedAt'> {
  path: string
  body: string
  publishedAt: string
}

export function getPost(slug: string): Post | null {
  return getPosts().find(p => p.slug === slug) ?? null
}

export function getPosts() {
  const posts: Post[] = data.map(d => ({
    title: d.frontmatter?.title ?? '',
    slug: d.frontmatter?.slug ?? '',
    tags: d.frontmatter?.tags ?? [],
    body: d.content ?? '',
    path: d.path ?? '',
    publishedAt: d.publishedAt ?? ''
  }))

  return posts
}

export function createTags(labels: string[]) {
  const router = useRouter()

  return labels?.map((label) => {
    return {
      label: label,
      onClick: () => {
        router.push('/search?tag=' + label)
      }
    }
  })
}

export function getAllTags() {
  const tags = data.flatMap(d => d.frontmatter?.tags)
  return [...new Set(tags)]
}

export function getTagFilteredPost(tag: string | string[]) {
  const posts = getPosts()

  if (Array.isArray(tag)) {
    return posts.filter(({ tags }) => tag.some(_tag => tags.includes(_tag)))
  }

  return posts.filter(({ tags }) => tags.includes(tag))
}

export function parseToText(text: string) {
  return text.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')
}

export function retrieve(text: string, length: number, tailText?: string) {
  return text.substring(0, length) + (tailText ?? '')
}
