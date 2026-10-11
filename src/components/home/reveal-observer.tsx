'use client'

import { useEffect } from 'react'

/**
 * Scroll-reveal for elements marked with `data-reveal`.
 *
 * Server-rendered content is visible by default. Only after hydration do we
 * hide elements that start below the fold, then show them as they intersect.
 * Does nothing under prefers-reduced-motion or without IntersectionObserver.
 */
export function RevealObserver() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) return

    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (els.length === 0) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.removeAttribute('data-reveal-state')
          io.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px' }
    )

    els.forEach((el) => {
      // Already on screen: leave visible.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return
      el.setAttribute('data-reveal-state', 'hidden')
      io.observe(el)
    })

    return () => {
      io.disconnect()
      els.forEach((el) => el.removeAttribute('data-reveal-state'))
    }
  }, [])

  return null
}
