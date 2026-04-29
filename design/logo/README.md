# Cedar Labs Logo Design Assets

All SVGs use `currentColor`-compatible class-based colors (`stroke-neutral-950` / `stroke-white`, `fill-neutral-950` / `fill-white`) for automatic light/dark mode support with transparent backgrounds.

## Selected: Option H — Half-Cedar Tight

The active logo used on the website. Half-cedar tree (left branches only, solid trunk line) with horizontal "cdr" text, tight spacing.

- `H-half-cedar-tight-dark.svg` — Dark variant (neutral-950 strokes/fill on transparent)
- `H-half-cedar-tight-light.svg` — Light variant (white strokes/fill on transparent)

## Design Iterations

| Option | Name | Description |
|--------|------|-------------|
| A | Geometric Cedar | Full symmetric geometric cedar tree + "Cedar Labs" |
| B | Line Art Cedar | Full line-art cedar tree + "Cedar Labs" |
| C | Pine Signal | Abstract pine/antenna motif + "Cedar Labs" |
| D | Cedar Mark | Compact mark + wordmark layout |
| E | Half-Cedar Vertical | Half tree + vertical stacked "cdr" |
| F | Half-Cedar Horizontal | Half tree + horizontal "cdr" |
| G | Half-Cedar Short Trunk | Like F with shorter trunk |
| H | Half-Cedar Tight | Like G with tight tree-text spacing ✅ |

## Usage

The logo is implemented as a React component in `src/components/Logo.jsx` with two exports:

- `Logomark` — Icon-only (24×24 viewBox), used on mobile header
- `Logo` — Full logo with "cdr" text (108×48 viewBox), used on desktop header and footer

Both accept `invert` prop for dark backgrounds (switches to white strokes/fill).
