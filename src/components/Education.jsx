import { motion } from 'motion/react'

const educationData = [
  {
    institution: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    degree: 'Bachelor of Technology',
    field: 'Computer Science and Engineering',
    period: 'Aug 2024 – Present',
    scoreLabel: 'Current CGPA',
    score: '8.32',
    details: [
      'Specializing in AI & Machine Learning, Data Structures & Algorithms, and Core Computer Science fundamentals.',
      'Active participant in hands-on technical training, machine learning projects, and practical system development.',
    ],
    highlight: true,
  },
  {
    institution: 'Narayana E-Techno School',
    location: 'Chennai, Tamil Nadu',
    degree: 'Intermediate (Class XII)',
    field: 'Senior Secondary Education',
    period: 'May 2022 – Apr 2024',
    scoreLabel: 'Percentage',
    score: '74.8%',
    details: [
      'Focused on Higher Mathematics, Physics, and Computer Science foundation.',
    ],
    highlight: false,
  },
  {
    institution: 'Narayana Olympiad School',
    location: 'Bangalore, Karnataka',
    degree: 'Matriculation (Class X)',
    field: 'Secondary School Education',
    period: 'Apr 2020 – Apr 2022',
    scoreLabel: 'Percentage',
    score: '90%',
    details: [
      'Completed secondary education with high distinction in Mathematics and Science.',
    ],
    highlight: false,
  },
]

function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden px-4 sm:px-6 py-24 sm:py-36"
    >
      {/* Background glow - GPU Accelerated */}
      <div className="pointer-events-none absolute right-1/3 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full [background:radial-gradient(circle,rgba(37,99,235,0.08)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
            06 / Education
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Academic{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              foundation & growth.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            My educational background spanning Computer Science Engineering and pre-university studies.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="mt-16 space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-3xl border p-8 transition-all duration-300 sm:p-10 ${
                edu.highlight
                  ? 'border-cyan-400/30 bg-gradient-to-br from-cyan-950/20 via-slate-900/40 to-purple-950/20 shadow-[0_0_50px_rgba(34,211,238,0.06)] hover:border-cyan-300/50'
                  : 'border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.04]'
              }`}
            >
              {/* Card ambient glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto]">
                <div>
                  {/* Period & Location badges */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-1 text-xs font-medium text-cyan-300">
                      {edu.period}
                    </span>

                    <span className="text-xs text-slate-500">
                      📍 {edu.location}
                    </span>
                  </div>

                  {/* Institution Name */}
                  <h3 className="mt-5 text-2xl font-semibold text-white sm:text-3xl">
                    {edu.institution}
                  </h3>

                  {/* Degree & Major */}
                  <p className="mt-2 text-base font-medium text-slate-300">
                    {edu.degree} — <span className="text-cyan-400">{edu.field}</span>
                  </p>

                  {/* Bullet Points */}
                  <ul className="mt-5 space-y-2">
                    {edu.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-sm text-slate-400">
                        <span className="mt-1 text-cyan-400">✦</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Score badge box */}
                <div className="flex items-start lg:items-center">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5 text-center min-w-[150px] shadow-lg backdrop-blur-xl">
                    <p className="text-3xl font-bold text-white bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                      {edu.score}
                    </p>

                    <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-500">
                      {edu.scoreLabel}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
