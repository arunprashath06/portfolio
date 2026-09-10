import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useTheme } from '../context/ThemeContext'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Training', href: '#training' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      const sectionIds = ['home', 'about', 'projects', 'training', 'skills', 'certifications', 'education', 'contact']
      const scrollPosition = window.scrollY + 180

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4 pointer-events-none">
      {/* Top backdrop shield: placed inside header at -z-10 behind the nav pill so scrolled content fades before reaching top gap */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#f8fafc] via-[#f8fafc]/90 to-transparent dark:from-[#030712] dark:via-[#030712]/90 transition-opacity duration-300 -z-10 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <nav
        className={`pointer-events-auto mx-auto flex max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1440px] min-h-[64px] sm:min-h-[68px] items-center justify-between rounded-2xl border px-4 py-2 sm:px-6 sm:py-2.5 transition-all duration-300 ${
          isScrolled
            ? 'border-slate-200/80 dark:border-white/20 bg-white/95 dark:bg-[#030712]/95 shadow-xl dark:shadow-2xl shadow-slate-200/50 dark:shadow-black/70 backdrop-blur-2xl'
            : 'border-slate-200/60 dark:border-white/10 bg-white/80 dark:bg-[#030712]/80 shadow-sm dark:shadow-none backdrop-blur-xl'
        }`}
      >
        {/* Logo & Brand Heading */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 sm:gap-3 shrink-0"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center overflow-hidden rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 via-blue-500/15 to-purple-500/20 transition-all duration-300 group-hover:border-cyan-300/60 group-hover:scale-105 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            <span className="text-sm sm:text-base font-bold tracking-wide text-cyan-200">
              AP
            </span>
          </div>

          <div className="hidden sm:flex flex-col justify-center">
            <span className="text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-200 transition-colors leading-tight">
              Arun Prashath
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
              <span className="block text-[11px] text-cyan-700 dark:text-cyan-300 font-mono font-medium tracking-wide leading-none">
                AI / ML Engineer
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 xl:gap-2 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '')
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative rounded-xl px-2.5 lg:px-3 xl:px-3.5 py-1.5 text-xs lg:text-[13px] xl:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-700 dark:text-cyan-300 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/[0.06]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-xl border border-cyan-500/30 dark:border-cyan-400/30 bg-cyan-500/10 dark:bg-cyan-400/15 shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            )
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Dark / Light Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-300 dark:border-white/15 bg-slate-100/80 dark:bg-white/10 text-slate-700 dark:text-cyan-200 shadow-sm transition-all duration-200 hover:scale-105 hover:border-cyan-500 dark:hover:border-cyan-400 active:scale-95 shrink-0"
            title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            aria-label="Toggle Dark/Light Theme"
          >
            {isDark ? (
              // Sun icon for dark mode (click to switch to light)
              <svg className="h-4 w-4 text-amber-400 transition-transform duration-300 hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              // Moon icon for light mode (click to switch to dark)
              <svg className="h-4 w-4 text-slate-800 transition-transform duration-300 hover:-rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Downloadable Resume Button */}
          <a
            href="./resume.pdf"
            download="Arun_Prashath_Resume.pdf"
            className="flex items-center gap-1.5 rounded-xl border border-cyan-500/35 dark:border-cyan-400/35 bg-cyan-500/10 dark:bg-cyan-400/15 px-3 py-1.5 text-xs sm:text-sm font-semibold text-cyan-800 dark:text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-200 hover:border-cyan-400 dark:hover:border-cyan-300 hover:scale-105 active:scale-95 shrink-0"
            title="Download Resume PDF"
          >
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>Resume</span>
            <span className="rounded bg-cyan-500/20 dark:bg-cyan-400/20 px-1 py-0.2 font-mono text-[9px] text-cyan-800 dark:text-cyan-300">
              PDF
            </span>
          </a>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            className="hidden xl:flex items-center gap-1.5 rounded-xl border border-slate-300 dark:border-white/15 bg-slate-900 text-white dark:bg-white/10 dark:text-white px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 hover:bg-slate-800 dark:hover:bg-white/15 hover:scale-105 active:scale-95 shrink-0"
          >
            <span>Let's Talk</span>
            <span className="text-cyan-400 font-bold">→</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto mt-2 overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#030712]/95 p-4 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 transition-colors hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-950 dark:hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-2 border-t border-slate-200 dark:border-white/10 pt-3">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-white/15 bg-slate-100 dark:bg-white/5 py-2.5 px-3 text-xs font-medium text-slate-700 dark:text-slate-200"
                >
                  {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
                </button>
                <a
                  href="./resume.pdf"
                  download="Arun_Prashath_Resume.pdf"
                  className="flex-1 rounded-xl border border-cyan-500/30 dark:border-cyan-400/30 bg-cyan-500/10 dark:bg-cyan-400/10 py-2.5 text-center text-xs font-medium text-cyan-800 dark:text-cyan-200"
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 rounded-xl border border-slate-300 dark:border-white/10 bg-slate-900 text-white dark:bg-white/5 dark:text-slate-200 py-2.5 text-center text-xs font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar