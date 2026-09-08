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
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:px-5 sm:py-3 ${
          isScrolled
            ? 'border-white/15 bg-[#030712]/90 shadow-2xl shadow-black/40 backdrop-blur-xl'
            : 'border-white/10 bg-[#030712]/70 backdrop-blur-lg'
        }`}
      >
        {/* Logo */}
        <a
          href="#top"
          className="group flex items-center gap-3"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 transition-all duration-300 group-hover:border-cyan-300/40 group-hover:scale-105">
            <span className="text-sm font-semibold tracking-wide text-cyan-200">
              AP
            </span>
          </div>

          <div className="hidden sm:block">
            <span className="text-sm font-medium text-slate-200">
              Arun Prashath
            </span>
            <span className="block text-[10px] text-cyan-400 font-mono">
              AI & ML
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '')
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-300'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-xl border border-cyan-400/20 bg-cyan-400/10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            )
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          {/* Downloadable Resume Button */}
          <a
            href="/resume.pdf"
            download="Arun_Prashath_Resume.pdf"
            className="flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-medium text-cyan-200 transition-all duration-200 hover:border-cyan-300 hover:bg-cyan-400/20 hover:scale-105"
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
          </a>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-200 transition-all duration-200 hover:border-white/25 hover:bg-white/10"
          >
            <span>Let's Talk</span>
            <span className="text-cyan-400">→</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-300 hover:bg-white/5 lg:hidden"
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
                  href="/resume.pdf"
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