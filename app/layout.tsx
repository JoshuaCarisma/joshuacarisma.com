import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Joshua Carisma',
    template: '%s | Joshua Carisma',
  },
  description: 'Software engineer, writer, and builder.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white text-gray-900 antialiased`}>
        <Nav />
        <main className="flex-1 mx-auto w-full max-w-3xl px-4 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
