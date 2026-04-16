import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Joshua Carisma',
  description: 'Software engineer, writer, and builder.',
}

export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold tracking-tight">Joshua Carisma</h1>
        <p className="mt-3 text-lg text-gray-600">
          Software engineer, writer, and builder.
        </p>
      </section>

      <section className="space-y-3">
        <p className="text-gray-700 leading-relaxed">
          Welcome to my corner of the internet. I write about software, design,
          and the things I'm building.
        </p>
      </section>

      <section className="flex gap-4">
        <Link
          href="/work"
          className="text-sm font-medium underline underline-offset-4 hover:text-gray-600 transition-colors"
        >
          See my work
        </Link>
        <Link
          href="/blog"
          className="text-sm font-medium underline underline-offset-4 hover:text-gray-600 transition-colors"
        >
          Read the blog
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium underline underline-offset-4 hover:text-gray-600 transition-colors"
        >
          About me
        </Link>
      </section>
    </div>
  )
}
