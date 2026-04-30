# Cedar Labs Logo Design Assets

## Half-Cedar Tree

All SVGs use Tailwind class-based colors (`stroke-neutral-950` / `stroke-white`, `fill-neutral-950` / `fill-white`) for automatic light/dark mode support with transparent backgrounds.

### Favicon (tree + "c")

| File | Description |
|------|-------------|
| `favicon.svg` | Tree + "c" (32×32 viewBox) — used as browser tab icon |
| `favicon-white-bg.svg` | Tree + "c" on white background — for contexts requiring opaque favicon |

### Tree Mark (tree only, no text)

| File | Description |
|------|-------------|
| `half-cedar-mark-dark.svg` | Dark variant — neutral-950 strokes on transparent (32×32 viewBox) |
| `half-cedar-mark-light.svg` | Light variant — white strokes on transparent (32×32 viewBox) |

Use for avatars, app icons, or alternative favicon designs where text is unnecessary.

### Short Logo (tree + "cdr")

| File | Description |
|------|-------------|
| `half-cedar-dark.svg` | Dark variant — neutral-950 strokes/fill on transparent |
| `half-cedar-light.svg` | Light variant — white strokes/fill on transparent |

### Wide Logo — lowercase (tree + "cedar labs")

| File | Description |
|------|-------------|
| `half-cedar-wide-dark.svg` | Dark variant — neutral-950 strokes/fill on transparent |
| `half-cedar-wide-light.svg` | Light variant — white strokes/fill on transparent |

### Wide Logo — title case (tree + "Cedar Labs")

| File | Description |
|------|-------------|
| `half-cedar-wide-title-dark.svg` | Dark variant — neutral-950 strokes/fill on transparent |
| `half-cedar-wide-title-light.svg` | Light variant — white strokes/fill on transparent |

## Design

Half-cedar tree (left branches only, solid trunk line, stroke-width 1.5) + text with tight spacing. Matches the cdr.xyz website aesthetic: minimal line-art style, stroke-width 1.5, system-ui typeface.

## Usage

Implemented as React components in `src/components/Logo.jsx`:

- `Logomark` — Tree icon only (24×24 viewBox)
- `Logo` — Short logo with "cdr" text (108×48 viewBox), used in header (mobile + sm)
- `LogoWide` — Wide logo with "cedar labs" text (280×48 viewBox), used in header (md+) and footer (all sizes)
- `LogoWideTitle` — Wide logo with "Cedar Labs" text (300×48 viewBox), alternative

All accept `invert` prop for dark backgrounds (switches to white strokes/fill).

### Responsive behavior

- **Header**: Logo "cdr" on mobile/sm → LogoWide "cedar labs" on md+
- **Footer**: LogoWide "cedar labs" at all screen sizes
- **Favicon**: Tree + "c" SVG icon
