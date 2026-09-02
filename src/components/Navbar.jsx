import { motion } from 'motion/react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Training', href: '#training' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#030712]/70 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5">

        {/* Logo */}
        <a
          href="#top"
          className="group flex items-center gap-3"
        >
          <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-cyan-300/20 bg-cyan-300/5">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <span className="relative text-sm font-semibold text-cyan-200">
              AP
            </span>
          </div>

          <span className="hidden text-sm font-medium text-slate-200 sm:block">
            Arun
          </span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-lg px-3 py-2 text-xs text-slate-400 transition-all duration-300 hover:bg-white/[0.04] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Let's Talk */}
        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-medium text-cyan-200 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10"
        >
          <span>Let's Talk</span>

          <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>
      </nav>
    </motion.header>
  )
}

export default Navbar