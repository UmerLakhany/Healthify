import { WhatsappIcon } from '../icons/BrandIcons'
import { contactInfo } from '../../data/site'

export default function WhatsAppButton() {
  return (
    <a
      href={contactInfo.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-5 bottom-5 z-40 grid size-[52px] place-items-center rounded-full bg-[#25d366] text-white shadow-card transition-transform duration-200 hover:scale-110 focus-visible:outline-[#25d366] active:scale-95 lg:right-[34px]"
    >
      <WhatsappIcon size={28} />
    </a>
  )
}
