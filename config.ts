import { loadConfig } from 'unconfig'

export interface BlogConfig {
  name: string
  postPath: string
  description?: string
  lang?: string
}

export async function loadBlogConfig(): Promise<BlogConfig> {
  const { config } = await loadConfig<BlogConfig>({
    sources: [
      {
        files: 'blog.config',
        extensions: ['ts', 'js', 'json', '']
      },
      {
        files: 'package.json',
        extensions: [],
        rewrite(config: any) {
          return config?.blog
        }
      }
    ],

    merge: false
  })

  return config
}
