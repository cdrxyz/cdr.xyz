# Cedar Labs Logo Design Assets

## Half-Cedar Tree

All SVGs use Tailwind class-based colors (`stroke-neutral-950` / `stroke-white`, `fill-neutral-950` / `fill-white`) for automatic light/dark mode support with transparent backgrounds.

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

Implemented as a React component in `src/components/Logo.jsx`:

- `Logomark` — Tree icon only (24×24 viewBox), used on mobile header
- `Logo` — Short logo with "cdr" text (108×48 viewBox), used on sm breakpoint
- `LogoWide` — Wide logo with "cedar labs" text (280×48 viewBox), used on md+ breakpoint
- `LogoWideTitle` — Wide logo with "Cedar Labs" text (300×48 viewBox), available as alternative

All accept `invert` prop for dark backgrounds (switches to white strokes/fill).

### Responsive behavior

- **Mobile (< sm)**: Logomark in header, Logo in footer
- **sm–md**: Logo "cdr" in header, LogoWide in footer
- **md+**: LogoWide "cedar labs" in header and footer
