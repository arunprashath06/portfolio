import { motion } from 'motion/react'

const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'C++', 'C', 'SQL', 'Java'],
  },
  {
    title: 'Tools & AI/ML Stack',
    items: [
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Prophet',
      'Streamlit',
      'SQLite',
      'Git',
      'GitHub',
    ],
  },
  {
    title: 'Core Concepts',
    items: [
      'Machine Learning',
      'NLP',
      'Data Structures',
      'Algorithms',
      'OOP',
    ],
  },
  {
    title: 'Professional',
    items: [
      'Team Player',
      'Time Management',
      'Attention to Detail',
      'Problem Solving',
    ],
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-4 sm:px-6 py-24 sm:py-32"
    >
      {/* Background atmosphere - GPU Accelerated */}
      <div className="pointer-events-none absolute right-[-100px] top-1/4 h-96 w-96 rounded-full [background:radial-gradient(circle,rgba(6,182,212,0.06)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute left-[-100px] bottom-0 h-96 w-96 rounded-full [background:radial-gradient(circle,rgba(147,51,234,0.06)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300 font-mono">
            04 / Skills
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            The tools behind
            <br />
            <span className="text-slate-400 dark:text-slate-500">
              the intelligence.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            Technologies and fundamentals I'm currently using and
            strengthening across programming, AI/ML and software
            development.
          </p>
        </motion.div>

        {/* Skill cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.025] p-7 shadow-sm dark:shadow-none transition-all duration-300 hover:border-cyan-400/40 dark:hover:border-cyan-400/20 hover:bg-white/95 dark:hover:bg-white/[0.04] backdrop-blur-sm"
            >
              {/* Card glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                {/* Heading */}
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />

                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 dark:text-white">
                    {group.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-black/20 px-3 py-2 text-xs text-slate-700 dark:text-slate-400 transition-colors duration-300 hover:border-cyan-400/40 hover:text-cyan-700 dark:hover:text-cyan-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills