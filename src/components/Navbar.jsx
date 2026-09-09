import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

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
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4"
    >
      <nav
        className={`mx-auto flex max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1480px] items-center justify-between rounded-2xl border px-5 py-3 sm:px-7 sm:py-3.5 transition-all duration-300 ${
          isScrolled
            ? 'border-white/20 bg-[#030712]/95 shadow-2xl shadow-black/60 backdrop-blur-2xl'
            : 'border-white/10 bg-[#030712]/80 backdrop-blur-xl'
        }`}
      >
        {/* Logo & Brand Heading */}
        <a
          href="#top"
          className="group flex items-center gap-3.5"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 via-blue-500/15 to-purple-500/20 transition-all duration-300 group-hover:border-cyan-300/60 group-hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            <span className="text-base font-extrabold tracking-wide text-cyan-200">
              AP
            </span>
          </div>

          <div className="hidden sm:block">
            <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
              Arun Prashath
            </span>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="block text-xs text-cyan-300 font-mono font-medium tracking-wide">
                AI / ML Engineer
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1.5 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '')
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative rounded-xl px-4 py-2 text-sm sm:text-[15px] font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-300 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-xl border border-cyan-400/30 bg-cyan-400/15 shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            )
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Downloadable Resume Button */}
          <a
            href="./resume.pdf"
            download="Arun_Prashath_Resume.pdf"
            className="flex items-center gap-2 rounded-xl border border-cyan-400/35 bg-cyan-400/15 px-4 py-2 text-xs sm:text-sm font-semibold text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-200 hover:border-cyan-300 hover:bg-cyan-400/25 hover:scale-105 active:scale-95"
            title="Download Resume PDF"
          >
            <svg
              className="h-4 w-4"
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
            <span className="rounded bg-cyan-400/20 px-1 py-0.2 font-mono text-[10px] text-cyan-300">
              PDF
            </span>
          </a>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:border-white/30 hover:bg-white/15 hover:scale-105 active:scale-95"
          >
            <span>Let's Talk</span>
            <span className="text-cyan-300 font-bold">→</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 text-slate-300 hover:bg-white/10 lg:hidden"
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
            className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#030712]/95 p-4 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex gap-2 border-t border-white/10 pt-3">
                <a
                  href="./resume.pdf"
                  download="Arun_Prashath_Resume.pdf"
                  className="flex-1 rounded-xl border border-cyan-400/30 bg-cyan-400/10 py-2.5 text-center text-xs font-medium text-cyan-200"
                >
                  Download Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 py-2.5 text-center text-xs font-medium text-slate-200"
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar