'use client'

import { ReactNode, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

interface FadeInOnViewProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function FadeInOnView({ children, delay = 0, className = '' }: FadeInOnViewProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const trigger = ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            ref.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, delay, ease: 'power2.out' }
          )
        },
        once: true,
      })
      return () => trigger.kill()
    },
    { scope: ref, dependencies: [delay] }
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
