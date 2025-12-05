"use client"

import { Separator } from "@/components/ui/Separator"
import { FadeInOnView } from "@/components/animations/FadeInOnView"
import { useGSAP } from "@/hooks/useGSAP"
import { useRef } from "react"
import { gsap } from "@/lib/gsap"

export default function ExamplesPage() {
  const animatedBoxRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (animatedBoxRef.current) {
      gsap.fromTo(
        animatedBoxRef.current,
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: animatedBoxRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      )
    }
  })

  return (
    <main className="relative">
      {/* Left Gutter */}
      <div className="fixed top-0 bottom-0 left-0 w-12 border-x border-x-[var(--pattern-fg)] gutter-pattern z-0"></div>
      
      {/* Right Gutter */}
      <div className="fixed top-0 bottom-0 right-0 w-12 border-x border-x-[var(--pattern-fg)] gutter-pattern-right z-0"></div>
      
      {/* Main Content */}
      <div className="relative z-10 ml-12 mr-12 pt-16">
        {/* Hero Section */}
        <section className="w-full min-h-screen flex items-center justify-center section-responsive py-12">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Animation Examples
            </h1>
            <p className="text-base md:text-lg mb-12">
              Explore GSAP animations and interactive components
            </p>
          </div>
        </section>

        <Separator />

        {/* Fade In Examples */}
        <section className="w-full min-h-screen flex items-center justify-center section-responsive py-12">
          <div className="text-center px-4 max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-12">Fade In on Scroll</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[36px]">
              <FadeInOnView delay={0}>
                <div>
                  <p className="text-base md:text-lg">Fade in immediately</p>
                </div>
              </FadeInOnView>
              
              <FadeInOnView delay={0.2}>
                <div>
                  <p className="text-base md:text-lg">Fade in with delay</p>
                </div>
              </FadeInOnView>
              
              <FadeInOnView delay={0.4}>
                <div>
                  <p className="text-base md:text-lg">Staggered animation</p>
                </div>
              </FadeInOnView>
            </div>
          </div>
        </section>

        <Separator />

        {/* GSAP Animation Example */}
        <section className="w-full min-h-screen flex items-center justify-center section-responsive py-12">
          <div className="text-center px-4 max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-12">GSAP Scroll Animation</h2>
            
            <div className="flex justify-center">
              <div className="p-12" ref={animatedBoxRef}>
                <div className="w-24 h-24 bg-[#ffe835] mx-auto"></div>
                <p className="text-base md:text-lg mt-4">Animated on scroll</p>
              </div>
            </div>
          </div>
        </section>

        <Separator />
      </div>
    </main>
  )
}

