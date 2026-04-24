'use client'

import { ReactNode, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

interface ParallaxTextProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxText({ children, speed = 0.3, className = '' }: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const trigger = ScrollTrigger.create({
        trigger: ref.current?.parentElement ?? ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        animation: gsap.to(ref.current, { y: speed * 100, ease: 'none' }),
      })
      return () => trigger.kill()
    },
    { scope: ref, dependencies: [speed] }
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
