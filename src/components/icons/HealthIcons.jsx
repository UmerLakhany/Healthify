const BADGE_PATH =
  'M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z'

function LineIcon({ size = 24, strokeWidth = 1.5, className = '', children }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  )
}

export function LeafIcon(props) {
  return (
    <LineIcon {...props}>
      <path d="M19.5 4.5c-8.5-.5-14 4.2-14 10.5 0 1.3.3 2.5.8 3.5 6.5.4 12.7-3.6 13.2-14Z" />
      <path d="M3.5 20.5 15.5 8.5" />
      <path d="M9 15l-.2-3.4M9 15l3.3.3M12.3 11.8l-.2-3.2M12.3 11.8l3.2.3" />
    </LineIcon>
  )
}

export function LeafSolidIcon({ size = 24, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true" focusable="false">
      <path
        d="M20.5 3.5C10.8 3 4.5 8.4 4.5 15.6c0 1.5.3 2.9.9 4 7.4.5 14.5-4.1 15.1-16.1Z"
        fill="currentColor"
      />
      <path d="M3 21.5 15 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5.4 19.6 14.6 10.4" stroke="#fff" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

export function LeafCircleIcon(props) {
  return (
    <LineIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M16 8c-4.2 0-6.8 2.1-6.8 5.2 0 .6.1 1.1.3 1.6 3.1.2 6.2-1.7 6.5-6.8Z" />
      <path d="M8 16l4.8-4.8" />
    </LineIcon>
  )
}

export function MealsIcon(props) {
  return (
    <LineIcon {...props}>
      <path d="M5.2 9.5A8 8 0 0 0 16.5 20" />
      <path d="M3.5 13.5c.4 1.7 1.4 3.2 2.8 4.3" />
      <path d="M19.5 3.5c-6.3-.3-10.4 3.2-10.4 7.9 0 1 .2 1.9.6 2.7 4.8.3 9.4-2.7 9.8-10.6Z" />
      <path d="M8 15.5l7.5-7.5" />
    </LineIcon>
  )
}

export function NutritionistIcon(props) {
  return (
    <LineIcon {...props}>
      <path d={BADGE_PATH} />
      <circle cx="12" cy="10" r="2" />
      <path d="M8.8 15.6c.7-1.4 1.8-2.1 3.2-2.1s2.5.7 3.2 2.1" />
    </LineIcon>
  )
}

export function FreshBadgeIcon(props) {
  return (
    <LineIcon {...props}>
      <path d={BADGE_PATH} />
      <path d="M15.2 8.8c-3.4 0-5.5 1.7-5.5 4.2 0 .5.1.9.2 1.3 2.6.2 5-1.4 5.3-5.5Z" />
      <path d="M8.6 15.4l3.8-3.8" />
    </LineIcon>
  )
}

export function NutritionBadgeIcon(props) {
  return (
    <LineIcon {...props}>
      <path d={BADGE_PATH} />
      <path d="m9 12.2 2 2 4-4.2" />
    </LineIcon>
  )
}

export function TasteIcon(props) {
  return (
    <LineIcon {...props}>
      <path d="M12 3.2c2.4 0 3.2 1.5 5 2.3 1.9.8 3.8 1.9 3.8 5.2 0 5.6-4 10.1-8.8 10.1S3.2 16.3 3.2 10.7c0-3.3 1.9-4.4 3.8-5.2 1.8-.8 2.6-2.3 5-2.3Z" />
      <path d="M8.8 13.3c1.6 1.9 4.8 1.9 6.4 0" />
      <path d="M9.3 9.6h.01M14.7 9.6h.01" strokeWidth="2.2" />
    </LineIcon>
  )
}

export function BarsIcon(props) {
  return (
    <LineIcon {...props}>
      <rect x="3.5" y="13" width="4" height="7.5" rx="1.4" />
      <rect x="10" y="8.5" width="4" height="12" rx="1.4" />
      <rect x="16.5" y="3.5" width="4" height="17" rx="1.4" />
    </LineIcon>
  )
}

export function PersonIcon(props) {
  return (
    <LineIcon {...props}>
      <circle cx="12" cy="8" r="4.5" />
      <path d="M10.2 8.9c1 .9 2.6.9 3.6 0" />
      <path d="M10 6.6h.01M14 6.6h.01" strokeWidth="2" />
      <path d="M4 21.5c.8-4.2 4-6.9 8-6.9s7.2 2.7 8 6.9" />
      <path d="M9.5 15.2 12 18l2.5-2.8" />
    </LineIcon>
  )
}

export function BowlIcon(props) {
  return (
    <LineIcon {...props}>
      <path d="M2.8 12.5h18.4a9.2 7.5 0 0 1-18.4 0Z" />
      <path d="M9 20.5h6" />
      <circle cx="8" cy="9.6" r="2.2" />
      <path d="M12.5 12.5V4.5M12.5 7.5l2.5-2" />
      <path d="M15 12.5c.2-2.9 1.6-4.9 4.7-5.7-.3 2.7-1.8 4.6-4.7 5.7Z" />
    </LineIcon>
  )
}
