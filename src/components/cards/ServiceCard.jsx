import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ title, description, image, imageAlt }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-soft transition-shadow duration-300 hover:shadow-card">
      <div className="aspect-[284/153] overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          width="640"
          height="420"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col px-[17px] pt-[13px] pb-3">
        <h3 className="font-serif text-[17px] leading-snug font-semibold text-title">{title}</h3>
        <p className="mt-1 max-w-[226px] text-[12.5px] leading-[18px] text-body">{description}</p>
        <a
          href="#plans"
          aria-label={`Explore ${title}`}
          className="mt-1 ml-auto grid size-[30px] place-items-center rounded-full border border-olive-700/45 bg-sage-200 text-forest-800 transition-colors hover:bg-olive-700 hover:text-white"
        >
          <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}
