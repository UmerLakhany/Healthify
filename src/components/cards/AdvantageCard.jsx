export default function AdvantageCard({ icon: Icon, title, description }) {
  return (
    <li className="flex min-h-[177px] flex-col items-center rounded-2xl bg-[#f8f9f5] px-3 pt-[26px] pb-5 text-center shadow-[0_2px_10px_-4px_rgb(19_48_31/0.08)] transition-transform duration-300 hover:-translate-y-1">
      <Icon size={44} strokeWidth={1.35} className="text-olive-700" aria-hidden="true" />
      <h3 className="mt-[18px] text-[14px] font-semibold text-title">{title}</h3>
      <p className="mt-2 max-w-[130px] text-[11.5px] leading-[17px] text-body">{description}</p>
    </li>
  )
}
