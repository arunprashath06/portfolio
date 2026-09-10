import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const summerCertificate = {
  title: 'Campus to Corporate: Data & AI Engineer Program',
  subtitle: 'Summer Training Certification',
  issuer: 'Lovely Professional University',
  date: 'July 2026',
  file: './certificates/summer training.pdf',
  downloadName: 'LPU_Data_AI_Engineer_Summer_Training_Certificate.pdf',
}

function Training() {
  const [certModalOpen, setCertModalOpen] = useState(false)
  const [viewMode, setViewMode] = useState('svg') // 'svg' | 'real'
  const [forecastTouchState, setForecastTouchState] = useState({ startX: 0, startY: 0 })

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setCertModalOpen(false)
    }
    if (certModalOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [certModalOpen])

  return (
    <>
      <section id="training" className="relative overflow-hidden px-6 py-28 sm:py-36">
        {/* Ambient background glow - GPU Accelerated */}
        <div className="pointer-events-none absolute -right-32 top-1/3 h-[450px] w-[450px] rounded-full [background:radial-gradient(circle,rgba(147,51,234,0.08)_0%,transparent_70%)]" />
        <div className="pointer-events-none absolute -left-32 bottom-1/4 h-[400px] w-[400px] rounded-full [background:radial-gradient(circle,rgba(6,182,212,0.08)_0%,transparent_70%)]" />

        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300 font-mono">
              03 / Summer Training
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Specialized{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 dark:from-cyan-300 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                industry training.
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
              Intensive training program focused on predictive retail modeling,
              time-series forecasting, and production AI system deployment.
            </p>
          </motion.div>

          {/* Main Showcase Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[2.5rem] border border-cyan-500/20 dark:border-cyan-400/20 bg-white/95 dark:bg-transparent dark:bg-gradient-to-br dark:from-cyan-950/20 dark:via-slate-900/40 dark:to-purple-950/20 shadow-xl dark:shadow-[0_0_60px_rgba(34,211,238,0.08)] gpu-accelerated"
          >
            {/* Ambient glow inside card */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[220px_1fr] lg:gap-12">
              {/* Left Column: Organization & Credential Metadata */}
              <div className="border-b border-slate-200 dark:border-white/10 pb-8 lg:border-b-0 lg:border-r lg:border-slate-200 dark:lg:border-white/10 lg:pb-0 lg:pr-8">
                <span className="rounded-full border border-cyan-500/30 dark:border-cyan-400/30 bg-cyan-500/10 dark:bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-300 font-mono">
                  SUMMER 2026
                </span>

                <div className="mt-6">
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Host Institution
                  </p>
                  <h4 className="mt-1 text-lg font-medium text-slate-900 dark:text-white">
                    Lovely Professional University
                  </h4>
                </div>

                <div className="mt-5">
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Track
                  </p>
                  <p className="mt-1 text-sm font-medium text-cyan-700 dark:text-cyan-200">
                    Data & AI Engineering
                  </p>
                </div>

                {/* Verified Credential Badge */}
                <div className="mt-8 rounded-2xl border border-cyan-500/20 dark:border-cyan-400/20 bg-cyan-50/80 dark:bg-cyan-950/30 p-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Verified Credential
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                    Issued upon successful defense of end-to-end retail forecasting capstone.
                  </p>
                </div>
              </div>

              {/* Right Column: Project Details & Output */}
              <div>
                <span className="text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-300 font-mono">
                  Capstone Project
                </span>

                <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
                  Supply Chain Demand Forecasting &amp; Anomaly Detection
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
                  Engineered an end-to-end forecasting pipeline analyzing 421,570 weekly
                  sales records across 45 retail stores. Implemented Facebook Prophet for
                  predictive modeling with yearly seasonality and tuned Isolation Forest
                  to flag supply disruptions and demand spikes.
                </p>

                {/* Key Metrics Strip */}
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-black/30 p-4 backdrop-blur-md shadow-sm dark:shadow-none">
                    <p className="font-mono text-2xl font-bold text-slate-900 dark:text-white">421K+</p>
                    <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
                      Sales Records
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-black/30 p-4 backdrop-blur-md shadow-sm dark:shadow-none">
                    <p className="font-mono text-2xl font-bold text-cyan-600 dark:text-cyan-300">12 Wks</p>
                    <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
                      Forecast Horizon
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-black/30 p-4 backdrop-blur-md shadow-sm dark:shadow-none">
                    <p className="font-mono text-2xl font-bold text-slate-900 dark:text-white">45</p>
                    <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
                      Retail Stores
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-black/30 p-4 backdrop-blur-md shadow-sm dark:shadow-none">
                    <p className="font-mono text-2xl font-bold text-cyan-600 dark:text-cyan-300">5.6%</p>
                    <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
                      Anomaly Outliers
                    </p>
                  </div>
                </div>

                {/* Visual Output Panel: Prophet Forecast Chart & Anomaly Inspection with Touch Swipe */}
                <div 
                  onTouchStart={(e) => {
                    setForecastTouchState({ startX: e.touches[0].clientX, startY: e.touches[0].clientY })
                  }}
                  onTouchEnd={(e) => {
                    const diffX = forecastTouchState.startX - e.changedTouches[0].clientX
                    const diffY = forecastTouchState.startY - e.changedTouches[0].clientY
                    if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY)) {
                      setViewMode(diffX > 0 ? 'real' : 'svg')
                    }
                  }}
                  className="mt-7 overflow-hidden rounded-2xl border border-cyan-500/20 dark:border-cyan-400/20 bg-slate-100/90 dark:bg-[#060b17]/90 p-5 shadow-xl backdrop-blur-md touch-pan-y"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-white/10 pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                        Prophet 12-Week Horizon Output
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setViewMode('svg')}
                        className={`rounded-lg px-2.5 py-1 font-mono text-xs transition-colors ${
                          viewMode === 'svg'
                            ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 font-bold border border-cyan-500/30 dark:border-cyan-400/30'
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        Vector Model
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewMode('real')}
                        className={`rounded-lg px-2.5 py-1 font-mono text-xs transition-colors ${
                          viewMode === 'real'
                            ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 font-bold border border-cyan-500/30 dark:border-cyan-400/30'
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        Real Walmart Plot
                      </button>
                    </div>
                  </div>

                  {/* Content View */}
                  {viewMode === 'svg' ? (
                    <div className="relative mt-4">
                      <svg
                        viewBox="0 0 650 160"
                        className="h-36 w-full overflow-visible"
                      >
                        <defs>
                          <linearGradient
                            id="forecastGrad"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>

                        {/* Confidence Interval Band */}
                        <path
                          d="M 20,95 Q 120,60 220,70 T 420,50 T 630,30 L 630,105 Q 520,115 420,120 T 220,135 T 20,140 Z"
                          fill="url(#forecastGrad)"
                        />

                        {/* Historical Sales Line */}
                        <path
                          d="M 20,120 Q 70,80 120,95 T 220,100 T 320,70 T 420,85"
                          fill="none"
                          stroke="#64748b"
                          strokeWidth="2"
                        />

                        {/* Prophet Predicted Trajectory Line */}
                        <path
                          d="M 420,85 Q 470,60 520,70 T 630,55"
                          fill="none"
                          stroke="#0891b2"
                          strokeWidth="2.5"
                          strokeDasharray="4 2"
                        />

                        {/* Anomaly Outlier Flags */}
                        <circle cx="220" cy="100" r="5" fill="#f43f5e" />
                        <circle cx="220" cy="100" r="9" fill="none" stroke="#f43f5e" strokeWidth="1.5" opacity="0.6" />

                        <circle cx="320" cy="70" r="5" fill="#f43f5e" />
                        <circle cx="320" cy="70" r="9" fill="none" stroke="#f43f5e" strokeWidth="1.5" opacity="0.6" />

                        {/* Key Indicators */}
                        <text x="25" y="148" fill="#64748b" fontSize="10" fontFamily="monospace">Historical Sales</text>
                        <text x="210" y="55" fill="#f43f5e" fontSize="10" fontFamily="monospace">Outlier Spike (Anomaly)</text>
                        <text x="440" y="45" fill="#0891b2" fontSize="10" fontFamily="monospace">Prophet Forecast Horizon ➔</text>
                      </svg>
                    </div>
                  ) : (
                    <div className="mt-4 flex flex-col items-center">
                      <img
                        src="./projects/supply_chain_plot_4_1.png"
                        alt="Facebook Prophet 12-Week Horizon Forecast"
                        loading="lazy"
                        decoding="async"
                        className="max-h-56 w-full object-contain rounded-lg border border-slate-300 dark:border-slate-800 gpu-layer"
                      />
                      <p className="mt-2 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                        Actual Facebook Prophet fitted curve with 95% uncertainty interval from demand_forecasting_real_data.ipynb
                      </p>
                    </div>
                  )}
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    'Python',
                    'Facebook Prophet',
                    'Isolation Forest',
                    'Scikit-learn',
                    'SQLite',
                    'Streamlit',
                    'Pandas',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-black/20 px-3.5 py-1 text-xs text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Single Primary Action Suite: Certificate, Live Demo, GitHub */}
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setCertModalOpen(true)}
                    className="flex items-center gap-2 rounded-xl border border-cyan-500/40 dark:border-cyan-400/40 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 dark:from-cyan-400/20 dark:via-blue-500/20 dark:to-purple-500/20 px-5 py-3 text-xs font-semibold text-cyan-700 dark:text-cyan-200 shadow-sm dark:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all hover:border-cyan-500 dark:hover:border-cyan-300 hover:scale-105 active:scale-95"
                  >
                    <span>✦</span>
                    <span>View Training Certificate</span>
                    <span>↗</span>
                  </button>

                  <a
                    href="https://supply-chain-demand-forecasting-arun.streamlit.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="group/demo flex items-center gap-2 rounded-xl bg-slate-900 dark:bg-white px-5 py-3 text-xs font-semibold text-white dark:text-slate-950 transition-all hover:bg-slate-800 dark:hover:bg-slate-100 hover:scale-105 active:scale-95 shadow-md"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span>Live Dashboard</span>
                    <span className="transition-transform group-hover/demo:translate-x-0.5">
                      ↗
                    </span>
                  </a>

                  <a
                    href="https://github.com/arunprashath06/Supply-chain-demand-forecasting"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-slate-300 dark:border-white/15 bg-white/80 dark:bg-white/5 px-5 py-3 text-xs font-medium text-slate-700 dark:text-slate-200 backdrop-blur-sm transition-all hover:border-slate-400 dark:hover:border-white/30 hover:bg-slate-100 dark:hover:bg-white/10 shadow-sm dark:shadow-none"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                    <span>View GitHub</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificate Modal Viewer */}
      <AnimatePresence>
        {certModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCertModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 dark:bg-black/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-slate-200 dark:border-cyan-400/30 bg-white dark:bg-[#060b18] shadow-2xl shadow-cyan-500/10"
            >
              {/* Modal Topbar */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 dark:bg-cyan-400/10 text-cyan-600 dark:text-cyan-300">
                    ✦
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                      {summerCertificate.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {summerCertificate.issuer} · {summerCertificate.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={summerCertificate.file}
                    download={summerCertificate.downloadName}
                    className="flex items-center gap-1.5 rounded-lg border border-cyan-500/40 dark:border-cyan-400/40 bg-cyan-500/10 dark:bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-700 dark:text-cyan-200 transition-all hover:bg-cyan-500/20 dark:hover:bg-cyan-400/20"
                  >
                    <span>Download PDF</span>
                    <span>↓</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setCertModalOpen(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 transition-colors hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Certificate Embed Viewer */}
              <div className="relative flex-1 bg-slate-100 dark:bg-black/60">
                <iframe
                  src={`${summerCertificate.file}#toolbar=0`}
                  title={summerCertificate.title}
                  className="h-full w-full border-none"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#040711] px-6 py-3 text-xs text-slate-600 dark:text-slate-500">
                <span>Verified Summer Training Credential</span>
                <span className="font-mono text-[11px] text-cyan-600 dark:text-cyan-400/80">
                  Lovely Professional University
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Training