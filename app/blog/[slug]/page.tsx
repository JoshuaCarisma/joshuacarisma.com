import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPost } from '@/lib/posts'
import Link from 'next/link'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: post.meta.title,
    description: post.meta.description,
  }
}

export default function BlogPost({ params }: Props) {
  const post = getPost(params.slug)
  if (!post) notFound()

  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <Link
          href="/blog"
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          ← Blog
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">{post.meta.title}</h1>
        {post.meta.date && (
          <time dateTime={post.meta.date} className="text-sm text-gray-500">
            {new Date(post.meta.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        )}
      </header>

      <div className="prose prose-gray max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
}
