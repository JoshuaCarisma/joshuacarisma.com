import Link from 'next/link'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/joshuacarisma' },
  { label: 'GitHub', href: 'https://github.com/joshuacarisma' },
  { label: 'Medium', href: 'https://medium.com/@joshuacarisma' },
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

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-3 items-center">
          <div />
          <div className="flex justify-center items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-sm font-bold text-[#888888] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex justify-end">
            <span className="text-[#888888] text-xs">© 2026 Joshua Carisma</span>
          </div>
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
