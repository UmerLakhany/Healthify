import { Mail, MapPin, Phone } from 'lucide-react'
import Logo from '../ui/Logo'
import { contactInfo, navLinks } from '../../data/site'
import { footerServices, legalLinks, socialLinks } from '../../data/footer'

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="text-[14px] font-semibold text-white">{title}</h3>
      <div className="mt-3.5">{children}</div>
    </div>
  )
}

const linkClass = 'rounded transition-colors hover:text-white'

export default function Footer() {
  const contactItems = [
    { icon: MapPin, label: contactInfo.location },
    { icon: Phone, label: contactInfo.phone, href: contactInfo.phoneHref },
    { icon: Mail, label: contactInfo.email, href: `mailto:${contactInfo.email}` },
  ]

  return (
    <footer id="contact" className="bg-forest-900 text-white/80">
      <div className="container-page grid gap-10 pt-10 pb-8 sm:grid-cols-2 lg:grid-cols-[342fr_238fr_344fr_219fr] lg:gap-0 lg:pt-[18px] lg:pb-[26px]">
        <div>
          <Logo variant="light" />
          <p className="mt-3 max-w-[270px] text-[11px] leading-[17px]">
            At Healthify, We Believe Healthy Eating Should Be Convenient, Affordable, And Enjoyable.
          </p>
          <ul className="mt-4 flex gap-2" aria-label="Social media">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-8 place-items-center rounded-full border border-white/70 text-white transition-colors hover:bg-white hover:text-forest-900"
                >
                  <Icon size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <FooterColumn title="Quick Links">
          <ul className="space-y-[6px] text-[12px] leading-[16.5px]">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className={linkClass}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </FooterColumn>

        <FooterColumn title="Our Services">
          <ul className="space-y-[3px] text-[12px] leading-[16px]">
            {footerServices.map((service) => (
              <li key={service}>
                <a href="#services" className={linkClass}>
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </FooterColumn>

        <FooterColumn title="Get In Touch">
          <address className="space-y-[13px] text-[12px] tracking-[0.03em] not-italic">
            {contactItems.map(({ icon: Icon, label, href }) => (
              <div key={label} className="flex items-center gap-3.5">
                <Icon size={16} strokeWidth={1.6} className="shrink-0 text-white" aria-hidden="true" />
                {href ? (
                  <a href={href} className={linkClass}>
                    {label}
                  </a>
                ) : (
                  <span>{label}</span>
                )}
              </div>
            ))}
          </address>
        </FooterColumn>
      </div>

      <div className="mx-5 border-t border-white/20 lg:mx-[34px]">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-4 text-[11px] sm:flex-row lg:h-[50px] lg:py-0">
          <p>Copyright © {new Date().getFullYear()} Healthify. All Rights Reserved.</p>
          <ul className="flex gap-6">
            {legalLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className={linkClass}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
