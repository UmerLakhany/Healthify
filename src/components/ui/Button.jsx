import { ArrowRight } from 'lucide-react'

const base =
  'group inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap transition-all duration-200 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2'

const variants = {
  primary: 'bg-olive-700 text-white shadow-soft hover:bg-olive-600 focus-visible:outline-olive-700',
  dark: 'bg-forest-700 text-white shadow-soft hover:bg-forest-600 focus-visible:outline-forest-700',
  outline:
    'border border-olive-300 bg-white text-forest-800 hover:border-olive-700 hover:bg-sage-50 focus-visible:outline-olive-700',
  light: 'bg-white text-forest-800 shadow-soft hover:bg-sage-100 focus-visible:outline-white',
}

const sizes = {
  sm: 'h-[39px] px-[22px] text-[12.5px]',
  md: 'h-[38px] px-[22px] text-[12.5px]',
  lg: 'h-[41px] px-6 text-[13px]',
}

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  pill = false,
  className = '',
  children,
  ...props
}) {
  const classes = [base, variants[variant], sizes[size], pill ? 'rounded-full' : 'rounded-lg', className]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight
          size={15}
          strokeWidth={2}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  )
}
