'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function HeroPhoto() {
  const [error, setError] = useState(false)

  return (
    <div className="relative w-full h-[70vh] bg-[#F2F1EE]">
      {!error && (
        <Image
          src="/images/joshua.jpg"
          alt="Joshua Carisma"
          fill
          className="object-cover object-top"
          onError={() => setError(true)}
          priority
        />
      )}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div className="w-28 h-28 rounded-full bg-[#D8D7D4]" />
          <p className="text-xs text-[#888888] tracking-[0.2em] uppercase">
            Photo Coming Soon
          </p>
        </div>
      )}
    </div>
  )
}
