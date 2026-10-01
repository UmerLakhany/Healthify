import Button from '../ui/Button'
import { Eyebrow, SectionTitle } from '../ui/SectionHeader'
import AdvantageCard from '../cards/AdvantageCard'
import { advantages } from '../../data/advantages'

export default function Advantages() {
  return (
    <section
      id="advantages"
      aria-labelledby="advantages-title"
      className="bg-gradient-to-r from-sage-150 via-sage-150 to-[#f1f4ea] py-10 lg:py-[29px]"
    >
      <div className="container-page grid items-center gap-8 lg:grid-cols-[0.85fr_1.5fr] xl:grid-cols-[1fr_711px] xl:gap-0">
        <div>
          <Eyebrow>Our Advantages</Eyebrow>
          <SectionTitle id="advantages-title">Why Choose Healthify</SectionTitle>
          <p className="mt-2.5 max-w-[400px] text-[14px] leading-[22px] text-ink">
            More than just meals — we deliver a healthier, happier you with benefits that fit your
            lifestyle.
          </p>
          <Button href="#plans" withArrow className="mt-[18px] min-w-[222px]">
            Discover All Advantages
          </Button>
        </div>

        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-[14px] xl:-mr-[34px]">
          {advantages.map((advantage) => (
            <AdvantageCard key={advantage.title} {...advantage} />
          ))}
        </ul>
      </div>
    </section>
  )
}
