import StarRating from '../ui/StarRating'

export default function TestimonialCard({ quote, name, location, avatar, rating }) {
  return (
    <figure className="flex h-full min-h-[150px] flex-col justify-between rounded-2xl border border-[#ececea] bg-white px-[30px] pt-[18px] pb-[18px] shadow-[0_2px_12px_-6px_rgb(19_48_31/0.1)]">
      <blockquote className="max-w-[275px] text-[14px] leading-[21px] tracking-[0.035em] text-[#4a4a48]">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-3 flex items-center gap-3">
        <img
          src={avatar}
          alt={`Portrait of ${name}`}
          loading="lazy"
          width="40"
          height="40"
          className="size-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="text-[13.5px] font-semibold text-title">{name}</p>
          <p className="text-[11px] text-muted">{location}</p>
        </div>
        <StarRating rating={rating} />
      </figcaption>
    </figure>
  )
}
