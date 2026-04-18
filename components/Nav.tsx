import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Projects' },
  { href: '/blog', label: 'Writing' },
  { href: '/coaching', label: 'Coaching' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black">
      <nav className="mx-auto max-w-7xl px-10 h-28 flex items-center">
        {/* Center links */}
        <div className="hidden md:flex items-center gap-12 mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[1.75rem] text-black hover:opacity-50 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA pill */}
        <Link
          href="/contact"
          className="ml-auto md:ml-0 bg-black text-white text-[1.49rem] font-medium px-8 py-4 rounded-full hover:opacity-70 transition-opacity whitespace-nowrap"
        >
          Contact →
        </Link>
      </nav>
    </header>
  )
}
