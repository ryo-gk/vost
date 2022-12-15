import type { Plugin } from 'vite'
import { readFileSync, readdirSync, writeFileSync } from 'fs'
import { Dirent } from "node:fs"
import MarkdownIt from 'markdown-it'
import matter from 'gray-matter'
import { Feed } from 'feed'
import { FeedOptions, Item } from 'feed/lib/typings'
import { loadBlogConfig } from '../../config'

interface MdData {
  path: string
  content: string
  frontmatter: Record<string, any>
}

interface PluginOptions {
  feed: FeedOptions
  items: (post) => Item
}

export default async function MdFeed(options: PluginOptions): Promise<Plugin> {
  const config = await loadBlogConfig()

  return {
    name: 'vite-plugin-md-feed',

    buildStart() {
      // Get markdown data
      const md = getMdData(config.postPath)

      // Create rss data
      const feed = createFeed(md, options)

      // Generate rss file
      writeFileSync('./public/rss/feed.xml', feed.rss2());
    }
  }
}

function createFeed(posts: MdData[], options: PluginOptions) {
  const feed = new Feed(options.feed)
  const items = posts.map(options.items)

  items.forEach(item => {
    feed.addItem(item)
  })

  return feed
}

function getMdData(dir: string, callback?: (data: MdData[]) => MdData[]): MdData[] {
  const dirPath = `${dir}`
  const fileNames = readdirSync(`${dirPath}`, { withFileTypes: true })
    .flatMap((dirent: Dirent) => {
      return dirent.name
    })

  const data = fileNames.map((name: string) => {
    const filePath = `${dirPath}/${name}`
    const relativePath = toRelativePath(`${dir}/${extractFileName(name)}`)
    const file = readFileSync(filePath)
    const { content, data: frontmatter } = matter(file)
    return {
      path: relativePath,
      content: render(content),
      frontmatter
    }
  })

  return callback ? callback(data) : data
}

function render(markdown: string) {
  const mdi = new MarkdownIt()
  return mdi.render(markdown)
}

function extractFileName(fileName: string) {
  return fileName.substring(0, fileName.lastIndexOf('.')) || fileName
}

function toRelativePath(dir: string) {
  return dir.replace('./', '/')
}
