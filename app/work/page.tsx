import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Projects and work by Joshua Carisma.',
}

const projects = [
  {
    title: 'joshuacarisma.com',
    description: 'This site — a personal portfolio and blog built with Next.js, Tailwind CSS, and MDX.',
    href: 'https://github.com/joshuacarisma/joshuacarisma.com',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
  },
]

export default function Work() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Work</h1>

      <p className="text-gray-600">
        A selection of projects I've built or contributed to.
      </p>

      <div className="space-y-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group border border-gray-200 rounded-lg p-5 hover:border-gray-400 transition-colors"
          >
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block space-y-2"
            >
              <h2 className="font-semibold group-hover:underline">
                {project.title}
              </h2>
              <p className="text-sm text-gray-600">{project.description}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}
