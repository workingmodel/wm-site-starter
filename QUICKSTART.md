# Quick Start Guide

**Created by [Working Model Inc](https://workingmodel.co)**

## First Time Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure your site:**
   - Edit `config/site.ts` to update site name, description, and navigation
   - Update `app/layout.tsx` metadata if needed
   - Customize colors in `app/globals.css`

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization Checklist

### Basic Configuration
- [ ] Update site name in `config/site.ts`
- [ ] Update site description
- [ ] Update navigation links
- [ ] Update social media links
- [ ] Update favicon in `public/imgs/favicons/`
- [ ] Update logo in `public/imgs/`

### Styling
- [ ] Customize colors in `app/globals.css` (CSS variables)
- [ ] Update fonts in `app/layout.tsx` and `app/globals.css`
- [ ] Adjust spacing/breakpoints in `tailwind.config.ts`

### Content
- [ ] Update homepage (`app/page.tsx`)
- [ ] Create/update about page (`app/about/page.tsx`)
- [ ] Add your own pages

### Components
- [ ] Add more shadcn/ui components: `npx shadcn-ui@latest add [component]`
- [ ] Customize existing components in `components/ui/`
- [ ] Create your own components

## Common Tasks

### Adding a New Page

1. Create a new file in `app/[page-name]/page.tsx`
2. Use the layout pattern from existing pages:
   ```tsx
   <main className="relative">
     <div className="fixed top-0 bottom-0 left-0 w-12 ..."></div>
     <div className="fixed top-0 bottom-0 right-0 w-12 ..."></div>
     <div className="relative z-10 ml-12 mr-12 pt-16">
       {/* Your content */}
     </div>
   </main>
   ```

### Adding GSAP Animation

```tsx
"use client"
import { useGSAP } from "@/hooks/useGSAP"
import { gsap } from "@/lib/gsap"

export default function MyPage() {
  useGSAP(() => {
    gsap.to(".element", {
      x: 100,
      duration: 1,
    })
  })

  return <div className="element">Animated</div>
}
```

### Adding shadcn/ui Component

```bash
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add input
```

## Project Structure Overview

- `app/` - Next.js pages and layouts
- `components/` - React components
  - `ui/` - shadcn/ui components
  - `layout/` - Header, Footer, etc.
  - `animations/` - Animation components
- `hooks/` - Custom React hooks
- `lib/` - Utility functions
- `config/` - Configuration files
- `public/` - Static assets

## Credits

This starter template was created by [Working Model Inc](https://workingmodel.co), a design and development studio specializing in modern web experiences.

## Need Help?

- Check the main [README.md](./README.md) for detailed documentation
- Review the style guide in `_docs/WM-STYLE-GUIDE.md`
- Check Next.js docs: https://nextjs.org/docs
- Check Tailwind docs: https://tailwindcss.com/docs
- Check GSAP docs: https://greensock.com/docs/
- Check shadcn/ui docs: https://ui.shadcn.com/

