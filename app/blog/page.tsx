import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on software, design, and building things.',
}

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Blog</h1>

      <p className="text-gray-600">
        Thoughts on software, design, and building things.
      </p>

      {posts.length === 0 ? (
        <p className="text-gray-500 text-sm">No posts yet. Check back soon.</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block space-y-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="font-medium group-hover:underline">{post.title}</h2>
                  <time
                    dateTime={post.date}
                    className="text-sm text-gray-500 shrink-0"
                  >
                    {formatDate(post.date)}
                  </time>
                </div>
                {post.description && (
                  <p className="text-sm text-gray-600">{post.description}</p>
                )}
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
