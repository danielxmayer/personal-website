import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export type PostMeta = {
  slug: string
  title: string
  date: string
  perex: string
}

export type Post = PostMeta & {
  content: string
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDirectory)
  return files
    .filter((f) => f.endsWith('.md'))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, filename)
      const { data } = matter(fs.readFileSync(fullPath, 'utf8'))
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        perex: data.perex as string,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'))
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    perex: data.perex as string,
    content,
  }
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}
