import SectionHeader from '../ui/SectionHeader'
import ServiceCard from '../cards/ServiceCard'
import { services } from '../../data/services'

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-sage-50 py-10 lg:pt-[32px] lg:pb-[30px]">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our Services"
          title="Healthy Meal Plans for Every Lifestyle"
          titleId="services-title"
          action={{ label: 'View All Services', href: '#plans' }}
        />
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:mt-[15px] lg:grid-cols-4 lg:gap-[22px] xl:-mx-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
