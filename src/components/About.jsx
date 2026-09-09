import { useState } from 'react'
import { motion } from 'motion/react'

const stats = [
  {
    value: '8.32',
    label: 'Current CGPA',
  },
  {
    value: '04+',
    label: 'Technical Projects',
  },
  {
    value: 'C++',
    label: 'Primary DSA Language',
  },
  {
    value: 'AI/ML',
    label: 'Career Direction',
  },
]

const focusAreas = [
  'Machine Learning',
  'Problem Solving',
  'Data & Analytics',
  'AI Systems',
]

function About() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 sm:px-6 py-24 sm:py-36"
    >
      {/* Background glow - GPU Accelerated */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full [background:radial-gradient(circle,rgba(6,182,212,0.06)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute right-10 top-1/3 h-80 w-80 rounded-full [background:radial-gradient(circle,rgba(147,51,234,0.06)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
            01 / About
          </p>
        </motion.div>

        <div className="mt-10 grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT — Introduction */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Curious by nature.
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Building with intelligence.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
            >
              I'm{' '}
              <span className="font-medium text-slate-200">
                Arun Prashath
              </span>
              , a B.Tech CSE student focused on building a strong foundation
              in programming, machine learning and intelligent systems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-5 max-w-2xl text-base leading-8 text-slate-500"
            >
              I enjoy taking an idea from a problem statement to a working
              system — combining algorithms, data and AI to create things that
              are useful rather than just theoretical.
            </motion.p>

            {/* Focus areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {focusAreas.map((area) => (
                <motion.div
                  key={area}
                  whileHover={{ y: -3, scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 backdrop-blur-sm"
                >
                  <span className="mr-2 text-cyan-300">✦</span>
                  {area}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Profile Showcase & Photo Frame Slot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex justify-center"
          >
            {/* Outer ambient glow */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-purple-600/20 blur-2xl" />

            {/* Main Portrait Card Frame */}
            <div className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] border border-cyan-400/25 bg-gradient-to-b from-[#081020]/90 to-[#030712]/95 p-6 shadow-2xl backdrop-blur-xl">
              {/* Corner accents */}
              <div className="absolute left-3 top-3 h-3 w-3 border-l-2 border-t-2 border-cyan-400/50" />
              <div className="absolute right-3 top-3 h-3 w-3 border-r-2 border-t-2 border-cyan-400/50" />
              <div className="absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-cyan-400/50" />
              <div className="absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-cyan-400/50" />

              {/* Header status */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                  </span>
                  <span className="text-xs font-mono tracking-wider text-cyan-300">ENGINEER PROFILE</span>
                </div>
                <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-mono text-slate-400">LPU · 2024–2028</span>
              </div>

              {/* Photo Frame / Avatar Canvas */}
              <div className="relative mt-5 flex h-72 w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#02050e]">
                {/* Check if user placed profile image in public/profile.jpg or profile.png */}
                {!imageError ? (
                  <img
                    src="/profile.jpg"
                    alt="Arun Prashath"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    className={`h-full w-full object-cover transition-opacity duration-500 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ) : null}

                {/* Cyber silhouette & AI Rings (displays gracefully until Arun adds his photo) */}
                {(!imageLoaded || imageError) && (
                  <div className="relative flex flex-col items-center justify-center p-6 text-center">
                    {/* Animated background rings */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                      className="absolute h-48 w-48 rounded-full border border-cyan-400/20 border-dashed"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                      className="absolute h-36 w-36 rounded-full border border-purple-400/20"
                    />

                    {/* Initials badge */}
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-cyan-400/40 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-500/20 shadow-[0_0_30px_rgba(34,211,238,0.25)]">
                      <span className="text-3xl font-bold tracking-wider text-white">AP</span>
                    </div>

                    <p className="mt-4 text-xs font-medium text-slate-300">Arun Prashath</p>
                    <p className="mt-0.5 text-[11px] text-cyan-300 font-mono">B.Tech CSE · AI & ML</p>
                    <span className="mt-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[9px] text-slate-500">
                      Drop profile.jpg into public/ to display photo
                    </span>
                  </div>
                )}
              </div>

              {/* Bio summary tags below image */}
              <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                  <p className="text-[10px] text-slate-500 uppercase">Focus</p>
                  <p className="mt-0.5 font-semibold text-white">AI / ML</p>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                  <p className="text-[10px] text-slate-500 uppercase">Core DSA</p>
                  <p className="mt-0.5 font-semibold text-cyan-300">C++</p>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                  <p className="text-[10px] text-slate-500 uppercase">Stack</p>
                  <p className="mt-0.5 font-semibold text-purple-300">Python</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="bg-[#030712] px-6 py-7"
            >
              <p className="text-2xl font-semibold text-white">
                {stat.value}
              </p>

              <p className="mt-2 text-xs uppercase tracking-wider text-slate-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About