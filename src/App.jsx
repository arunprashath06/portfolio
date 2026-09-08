import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Training from './components/Training'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <div
      id="top"
      className="min-h-screen overflow-x-hidden bg-[#030712] text-white"
    >
      <Navbar />

      <main>
        <Hero />

        <About />

        <Projects />

        <Training />

        <Skills />

        <Certifications />

        <Education />

        <Contact />
      </main>

      <footer className="border-t border-white/5 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
          <span className="text-xs text-slate-600">
            Arun Prashath · B.Tech CSE · AI & ML
          </span>

          <span className="text-xs text-slate-600">
            © {new Date().getFullYear()} Arun Prashath. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App