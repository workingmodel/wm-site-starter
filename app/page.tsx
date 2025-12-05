import { Separator } from "@/components/ui/Separator"
import { Button } from "@/components/ui/button"
import { Rocket, Palette, Zap, Package, Download, Settings, Code2, Sparkles } from "lucide-react"
import { SlideInOnView } from "@/components/animations/SlideInOnView"
import { StaggerSlideIn } from "@/components/animations/StaggerSlideIn"
import { ParallaxText } from "@/components/animations/ParallaxText"
import Link from "next/link"

export default function Home() {
  return (
    <main className="relative">
      {/* Left Gutter */}
      <div className="fixed top-0 bottom-0 left-0 w-12 border-x border-x-[var(--pattern-fg)] gutter-pattern z-0"></div>
      
      {/* Right Gutter */}
      <div className="fixed top-0 bottom-0 right-0 w-12 border-x border-x-[var(--pattern-fg)] gutter-pattern-right z-0"></div>
      
      {/* Main Content */}
      <div className="relative z-10 ml-12 mr-12 pt-16">
        {/* Hero Section */}
        <section className="w-full min-h-screen flex items-center justify-center section-responsive">
          <div className="text-center px-4 max-w-4xl">
            <ParallaxText speed={0.2}>
              <SlideInOnView direction="up" delay={0}>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Welcome to Your Site Starter
                </h1>
              </SlideInOnView>
            </ParallaxText>
            <ParallaxText speed={0.15}>
              <SlideInOnView direction="up" delay={0.2}>
                <p className="text-base md:text-lg mb-12">
                  A modern, flexible Next.js starter with Tailwind CSS, GSAP animations, and shadcn/ui components.
                </p>
              </SlideInOnView>
            </ParallaxText>
            <ParallaxText speed={0.1}>
              <SlideInOnView direction="up" delay={0.4}>
                <div className="flex gap-4 justify-center">
                  <Link href="#get-started">
                    <Button>Get Started</Button>
                  </Link>
                </div>
              </SlideInOnView>
            </ParallaxText>
          </div>
        </section>

        {/* Separator */}
        <Separator />

        {/* Features Section */}
        <section id="features" className="w-full min-h-screen flex items-center justify-center section-responsive pt-24 pb-12">
          <div className="text-center px-4 max-w-6xl">
            <ParallaxText speed={0.2}>
              <SlideInOnView direction="up">
                <h2 className="text-3xl md:text-5xl font-bold mb-12">Features</h2>
              </SlideInOnView>
            </ParallaxText>
            
            <StaggerSlideIn direction="up" stagger={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-[36px]">
              <div>
                <div className="py-[20px]">
                  <Rocket className="w-6 h-6 mx-auto" />
                </div>
                <p className="text-base md:text-lg">Modern Next.js 14 with App Router</p>
              </div>
              
              <div>
                <div className="py-[20px]">
                  <Palette className="w-6 h-6 mx-auto" />
                </div>
                <p className="text-base md:text-lg">Tailwind CSS with custom design tokens</p>
              </div>
              
              <div>
                <div className="py-[20px]">
                  <Zap className="w-6 h-6 mx-auto" />
                </div>
                <p className="text-base md:text-lg">GSAP animations ready to use</p>
              </div>
              
              <div>
                <div className="py-[20px]">
                  <Package className="w-6 h-6 mx-auto" />
                </div>
                <p className="text-base md:text-lg">shadcn/ui components for rapid development</p>
              </div>
            </StaggerSlideIn>
          </div>
        </section>

        {/* Separator */}
        <Separator />

        {/* Get Started Section */}
        <section id="get-started" className="w-full min-h-screen flex items-center justify-center section-responsive pt-24 pb-12">
          <div className="text-center px-4 max-w-6xl">
            <ParallaxText speed={0.2}>
              <SlideInOnView direction="up">
                <h2 className="text-3xl md:text-5xl font-bold mb-12">Get Started</h2>
              </SlideInOnView>
            </ParallaxText>
            
            <div className="space-y-12 mb-12">
              <SlideInOnView direction="up" delay={0.1}>
                <div>
                  <div className="py-[20px]">
                    <Download className="w-6 h-6 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Install Dependencies</h3>
                  <p className="text-base md:text-lg mb-4">
                    Install all required packages to get started
                  </p>
                  <div className="bg-muted p-4 rounded-md text-left font-mono text-sm max-w-md mx-auto">
                    <code>npm install</code>
                  </div>
                </div>
              </SlideInOnView>
              
              <SlideInOnView direction="up" delay={0.2}>
                <div>
                  <div className="py-[20px]">
                    <Settings className="w-6 h-6 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Configure Your Site</h3>
                  <p className="text-base md:text-lg mb-4">
                    Update site name, description, and navigation in <code className="bg-muted px-1 rounded">config/site.ts</code>
                  </p>
                  <p className="text-base md:text-lg">
                    Customize colors and fonts in <code className="bg-muted px-1 rounded">app/globals.css</code>
                  </p>
                </div>
              </SlideInOnView>
              
              <SlideInOnView direction="up" delay={0.3}>
                <div>
                  <div className="py-[20px]">
                    <Code2 className="w-6 h-6 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Start Development</h3>
                  <p className="text-base md:text-lg mb-4">
                    Run the development server
                  </p>
                  <div className="bg-muted p-4 rounded-md text-left font-mono text-sm max-w-md mx-auto">
                    <code>npm run dev</code>
                  </div>
                  <p className="text-base md:text-lg mt-4">
                    Open <code className="bg-muted px-1 rounded">http://localhost:3000</code> in your browser
                  </p>
                </div>
              </SlideInOnView>
              
              <SlideInOnView direction="up" delay={0.4}>
                <div>
                  <div className="py-[20px]">
                    <Sparkles className="w-6 h-6 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Customize & Build</h3>
                  <p className="text-base md:text-lg mb-4">
                    Add your content, customize components, and build your site
                  </p>
                  <div className="bg-muted p-4 rounded-md text-left font-mono text-sm max-w-md mx-auto">
                    <code>npm run build</code>
                  </div>
                </div>
              </SlideInOnView>
            </div>

            <SlideInOnView direction="up" delay={0.5}>
              <div className="mt-12">
                <p className="text-base md:text-lg">
                  For more detailed instructions, check out the <Link href="/examples" className="link-highlight">examples</Link> or review the <a href="https://github.com" className="link-highlight">documentation</a>.
                </p>
              </div>
            </SlideInOnView>
          </div>
        </section>
      </div>
    </main>
  )
}

