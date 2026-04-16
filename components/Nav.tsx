import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  return (
    <header className="border-b border-gray-200">
      <nav className="mx-auto max-w-3xl px-4 py-4 flex items-center gap-6">
        <Link href="/" className="font-semibold text-sm">
          JC
        </Link>
        <div className="flex gap-4 ml-auto">
          {links.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
