import Navbar from './components/Navbar'
import UniverseCursor from './components/UniverseCursor'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Training from './components/Training'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {
  return (
    <div
      id="top"
      className="min-h-screen overflow-x-hidden bg-[#030712] text-white"
    >
      <UniverseCursor />

      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Training />

        <Certifications />

        <Contact />
      </main>

      <footer className="border-t border-white/5 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
          <span className="text-xs text-slate-600">
            Arun Prashath · B.Tech CSE · AI & ML
          </span>

          <span className="text-xs text-slate-700">
            Built with React
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App