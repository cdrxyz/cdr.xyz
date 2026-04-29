import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      {/* Half-cedar tree: solid trunk line + left branches */}
      <line
        x1="7" y1="22" x2="7" y2="2"
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 17 L2 17 L7 10"
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 12 L3.5 12 L7 6"
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 7 L4.5 7 L7 2"
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Short logo: half-cedar tree + "cdr"
 * viewBox: 108 × 48
 */
export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 108 48"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      {/* Half-cedar tree: solid trunk line + left branches */}
      <line
        x1="14" y1="44" x2="14" y2="4"
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 34 L4 34 L14 20"
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 24 L7 24 L14 12"
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14 L9 14 L14 4"
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Horizontal cdr text, vertically centered with tree */}
      <text
        x="22" y="28"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="22"
        fontWeight="500"
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        letterSpacing="-0.5"
      >cdr</text>
    </svg>
  )
}

/**
 * Wide logo (lowercase): half-cedar tree + "cedar labs"
 * viewBox: 280 × 48
 */
export function LogoWide({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 280 48"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      {/* Half-cedar tree: solid trunk line + left branches */}
      <line
        x1="14" y1="44" x2="14" y2="4"
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 34 L4 34 L14 20"
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 24 L7 24 L14 12"
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14 L9 14 L14 4"
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* "cedar" text */}
      <text
        x="22" y="28"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="22"
        fontWeight="500"
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        letterSpacing="-0.5"
      >cedar</text>
      {/* "labs" text, spaced after "cedar" */}
      <text
        x="102" y="28"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="22"
        fontWeight="500"
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        letterSpacing="-0.5"
      >labs</text>
    </svg>
  )
}

/**
 * Wide logo (title case): half-cedar tree + "Cedar Labs"
 * viewBox: 300 × 48
 */
export function LogoWideTitle({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 300 48"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      {/* Half-cedar tree: solid trunk line + left branches */}
      <line
        x1="14" y1="44" x2="14" y2="4"
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 34 L4 34 L14 20"
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 24 L7 24 L14 12"
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14 L9 14 L14 4"
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* "Cedar" text */}
      <text
        x="22" y="28"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="22"
        fontWeight="500"
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        letterSpacing="-0.5"
      >Cedar</text>
      {/* "Labs" text, spaced after "Cedar" */}
      <text
        x="108" y="28"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="22"
        fontWeight="500"
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        letterSpacing="-0.5"
      >Labs</text>
    </svg>
  )
}
