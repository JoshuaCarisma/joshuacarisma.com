'use client'

import { useEffect } from 'react'

export default function RevealImages() {
  useEffect(() => {
    const images = document.querySelectorAll<HTMLImageElement>('img')
    images.forEach((img) => {
      img.addEventListener(
        'mouseenter',
        () => img.classList.add('revealed'),
        { once: true }
      )
    })
  }, [])

  return null
}
