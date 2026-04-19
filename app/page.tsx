import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import HeroPhoto from '@/components/HeroPhoto'
import RevealImages from '@/components/RevealImages'

export const metadata: Metadata = {
  title: 'Joshua Carisma',
  description:
    'Coach, builder, and systems thinker exploring the future of health, work, and human growth.',
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects = [
  {
    title: 'Coaching Business Operating System',
    tags: 'Business · Systems · Operations',
    description: 'Frameworks, workflows, and systems for delivering structured, human-centered coaching.',
    cta: 'View Project',
    href: '#',
    image: '/images/coaching_os_photo.jpg',
  },
  {
    title: 'Coaching Client App',
    tags: 'Product · UX · Client Tools',
    description: 'A client-facing coaching tool exploring journaling, self-documentation, guided reflection, and habit support.',
    cta: 'View Project',
    href: '#',
    image: '/images/client_app_photo.jpg',
  },
  {
    title: 'Healthcare Ops Projects',
    tags: 'Healthcare · Analytics · Process Improvement',
    description: 'Dashboards, process improvements, and systems-focused healthcare projects.',
    cta: 'View Project',
    href: '#',
    image: '/images/healthcare_data_photo.jpg',
  },
]

const articles = [
  {
    date: 'Apr 10, 2026',
    readTime: '5 min read',
    title: 'Choosing Health in the 21st Century',
    excerpt:
      'Modern life no longer supports health by default. Why intentional choices, better systems, and deeper awareness matter more than ever.',
    href: '/blog',
    image: '/images/21century_photo.jpg',
  },
  {
    date: 'Mar 28, 2026',
    readTime: '7 min read',
    title: 'Healthcare Should Start Before You Get Sick',
    excerpt:
      'A better model of healthcare would treat movement, connection, routine, and prevention as part of care — not separate from it.',
    href: '/blog',
    image: '/images/preventative_health_photo.jpg',
  },
  {
    date: 'Mar 12, 2026',
    readTime: '4 min read',
    title: 'Technology Should Reduce Friction, Not Create More',
    excerpt:
      'The best tools make better action easier. Technology should support clarity, care, and progress instead of adding more noise.',
    href: '/blog',
    image: '/images/tech_stress_photo.jpg',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <RevealImages />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="px-6 pt-8 pb-7 md:pt-10 md:pb-8">
        <h1 className="font-inter font-black leading-none tracking-[-0.04em] text-black text-[clamp(3rem,9.5vw,7.5rem)]">
          Joshua Carisma
        </h1>

        <hr className="border-t border-black mt-3 mb-3" />

        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-[#888888] text-xs tracking-[0.15em] uppercase">
          <span>Coach &amp; Systems Thinker</span>
          <span>Based in the US</span>
          <span>Working Globally</span>
        </div>

        <div className="mt-7 md:mt-10 mb-7 md:mb-8 flex justify-center">
          <p className="font-inter font-bold text-black text-[1.44rem] leading-relaxed text-center max-w-3xl">
            [A coach, builder, and systems thinker exploring the future of
            health, work, and human growth.]
          </p>
        </div>
      </section>

      {/* ── FULL-WIDTH PHOTO ─────────────────────────────────────────────────── */}
      <HeroPhoto />

      {/* ── WHO I AM ─────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 px-6 border-t border-black">
        <FadeIn>
          <h2 className="text-center font-inter font-bold text-[clamp(2rem,4vw,3rem)] tracking-tight mb-8 md:mb-10">
            Who I Am
          </h2>
          <div className="max-w-[1010px] mx-auto">
            <p className="font-inter font-bold text-black text-[1.44rem] leading-relaxed text-center mb-4">
              I&apos;m Joshua Carisma — a coach, technologist, and systems thinker obsessed with one question: how do we help people become more capable of positive change?
            </p>
            <p className="font-inter font-bold text-black text-[1.44rem] leading-relaxed text-center mb-4">
              That question pulls me toward health, psychology, philosophy, and spirituality. It shows up in the way I coordinate care, design coaching programs, build data systems, and write. The tools change. The mission doesn&apos;t.
            </p>
            <p className="font-inter font-bold text-black text-[1.44rem] leading-relaxed text-center">
              I believe the best life is a designed one — and I&apos;ve dedicated my work to helping people build it.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ── FEATURED PROJECTS ────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 px-6 border-t border-black">
        <FadeIn>
          <h2 className="text-center font-inter font-bold text-[clamp(2rem,4vw,3rem)] tracking-tight mb-8 md:mb-10">
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
                {/* Image */}
                <div className="relative aspect-[4/3] bg-[#F2F1EE] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                {/* Info */}
                <div className="px-6 py-5">
                  <h3 className="font-inter font-bold text-lg text-black">
                    {project.title}
                  </h3>
                  <p className="text-[#888888] text-sm mt-1">{project.tags}</p>
                  <p className="text-black text-sm mt-3">{project.description}</p>
                  <span className="inline-block mt-4 text-sm font-inter font-semibold underline underline-offset-2">
                    {project.cta}
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>


      {/* ── WRITING & ARTICLES ───────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 px-6 border-t border-black">
        <FadeIn>
          <h2 className="text-center font-inter font-bold text-[clamp(2rem,4vw,3rem)] tracking-tight mb-8 md:mb-10">
            Writing &amp; Articles
          </h2>
        </FadeIn>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 md:gap-5">
          {articles.map((article, i) => (
            <FadeIn key={article.title} delay={i * 100}>
              <Link href={article.href} className="group block">
                {/* Image */}
                <div className="relative aspect-[3/2] bg-[#F2F1EE] mb-3 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                <p className="text-[#888888] text-xs tracking-[0.12em] uppercase mb-2">
                  {article.date}&nbsp;&nbsp;·&nbsp;&nbsp;{article.readTime}
                </p>
                <h3 className="font-inter font-bold text-base leading-snug text-black mb-1 group-hover:opacity-60 transition-opacity">
                  {article.title}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-8 flex justify-center">
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
