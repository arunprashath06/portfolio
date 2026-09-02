import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const certificates = [
  {
    title: 'Programming in JAVA',
    issuer: 'LPU × iamneo',
    date: 'May 2026',
    file: '/certificates/java.pdf',
    type: 'pdf',
  },
  {
    title: 'Programming Using C++',
    issuer: 'Infosys',
    date: 'August 2025',
    file: '/certificates/infosys-cpp.pdf',
    type: 'pdf',
  },
  {
    title: 'Computer Programming',
    issuer: 'LPU × iamneo',
    date: 'May 2025',
    file: '/certificates/computer-programming.pdf',
    type: 'pdf',
  },
  {
    title: 'Object Oriented Programming',
    issuer: 'LPU × iamneo',
    date: 'June 2026',
    file: '/certificates/oop.pdf',
    type: 'pdf',
  },
  {
    title: 'Data Structure and Algorithm',
    issuer: 'LPU × iamneo',
    date: 'June 2026',
    file: '/certificates/dsa.pdf',
    type: 'pdf',
  },
  {
    title: 'Database Management System Part - 1',
    issuer: 'Infosys',
    date: 'July 2026',
    file: '/certificates/dbms.pdf',
    type: 'pdf',
  },
  {
    title: 'Elementary English as a Second Language',
    issuer: 'Saylor Academy',
    date: 'April 2025',
    file: '/certificates/english.pdf',
    type: 'pdf',
  },
  {
    title: 'Essentials of Cyber Security',
    issuer: 'Tech Veda MOOC',
    date: 'March 2025',
    file: '/certificates/cyber-security.png',
    type: 'image',
  },
  {
    title: 'Effective Time Management',
    issuer: 'Master Union',
    date: 'October 2024',
    file: '/certificates/time-management.png',
    type: 'image',
  },
]

function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate)
  }

  const closeCertificate = () => {
    setSelectedCertificate(null)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeCertificate()
      }
    }

    if (selectedCertificate) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedCertificate])

  return (
    <>
      <section
        id="certifications"
        className="relative overflow-hidden px-6 py-32 sm:py-40"
      >
        {/* Ambient background */}
        <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-cyan-500/5 blur-[130px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-500/5 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
              05 / Certifications
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Proof of{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                continuous learning.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              Certifications and learning milestones across programming,
              computer science, cybersecurity and professional development.
            </p>
          </motion.div>

          {/* Certificate cards */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate, index) => (
              <motion.button
                key={`${certificate.title}-${certificate.issuer}`}
                type="button"
                onClick={() => openCertificate(certificate)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.985 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 text-left transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.045]"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">

                  {/* Number + indicator */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tracking-[0.2em] text-slate-600">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="text-xs text-slate-600 transition-colors duration-300 group-hover:text-cyan-300">
                      View ↗
                    </span>
                  </div>

                  {/* Certificate icon */}
                  <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/10 bg-cyan-300/5 transition-all duration-300 group-hover:border-cyan-300/25 group-hover:bg-cyan-300/10">
                    <span className="text-lg text-cyan-300">
                      ✦
                    </span>
                  </div>

                  {/* Certificate title */}
                  <h3 className="mt-6 min-h-[58px] text-lg font-medium leading-7 text-white">
                    {certificate.title}
                  </h3>

                  {/* Issuer */}
                  <p className="mt-3 text-sm text-slate-400">
                    {certificate.issuer}
                  </p>

                  {/* Date */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                    <span className="text-xs text-slate-600">
                      {certificate.date}
                    </span>

                    <span className="text-xs text-slate-600 transition-colors duration-300 group-hover:text-cyan-300">
                      Open certificate
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate viewer */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-6 lg:p-8"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeCertificate()
              }
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              transition={{
                type: 'spring',
                stiffness: 220,
                damping: 24,
              }}
              onMouseDown={(event) => event.stopPropagation()}
              className="relative flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#080d18] shadow-2xl shadow-black/50"
            >

              {/* Modal header */}
              <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="min-w-0 pr-4">
                  <h3 className="truncate text-sm font-medium text-white sm:text-base">
                    {selectedCertificate.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {selectedCertificate.issuer}
                    {' · '}
                    {selectedCertificate.date}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeCertificate}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all duration-200 hover:border-cyan-300/30 hover:bg-white/5 hover:text-white"
                  aria-label="Close certificate"
                >
                  ✕
                </button>
              </div>

              {/* Certificate content */}
              <div className="min-h-0 flex-1 overflow-auto bg-[#111827] p-3 sm:p-6">

                {selectedCertificate.type === 'image' ? (
                  <div className="flex min-h-full items-center justify-center">
                    <img
                      src={selectedCertificate.file}
                      alt={`${selectedCertificate.title} certificate`}
                      className="max-h-[82vh] max-w-full rounded-lg object-contain shadow-2xl"
                    />
                  </div>
                ) : (
                  <iframe
                    src={selectedCertificate.file}
                    title={`${selectedCertificate.title} certificate`}
                    className="h-[80vh] min-h-[500px] w-full rounded-lg border border-white/10 bg-white"
                  />
                )}

              </div>

              {/* Modal footer */}
              <div className="flex shrink-0 items-center justify-between border-t border-white/10 bg-[#080d18] px-5 py-3">
                <span className="hidden text-xs text-slate-600 sm:block">
                  Press ESC or click outside to close
                </span>

                <a
                  href={selectedCertificate.file}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto text-xs text-cyan-300 transition-colors hover:text-cyan-200"
                >
                  Open full certificate ↗
                </a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Certifications