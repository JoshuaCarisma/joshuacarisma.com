import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Writing' },
  { href: '/coaching', label: 'Coaching' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black">
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center">
        {/* Logo */}
        <Link
          href="/"
          className="font-inter font-medium text-sm text-black shrink-0"
        >
          Joshua Carisma
        </Link>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-7 mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-black hover:opacity-50 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA pill */}
        <Link
          href="/contact"
          className="ml-auto md:ml-0 bg-black text-white text-sm font-medium px-4 py-2 rounded-full hover:opacity-70 transition-opacity whitespace-nowrap"
        >
          Contact →
        </Link>
      </nav>
    </header>
  )
}
