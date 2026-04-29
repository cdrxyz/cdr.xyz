# Cedar Labs Logo Design Assets

## Half-Cedar Tree

All SVGs use Tailwind class-based colors (`stroke-neutral-950` / `stroke-white`, `fill-neutral-950` / `fill-white`) for automatic light/dark mode support with transparent backgrounds.

| File | Description |
|------|-------------|
| `half-cedar-dark.svg` | Dark variant — neutral-950 strokes/fill on transparent |
| `half-cedar-light.svg` | Light variant — white strokes/fill on transparent |

## Design

Half-cedar tree (left branches only, solid trunk line, stroke-width 1.5) + horizontal "cdr" text with tight spacing. Matches the cdr.xyz website aesthetic: minimal line-art style, Mona Sans / system-ui typeface.

## Usage

Implemented as a React component in `src/components/Logo.jsx`:

- `Logomark` — Tree icon only (24×24 viewBox), used on mobile header
- `Logo` — Full logo with "cdr" text (108×48 viewBox), used on desktop header and footer

Both accept `invert` prop for dark backgrounds (switches to white strokes/fill).
