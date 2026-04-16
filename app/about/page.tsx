import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'A little about Joshua Carisma.',
}

export default function About() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>

      <div className="prose prose-gray max-w-none">
        <p>
          Hi, I'm Joshua. I'm a software engineer based in the US. I like
          building things for the web and writing about what I learn along
          the way.
        </p>
        <p>
          When I'm not coding I'm probably reading, lifting, or exploring
          something new.
        </p>

        <h2>Get in touch</h2>
        <p>
          The best way to reach me is by email at{' '}
          <a href="mailto:joshuacarisma@gmail.com">joshuacarisma@gmail.com</a>.
        </p>
      </div>
    </div>
  )
}
