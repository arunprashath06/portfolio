import { lazy, Suspense } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Below-the-fold components lazy-loaded for maximum performance & 60-120fps smoothness
const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Training = lazy(() => import('./components/Training'))
const Skills = lazy(() => import('./components/Skills'))
const Certifications = lazy(() => import('./components/Certifications'))
const Education = lazy(() => import('./components/Education'))
const Contact = lazy(() => import('./components/Contact'))

// Lightweight invisible placeholder to prevent layout shifts during background fetch
const SectionFallback = () => (
  <div className="min-h-[400px] w-full flex items-center justify-center opacity-0" />
)

function AppContent() {
  return (
    <div
      id="top"
      className="min-h-screen overflow-x-hidden bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white transition-colors duration-300"
    >
      <Navbar />

      <main>
        {/* Instant First Contentful Paint: Hero renders immediately */}
        <Hero />

        {/* Deferred sections streamed in background with zero main-thread blocking */}
        <Suspense fallback={<SectionFallback />}>
          <div className="section-deferred">
            <About />
          </div>

          <div className="section-deferred">
            <Projects />
          </div>

          <div className="section-deferred">
            <Training />
          </div>

          <div className="section-deferred">
            <Skills />
          </div>

          <div className="section-deferred">
            <Certifications />
          </div>

          <div className="section-deferred">
            <Education />
          </div>

          <div className="section-deferred">
            <Contact />
          </div>
        </Suspense>
      </main>

      <footer className="border-t border-slate-200 dark:border-white/5 px-6 py-8 transition-colors">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Arun Prashath · B.Tech CSE · AI & ML
          </span>

          <span className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Arun Prashath. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}