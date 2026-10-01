const sizes = {
  md: { wrapper: 'w-[66px]', arabic: 'text-[24px] -mb-0.5', latin: 'text-[11.5px]' },
  lg: { wrapper: 'w-[86px]', arabic: 'text-[31px]', latin: 'text-[14.5px]' },
}

export default function Logo({ variant = 'dark', size = 'md', className = '' }) {
  const color = variant === 'light' ? 'text-white' : 'text-[#141414]'
  const s = sizes[size]

  return (
    <a
      href="#home"
      aria-label="Healthify home"
      className={`inline-flex flex-col items-center leading-none ${s.wrapper} ${color} ${className}`}
    >
      <span
        lang="ar"
        dir="rtl"
        className={`inline-block scale-x-110 font-arabic leading-[1.15] ${s.arabic}`}
        aria-hidden="true"
      >
        هيلثيفي
      </span>
      <span className={`font-condensed font-extrabold tracking-[0.06em] ${s.latin} mt-2`}>HEALTHIFY</span>
    </a>
  )
}
