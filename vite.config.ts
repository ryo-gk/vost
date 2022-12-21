import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import viteMdData from 'vite-plugin-md-data'
import feed from './plugins/server/feed'
import { loadBlogConfig } from './config'
import { isPublished, withPublishedAt, compareByPublishedAt } from './callbacks'
import { virtual } from './plugins/server/virtual'

const blogConfig = await loadBlogConfig()

export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true
    }),
    viteMdData({
      path: blogConfig.postPath,
      callback: (data) => {
        return data
          .filter(isPublished)
          .map(withPublishedAt)
          .sort(compareByPublishedAt)
      },
      declaration: {
        outDir: './'
      }
    }),
    virtual({
      //'virtual:config': blogConfig
      'virtual:config': `export const config = ${JSON.stringify(blogConfig)}`
    }),
    feed({
      feed: {
        id: blogConfig.name,
        title: blogConfig.name,
        copyright: blogConfig.copyright ?? undefined,
        description: blogConfig?.description ?? undefined,
        link: blogConfig.baseUrl,
        language: blogConfig?.lang ?? 'ja'
      },
      items: (post) => {
        return {
          title: post.frontmatter.title,
          link: blogConfig.baseUrl + post.path,
          date: new Date(post.frontmatter.publishedAt),
          content: post.content
        }
      }
    })
  ],

  resolve: {
    alias: [
      { find: '@/', replacement: `${resolve(__dirname, 'src')}/`}
    ]
  }
})
