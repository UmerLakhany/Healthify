export function LeafSprig({ className = '' }) {
  return (
    <svg
      viewBox="0 0 200 320"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M100 315C98 230 104 140 130 10" />
      {[
        [104, 250, -1],
        [106, 205, 1],
        [110, 160, -1],
        [116, 118, 1],
        [123, 78, -1],
        [128, 42, 1],
      ].map(([x, y, dir]) => (
        <g key={y}>
          <path d={`M${x} ${y}c${dir * 20}-10 ${dir * 55}-12 ${dir * 78}-45c${dir * -38}-6 ${dir * -70} 12 ${dir * -78} 45Z`} />
          <path d={`M${x} ${y}c${dir * 25}-14 ${dir * 45}-26 ${dir * 62}-38`} />
        </g>
      ))}
    </svg>
  )
}

export function CurvedArrow({ className = '' }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M8 6c20 4 32 18 36 38" />
      <path d="M36 38l8 8 5-10" />
    </svg>
  )
}

export function BlurredLeaves({ className = '' }) {
  return (
    <svg viewBox="0 0 200 260" className={className} aria-hidden="true" focusable="false">
      <path d="M30 250C8 170 50 80 150 40c-2 90-50 170-120 210Z" fill="currentColor" />
      <path d="M0 150C18 95 70 70 125 80 95 125 50 150 0 150Z" fill="currentColor" opacity="0.75" />
      <path d="M60 60C70 25 105 5 145 0c-10 35-45 58-85 60Z" fill="currentColor" opacity="0.6" />
    </svg>
  )
}
