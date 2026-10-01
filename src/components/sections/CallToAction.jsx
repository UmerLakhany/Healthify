import Button from '../ui/Button'
import leavesImage from '../../assets/images/cta-leaves.png'

export default function CallToAction() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-[#2b3d1f]">
      <img src={leavesImage} alt="" loading="lazy" className="absolute inset-0 size-full scale-105 object-cover blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1c2c15]/80 via-[#2a3a1c]/60 to-[#2a3a1c]/35" />

      <div className="container-page relative flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center lg:h-[145px] lg:py-0">
        <div>
          <p className="text-[10.5px] font-medium tracking-[0.2em] text-white/80 uppercase">Ready to start?</p>
          <h2 id="cta-title" className="mt-1.5 font-serif text-[26px] leading-tight font-medium text-white sm:text-[31px]">
            Transform Your Health, One Meal At A Time
          </h2>
          <p className="mt-1.5 text-[12.5px] text-white/85">
            Fresh. Nutritious. Convenient. Join thousands of happy customers today.
          </p>
        </div>
        <Button href="#plans" variant="light" size="sm" withArrow className="min-w-[194px] shrink-0">
          Get Started Today
        </Button>
      </div>
    </section>
  )
}
