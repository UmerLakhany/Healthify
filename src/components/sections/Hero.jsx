import Button from '../ui/Button'
import { BlurredLeaves, CurvedArrow } from '../icons/Decorations'
import { LeafSolidIcon } from '../icons/HealthIcons'
import { heroBenefits } from '../../data/highlights'
import heroBowl from '../../assets/images/hero-bowl.png'

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden bg-hero lg:h-[415px]">
      <BlurredLeaves className="pointer-events-none absolute top-6 -left-12 w-36 rotate-[20deg] text-forest-700/45 blur-[10px] lg:w-44" />
      <BlurredLeaves className="pointer-events-none absolute -top-10 -right-10 hidden w-44 -scale-x-100 text-forest-700/25 blur-[14px] lg:block" />

      <div className="container-page relative z-10 pt-9 pb-8 lg:pt-[42px] lg:pb-0">
        <h1
          id="hero-title"
          className="font-serif text-[44px] leading-[1] font-semibold tracking-[-0.015em] sm:text-[54px] lg:text-[59px]"
        >
          Healthy Meals
          <span className="block text-olive-600">Happier Lives</span>
        </h1>
        <p className="mt-1.5 text-[17px] tracking-[0.03em] text-ink sm:text-[19.5px]">
          Fresh. Nutritious. Convenient. Delivered to You.
        </p>
        <p className="mt-2.5 max-w-[445px] text-[14.5px] leading-[22px] text-ink">
          At Healthify, we make healthy eating simple and enjoyable with chef-prepared meals,
          customized plans and a commitment to your wellness goals.
        </p>

        <div className="mt-[21px] flex flex-wrap gap-[18px]">
          <Button href="#plans" variant="dark" size="lg" withArrow className="min-w-[199px]">
            Explore Meal Plans
          </Button>
          <Button href="#about" variant="outline" size="lg" className="min-w-[131px] border-forest-800/40">
            Learn More
          </Button>
        </div>

        <ul className="mt-[25px] flex flex-wrap gap-x-7 gap-y-3">
          {heroBenefits.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2 text-[11.5px] text-body">
              <Icon size={24} strokeWidth={1.5} className="text-olive-700" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mx-auto w-[calc(100%-2.5rem)] max-w-xl pb-10 lg:absolute lg:inset-y-0 lg:left-[calc(50%-42px)] lg:right-0 lg:m-0 lg:w-auto lg:max-w-none lg:p-0">
        <img
          src={heroBowl}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 hidden size-full scale-110 object-cover object-right blur-xl lg:block lg:[mask-image:linear-gradient(to_right,transparent_40%,#000_80%)]"
        />
        <img
          src={heroBowl}
          alt="Bowl of sliced grilled chicken, avocado, cherry tomatoes and fresh greens"
          width="1076"
          height="676"
          fetchPriority="high"
          className="relative aspect-[4/3] w-full rounded-2xl object-cover lg:aspect-auto lg:h-[439px] lg:w-[699px] lg:max-w-none lg:rounded-none lg:[mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]"
        />

        <p className="pointer-events-none absolute top-3 left-4 -rotate-[10deg] font-script text-[22px] leading-[22px] text-olive-700 sm:left-6 lg:top-[38px] lg:left-6 lg:text-[25px] lg:leading-[26px]">
          Good Food
          <br />
          <span className="-ml-1">Brighten You</span>
          <CurvedArrow className="absolute top-9 -right-9 w-9 rotate-[20deg] text-forest-800 lg:top-[52px] lg:-right-8 lg:w-8 lg:rotate-[25deg]" />
        </p>

        <div className="absolute right-3 bottom-14 flex items-center whitespace-nowrap gap-3 rounded-2xl bg-white/95 px-4 py-3.5 shadow-card sm:right-5 lg:top-[258px] lg:right-[2.2vw] lg:bottom-auto lg:h-[88px] lg:w-[209px] lg:py-0">
          <LeafSolidIcon size={30} className="shrink-0 text-olive-700" />
          <p className="text-[11.5px] leading-[16px] text-body">
            <span className="block font-medium text-ink">Nutritious Meals</span>A Healthier Tomorrow
          </p>
        </div>
      </div>
    </section>
  )
}
