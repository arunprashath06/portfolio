import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import StarryName from './StarryName'

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

  const [consoleTouchState, setConsoleTouchState] = useState({ startX: 0, startY: 0 })
  const consoleTabs = ['forecast', 'llm', 'paging']

  const handleConsoleTouchStart = (e) => {
    setConsoleTouchState({ startX: e.touches[0].clientX, startY: e.touches[0].clientY })
  }

  const handleConsoleTouchEnd = (e) => {
    const diffX = consoleTouchState.startX - e.changedTouches[0].clientX
    const diffY = consoleTouchState.startY - e.changedTouches[0].clientY
    if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY)) {
      const currIdx = consoleTabs.indexOf(activeTab)
      if (diffX > 0) {
        setActiveTab(consoleTabs[(currIdx + 1) % consoleTabs.length])
      } else {
        setActiveTab(consoleTabs[(currIdx - 1 + consoleTabs.length) % consoleTabs.length])
      }
    }
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 sm:px-6 pb-12 pt-20 sm:pt-24 lg:pt-28"
    >
      {/* Subtle Architectural Dot Grid */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.18] dark:opacity-[0.14]"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.45) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse at center, black 45%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 45%, transparent 80%)',
        }}
      />

      {/* Atmospheric Ambient Glows - GPU Accelerated */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[450px] w-[450px] rounded-full [background:radial-gradient(circle,rgba(6,182,212,0.12)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-[450px] w-[450px] rounded-full [background:radial-gradient(circle,rgba(147,51,234,0.12)_0%,transparent_70%)]" />

      <div className="mx-auto grid w-full max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1440px] items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">

        {/* LEFT COLUMN: 7 cols */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 lg:col-span-7 gpu-accelerated"
        >
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 dark:border-cyan-400/30 bg-cyan-50/80 dark:bg-cyan-950/40 px-3.5 py-1 shadow-sm dark:shadow-[0_0_20px_rgba(34,211,238,0.15)] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-500 dark:bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
            </span>
            <span className="font-mono text-[11px] font-semibold tracking-wider text-cyan-800 dark:text-cyan-300">
              AI / ML ENGINEER &amp; SYSTEMS ARCHITECT
            </span>
          </div>

          {/* Name Heading with Interactive Starry Sky Hover Effect */}
          <div className="mt-3">
            <StarryName />
          </div>

          {/* Subheading / Tagline */}
          <p className="mt-3 text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-cyan-800 dark:text-cyan-200/90">
            Building intelligence one system at a time.
          </p>

          <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Computer Science undergraduate specializing in <span className="text-slate-900 dark:text-white font-medium">predictive time-series forecasting</span>,{' '}
            <span className="text-slate-900 dark:text-white font-medium">conversational LLM architectures</span>, and{' '}
            <span className="text-slate-900 dark:text-white font-medium">high-performance systems</span>.
          </p>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 px-5 py-2.5 text-sm font-semibold shadow-md shadow-slate-900/10 dark:shadow-white/10 transition-all hover:bg-slate-800 dark:hover:bg-slate-100 hover:scale-105 active:scale-95"
            >
              <span>Explore Projects</span>
              <span className="text-xs">↓</span>
            </a>

            <a
              href="./resume.pdf"
              download="Arun_Prashath_Resume.pdf"
              className="group flex items-center gap-2 rounded-xl border border-cyan-500/40 dark:border-cyan-400/40 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 dark:from-cyan-400/15 dark:via-blue-500/15 dark:to-purple-500/15 px-5 py-2.5 text-sm font-medium text-cyan-800 dark:text-cyan-200 shadow-sm dark:shadow-[0_0_20px_rgba(34,211,238,0.15)] backdrop-blur-xl transition-all hover:border-cyan-400 dark:hover:border-cyan-300 hover:from-cyan-500/20 dark:hover:from-cyan-400/25 hover:scale-105 active:scale-95"
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
              <span className="rounded border border-cyan-500/30 dark:border-cyan-400/30 bg-cyan-500/10 dark:bg-cyan-400/10 px-1.5 py-0.5 font-mono text-[10px] text-cyan-800 dark:text-cyan-300">
                PDF
              </span>
            </a>

            <a
              href="https://github.com/arunprashath06"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-xl border border-slate-300 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 backdrop-blur-xl transition-all hover:border-slate-400 dark:hover:border-white/25 hover:text-slate-950 dark:hover:text-white hover:bg-white/90 dark:hover:bg-white/10"
            >
              <span>GitHub</span>
              <span className="text-xs">↗</span>
            </a>
          </div>

          {/* Metric Telemetry Cards */}
          <div className="mt-7 grid grid-cols-3 gap-3 pt-1">
            <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] p-3 sm:p-3.5 backdrop-blur-md shadow-sm dark:shadow-none transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/90 dark:hover:bg-white/[0.05]">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Accuracy</p>
              </div>
              <p className="mt-0.5 font-mono text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">92.4%</p>
              <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">Demand Model</p>
            </div>

            <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] p-3 sm:p-3.5 backdrop-blur-md shadow-sm dark:shadow-none transition-all duration-300 hover:border-emerald-500/40 hover:bg-white/90 dark:hover:bg-white/[0.05]">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Latency</p>
              </div>
              <p className="mt-0.5 font-mono text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">&lt;150ms</p>
              <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">Groq LLM</p>
            </div>

            <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] p-3 sm:p-3.5 backdrop-blur-md shadow-sm dark:shadow-none transition-all duration-300 hover:border-purple-500/40 hover:bg-white/90 dark:hover:bg-white/[0.05]">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 dark:bg-purple-400" />
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Systems</p>
              </div>
              <p className="mt-0.5 font-mono text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">4 Core</p>
              <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">Deployed Systems</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: 5 cols — Interactive Live AI Sandbox Console */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative z-10 lg:col-span-5 gpu-accelerated"
        >
          {/* Ambient Glow behind Console */}
          <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-xl opacity-60" />

          {/* Subtle Outer Glow Frame with Touch Swipe */}
          <div 
            onTouchStart={handleConsoleTouchStart}
            onTouchEnd={handleConsoleTouchEnd}
            className="relative rounded-2xl border border-slate-200 dark:border-cyan-500/25 bg-white/95 dark:bg-slate-950/90 p-1 shadow-xl dark:shadow-[0_0_60px_rgba(34,211,238,0.14)] backdrop-blur-md touch-pan-y transition-colors"
          >
            
            {/* Terminal Top Window Bar */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800/80 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                  sandbox.telemetry.local
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">LIVE</span>
              </div>
            </div>

            {/* Interactive System Tabs */}
            <div className="grid grid-cols-3 border-b border-slate-200 dark:border-slate-800/70 bg-slate-100/80 dark:bg-slate-900/40 p-1">
              <button
                onClick={() => setActiveTab('forecast')}
                className={`flex items-center justify-center gap-1.5 rounded-lg py-2 font-mono text-xs transition-all ${
                  activeTab === 'forecast'
                    ? 'bg-cyan-500/15 text-cyan-800 dark:bg-cyan-500/20 dark:text-cyan-300 font-medium shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <span>📈</span>
                <span>Prophet</span>
              </button>

              <button
                onClick={() => setActiveTab('llm')}
                className={`flex items-center justify-center gap-1.5 rounded-lg py-2 font-mono text-xs transition-all ${
                  activeTab === 'llm'
                    ? 'bg-purple-500/15 text-purple-800 dark:bg-purple-500/20 dark:text-purple-300 font-medium shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <span>🧠</span>
                <span>Groq LLM</span>
              </button>

              <button
                onClick={() => setActiveTab('paging')}
                className={`flex items-center justify-center gap-1.5 rounded-lg py-2 font-mono text-xs transition-all ${
                  activeTab === 'paging'
                    ? 'bg-blue-500/15 text-blue-800 dark:bg-blue-500/20 dark:text-blue-300 font-medium shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
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
                        <span className="font-mono text-slate-500 dark:text-slate-400">Dataset: </span>
                        <span className="font-mono text-slate-900 dark:text-white font-medium">Walmart Store 1 / Dept 1</span>
                      </div>
                      <span className="rounded bg-cyan-500/10 dark:bg-cyan-400/10 px-2 py-0.5 font-mono text-[11px] text-cyan-700 dark:text-cyan-300">
                        12-Wk Forecast
                      </span>
                    </div>

                    {/* SVG Forecast Curve */}
                    <div className="relative rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 p-3">
                      <svg viewBox="0 0 320 120" className="h-32 w-full">
                        <defs>
                          <linearGradient id="heroGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Grid lines */}
                        <line x1="0" y1="30" x2="320" y2="30" stroke="#94a3b8" strokeDasharray="3 3" opacity="0.3" />
                        <line x1="0" y1="65" x2="320" y2="65" stroke="#94a3b8" strokeDasharray="3 3" opacity="0.3" />
                        <line x1="0" y1="100" x2="320" y2="100" stroke="#94a3b8" strokeDasharray="3 3" opacity="0.3" />

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
                          stroke="#0891b2"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />

                        {/* Standard data points */}
                        <circle cx="10" cy="80" r="3" fill="#0891b2" />
                        <circle cx="60" cy="55" r="3" fill="#0891b2" />
                        <circle cx="110" cy="75" r="3" fill="#0891b2" />
                        <circle cx="160" cy="62" r="3" fill="#0891b2" />
                        <circle cx="210" cy="55" r="3" fill="#0891b2" />
                        <circle cx="260" cy="48" r="3" fill="#0891b2" />

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
                      <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-slate-500 dark:text-slate-400">
                        <span>Seasonality: Yearly + Weekly</span>
                        <span className="text-cyan-700 dark:text-cyan-300">Confidence: 95%</span>
                      </div>
                    </div>

                    {/* Interactive Trigger Button */}
                    <div className="flex items-center justify-between gap-3 pt-1">
                      <span className="text-xs text-slate-600 dark:text-slate-400">Isolation Forest Spike:</span>
                      <button
                        onClick={() => setAnomalyActive(!anomalyActive)}
                        className={`rounded-lg px-3 py-1.5 font-mono text-xs font-medium transition-all ${
                          anomalyActive
                            ? 'bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-500/40'
                            : 'bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white'
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
                      <span className="font-mono text-purple-700 dark:text-purple-300">Model: llama-3.1-8b-instant</span>
                      <span className="font-mono text-emerald-600 dark:text-emerald-400">Latency: 142ms</span>
                    </div>

                    {/* Chat Input & Regex Extraction */}
                    <div className="rounded-xl border border-purple-300 dark:border-purple-500/20 bg-purple-50/50 dark:bg-slate-900/70 p-3 space-y-2">
                      <div className="font-mono text-[11px] text-slate-600 dark:text-slate-400">User Natural Language Query:</div>
                      <div className="rounded-lg bg-white dark:bg-slate-950/80 p-2 text-xs font-mono text-purple-900 dark:text-purple-200 border border-purple-200 dark:border-transparent">
                        &quot;Front load washing machine under 25k for a family of 4&quot;
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="rounded bg-purple-100 dark:bg-purple-900/40 px-2 py-0.5 font-mono text-[10px] text-purple-800 dark:text-purple-300 border border-purple-300 dark:border-purple-700/30">
                          Budget: ≤ ₹25,000
                        </span>
                        <span className="rounded bg-blue-100 dark:bg-blue-900/40 px-2 py-0.5 font-mono text-[10px] text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-700/30">
                          Type: Front Load
                        </span>
                        <span className="rounded bg-cyan-100 dark:bg-cyan-900/40 px-2 py-0.5 font-mono text-[10px] text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-700/30">
                          Capacity: 7kg
                        </span>
                      </div>
                    </div>

                    {/* AI Recommender Output */}
                    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-3 text-xs space-y-1.5 shadow-sm dark:shadow-none">
                      <div className="flex items-center justify-between font-mono text-[10px] text-slate-500 dark:text-slate-400">
                        <span>Top Match (Cosine: 0.942):</span>
                        <span className="text-emerald-600 dark:text-emerald-400">In Stock</span>
                      </div>
                      <p className="font-medium text-slate-900 dark:text-white">Samsung 6.5 kg Hygiene Steam Front Load</p>
                      <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400">₹22,990 · 5★ Energy · Ceramic Heater</p>
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
                              ? 'bg-blue-500/20 text-blue-700 dark:text-blue-300 font-bold border border-blue-400 dark:border-blue-500/40'
                              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                          }`}
                        >
                          LRU
                        </button>
                        <button
                          onClick={() => setPagingAlgorithm('FIFO')}
                          className={`rounded px-2 py-0.5 font-mono text-[11px] ${
                            pagingAlgorithm === 'FIFO'
                              ? 'bg-blue-500/20 text-blue-700 dark:text-blue-300 font-bold border border-blue-400 dark:border-blue-500/40'
                              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                          }`}
                        >
                          FIFO
                        </button>
                      </div>
                      <span className="font-mono text-[11px] text-cyan-700 dark:text-cyan-300">
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
                              ? 'bg-blue-600 text-white scale-110 shadow-md shadow-blue-500/30'
                              : idx < pageStep
                              ? 'bg-slate-200 dark:bg-slate-800/80 text-slate-700 dark:text-slate-400'
                              : 'bg-slate-100 dark:bg-slate-900/60 text-slate-400 dark:text-slate-600'
                          }`}
                        >
                          {num}
                        </div>
                      ))}
                    </div>

                    {/* Frame Registers */}
                    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-3">
                      <div className="mb-2 flex items-center justify-between text-xs">
                        <span className="font-mono text-slate-500 dark:text-slate-400">RAM Frame Allocation:</span>
                        {currentFrame.hit ? (
                          <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                            HIT ✓
                          </span>
                        ) : (
                          <span className="rounded bg-rose-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-rose-600 dark:text-rose-400">
                            PAGE FAULT ✕
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {currentFrame.frames.map((val, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex flex-col items-center rounded-lg border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-950/70 py-2 shadow-sm dark:shadow-none"
                          >
                            <span className="font-mono text-[10px] text-slate-500">Frame {fIdx}</span>
                            <span className="font-mono text-lg font-bold text-slate-900 dark:text-white">
                              {val === -1 ? '—' : val}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Step Controls */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-slate-500 dark:text-slate-400">Simulate Access:</span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setPageStep((prev) => (prev > 0 ? prev - 1 : refString.length - 1))}
                          className="rounded bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 px-2.5 py-1 font-mono text-xs transition-colors"
                        >
                          ◀ Prev
                        </button>
                        <button
                          onClick={() => setPageStep((prev) => (prev + 1) % refString.length)}
                          className="rounded bg-blue-600/15 border border-blue-500/30 text-blue-700 dark:bg-blue-600/30 dark:border-blue-500/40 dark:text-blue-200 hover:bg-blue-600/25 dark:hover:bg-blue-600/50 px-2.5 py-1 font-mono text-xs transition-colors"
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
            <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/30 px-4 py-2 font-mono text-[10px] text-slate-500">
              <span className="text-slate-500 dark:text-slate-400">Interactive Demo</span>
              <span className="text-cyan-600 dark:text-cyan-400 sm:hidden">Swipe ⇆ to switch tabs</span>
              <span className="text-cyan-600 dark:text-cyan-400 hidden sm:inline">Select tabs above</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero