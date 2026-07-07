# PT Selera Sukses Bersama — Company Website

Official website for **PT Selera Sukses Bersama (SSB)**, an Indonesian B2B food distribution company specialising in frozen dimsum, Chinese-style sauces, and snack products.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + custom design tokens |
| Font | Poppins (Google Fonts) |
| Images | Next.js `<Image>` with optimisation |
| Animations | IntersectionObserver + CSS transitions |
| Deploy | Vercel (planned) |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Beranda (home)
│   ├── produk/             # Produk catalogue
│   ├── tentang-kami/       # About us
│   ├── jasa-boga/          # Food service
│   └── hubungi-kami/       # Contact
├── components/
│   ├── home/               # Home page sections
│   ├── layout/             # Header & Footer
│   └── ui/                 # Shared UI components (FadeUp, etc.)
public/
└── images/
    ├── banner/             # Page banners
    ├── logo/               # Company logos
    ├── icons/              # Marketplace & brand logos
    └── products/           # Product photography
        ├── dimsum/
        ├── sauce/
        └── snack/
docs/
├── draft_design/           # Original design mockups
└── draft_text_website/     # Website copy drafts
```

> Source product photos live in `docs/photo_folder/` (gitignored). Web-ready copies are already in `public/images/products/`.

## Design Tokens

| Token | Hex | Usage |
|-------|-----|-------|
| `navy` | `#1B3A6B` | Primary brand colour — headings, nav, backgrounds |
| `teal` | `#00A896` | Accent colour — CTAs, highlights, icons |

## Page Status

See [PROGRESS.md](PROGRESS.md) for detailed build progress.

## Deployment

Deploying to Vercel — connect the GitHub repo, set the root directory to `/`, and deploy. No additional environment variables required for the frontend.
