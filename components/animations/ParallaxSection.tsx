'use client'

import { ReactNode, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxSection({ children, speed = 0.5, className = '' }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const trigger = ScrollTrigger.create({
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        animation: gsap.to(ref.current, {
          y: () => -(window.innerHeight * speed),
          ease: 'none',
        }),
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
