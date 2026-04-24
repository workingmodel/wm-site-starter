export const siteConfig = {
  name: "Site Name",
  tagline: "Your tagline here",
  description: "A modern Next.js site built with Tailwind, GSAP, and shadcn/ui",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  ogImage: "/og-image.jpg",
  logo: "/imgs/wm-logo-blk.svg",
  email: "hello@example.com",
  cta: {
    label: "Get Started",
    href: "/#contact",
  },
  links: {
    twitter: "",
    github: "",
    linkedin: "",
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
  ],
}
