import dayjs from 'dayjs'
import { MdData } from 'vite-plugin-md-data'

export function isPublished(data: MdData) {
  if (data.frontmatter?.publishedAt) {
    const now = dayjs()
    const publishedAt = dayjs(data.frontmatter.publishedAt)

    return now.isAfter(publishedAt)
  }

  return true
}
