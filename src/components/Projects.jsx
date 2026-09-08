import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const categories = ['All', 'AI & Machine Learning', 'Systems & Algorithms']

const projects = [
  {
    id: 'student-perf',
    number: '01',
    title: 'Student Academic Performance Prediction',
    category: 'AI & Machine Learning',
    date: 'May 2026',
    badge: 'LPU Capstone (CSE274)',
    description:
      'Engineered a supervised machine learning pipeline predicting final student grades (G3) from 649 records across 30+ socio-academic features. Implemented IQR outlier removal, feature encoding, and benchmarked Linear Regression against Random Forest. Achieved R² 0.8632 (86.3% variance explained) and RMSE 1.1547.',
    tags: ['Python', 'Scikit-learn', 'Linear Regression', 'Random Forest', 'Pandas', 'Seaborn'],
    highlights: ['R² 0.8632 Accuracy', 'RMSE 1.1547', '649 Student Records', 'Feature Correlation Heatmap'],
    metrics: [
      { label: 'R² Score', val: '0.8632' },
      { label: 'MSE', val: '1.3334' },
      { label: 'RMSE', val: '1.1547' },
      { label: 'Best Model', val: 'Linear Reg.' },
    ],
    realImage: '/projects/CSE_274_final_report_p17_0.jpg',
    realImageTitle: 'Actual vs. Predicted Grades (Scatter Plot)',
    secondaryImage: '/projects/CSE_274_final_report_p18_0.png',
    secondaryImageTitle: 'Feature Correlation Matrix',
    github: 'https://github.com/arunprashath06/student-performance-prediction',
  },
  {
    id: 'ai-appliance',
    number: '02',
    title: 'AI Home Appliance Recommender Chatbot',
    category: 'AI & Machine Learning',
    date: 'May 2026',
    badge: 'INT428 Project',
    description:
      'Interactive conversational shopping assistant developed with Streamlit and Groq LLaMA-3.1-8B-Instant with an Ollama local fallback. Uses regex natural-language slot extraction for budget, family size, and machine type, coupled with a 4-stage ranking algorithm weighting user ratings (60%) and capacity matching (40%).',
    tags: ['Python', 'LLaMA 3.1', 'Groq Cloud', 'Ollama Fallback', 'Streamlit', 'NLP Regex', 'Pandas'],
    highlights: ['Groq LLaMA 3.1 LLM', 'Ollama Local Fallback', 'Sub-150ms Latency', 'Automated Slot Extraction'],
    metrics: [
      { label: 'LLM Model', val: 'LLaMA 3.1 8B' },
      { label: 'Latency', val: '<150ms' },
      { label: 'Ranking', val: '4-Stage Hybrid' },
      { label: 'Fallback', val: 'Ollama Local' },
    ],
    github: 'https://github.com/hrishi1314/AI-Chatbot-',
    realImage: '/projects/INT_428_final_project_report_p26_0.png',
    realImageTitle: 'Streamlit Chatbot UI & Real Recommendation Outputs',
  },
  {
    id: 'supply-chain',
    number: '03',
    title: 'Supply Chain Demand Forecasting & Anomaly Detection',
    category: 'AI & Machine Learning',
    date: 'Summer 2026',
    badge: 'Summer Training',
    description:
      'End-to-end retail forecasting pipeline over 421,570 weekly sales records across 45 stores and 99 departments stored in SQLite. Trained Facebook Prophet with yearly and weekly seasonality for 12-week horizon forecasting and tuned Isolation Forest to detect sales anomalies (5.6% outlier rate).',
    tags: ['Python', 'Facebook Prophet', 'Isolation Forest', 'Scikit-learn', 'SQLite', 'Streamlit'],
    highlights: ['421K+ Sales Records', '12-Wk Forecast Horizon', '95% Confidence Band', 'Isolation Forest Spikes'],
    metrics: [
      { label: 'Records', val: '421,570' },
      { label: 'Horizon', val: '12 Weeks' },
      { label: 'Outlier Rate', val: '5.6%' },
      { label: 'Backend', val: 'SQLite' },
    ],
    github: 'https://github.com/arunprashath06/Supply-chain-demand-forecasting',
    realImage: '/projects/supply_chain_plot_4_1.png',
    realImageTitle: 'Facebook Prophet 12-Week Horizon Forecast (Walmart Data)',
    secondaryImage: '/projects/supply_chain_plot_2_0.png',
    secondaryImageTitle: 'Weekly Sales Distribution Time-Series',
  },
  {
    id: 'page-replacer',
    number: '04',
    title: 'Efficient Page Replacement Algorithm Simulator',
    category: 'Systems & Algorithms',
    date: 'Dec 2025',
    badge: 'CSE316 OS Task',
    description:
      'Modular C++ operating systems simulator benchmarking FIFO, LRU, and Belady’s Optimal page replacement algorithms. Utilized C++ STL vectors, queues, unordered sets, and hash maps to trace frame-by-frame memory page hits and faults across configurable page reference strings.',
    tags: ['C++', 'STL', 'Operating Systems', 'Memory Management', 'Algorithms'],
    highlights: ['FIFO, LRU & Optimal', 'Frame-by-Frame Allocation', 'C++ STL Hash & Queues', 'Hit-Ratio Benchmarks'],
    metrics: [
      { label: 'FIFO Faults', val: '14 Faults' },
      { label: 'LRU Faults', val: '11 Faults' },
      { label: 'Optimal', val: '8 Faults' },
      { label: 'Optimal Hit Rate', val: '66.7%' },
    ],
    github: 'https://github.com/arunprashath06/Efficient-Page-Replacement-Simulator',
    realImage: '/projects/Arun_p23_0.png',
    realImageTitle: 'C++ Terminal Execution & Comparative Hit-Ratio Output',
    secondaryImage: '/projects/Arun_p8_0.png',
    secondaryImageTitle: 'System Flow & Paging Architecture Diagram',
  },
]

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeViewTab, setActiveViewTab] = useState({}) // { [projectId]: 'output' | 'metrics' }
  const [lightboxImage, setLightboxImage] = useState(null)

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="projects" className="relative px-6 py-28 sm:py-36">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-[140px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-purple-500/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-cyan-300 font-mono"
            >
              02 / Projects
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl"
            >
              Engineering{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                real-world systems.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-4 max-w-2xl text-base text-slate-400 sm:text-lg"
            >
              Real machine learning models, conversational LLM architectures, and algorithm
              simulators with authentic outputs, evaluation metrics, and source repositories.
            </motion.p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-slate-900/50 p-1.5 backdrop-blur-xl">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative rounded-xl px-4 py-2 text-xs font-medium transition-colors duration-200 ${
                    isSelected
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeProjectFilter"
                      className="absolute inset-0 rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Project Cards Grid — Clean, Spacious & Breathable */}
        <motion.div layout className="mt-14 space-y-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const currentView = activeViewTab[project.id] || 'output'

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-slate-900/60 via-slate-950/80 to-[#050b18] p-8 sm:p-10 shadow-2xl transition-all duration-300 hover:border-cyan-400/30"
                >
                  {/* Subtle hover backlight */}
                  <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Card Top: Number, Date & Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold tracking-widest text-cyan-400">
                        {project.number}
                      </span>
                      <span className="text-slate-600">/</span>
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-slate-300">
                        {project.date}
                      </span>
                      {project.badge && (
                        <span className="rounded-full border border-cyan-400/25 bg-cyan-950/40 px-3 py-1 font-mono text-[11px] font-medium text-cyan-300">
                          {project.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Main Two-Column Layout (Info on Left, Real Output on Right) */}
                  <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-start">
                    
                    {/* LEFT COLUMN: Description, Highlights, Metrics (7 cols) */}
                    <div className="lg:col-span-7">
                      <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                        {project.title}
                      </h3>

                      {/* Highlights */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.highlights.map((h) => (
                          <span
                            key={h}
                            className="rounded-lg border border-cyan-400/20 bg-cyan-950/30 px-2.5 py-1 font-mono text-[11px] text-cyan-300"
                          >
                            ✦ {h}
                          </span>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                        {project.description}
                      </p>

                      {/* Metrics Summary Strip */}
                      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 rounded-xl border border-slate-800/80 bg-slate-950/60 p-3">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="text-center">
                            <p className="text-[10px] uppercase font-mono text-slate-500">{m.label}</p>
                            <p className="mt-0.5 font-mono text-sm font-bold text-white">{m.val}</p>
                          </div>
                        ))}
                      </div>

                      {/* Tech Tags */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="mt-7 flex flex-wrap items-center gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all hover:border-cyan-400/40 hover:bg-white/15"
                          >
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              />
                            </svg>
                            <span>Repository</span>
                            <span>↗</span>
                          </a>
                        )}

                        <button
                          type="button"
                          onClick={() => setLightboxImage({ src: project.realImage, title: project.realImageTitle })}
                          className="flex items-center gap-1.5 rounded-xl border border-cyan-400/30 bg-cyan-950/40 px-4 py-2.5 text-xs font-semibold text-cyan-300 transition-all hover:bg-cyan-900/40"
                        >
                          <span>🔎 Full Output View</span>
                        </button>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: Real Output Visual Showcase (5 cols) */}
                    <div className="lg:col-span-5">
                      <div className="overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-950/80 shadow-lg">
                        {/* Tab header on visual card */}
                        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/60 px-3.5 py-2">
                          <div className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-cyan-400" />
                            <span className="font-mono text-[11px] text-slate-300">
                              {currentView === 'output' ? 'Real Output' : 'Secondary Chart'}
                            </span>
                          </div>
                          
                          {project.secondaryImage && (
                            <div className="flex gap-1">
                              <button
                                type="button"
                                onClick={() => setActiveViewTab((prev) => ({ ...prev, [project.id]: 'output' }))}
                                className={`rounded px-2 py-0.5 font-mono text-[10px] transition-colors ${
                                  currentView === 'output' ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400'
                                }`}
                              >
                                View 1
                              </button>
                              <button
                                type="button"
                                onClick={() => setActiveViewTab((prev) => ({ ...prev, [project.id]: 'secondary' }))}
                                className={`rounded px-2 py-0.5 font-mono text-[10px] transition-colors ${
                                  currentView === 'secondary' ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400'
                                }`}
                              >
                                View 2
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Interactive Image Preview with zoom trigger */}
                        <div
                          className="relative cursor-pointer group/img overflow-hidden bg-black/40 flex items-center justify-center p-2 min-h-[220px]"
                          onClick={() =>
                            setLightboxImage({
                              src: currentView === 'output' ? project.realImage : project.secondaryImage,
                              title: currentView === 'output' ? project.realImageTitle : project.secondaryImageTitle,
                            })
                          }
                        >
                          <img
                            src={currentView === 'output' ? project.realImage : project.secondaryImage}
                            alt={project.title}
                            className="max-h-64 w-full object-contain rounded-lg transition-transform duration-300 group-hover/img:scale-[1.02]"
                          />
                          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <span className="rounded-lg bg-black/80 px-3 py-1.5 font-mono text-xs text-white shadow-lg border border-white/20">
                              Click to Expand ↗
                            </span>
                          </div>
                        </div>

                        {/* Caption */}
                        <div className="border-t border-slate-800/80 bg-slate-900/40 px-3.5 py-2">
                          <p className="font-mono text-[11px] text-slate-400 truncate">
                            {currentView === 'output' ? project.realImageTitle : project.secondaryImageTitle}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full-Screen Output Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border border-cyan-400/30 bg-slate-950 p-4 shadow-2xl"
            >
              <div className="mb-3 flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="font-mono text-xs text-cyan-300">
                  {lightboxImage.title}
                </span>
                <button
                  type="button"
                  onClick={() => setLightboxImage(null)}
                  className="rounded-lg bg-slate-800 px-2.5 py-1 font-mono text-xs text-slate-300 hover:bg-slate-700 hover:text-white"
                >
                  ✕ Close (ESC)
                </button>
              </div>

              <div className="max-h-[75vh] overflow-auto flex items-center justify-center">
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.title}
                  className="max-h-full max-w-full rounded-lg object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects