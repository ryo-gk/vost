import { data, MdData } from 'virtual:vite-plugin-md-data'

export type FilterBy = (data: MdContent) => boolean

export interface MdContent {
  title: string
  slug: string
  status: 'draft' | 'published'
  body: string
  path: string
  publishedAt: Date
}

export function getContent(filterBys?: FilterBy[]) {
  let contents: MdContent[] = data.map(d => ({
    title: d.frontmatter?.title,
    slug: d.frontmatter?.slug,
    status: d.frontmatter?.status,
    body: d.content,
    path: d.path,
    publishedAt: d.frontmatter?.publishedAt
  }))

  if (!filterBys) {
    return contents
  }

  filterBys.forEach(filterBy => {
    contents = contents.filter(d => filterBy(d))
  })

  return contents
}
