'use client'

import { ReactNode, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

interface SlideInOnViewProps {
  children: ReactNode
  direction?: 'left' | 'right' | 'up' | 'down'
  delay?: number
  distance?: number
  className?: string
}

const initialPositions = {
  left: (d: number) => ({ x: -d, opacity: 0 }),
  right: (d: number) => ({ x: d, opacity: 0 }),
  up: (d: number) => ({ y: d, opacity: 0 }),
  down: (d: number) => ({ y: -d, opacity: 0 }),
}

export function SlideInOnView({
  children,
  direction = 'up',
  delay = 0,
  distance = 50,
  className = '',
}: SlideInOnViewProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const trigger = ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(ref.current, initialPositions[direction](distance), {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay,
            ease: 'power3.out',
          })
        },
        once: true,
      })
      return () => trigger.kill()
    },
    { scope: ref, dependencies: [direction, delay, distance] }
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
