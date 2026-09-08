import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

function Hero() {
  const [activeTab, setActiveTab] = useState('forecast') // 'forecast' | 'llm' | 'paging'
  const [anomalyActive, setAnomalyActive] = useState(false)
  const [pageStep, setPageStep] = useState(3)
  const [pagingAlgorithm, setPagingAlgorithm] = useState('LRU')

  // Reference sequence for memory paging
  const refString = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3]
  
  // LRU vs FIFO simulated frame states
  const frameStates = {
    FIFO: [
      { frames: [7, -1, -1], fault: true, hit: false },
      { frames: [7, 0, -1], fault: true, hit: false },
      { frames: [7, 0, 1], fault: true, hit: false },
      { frames: [2, 0, 1], fault: true, hit: false },
      { frames: [2, 0, 1], fault: false, hit: true },
      { frames: [2, 3, 1], fault: true, hit: false },
      { frames: [2, 3, 0], fault: true, hit: false },
      { frames: [4, 3, 0], fault: true, hit: false },
      { frames: [4, 2, 0], fault: true, hit: false },
      { frames: [4, 2, 3], fault: true, hit: false },
    ],
    LRU: [
      { frames: [7, -1, -1], fault: true, hit: false },
      { frames: [7, 0, -1], fault: true, hit: false },
      { frames: [7, 0, 1], fault: true, hit: false },
      { frames: [2, 0, 1], fault: true, hit: false },
      { frames: [2, 0, 1], fault: false, hit: true },
      { frames: [2, 0, 3], fault: true, hit: false },
      { frames: [2, 0, 3], fault: false, hit: true },
      { frames: [4, 0, 3], fault: true, hit: false },
      { frames: [4, 0, 2], fault: true, hit: false },
      { frames: [4, 3, 2], fault: true, hit: false },
    ]
  }

  const currentFrame = frameStates[pagingAlgorithm][pageStep]

  // Auto-step paging simulator gently
  useEffect(() => {
    if (activeTab !== 'paging') return
    const interval = setInterval(() => {
      setPageStep((prev) => (prev + 1) % refString.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [activeTab, refString.length])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-20 pt-32 lg:pt-36"
    >
      {/* Subtle Architectural Dot Grid — removes black void without clutter */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.45) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse at center, black 45%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 45%, transparent 80%)',
        }}
      />

      {/* Atmospheric Ambient Glows */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[150px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-16">

        {/* LEFT COLUMN: 7 cols */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 lg:col-span-7"
        >
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/25 bg-cyan-950/30 px-3.5 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            <span className="font-mono text-xs font-medium tracking-wider text-cyan-300">
              AI / ML ENGINEER &amp; SYSTEMS BUILDER
            </span>
          </div>

          {/* Name Heading */}
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Arun{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Prashath
            </span>
          </h1>

          {/* Subheading / Tagline */}
          <p className="mt-4 text-xl font-medium tracking-tight text-cyan-200 sm:text-2xl lg:text-3xl">
            Building intelligence one system at a time.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Computer Science student specializing in predictive time-series forecasting, 
            conversational LLM architectures, and high-performance algorithms.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition-all hover:bg-slate-100 hover:scale-105 active:scale-95"
            >
              <span>Explore Projects</span>
              <span className="text-xs">↓</span>
            </a>

            <a
              href="/resume.pdf"
              download="Arun_Prashath_Resume.pdf"
              className="group flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-gradient-to-r from-cyan-400/15 via-blue-500/15 to-purple-500/15 px-6 py-3 text-sm font-medium text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.15)] backdrop-blur-xl transition-all hover:border-cyan-300 hover:from-cyan-400/25 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:scale-105 active:scale-95"
            >
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5"
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
              <span>Download Resume</span>
              <span className="rounded border border-cyan-400/30 bg-cyan-400/10 px-1.5 py-0.5 font-mono text-[10px] text-cyan-300">
                PDF
              </span>
            </a>

            <a
              href="https://github.com/arunprashath06"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300 backdrop-blur-xl transition-all hover:border-white/25 hover:bg-white/10 hover:text-white"
            >
              <span>GitHub</span>
              <span className="text-xs">↗</span>
            </a>
          </div>

          {/* Metric Telemetry Badges */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-800/80 pt-6">
            <div>
              <p className="font-mono text-2xl font-bold tracking-tight text-white sm:text-3xl">92.4%</p>
              <p className="mt-1 text-xs text-slate-400">Demand Model Acc.</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-bold tracking-tight text-white sm:text-3xl">&lt;150ms</p>
              <p className="mt-1 text-xs text-slate-400">Groq LLM Latency</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-bold tracking-tight text-white sm:text-3xl">4 Core</p>
              <p className="mt-1 text-xs text-slate-400">Deployed Systems</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: 5 cols — Interactive Live AI Sandbox Console */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative z-10 lg:col-span-5"
        >
          {/* Subtle Outer Glow Frame */}
          <div className="relative rounded-2xl border border-cyan-500/25 bg-slate-950/80 p-1 shadow-[0_0_60px_rgba(34,211,238,0.12)] backdrop-blur-xl">
            
            {/* Terminal Top Window Bar */}
            <div className="flex items-center justify-between border-b border-slate-800/80 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-[11px] text-slate-400">
                  sandbox.telemetry.local
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] text-emerald-400">LIVE</span>
              </div>
            </div>

            {/* Interactive System Tabs */}
            <div className="grid grid-cols-3 border-b border-slate-800/70 bg-slate-900/40 p-1">
              <button
                onClick={() => setActiveTab('forecast')}
                className={`flex items-center justify-center gap-1.5 rounded-lg py-2 font-mono text-xs transition-all ${
                  activeTab === 'forecast'
                    ? 'bg-cyan-500/20 text-cyan-300 font-medium shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>📈</span>
                <span>Prophet</span>
              </button>

              <button
                onClick={() => setActiveTab('llm')}
                className={`flex items-center justify-center gap-1.5 rounded-lg py-2 font-mono text-xs transition-all ${
                  activeTab === 'llm'
                    ? 'bg-purple-500/20 text-purple-300 font-medium shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>🧠</span>
                <span>Groq LLM</span>
              </button>

              <button
                onClick={() => setActiveTab('paging')}
                className={`flex items-center justify-center gap-1.5 rounded-lg py-2 font-mono text-xs transition-all ${
                  activeTab === 'paging'
                    ? 'bg-blue-500/20 text-blue-300 font-medium shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>⚡</span>
                <span>C++ Paging</span>
              </button>
            </div>

            {/* Live Interactive Canvas */}
            <div className="p-5">
              <AnimatePresence mode="wait">
                {/* TAB 1: Prophet Demand Forecasting */}
                {activeTab === 'forecast' && (
                  <motion.div
                    key="forecast"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <span className="font-mono text-slate-400">Dataset: </span>
                        <span className="font-mono text-white">Walmart Store 1 / Dept 1</span>
                      </div>
                      <span className="rounded bg-cyan-400/10 px-2 py-0.5 font-mono text-[11px] text-cyan-300">
                        12-Wk Forecast
                      </span>
                    </div>

                    {/* SVG Forecast Curve */}
                    <div className="relative rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                      <svg viewBox="0 0 320 120" className="h-32 w-full">
                        <defs>
                          <linearGradient id="heroGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Grid lines */}
                        <line x1="0" y1="30" x2="320" y2="30" stroke="#334155" strokeDasharray="3 3" opacity="0.4" />
                        <line x1="0" y1="65" x2="320" y2="65" stroke="#334155" strokeDasharray="3 3" opacity="0.4" />
                        <line x1="0" y1="100" x2="320" y2="100" stroke="#334155" strokeDasharray="3 3" opacity="0.4" />

                        {/* Confidence interval band */}
                        <path
                          d="M 10 75 Q 60 50 110 70 T 210 50 T 310 40 L 310 80 Q 260 90 210 75 T 110 95 T 10 90 Z"
                          fill="url(#heroGradient)"
                        />

                        {/* Forecast trend line */}
                        <motion.path
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          d="M 10 80 Q 60 55 110 75 T 210 55 T 310 45"
                          fill="none"
                          stroke="#22d3ee"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />

                        {/* Standard data points */}
                        <circle cx="10" cy="80" r="3" fill="#22d3ee" />
                        <circle cx="60" cy="55" r="3" fill="#22d3ee" />
                        <circle cx="110" cy="75" r="3" fill="#22d3ee" />
                        <circle cx="160" cy="62" r="3" fill="#22d3ee" />
                        <circle cx="210" cy="55" r="3" fill="#22d3ee" />
                        <circle cx="260" cy="48" r="3" fill="#22d3ee" />

                        {/* Interactive Anomaly Point */}
                        {anomalyActive ? (
                          <g>
                            <circle cx="260" cy="22" r="6" fill="#f43f5e" className="animate-ping" opacity="0.75" />
                            <circle cx="260" cy="22" r="4" fill="#f43f5e" />
                            <line x1="260" y1="48" x2="260" y2="22" stroke="#f43f5e" strokeDasharray="2 2" />
                            <text x="230" y="15" fill="#f43f5e" fontSize="9" fontFamily="monospace">
                              Surge +42%
                            </text>
                          </g>
                        ) : (
                          <circle cx="310" cy="45" r="3" fill="#38bdf8" />
                        )}
                      </svg>

                      {/* Tooltip badge inside chart */}
                      <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-slate-400">
                        <span>Seasonality: Yearly + Weekly</span>
                        <span className="text-cyan-300">Confidence: 95%</span>
                      </div>
                    </div>

                    {/* Interactive Trigger Button */}
                    <div className="flex items-center justify-between gap-3 pt-1">
                      <span className="text-xs text-slate-400">Isolation Forest Spike:</span>
                      <button
                        onClick={() => setAnomalyActive(!anomalyActive)}
                        className={`rounded-lg px-3 py-1.5 font-mono text-xs font-medium transition-all ${
                          anomalyActive
                            ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                        }`}
                      >
                        {anomalyActive ? 'Reset Anomaly' : '⚡ Simulate Surge Spike'}
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* TAB 2: Groq LLaMA 3.1 Recommender Engine */}
                {activeTab === 'llm' && (
                  <motion.div
                    key="llm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-purple-300">Model: llama-3.1-8b-instant</span>
                      <span className="font-mono text-emerald-400">Latency: 142ms</span>
                    </div>

                    {/* Chat Input & Regex Extraction */}
                    <div className="rounded-xl border border-purple-500/20 bg-slate-900/70 p-3 space-y-2">
                      <div className="font-mono text-[11px] text-slate-400">User Natural Language Query:</div>
                      <div className="rounded-lg bg-slate-950/80 p-2 text-xs font-mono text-purple-200">
                        &quot;Front load washing machine under 25k for a family of 4&quot;
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="rounded bg-purple-900/40 px-2 py-0.5 font-mono text-[10px] text-purple-300 border border-purple-700/30">
                          Budget: ≤ ₹25,000
                        </span>
                        <span className="rounded bg-blue-900/40 px-2 py-0.5 font-mono text-[10px] text-blue-300 border border-blue-700/30">
                          Type: Front Load
                        </span>
                        <span className="rounded bg-cyan-900/40 px-2 py-0.5 font-mono text-[10px] text-cyan-300 border border-cyan-700/30">
                          Capacity: 7kg
                        </span>
                      </div>
                    </div>

                    {/* AI Recommender Output */}
                    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-3 text-xs space-y-1.5">
                      <div className="flex items-center justify-between font-mono text-[10px] text-slate-400">
                        <span>Top Match (Cosine: 0.942):</span>
                        <span className="text-emerald-400">In Stock</span>
                      </div>
                      <p className="font-medium text-white">Samsung 6.5 kg Hygiene Steam Front Load</p>
                      <p className="font-mono text-[11px] text-slate-400">₹22,990 · 5★ Energy · Ceramic Heater</p>
                    </div>
                  </motion.div>
                )}

                {/* TAB 3: Virtual Memory Page Replacer */}
                {activeTab === 'paging' && (
                  <motion.div
                    key="paging"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setPagingAlgorithm('LRU')}
                          className={`rounded px-2 py-0.5 font-mono text-[11px] ${
                            pagingAlgorithm === 'LRU'
                              ? 'bg-blue-500/30 text-blue-300 font-bold border border-blue-500/40'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          LRU
                        </button>
                        <button
                          onClick={() => setPagingAlgorithm('FIFO')}
                          className={`rounded px-2 py-0.5 font-mono text-[11px] ${
                            pagingAlgorithm === 'FIFO'
                              ? 'bg-blue-500/30 text-blue-300 font-bold border border-blue-500/40'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          FIFO
                        </button>
                      </div>
                      <span className="font-mono text-[11px] text-cyan-300">
                        Step: {pageStep + 1} / {refString.length}
                      </span>
                    </div>

                    {/* Reference String Ribbon */}
                    <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                      {refString.map((num, idx) => (
                        <div
                          key={idx}
                          className={`flex h-7 w-7 items-center justify-center rounded font-mono text-xs font-bold transition-all ${
                            idx === pageStep
                              ? 'bg-blue-500 text-white scale-110 shadow-md shadow-blue-500/30'
                              : idx < pageStep
                              ? 'bg-slate-800/80 text-slate-400'
                              : 'bg-slate-900/60 text-slate-600'
                          }`}
                        >
                          {num}
                        </div>
                      ))}
                    </div>

                    {/* Frame Registers */}
                    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                      <div className="mb-2 flex items-center justify-between text-xs">
                        <span className="font-mono text-slate-400">RAM Frame Allocation:</span>
                        {currentFrame.hit ? (
                          <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-400">
                            HIT ✓
                          </span>
                        ) : (
                          <span className="rounded bg-rose-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-rose-400">
                            PAGE FAULT ✕
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {currentFrame.frames.map((val, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex flex-col items-center rounded-lg border border-slate-700/50 bg-slate-950/70 py-2"
                          >
                            <span className="font-mono text-[10px] text-slate-500">Frame {fIdx}</span>
                            <span className="font-mono text-lg font-bold text-white">
                              {val === -1 ? '—' : val}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Step Controls */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-slate-400">Simulate Access:</span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setPageStep((prev) => (prev > 0 ? prev - 1 : refString.length - 1))}
                          className="rounded bg-slate-800 px-2.5 py-1 font-mono text-xs text-slate-300 hover:bg-slate-700"
                        >
                          ◀ Prev
                        </button>
                        <button
                          onClick={() => setPageStep((prev) => (prev + 1) % refString.length)}
                          className="rounded bg-blue-600/30 border border-blue-500/40 px-2.5 py-1 font-mono text-xs text-blue-200 hover:bg-blue-600/50"
                        >
                          Next ▶
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="flex items-center justify-between border-t border-slate-800/80 bg-slate-900/30 px-4 py-2 font-mono text-[10px] text-slate-500">
              <span className="text-slate-400">Interactive Model Demo</span>
              <span className="text-cyan-400">Select tabs above</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero