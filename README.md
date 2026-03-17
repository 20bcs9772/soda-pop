## Johnny's Dirty Soda & Exotic Snacks

A retro, neo‑brutalist single‑page site for **Johnny's Dirty Soda** – custom dirty sodas, exotic snacks, and a comic‑book flavored brand story.

---

### Table of Contents

1. [Tech Stack](#tech-stack)
2. [Getting Started](#getting-started)
3. [Available Scripts](#available-scripts)
4. [App Structure](#app-structure)
5. [Key Features](#key-features)
6. [Styling System](#styling-system)
7. [Assets](#assets)

---

### Tech Stack

- **Frontend**: React (Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite`) + custom CSS variables
- **3D Globe**: `@react-three/fiber`, `@react-three/drei`

---

### Getting Started

**Prerequisites**: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

---

### Available Scripts

- **`npm run dev`** – start the Vite dev server on port 3000.
- **`npm run build`** – production build.
- **`npm run preview`** – preview the production build.
- **`npm run lint`** – type‑check the project with TypeScript.

---

### App Structure

- **`src/App.tsx`** – assembles the full landing page:
  - `HeroSection` – comic, layered hero introducing the brand.
  - `DirtySodaSection` – explainer + looping pour video.
  - `VendingMachine` – interactive drink picker, cart, and slide‑out checkout.
  - `GlobeSection` – 3D globe showcasing “SNACKS FROM ALL OVER THE GLOBE”.
  - `ComicSection` – comic‑book origin story panels.
  - `TestimonialSection` – full‑width horizontal testimonial carousel.
  - `VisitSection` – location, hours, and events callout.
  - `CTASection` – email capture and “Perfy Promise” section.

---

### Key Features

- **Interactive vending machine**
  - Click any drink can to see flavor details.
  - “Add to Cart” triggers an animated dispense into the slot and updates a floating cart button.
  - Slide‑out cart shows line items, prices, running total, and remove controls.

- **Responsive layout**
  - Every section is tuned for desktop, tablet, and mobile with layout shifts that preserve the retro look.
  - Hero, dirty‑soda, vending machine, globe, comic, and testimonial sections all scale cleanly.

- **Strong visual system**
  - Consistent use of black borders, offset shadows, and bold typography.
  - Light patterns / textures behind most sections (halftones, gradients, subtle bubbles) for depth without clutter.

---

### Styling System

- **Fonts**
  - `--font-display`: Anton – used for headings and big labels.
  - `--font-sans`: Inter – used for body, buttons, and UI text.

- **Color tokens** (defined in `src/index.css`)
  - Primaries: `--color-primary`, `--color-primary-muted`, `--color-primary-subtle`.
  - Backgrounds: `--color-bg`, `--color-bg-muted`, `--color-bg-dark`, `--color-bg-light`.
  - Accents: lime (`--color-accent-lime`), red (`--color-accent-red`), yellow (`--color-accent-yellow`), vending‑machine red (`--color-vending-red`).

Tailwind utility classes reference these CSS variables directly (for example `bg-[var(--color-bg-muted)]`, `text-[var(--color-primary)]`).

---

### Assets

- **Drinks menu**: PNGs in `public/menu/` (e.g. `coke.png`, `strawberry.png`, `michelada.png`, `guava.png`, `mango.png`, `ice-tea.png`, `pineapple.png`, `blueberry.png`) used by the vending machine shelves and cart.
- **Dirty soda video**: `public/pour-drink.mp4`, used as the looping hero visual in the dirty soda explainer section.
- **Hero art**: `public/drink-hero.png`, `public/drink-cup.webp`, `public/grapefruit.png` for the hero stack and floating cups.

You can swap any of these with your own files (keep the same paths or update the components that reference them).
