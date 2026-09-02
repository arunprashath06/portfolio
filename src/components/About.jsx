import { motion } from 'motion/react'

const stats = [
  {
    value: '8.32',
    label: 'Current CGPA',
  },
  {
    value: '03+',
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
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-32 sm:py-40"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

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
              {focusAreas.map((area, index) => (
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

          {/* RIGHT — AI Core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative flex min-h-[420px] items-center justify-center"
          >
            {/* Outer atmospheric glow */}
            <div className="absolute h-72 w-72 rounded-full bg-cyan-400/10 blur-[90px]" />

            {/* Orbit 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute h-72 w-72 rounded-full border border-cyan-400/10"
            />

            {/* Orbit 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute h-80 w-52 rotate-45 rounded-[50%] border border-purple-400/10"
            />

            {/* Orbit 3 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 38,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute h-52 w-80 -rotate-45 rounded-[50%] border border-blue-400/10"
            />

            {/* Floating data points */}
            <motion.div
              animate={{
                y: [-8, 8, -8],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute right-[18%] top-[20%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.9)]"
            />

            <motion.div
              animate={{
                y: [8, -8, 8],
                opacity: [0.3, 0.9, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute bottom-[22%] left-[18%] h-1.5 w-1.5 rounded-full bg-purple-300 shadow-[0_0_15px_rgba(192,132,252,0.9)]"
            />

            {/* Core */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative flex h-44 w-44 items-center justify-center rounded-full border border-cyan-300/20 bg-[#07111f]/80 shadow-[0_0_80px_rgba(34,211,238,0.15)] backdrop-blur-xl"
            >
              <div className="absolute inset-5 rounded-full border border-blue-400/20" />

              <div className="absolute inset-9 rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-purple-500/20 blur-md" />

              <div className="relative text-center">
                <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300">
                  Core
                </p>

                <p className="mt-2 text-2xl font-semibold text-white">
                  AI
                </p>

                <p className="mt-1 text-[10px] tracking-widest text-slate-500">
                  BUILD · LEARN · CREATE
                </p>
              </div>
            </motion.div>

            {/* Floating skill nodes */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute left-[5%] top-[18%] rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-md"
            >
              <p className="text-xs text-slate-500">01</p>
              <p className="mt-1 text-sm font-medium text-slate-200">
                C++
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute bottom-[14%] right-[5%] rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-md"
            >
              <p className="text-xs text-slate-500">02</p>
              <p className="mt-1 text-sm font-medium text-slate-200">
                Python
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute right-[3%] top-[38%] rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-md"
            >
              <p className="text-xs text-slate-500">03</p>
              <p className="mt-1 text-sm font-medium text-slate-200">
                ML
              </p>
            </motion.div>
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