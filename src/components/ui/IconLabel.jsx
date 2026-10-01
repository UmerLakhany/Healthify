export default function IconLabel({ icon: Icon, label, className = '' }) {
  return (
    <li className={`flex items-center gap-3 text-[12.5px] font-medium text-ink ${className}`}>
      <Icon size={28} strokeWidth={1.4} className="shrink-0 text-olive-700" aria-hidden="true" />
      {label}
    </li>
  )
}
