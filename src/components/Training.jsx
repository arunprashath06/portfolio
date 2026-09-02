import { motion } from 'motion/react'

function Training() {
  return (
    <section id="training" className="relative overflow-hidden px-6 py-32">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-300">
            04 / Training
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Learning by
            <br />
            <span className="text-slate-500">building real systems.</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]"
        >
          {/* Ambient glow */}
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative grid gap-10 p-8 md:grid-cols-[180px_1fr] md:p-12">

            {/* Timeline */}
            <div>
              <p className="text-xs tracking-[0.25em] text-cyan-300">
                2026
              </p>

              <div className="mt-5 h-px w-12 bg-cyan-400/30" />

              <p className="mt-5 text-sm text-white">
                Lovely Professional University
              </p>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Summer Training
              </p>
            </div>

            {/* Project */}
            <div>
              <p className="text-[10px] tracking-[0.3em] text-slate-600">
                TRAINING PROJECT
              </p>

              <h3 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Supply Chain Demand
                <br />
                Forecasting & Anomaly Detection
              </h3>

              <p className="mt-6 max-w-2xl leading-7 text-slate-400">
                A collaborative retail analytics system built around
                Walmart sales data, combining demand forecasting,
                anomaly detection, SQL analytics and an interactive
                dashboard.
              </p>

              {/* Stats */}
              <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xl font-semibold text-white">
                    421K+
                  </p>
                  <p className="mt-1 text-[10px] text-slate-500">
                    SALES RECORDS
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xl font-semibold text-white">
                    45
                  </p>
                  <p className="mt-1 text-[10px] text-slate-500">
                    STORES
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xl font-semibold text-white">
                    99
                  </p>
                  <p className="mt-1 text-[10px] text-slate-500">
                    DEPARTMENTS
                  </p>
                </div>
              </div>

              {/* Stack */}
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  'Python',
                  'Prophet',
                  'Scikit-learn',
                  'SQLite',
                  'Streamlit',
                  'Plotly',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-400"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="https://github.com/arunprashath06/Supply-chain-demand-forecasting"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="GITHUB"
                  className="rounded-full bg-white px-5 py-2.5 text-xs font-medium text-slate-950 transition hover:scale-105"
                >
                  View GitHub ↗
                </a>

                <a
                  href="https://supply-chain-demand-forecasting-arun.streamlit.app/"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="LIVE DEMO"
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2.5 text-xs text-cyan-300 transition hover:border-cyan-400/40"
                >
                  Live Dashboard ↗
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Training