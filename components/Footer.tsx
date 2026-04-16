import Link from 'next/link'

const sitemapCols = [
  {
    heading: 'Navigate',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/work' },
      { label: 'About', href: '/about' },
      { label: 'Writing', href: '/blog' },
      { label: 'Coaching', href: '/coaching' },
      { label: 'Professional', href: '/professional' },
    ],
  },
  {
    heading: 'Projects',
    links: [
      { label: 'Body By Carisma', href: '#' },
      { label: 'Coach Carisma', href: '#' },
      { label: 'GitHub', href: 'https://github.com/joshuacarisma' },
      { label: 'Blog / Essays', href: '/blog' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'LinkedIn', href: 'https://linkedin.com/in/joshuacarisma' },
      { label: 'GitHub', href: 'https://github.com/joshuacarisma' },
      { label: 'Instagram', href: '#' },
      { label: 'Email', href: 'mailto:joshuacarisma@gmail.com' },
    ],
  },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/joshuacarisma' },
  { label: 'GitHub', href: 'https://github.com/joshuacarisma' },
  { label: 'Instagram', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      {/* ── CTA ── */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">
        <p className="text-[#888888] text-xs tracking-[0.2em] uppercase mb-5">
          Let's Connect
        </p>
        <h2 className="font-inter font-bold text-[clamp(1.5rem,2.5vw,2.25rem)] text-white mb-6">
          Have something in mind?
        </h2>
        <a
          href="mailto:joshuacarisma@gmail.com"
          className="font-inter font-bold text-[clamp(1.5rem,4vw,3.5rem)] leading-tight text-white hover:opacity-50 transition-opacity inline-flex items-baseline gap-4 break-all"
        >
          joshuacarisma@gmail.com
          <span className="text-[0.6em]">→</span>
        </a>
      </div>

      {/* ── Sitemap ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-3 gap-10">
          {sitemapCols.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[#888888] text-xs tracking-[0.18em] uppercase mb-5">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={
                        link.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="text-sm text-white hover:text-[#888888] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Social row ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#888888] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <span className="ml-auto text-[#888888] text-xs">
            © {new Date().getFullYear()} Joshua Carisma
          </span>
        </div>
      </div>

      {/* ── Massive name ── */}
      <div className="border-t border-white/10 px-4 py-6 overflow-hidden">
        <p className="font-inter font-black leading-none tracking-[-0.04em] text-white whitespace-nowrap text-[clamp(3rem,13.5vw,10rem)]">
          Joshua Carisma
        </p>
      </div>

    </footer>
  )
}
