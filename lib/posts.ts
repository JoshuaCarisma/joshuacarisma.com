import fs from 'fs'
import path from 'path'

export interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return []

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '')
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8')
    const meta = parseFrontmatter(raw)
    return { slug, ...meta }
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string): { meta: PostMeta; content: string } | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const meta = parseFrontmatter(raw)
  const content = raw.replace(/^---[\s\S]*?---\n/, '')
  return { meta: { slug, ...meta }, content }
}

function parseFrontmatter(raw: string): Omit<PostMeta, 'slug'> {
  const match = raw.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return { title: 'Untitled', date: '', description: '' }

  const lines = match[1].split('\n')
  const data: Record<string, string> = {}
  for (const line of lines) {
    const [key, ...rest] = line.split(':')
    if (key) data[key.trim()] = rest.join(':').trim().replace(/^["']|["']$/g, '')
  }

  return {
    title: data.title ?? 'Untitled',
    date: data.date ?? '',
    description: data.description ?? '',
  }
}
