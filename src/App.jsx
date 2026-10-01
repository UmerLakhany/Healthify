import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Advantages from './components/sections/Advantages'
import Plans from './components/sections/Plans'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-md bg-forest-800 px-4 py-2 text-sm text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Advantages />
        <Plans />
      </main>
    </>
  )
}
