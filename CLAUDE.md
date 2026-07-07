# CLAUDE.md — SSB Website

Project-specific instructions for Claude Code sessions.

## Overview

Next.js 14 website for **PT Selera Sukses Bersama (SSB)**, an Indonesian B2B food distribution company. Build one page at a time, test on localhost:3000, then deploy to Vercel.

See [PROGRESS.md](PROGRESS.md) for current page-by-page build status.

## Tech Stack

- **Framework**: Next.js 14 App Router, TypeScript
- **Styling**: Tailwind CSS — custom tokens `navy: #1B3A6B`, `teal: #00A896`
- **Font**: Poppins via CSS `@import` in `src/app/globals.css`
- **Animations**: CSS keyframes (hero) + `FadeUp` component (everything else)
- **Deploy target**: Vercel

## Key Conventions

### Scroll Animations

- **Hero section only**: CSS `@keyframes ssb-fade-up` defined in `globals.css`, applied inline:
  ```tsx
  style={{ animation: "ssb-fade-up 0.6s ease-out 0.1s both" }}
  ```
- **All other sections**: use `<FadeUp>` from `src/components/ui/FadeUp.tsx`
- Stagger multiple children: `delay={i * 80}` through `delay={i * 150}`

### Tailwind Utility Classes (defined in globals.css)

| Class | Usage |
|-------|-------|
| `.btn-primary` | Navy filled CTA button |
| `.btn-outline` | Navy outline button |
| `.btn-teal` | Teal filled button |
| `.section-title` | Main section heading (`text-2xl md:text-3xl font-bold text-navy`) |
| `.section-subtitle` | Supporting subheading (`text-gray-500 text-sm`) |
| `.container-pad` | Page-width container with horizontal padding |

### Full-Bleed Background Sections

Pattern used in HeroSection and MarketplaceSection:
```tsx
<section className="relative overflow-hidden">
  <Image src="..." alt="" fill className="object-cover object-center" />
  {/* Mobile white overlay — keeps text readable on portrait phones */}
  <div className="absolute inset-0 bg-white/30 md:hidden" />
  {/* Gradient overlay */}
  <div className="absolute inset-0" style={{ background: "linear-gradient(...)" }} />
  {/* Content */}
  <div className="relative z-10 container-pad">...</div>
</section>
```

### Image Assets

- Web-ready images → `public/images/` (committed to git)
- Source/raw photos → `docs/photo_folder/` (gitignored, stays local)
- When the user provides a new photo from `docs/photo_folder/`, copy it to `public/images/` before referencing it in code

### Mobile Responsiveness

- Mobile-first: base styles for small screens, `md:` for desktop
- Full-bleed background sections need `<div className="absolute inset-0 bg-white/X md:hidden" />`
- Use `justify-center md:justify-start` pattern for buttons that should center on mobile

## Dev Server

```powershell
# Windows — detached so it doesn't block the terminal
Start-Process cmd.exe "/c npm run dev"
```

Runs on [http://localhost:3000](http://localhost:3000).

## Next Pages to Build

1. **Tentang Kami** (`/tentang-kami`) — company story, values, certifications
2. **Produk** (`/produk`) — tabbed category grid (Dimsum · Saus · Snack) + detail pages
3. **Jasa Boga** (`/jasa-boga`) — food service offering page
