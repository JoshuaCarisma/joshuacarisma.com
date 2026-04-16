import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import HeroPhoto from '@/components/HeroPhoto'

export const metadata: Metadata = {
  title: 'Joshua Carisma',
  description:
    'Coach, builder, and systems thinker exploring the future of health, work, and human growth.',
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    num: '01',
    title: 'Healthcare Operations',
    desc: 'Coordinating complex workflows, improving processes, and supporting care delivery teams.',
  },
  {
    num: '02',
    title: 'Coaching & Behavior Change',
    desc: 'Health coaching, habit systems, and helping people take ownership of their growth.',
  },
  {
    num: '03',
    title: 'Technology & Analytics',
    desc: 'Building tools, dashboards, and data-driven systems that reduce friction and waste.',
  },
  {
    num: '04',
    title: 'Project Management',
    desc: 'Organizing people, timelines, and execution across complex, multi-team initiatives.',
  },
  {
    num: '05',
    title: 'Writing & Philosophy',
    desc: 'Essays on health, systems thinking, self-mastery, and the examined life.',
  },
  {
    num: '06',
    title: 'Leadership & Service',
    desc: 'Leading with integrity, developing others, and building toward something larger.',
  },
]

const projects = [
  {
    title: 'Body By Carisma',
    tags: 'Health Coaching | Client Systems',
    href: '#',
  },
  {
    title: 'Coach Carisma',
    tags: 'Education | Self-Mastery',
    href: '#',
  },
  {
    title: 'Healthcare Dashboard',
    tags: 'Analytics | Technology',
    href: '#',
  },
]

const articles = [
  {
    date: 'Apr 10, 2026',
    readTime: '5 min read',
    title: 'The Case for Preventive Healthcare',
    excerpt:
      'Why our medical system rewards treatment over prevention — and what a different model could look like.',
    href: '/blog',
  },
  {
    date: 'Mar 28, 2026',
    readTime: '7 min read',
    title: 'Systems Thinking in Practice',
    excerpt:
      'Most problems are not isolated incidents. They are symptoms of deeper structural patterns.',
    href: '/blog',
  },
  {
    date: 'Mar 12, 2026',
    readTime: '4 min read',
    title: 'On Building Better Habits',
    excerpt:
      'The science and philosophy behind behavioral change, and why willpower is the wrong tool.',
    href: '/blog',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="bg-white text-black overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="px-6 pt-16 pb-14 md:pt-20 md:pb-16">
        <h1 className="font-inter font-black leading-none tracking-[-0.04em] text-black text-[clamp(3rem,9.5vw,7.5rem)]">
          Joshua Carisma
        </h1>

        <hr className="border-t border-black mt-6 mb-6" />

        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-[#888888] text-xs tracking-[0.15em] uppercase">
          <span>Coach &amp; Systems Thinker</span>
          <span>Based in the US</span>
          <span>Working Globally</span>
        </div>

        <div className="mt-14 md:mt-20 flex justify-center">
          <p className="font-playfair italic text-[clamp(1.25rem,2.5vw,1.75rem)] text-black leading-relaxed text-center max-w-3xl">
            [A coach, builder, and systems thinker exploring the future of
            health, work, and human growth.]
          </p>
        </div>
      </section>

      {/* ── FULL-WIDTH PHOTO ─────────────────────────────────────────────────── */}
      <HeroPhoto />

      {/* ── FEATURED PROJECTS ────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6">
        <FadeIn>
          <h2 className="text-center font-inter font-bold text-[clamp(2rem,4vw,3rem)] tracking-tight mb-16 md:mb-20">
            Featured Projects
          </h2>
        </FadeIn>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-black">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 80}>
              <Link
                href={project.href}
                className="group block border-b border-r border-black"
              >
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-[#F2F1EE] w-full overflow-hidden">
                  <div className="w-full h-full bg-[#F2F1EE] group-hover:scale-[1.02] transition-transform duration-500" />
                </div>
                {/* Info */}
                <div className="px-6 py-5">
                  <h3 className="font-inter font-bold text-lg text-black">
                    {project.title}
                  </h3>
                  <p className="text-[#888888] text-sm mt-1">{project.tags}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── WHAT I DO ────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 border-t border-black">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-center font-inter font-bold text-[clamp(2rem,4vw,3rem)] tracking-tight mb-16 md:mb-20">
              What I Do
            </h2>
          </FadeIn>

          {services.map((service, i) => (
            <FadeIn
              key={service.num}
              delay={i * 50}
              className={`border-b border-black/10 ${i === 0 ? 'border-t' : ''}`}
            >
              <div className="flex items-start gap-8 py-7">
                <span className="font-inter text-sm text-[#888888] w-12 shrink-0 pt-0.5 tabular-nums">
                  [{service.num}]
                </span>
                <div className="flex-1">
                  <h3 className="font-inter font-bold text-base md:text-lg text-black">
                    {service.title}
                  </h3>
                  <p className="text-[#888888] text-sm mt-1.5 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── WRITING & ARTICLES ───────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 border-t border-black">
        <FadeIn>
          <h2 className="text-center font-inter font-bold text-[clamp(2rem,4vw,3rem)] tracking-tight mb-16 md:mb-20">
            Writing &amp; Articles
          </h2>
        </FadeIn>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 md:gap-8">
          {articles.map((article, i) => (
            <FadeIn key={article.title} delay={i * 100}>
              <Link href={article.href} className="group block">
                {/* Image placeholder */}
                <div className="aspect-[3/2] bg-[#F2F1EE] mb-5 overflow-hidden">
                  <div className="w-full h-full bg-[#F2F1EE] group-hover:scale-[1.02] transition-transform duration-500" />
                </div>

                <p className="text-[#888888] text-xs tracking-[0.12em] uppercase mb-3">
                  {article.date}&nbsp;&nbsp;·&nbsp;&nbsp;{article.readTime}
                </p>
                <h3 className="font-inter font-bold text-base leading-snug text-black mb-2 group-hover:opacity-60 transition-opacity">
                  {article.title}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-16 flex justify-center">
          <Link
            href="/blog"
            className="border border-black text-black text-sm font-medium px-7 py-3 hover:bg-black hover:text-white transition-colors"
          >
            Read All Essays →
          </Link>
        </FadeIn>
      </section>

    </div>
  )
}
