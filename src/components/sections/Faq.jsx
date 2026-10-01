import { useState } from 'react'
import Button from '../ui/Button'
import { Eyebrow, SectionTitle } from '../ui/SectionHeader'
import FaqItem from '../cards/FaqItem'
import { faqs } from '../../data/faqs'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => setOpenIndex((current) => (current === index ? null : index))

  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-mist py-10 lg:pt-4 lg:pb-[22px]">
      <div className="container-page grid gap-8 lg:grid-cols-[1fr_540px] lg:gap-10">
        <div>
          <Eyebrow>Frequently Asked Questions</Eyebrow>
          <SectionTitle id="faq-title" className="lg:text-[28px]! lg:leading-[1.25]!">
            Have Questions?
            <br />
            We&rsquo;ve Got Answers.
          </SectionTitle>
          <p className="mt-2 max-w-[370px] text-[14px] leading-[21px] text-ink">
            Find quick answers to common questions about our meal plans, delivery, and more.
          </p>
          <Button href="#faq" withArrow size="md" className="mt-2.5 h-[38px] min-w-[180px]">
            View All FAQs
          </Button>
        </div>

        <ul className="flex flex-col gap-[9px]">
          {faqs.map(({ question, answer }, index) => (
            <FaqItem
              key={question}
              id={`faq-${index}`}
              question={question}
              answer={answer}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
