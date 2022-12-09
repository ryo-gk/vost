import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import viteMdData from 'vite-plugin-md-data'
import feed from './plugins/feed'
import { loadBlogConfig } from './config'

const BASE_URL = 'https://example.com'// TODO import from env
const blog = await loadBlogConfig()

export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true
    }),
    viteMdData({
      path: blog.postPath,
      declaration: {
        outDir: './'
      }
    }),
    feed({
      feed: {
        id: blog.name,
        title: blog.name,
        copyright: 'ryo_gk',
        description: blog?.description ?? '',
        link: BASE_URL,
        language: blog?.lang ?? 'ja'
      },
      items: (post) => {
        return {
          title: post.frontmatter.title,
          link: BASE_URL + post.path,
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
