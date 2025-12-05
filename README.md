# WM Site Starter

A modern, flexible Next.js site starter with Tailwind CSS, GSAP animations, and shadcn/ui components. Built to be easy to configure and customize out of the box.

**Created by [Working Model Inc](https://workingmodel.co)**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- ⚡ **Next.js 14** with App Router and TypeScript
- 🎨 **Tailwind CSS** with custom design tokens and patterns
- 🎭 **GSAP** animations with ScrollTrigger support
- 🧩 **shadcn/ui** components for rapid development
- 📱 Fully responsive design
- 🎯 SEO-friendly structure
- 🚀 Performance optimized

## Getting Started

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and design tokens
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components (Header, Footer)
│   └── animations/      # Animation components
├── hooks/                # Custom React hooks
│   ├── useGSAP.ts       # GSAP hook for animations
│   └── useScrollAnimation.ts
├── lib/                  # Utility functions
│   ├── utils.ts         # Utility functions (cn, etc.)
│   └── gsap.ts          # GSAP configuration
├── config/              # Configuration files
│   └── site.ts          # Site configuration
└── public/              # Static assets
    └── imgs/            # Images
        ├── favicons/    # Favicon files
        └── wm-logo-blk.svg  # Logo
```

## Configuration

### Site Configuration

Edit `config/site.ts` to customize:
- Site name and description
- Navigation links
- Social media links
- Metadata

### Theme Customization

Edit `app/globals.css` to customize:
- Colors (CSS variables)
- Typography
- Spacing
- Design tokens

### Tailwind Configuration

Edit `tailwind.config.ts` to customize:
- Theme colors
- Breakpoints
- Animations
- Plugins

## Design System

### Colors

The starter includes a comprehensive color system using CSS variables:

- `--background`: Background color
- `--foreground`: Text color
- `--primary`: Primary brand color
- `--accent`: Accent color
- `--pattern-fg`: Pattern foreground (for borders, decorations)
- `--accent-yellow`: Yellow accent (#ffe835)

### Typography

- **Body**: Stack Sans Text (weight: 200)
- **Headings**: Stack Sans Headline (weight: 400)

### Components

#### Separator

A decorative separator with crosshatch pattern:

```tsx
import { Separator } from "@/components/ui/Separator"

<Separator />
```

#### FadeInOnView

A component that fades in when scrolled into view:

```tsx
import { FadeInOnView } from "@/components/animations/FadeInOnView"

<FadeInOnView delay={0.2}>
  <h2>This will fade in</h2>
</FadeInOnView>
```

## GSAP Animations

### Using useGSAP Hook

```tsx
import { useGSAP } from "@/hooks/useGSAP"
import { gsap } from "@/lib/gsap"

function MyComponent() {
  useGSAP(() => {
    gsap.to(".element", {
      x: 100,
      duration: 1,
    })
  })

  return <div className="element">Animated</div>
}
```

### Using useScrollAnimation Hook

```tsx
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { gsap } from "@/lib/gsap"

function MyComponent() {
  const animation = gsap.to(".element", {
    x: 100,
    duration: 1,
  })

  useScrollAnimation(animation, {
    start: "top 80%",
    scrub: true,
  })

  return <div className="element">Scroll animated</div>
}
```

## Animation Components

### SlideInOnView

Slides content in from any direction when it enters the viewport:

```tsx
import { SlideInOnView } from "@/components/animations/SlideInOnView"

<SlideInOnView direction="up" delay={0.2}>
  <h2>This will slide in from bottom</h2>
</SlideInOnView>
```

### StaggerSlideIn

Staggers multiple children with slide-in animations:

```tsx
import { StaggerSlideIn } from "@/components/animations/StaggerSlideIn"

<StaggerSlideIn direction="up" stagger={0.15} className="grid grid-cols-2 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</StaggerSlideIn>
```

### ParallaxText

Adds parallax scrolling effect to text:

```tsx
import { ParallaxText } from "@/components/animations/ParallaxText"

<ParallaxText speed={0.2}>
  <h1>Parallax heading</h1>
</ParallaxText>
```

## Layout System

The starter includes a gutter system with left and right decorative borders:

```tsx
<main className="relative">
  {/* Left Gutter */}
  <div className="fixed top-0 bottom-0 left-0 w-12 border-x border-x-[var(--pattern-fg)] gutter-pattern z-0"></div>
  
  {/* Right Gutter */}
  <div className="fixed top-0 bottom-0 right-0 w-12 border-x border-x-[var(--pattern-fg)] gutter-pattern-right z-0"></div>
  
  {/* Main Content */}
  <div className="relative z-10 ml-12 mr-12">
    {/* Your content */}
  </div>
</main>
```

## Adding shadcn/ui Components

To add more shadcn/ui components:

```bash
npx shadcn-ui@latest add [component-name]
```

For example:
```bash
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
```

## Customization

### Changing Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: 0 0% 9%;
  --accent-yellow: #ffe835;
  /* ... */
}
```

### Changing Fonts

Update the font imports in `app/layout.tsx` and font-family in `app/globals.css`.

### Adding New Animations

Add custom animations to `tailwind.config.ts`:

```ts
keyframes: {
  "custom-animation": {
    from: { /* ... */ },
    to: { /* ... */ },
  },
},
animation: {
  "custom-animation": "custom-animation 1s ease-out",
},
```

## Credits

This starter template was created by [Working Model Inc](https://workingmodel.co), a design and development studio specializing in modern web experiences.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues and questions, please open an issue on [GitHub](https://github.com/workingmodel/wm-site-starter/issues).

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [GSAP](https://greensock.com/gsap/)
- Components from [shadcn/ui](https://ui.shadcn.com/)

