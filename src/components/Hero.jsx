import { motion } from 'motion/react'

const orbitItems = [
  { label: 'ML', angle: 0 },
  { label: 'DATA', angle: 90 },
  { label: 'CODE', angle: 180 },
  { label: 'AI', angle: 270 },
]

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10"
        >
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-cyan-300">
            P. Arun Prashath
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building intelligence
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              one system at a time.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            B.Tech CSE student focused on AI/ML, programming,
            data-driven systems and solving challenging problems
            through technology.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              data-cursor="EXPLORE"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition-transform hover:scale-105"
            >
              Explore My Work
            </a>

            <a
              href="https://github.com/arunprashath06"
              target="_blank"
              rel="noreferrer"
              data-cursor="GITHUB"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white backdrop-blur-xl transition-all hover:border-cyan-400/30 hover:bg-white/10"
            >
              GitHub ↗
            </a>
          </div>

          {/* Mini stats */}
          <div className="mt-12 flex gap-10">
            <div>
              <p className="text-2xl font-semibold text-white">AI/ML</p>
              <p className="mt-1 text-xs text-slate-500">Focus</p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-white">C++</p>
              <p className="mt-1 text-xs text-slate-500">DSA</p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-white">Python</p>
              <p className="mt-1 text-xs text-slate-500">AI Stack</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — AI CORE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.1,
            delay: 0.2,
            type: 'spring',
          }}
          className="relative flex h-[500px] items-center justify-center"
        >
          {/* Outer aura */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
          />

          {/* Large orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute h-96 w-96 rounded-full border border-cyan-400/10"
          />

          {/* Tilted orbit */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute h-80 w-[420px] rotate-[55deg] rounded-full border border-purple-400/10"
          />

          {/* Small orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute h-64 w-64 rounded-full border border-blue-400/10"
          />

          {/* Core */}
          <motion.div
            animate={{
              y: [-8, 8, -8],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative flex h-52 w-52 items-center justify-center rounded-full border border-cyan-300/30 bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-purple-600/20 shadow-[0_0_100px_rgba(34,211,238,0.15)] backdrop-blur-xl"
          >
            {/* Inner core */}
            <div className="absolute h-28 w-28 rounded-full bg-gradient-to-br from-cyan-300 via-blue-500 to-purple-600 opacity-80 blur-md" />

            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-slate-950/70">
              <span className="text-2xl font-semibold tracking-widest text-white">
                AI
              </span>
            </div>
          </motion.div>

          {/* Orbit labels */}
          {orbitItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.15 }}
              data-cursor={item.label}
              className="absolute rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-[10px] tracking-[0.25em] text-slate-300 backdrop-blur-xl"
              style={{
                transform: `rotate(${item.angle}deg) translateY(-190px) rotate(-${item.angle}deg)`,
              }}
            >
              {item.label}
            </motion.div>
          ))}

          {/* Floating particles */}
          {[...Array(14)].map((_, index) => (
            <motion.span
              key={index}
              className="absolute h-1 w-1 rounded-full bg-cyan-300"
              style={{
                left: `${15 + ((index * 31) % 70)}%`,
                top: `${10 + ((index * 47) % 75)}%`,
              }}
              animate={{
                opacity: [0.1, 1, 0.1],
                scale: [0.5, 1.4, 0.5],
              }}
              transition={{
                duration: 2 + (index % 3),
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] text-slate-600"
      >
        SCROLL TO EXPLORE
      </motion.a>
    </section>
  )
}

export default Hero