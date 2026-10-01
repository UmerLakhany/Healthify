import SectionHeader from '../ui/SectionHeader'
import TestimonialCard from '../cards/TestimonialCard'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="bg-white py-10 lg:pt-4 lg:pb-[23px]">
      <div className="container-page">
        <SectionHeader
          eyebrow="Customer Stories"
          title="What Our Customers Say"
          titleId="testimonials-title"
          titleClassName="lg:text-[34.5px]!"
          action={{ label: 'View More Reviews', href: '#testimonials' }}
        />
        <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:mt-[7px] lg:grid-cols-3 lg:gap-6 xl:-mx-2.5">
          {testimonials.map((testimonial) => (
            <li key={testimonial.name}>
              <TestimonialCard {...testimonial} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
