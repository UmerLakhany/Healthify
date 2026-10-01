import { ArrowRight } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { steps } from '../../data/steps'

export default function Steps() {
  return (
    <section aria-labelledby="steps-title" className="bg-[#f5f6f1] py-10 lg:pt-3 lg:pb-[34px]">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our Process"
          title="Healthy Eating in 3 Simple Steps"
          titleId="steps-title"
          titleClassName="lg:text-[34px]!"
          action={{ label: "It's Easy to Get Started", href: '#plans' }}
        />
        <ol className="mt-7 grid gap-6 sm:grid-cols-2 lg:mt-[27px] lg:grid-cols-[386fr_412fr_346fr] lg:gap-0">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <li key={title} className="flex items-center gap-4 lg:gap-0">
              <span className="grid size-[52px] shrink-0 place-items-center rounded-full bg-sage-300 font-serif text-[24px] font-semibold text-forest-800">
                {index + 1}
              </span>
              <Icon size={46} strokeWidth={1.2} className="shrink-0 text-olive-700 lg:ml-[23px]" aria-hidden="true" />
              <div className="min-w-0 lg:ml-[28px]">
                <h3 className="text-[14px] leading-snug font-semibold text-title">{title}</h3>
                <p className="mt-1 max-w-[166px] text-[12px] leading-[19px] text-body">{description}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight
                  size={22}
                  strokeWidth={1.4}
                  className="mr-[28px] ml-auto hidden shrink-0 text-forest-800 lg:block"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
