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

export function withPublishedAt(data: MdData) {
  return {
    ...data,
    publishedAt: dayjs(data.frontmatter?.publishedAt ?? '').format('MMM DD, YYYY')
  }
}

/**
 * Compare so that they are sorted in order of latest to latest
 *
 * @param  a - a is a object expected to have `publishedAt`
 * @param  b - b is a object expected to have `publishedAt`
 * @returns
 */
export function compareByPublishedAt(a, b) {
  if (!(a?.publishedAt && b?.publishedAt)) return 0

  return dayjs(a.publishedAt).isAfter(dayjs(b.publishedAt)) ? -1 : 1
}
