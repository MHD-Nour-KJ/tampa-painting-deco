# Tampa Painting Deco — Design System & Style Guide

## 1. Visual Theme & Atmosphere
The design merges the friendly, approachable on-demand service layout of Mendx with Tampa Painting Deco's authentic Floridian coastal craft identity. It uses clean off-white canvases, generous whitespace, confident geometric cards with distinct playful color blocking, organic wave doodles, and authentic before/after project photography. The atmosphere feels energetic, reliable, and premium yet completely accessible — avoiding cold corporate sterility and avoiding AI-slop neon glows or generic purple gradients.

---

## 2. Color Palette & Roles
- **Canvas / Page Background**: `#F8FAFC` (soft luminous off-white)
- **Primary Text / Foreground**: `#111827` (deep slate charcoal for crisp, natural contrast)
- **Secondary Muted Text**: `#4B5563` and `#64748B` (refined neutral body and subtitle color)
- **Brand Primary Accent**: `#1EA0B8` (Tampa Painting Deco's signature Teal / Turquoise from their verified logo)
- **Brand Dark Accent**: `#157A8C`
- **Brand Soft Surface**: `#E6F7FA` (ice-cyan surface tint)

### Distinct Feature Card Palette (Matching Reference)
- **Maroon / Plum**: `#3E1225` with text `#FFFFFF` (velvety deep warmth)
- **Soft Rose / Blush**: `#FCE7F3` with text `#831843` (gentle pastel warmth)
- **Electric Teal**: `#1EA0B8` with text `#FFFFFF` (brand signature pop)
- **Mint / Spring Sage**: `#D1FAE5` with text `#065F46` (crisp fresh organic tone)

### Bento Metric Surfaces
- **Bento Blue**: `#2563EB` (vibrant cobalt blue with neon mint doodle)
- **Bento Coral / Peach**: `#FFEDD5` / `#FB923C` (warm sunset peach with coral doodle)
- **Bento Emerald**: `#10B981` (clean reassuring green)
- **Bento Plum**: `#2B0F1C` (deep contrast anchor card)
- **Bento White**: `#FFFFFF` (clean minimalist card)

---

## 3. Typography Rules
- **Primary Display & Headings**: `Plus Jakarta Sans`, sans-serif (weights 600, 700, 800)
  - Display Hero: `clamp(2.5rem, 5vw, 4.25rem)` (tight tracking `-0.02em`, 1.1 line-height)
  - Section Headings: `clamp(1.85rem, 3.5vw, 2.75rem)` (tight tracking `-0.015em`, 1.2 line-height)
- **Body & Interface**: `Inter`, sans-serif (weights 400, 500, 600)
  - Body text: `15px` to `17px`, line-height `1.6`
  - Pill badges & buttons: `13px` to `14px`, weight `600`
- **Strict Anti-Slop Rules**:
  - NO ALL-CAPS text anywhere (forbidden in nav, body, titles, badges).
  - Sentence case or Title Case only.
  - No empty buzzwords ("elevate", "delve", "realm", "tapestry", "seamless", "game-changer").

---

## 4. Component Stylings & Corner Radii
- **Hero & Search Pill**: `rounded-full` / `rounded-2xl` on mobile, high-contrast search pill with integrated location and service selectors.
- **Feature Cards**: `rounded-[28px]` or `rounded-[32px]` with generous padding (`p-6` to `p-8`).
- **Interactive Badges**: `rounded-full` pill badges (`px-3 py-1 text-xs font-semibold`).
- **Buttons**:
  - Primary: `rounded-full` dark pill (`bg-[#111827] text-white hover:bg-black`) with subtle scale and shadow lift.
  - Brand: `rounded-full` teal pill (`bg-[#1EA0B8] text-white hover:bg-[#167c8f]`).
- **Elevation**: Layered multi-drop subtle shadows (`shadow-sm`, `shadow-md`, `shadow-xl`) without harsh dark borders.
- **Doodles & Accents**: Fluid SVG organic wavy lines matching the reference illustrations in neon lime, bright coral, and ice cyan.

---

## 5. Responsive Behavior
- **Mobile (< 640px)**: 1-column cards, horizontal scroll with touch snap for carousels, sticky bottom quick-call bar, collapsible mobile navigation drawer.
- **Tablet (640px - 1024px)**: 2-column bento grids, 2-column service cards, compact search bar.
- **Desktop (>= 1024px)**: Full multi-column reference layout, 4-card service grid, 6-card bento grid, side-by-side interactive before & after slider, full-width parallax view.

---

## 6. Motion & Parallax
- Parallax background scroll effect on full-width Florida architectural showcase.
- Interactive drag-to-reveal Before & After transformation slider.
- Smooth card hover lift (`-translate-y-1.5 transition-transform duration-300`).
