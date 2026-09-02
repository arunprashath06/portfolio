import { motion } from 'motion/react'

const projects = [
  {
    number: '01',
    title: 'AI Washing Machine Recommender',
    description:
      'AI-powered recommendation system that filters and ranks washing machines based on user requirements and generates intelligent explanations.',
    tags: [
      'Python',
      'Pandas',
      'Streamlit',
      'Groq',
      'Ollama',
    ],
    github: 'https://github.com/hrishi1314/AI-Chatbot-',
    demo: 'https://ai-chatbot-omega-three.vercel.app/',
  },
  {
    number: '02',
    title: 'Supply Chain Demand Forecasting',
    description:
      'Demand forecasting and anomaly detection system using Walmart sales data, time-series forecasting, machine learning and an interactive Streamlit dashboard.',
    tags: [
      'Python',
      'Prophet',
      'Scikit-learn',
      'SQLite',
      'Streamlit',
      'Plotly',
    ],
    github:
      'https://github.com/arunprashath06/Supply-chain-demand-forecasting',
    demo:
      'https://supply-chain-demand-forecasting-arun.streamlit.app/',
  },
]

function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-300">
            03 / Projects
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Systems I've
            <br />
            <span className="text-slate-500">built in the universe.</span>
          </h2>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.045] to-white/[0.015] p-8 md:p-10"
            >
              {/* glow */}
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/5 blur-3xl transition-opacity group-hover:opacity-100" />

              <div className="relative grid gap-10 md:grid-cols-[100px_1fr_auto] md:items-start">

                <span className="text-sm tracking-widest text-slate-600">
                  {project.number}
                </span>

                <div>
                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 md:flex-col">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="GITHUB"
                    className="rounded-full border border-white/10 px-4 py-2 text-xs text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="LIVE DEMO"
                    className="rounded-full bg-white px-4 py-2 text-xs text-slate-950 transition hover:scale-105"
                  >
                    Live ↗
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects