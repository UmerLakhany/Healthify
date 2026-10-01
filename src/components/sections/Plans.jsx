import SectionHeader from '../ui/SectionHeader'
import PlanCard from '../cards/PlanCard'
import { LeafIcon } from '../icons/HealthIcons'
import { plans } from '../../data/plans'
import investImage from '../../assets/images/plan-invest.png'

function InvestCard() {
  return (
    <div className="relative min-h-[323px] overflow-hidden rounded-2xl shadow-card lg:mt-1.5">
      <img
        src={investImage}
        alt="Sliced grilled chicken with rice and vegetables in a wooden bowl"
        loading="lazy"
        width="600"
        height="780"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/25 to-transparent" />
      <div className="absolute inset-x-5 bottom-5 text-white">
        <LeafIcon size={34} strokeWidth={1.3} />
        <p className="mt-1 font-serif text-[29px] leading-[1.12] font-semibold text-white">
          Invest in
          <br />a Healthier
          <br />
          <span className="inline-block border-b-2 border-white/85 pr-8 pb-0.5">You</span>
        </p>
      </div>
    </div>
  )
}

export default function Plans() {
  return (
    <section id="plans" aria-labelledby="plans-title" className="bg-white py-10 lg:pt-[29px] lg:pb-[17px]">
      <div className="container-page">
        <SectionHeader
          eyebrow="Growth Plans"
          title="Find the Perfect Plan for You"
          titleId="plans-title"
          action={{ label: 'View All Plans', href: '#plans' }}
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-[19px] lg:grid-cols-[1fr_1fr_1fr_0.9fr] lg:items-start lg:gap-[22px] xl:-mx-6">
          {plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
          <InvestCard />
        </div>
      </div>
    </section>
  )
}
