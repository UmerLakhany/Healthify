import { Plus } from 'lucide-react'

export default function FaqItem({ id, question, answer, isOpen, onToggle }) {
  const buttonId = `${id}-button`
  const panelId = `${id}-panel`

  return (
    <li className={`rounded-lg bg-white transition-shadow ${isOpen ? 'shadow-card' : 'shadow-[0_1px_6px_-2px_rgb(0_0_0/0.06)]'}`}>
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-lg px-[25px] py-[5px] text-left text-[13px] font-medium text-[#2f322f] transition-colors hover:text-olive-700"
        >
          {question}
          <Plus
            size={14}
            strokeWidth={2}
            aria-hidden="true"
            className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        inert={!isOpen}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-[25px] pb-3.5 text-[12px] leading-[19px] text-muted">{answer}</p>
        </div>
      </div>
    </li>
  )
}
