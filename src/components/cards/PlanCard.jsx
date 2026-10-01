import { Check, Star } from 'lucide-react'
import Button from '../ui/Button'

function PopularIcon() {
  return (
    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sage-200">
      <Star size={18} strokeWidth={1.5} className="fill-olive-500 text-olive-500" aria-hidden="true" />
    </span>
  )
}

export default function PlanCard({ name, icon: Icon, description, price, features, popular = false }) {
  return (
    <article
      className={`relative flex flex-col overflow-hidden rounded-2xl bg-[#fafbf9] ${
        popular
          ? 'border border-[#e3e5dc] shadow-card lg:-mt-2'
          : 'border border-[#ecede6] shadow-[0_2px_12px_-6px_rgb(19_48_31/0.1)]'
      }`}
    >
      {popular && (
        <p className="flex h-[26px] items-center justify-center gap-1.5 bg-olive-500 text-[10.5px] font-semibold tracking-[0.08em] text-white uppercase">
          Most Popular
          <Star size={11} className="fill-white" strokeWidth={0} aria-hidden="true" />
        </p>
      )}

      <div className={`flex flex-1 flex-col px-[22px] pb-[22px] ${popular ? 'pt-4' : 'pt-[26px]'}`}>
        <div className="flex items-start gap-[18px]">
          {popular ? (
            <PopularIcon />
          ) : (
            <Icon size={38} strokeWidth={1.3} className="-mt-1 w-10 shrink-0 text-olive-700" aria-hidden="true" />
          )}
          <div>
            <h3 className="font-serif text-[20px] leading-tight font-semibold text-title">{name}</h3>
            <p className="mt-1.5 max-w-[170px] text-[11.5px] leading-[18px] text-body">{description}</p>
            <p className="mt-3.5 text-[18px] font-semibold text-forest-800">
              AED {price}
              <span className="ml-1 text-[11px] font-normal text-muted">/ month</span>
            </p>
          </div>
        </div>

        <ul className={`mt-3 pl-2 ${popular ? 'space-y-[9px]' : 'space-y-[12px]'}`}>
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-[12px] text-[#444641]">
              <Check size={15} strokeWidth={2.6} className="shrink-0 text-olive-600" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <Button
          href="#contact"
          variant={popular ? 'dark' : 'outline'}
          size="sm"
          className={`mx-auto mt-3.5 w-[86%] min-w-[180px] ${popular ? '' : 'border-[1.5px] border-olive-300'}`}
          aria-label={`Get started with the ${name}`}
        >
          Get Started
        </Button>
      </div>
    </article>
  )
}
