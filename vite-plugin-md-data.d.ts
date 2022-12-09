declare module "virtual:vite-plugin-md-data" {
  export interface MdData {
    path: string
    content: string
    frontmatter: {
      slug: string
      title: string
      tags: string[]
      publishedAt: Date
    }
  }

  export const data: MdData[]
}
