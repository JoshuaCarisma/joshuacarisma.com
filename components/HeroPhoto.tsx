'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function HeroPhoto() {
  const [error, setError] = useState(false)

  return (
    <div className="relative w-full h-[92vh] bg-[#F2F1EE]">
      {error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div className="w-28 h-28 rounded-full bg-[#D8D7D4]" />
          <p className="text-xs text-[#888888] tracking-[0.2em] uppercase">
            Photo Coming Soon
          </p>
        </div>
      ) : (
        <Image
          src="/images/joshphoto_light_focused_wide_lo.jpeg"
          alt="Joshua Carisma"
          fill
          className="object-cover object-[center_8%] grayscale brightness-125 scale-110"
          onError={() => setError(true)}
          priority
        />
      )}
    </div>
  )
}
