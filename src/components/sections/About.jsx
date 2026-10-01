import Button from '../ui/Button'
import IconLabel from '../ui/IconLabel'
import { Eyebrow, SectionTitle } from '../ui/SectionHeader'
import { LeafSprig } from '../icons/Decorations'
import { LeafIcon } from '../icons/HealthIcons'
import { aboutFeatures } from '../../data/highlights'
import aboutBowl from '../../assets/images/about-bowl.png'
import aboutChef from '../../assets/images/about-chef.png'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden bg-white py-10 lg:pt-[32px] lg:pb-[23px]">
      <LeafSprig className="pointer-events-none absolute top-8 -right-4 hidden w-40 rotate-[8deg] text-[#e6e8e0] lg:block" />

      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12 xl:grid-cols-[574px_1fr] xl:gap-[42px]">
        <div className="relative mx-auto aspect-[574/328] w-full max-w-[574px] xl:-ml-[38px]">
          <img
            src={aboutBowl}
            alt="Buddha bowl with chickpeas, roasted vegetables, avocado and greens"
            loading="lazy"
            width="900"
            height="640"
            className="absolute top-0 right-0 h-[89.3%] w-[92.9%] rounded-[14px] object-cover"
          />
          <img
            src={aboutChef}
            alt="Hands tossing a fresh green salad in a glass bowl"
            loading="lazy"
            width="480"
            height="420"
            className="absolute bottom-0 left-0 h-[51.2%] w-[36.4%] rounded-[12px] border-2 border-[#1d1f1c] object-cover"
          />
          <div className="absolute top-[65.9%] left-[32.2%] flex h-[28.7%] w-[30.8%] items-center justify-center gap-2 rounded-[14px] bg-[#fafaf7] shadow-card sm:gap-3">
            <LeafIcon strokeWidth={1.4} className="size-5 shrink-0 text-olive-700 sm:size-8" />
            <p className="font-serif text-[11px] leading-tight font-medium text-forest-800 sm:text-[17px]">
              Nourishing
              <br />
              Lives Daily
            </p>
          </div>
        </div>

        <div className="relative">
          <Eyebrow>About Healthify</Eyebrow>
          <SectionTitle id="about-title">
            Your Trusted Healthy
            <br className="hidden sm:block" /> Food Partner
          </SectionTitle>
          <p className="mt-3 max-w-[440px] text-[14px] leading-[22px] text-ink">
            At Healthify, we believe healthy eating should be convenient, affordable, and enjoyable.
            Based in Dubai, we prepare fresh, balanced meals using high-quality ingredients to help
            individuals and families achieve their health goals without sacrificing taste.
          </p>
          <ul className="mt-[18px] flex flex-wrap gap-x-8 gap-y-3">
            {aboutFeatures.map((feature) => (
              <IconLabel key={feature.label} {...feature} />
            ))}
          </ul>
          <Button href="#services" withArrow className="mt-[23px] min-w-[170px]">
            More About Us
          </Button>
        </div>
      </div>
    </section>
  )
}
