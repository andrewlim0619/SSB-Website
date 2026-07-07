# Build Progress

Status legend: ✅ Complete · 🚧 In progress · ⬜ Not started

---

## Pages

### ✅ Beranda (Home) — `/`

All sections built, animated, and mobile-responsive.

| Section | Status | Notes |
|---------|--------|-------|
| HeroSection | ✅ | Full-bleed banner, staggered CSS keyframe entrance animations |
| TrustIndicators | ✅ | Floating card overlapping hero, responsive sizing for mobile |
| AboutTeaser | ✅ | Warehouse photo, 4-item highlight grid, FadeUp scroll animation |
| IndustrySegments | ✅ | 6 segments: Hotel, Restoran, Kafe, Katering, Retail, Distributor |
| ProductsPreview | ✅ | Full-image cards with navy gradient overlay, 3 products |
| MarketplaceSection | ✅ | Homepage banner bg, teal gradient, Tokopedia + Blibli logos |
| Testimonials | ✅ | 3 customer reviews with star ratings and avatar initials |

---

### ⬜ Tentang Kami (About) — `/tentang-kami`

Placeholder only.

**Planned sections:**
- Company story / origin
- Mission & values
- Team / leadership
- Certifications (Halal, etc.)

---

### ⬜ Produk (Products) — `/produk`

Placeholder only.

**Planned sections:**
- Tabbed category filter (Dimsum · Saus · Snack)
- Product grid with cards
- Individual product detail page `/produk/[slug]`

**Available product photos** (in `public/images/products/`):
- Dimsum: 14 SKUs (Hakau Udang, Chasiew Pao, Chicken Kwotie, Siewmay, Beancurd Roll, Dumpling, Mantao, Klepon Pao, Taro Pao, Salted Egg Pao, Soy Sauce Chicken Pao, Chocolate Pao, Blackpepper Chicken Feet, Chicken Xiao Long Pao)
- Sauce: 6 SKUs (XO Sauce, Blackpepper Sauce, Duck Sauce, Kung Pao Sauce, Sweet & Sour Sauce, Chili Oil)
- Snack: 1 SKU (Crispy Fish Skin)

---

### ⬜ Jasa Boga (Food Service) — `/jasa-boga`

Placeholder only.

**Planned sections:**
- Service overview
- Catering / food service offerings
- Industry segments served

---

### ⬜ Hubungi Kami (Contact) — `/hubungi-kami`

Intentionally blank — design not yet provided.

---

## Shared Components

| Component | File | Status | Notes |
|-----------|------|--------|-------|
| Header | `layout/Header.tsx` | ✅ | Sticky, mobile hamburger, search toggle, updated logos |
| Footer | `layout/Footer.tsx` | ✅ | |
| FadeUp | `ui/FadeUp.tsx` | ✅ | Reusable IntersectionObserver scroll-triggered fade-up |

---

## Deployment Checklist

| Step | Status |
|------|--------|
| Local development | ✅ |
| GitHub repository | ✅ `andrewlim0619/SSB-Website` |
| Vercel project setup | ⬜ |
| Custom domain | ⬜ |
| Production deploy | ⬜ |

---

## Future Improvements

- Add Shopee marketplace logo to MarketplaceSection
- Add product search / filter on Produk page
- Add WhatsApp floating CTA button
- SEO: add `metadata` exports to each page
- Add Google Analytics
