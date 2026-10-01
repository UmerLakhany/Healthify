import { Star } from 'lucide-react'

export default function StarRating({ rating, max = 5 }) {
  return (
    <div className="flex gap-[3px]" role="img" aria-label={`Rated ${rating} out of ${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <Star
          key={i}
          size={15}
          strokeWidth={0}
          aria-hidden="true"
          className={i < rating ? 'fill-star' : 'fill-sage-300'}
        />
      ))}
    </div>
  )
}
