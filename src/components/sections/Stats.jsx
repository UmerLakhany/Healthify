import { Fragment } from 'react'
import { stats } from '../../data/highlights'

export default function Stats() {
  return (
    <section aria-label="Healthify in numbers" className="bg-sage-100">
      <ul className="container-page grid grid-cols-2 gap-y-6 py-6 lg:flex lg:h-[97px] lg:items-center lg:justify-between lg:px-[18px] lg:py-0">
        {stats.map(({ icon: Icon, value, label }, index) => (
          <Fragment key={label}>
            {index > 0 && <li aria-hidden="true" className="hidden h-[45px] w-px bg-[#dcdcd4] lg:block" />}
            <li className="flex items-center gap-2.5 sm:justify-center sm:gap-4 lg:justify-start lg:gap-[26px]">
              <Icon size={40} strokeWidth={1.4} className="size-8 shrink-0 text-olive-700 sm:size-10" aria-hidden="true" />
              <p className="flex flex-col">
                <span className="font-serif text-[24px] leading-none font-semibold text-forest-800">{value}</span>
                <span className="mt-1 text-[11.5px] whitespace-nowrap text-ink sm:text-[12.5px]">{label}</span>
              </p>
            </li>
          </Fragment>
        ))}
      </ul>
    </section>
  )
}
