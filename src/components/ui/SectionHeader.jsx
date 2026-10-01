import TextLink from './TextLink'

export function Eyebrow({ children, className = '' }) {
  return (
    <p className={`text-[10.5px] font-medium tracking-[0.2em] text-eyebrow uppercase ${className}`}>
      {children}
    </p>
  )
}

export function SectionTitle({ id, children, className = '' }) {
  return (
    <h2
      id={id}
      className={`mt-1 font-serif text-[28px] leading-[1.1] font-semibold tracking-[-0.01em] sm:text-[33px] lg:text-[37.5px] ${className}`}
    >
      {children}
    </h2>
  )
}

export default function SectionHeader({ eyebrow, title, titleId, titleClassName, action }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <SectionTitle id={titleId} className={titleClassName}>
          {title}
        </SectionTitle>
      </div>
      {action && (
        <TextLink href={action.href} className="sm:mb-3">
          {action.label}
        </TextLink>
      )}
    </div>
  )
}
