import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import useActiveSection from '../../hooks/useActiveSection'
import { navLinks } from '../../data/site'

const sectionIds = navLinks.map((link) => link.href.slice(1))

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const onKeyDown = (event) => event.key === 'Escape' && setMenuOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setMenuOpen(false)
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-soft' : ''}`}
    >
      <div className="container-page flex h-16 items-center lg:h-[68px]">
        <Logo />

        <nav aria-label="Main navigation" className="ml-14 hidden lg:block xl:ml-[104px]">
          <ul className="flex items-center gap-6 xl:gap-[25px]">
            {navLinks.map(({ label, href }) => {
              const isActive = activeId === href.slice(1)
              return (
                <li key={label}>
                  <a
                    href={href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`rounded py-1 text-[12.5px] transition-colors hover:text-olive-700 ${
                      isActive ? 'font-medium text-olive-700' : 'text-[#2b2e2b]'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <Button href="#plans" pill withArrow size="sm" className="hidden sm:inline-flex">
            Get Started
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="grid size-10 place-items-center rounded-md text-forest-800 transition-colors hover:bg-sage-100 lg:hidden"
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full grid border-t border-sage-100 bg-white shadow-card transition-[grid-template-rows,opacity] duration-300 lg:hidden ${
          menuOpen ? 'grid-rows-[1fr] opacity-100' : 'pointer-events-none grid-rows-[0fr] opacity-0'
        }`}
        inert={!menuOpen}
      >
        <nav aria-label="Mobile navigation" className="overflow-hidden">
          <ul className="container-page flex flex-col py-3">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className={`block rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-sage-100 ${
                    activeId === href.slice(1) ? 'font-medium text-olive-700' : 'text-ink'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="mt-2 px-3 pb-2 sm:hidden">
              <Button href="#plans" pill withArrow onClick={closeMenu} className="w-full">
                Get Started
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
