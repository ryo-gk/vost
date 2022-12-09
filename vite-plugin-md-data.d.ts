declare module "virtual:vite-plugin-md-data" {
  export interface MdData {
    path: string
    content: string
    frontmatter: {
      slug: string
      tags: string[]
      title: string
      publishedAt: Date
    }
    publishedAt: string
  }

  export const data: MdData[]
}
