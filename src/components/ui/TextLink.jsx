import { ArrowRight } from 'lucide-react'

export default function TextLink({ href, children, className = '' }) {
  return (
    <a
      href={href}
      className={`group inline-flex shrink-0 items-center gap-1.5 rounded text-[11.5px] font-medium whitespace-nowrap text-olive-700 transition-colors hover:text-forest-800 ${className}`}
    >
      {children}
      <ArrowRight
        size={14}
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-0.5"
      />
    </a>
  )
}
