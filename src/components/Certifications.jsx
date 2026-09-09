import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const certCategories = [
  'All',
  'Programming & Core CS',
  'AI & Engineering',
  'Security & Skills',
]

const certificates = [
  {
    title: 'Campus to Corporate: Data & AI Engineer Program',
    category: 'AI & Engineering',
    badge: 'Summer Training Program',
    issuer: 'Lovely Professional University',
    date: 'July 2026',
    file: '/certificates/summer training.pdf',
    downloadName: 'LPU_Data_AI_Engineer_Certificate.pdf',
    type: 'pdf',
    credentialId: 'LPU-DAIE-2026',
  },
  {
    title: 'Programming in JAVA',
    category: 'Programming & Core CS',
    issuer: 'LPU × iamneo',
    date: 'May 2026',
    file: '/certificates/java.pdf',
    downloadName: 'Programming_In_Java_Certificate.pdf',
    type: 'pdf',
    credentialId: 'IAMNEO-JAVA-2026',
  },
  {
    title: 'Programming Using C++',
    category: 'Programming & Core CS',
    issuer: 'Infosys',
    date: 'August 2025',
    file: '/certificates/infosys-cpp.pdf',
    downloadName: 'Infosys_Programming_Cpp_Certificate.pdf',
    type: 'pdf',
    credentialId: 'INFOSYS-CPP-2025',
  },
  {
    title: 'Computer Programming',
    category: 'Programming & Core CS',
    issuer: 'LPU × iamneo',
    date: 'May 2025',
    file: '/certificates/computer-programming.pdf',
    downloadName: 'Computer_Programming_Certificate.pdf',
    type: 'pdf',
    credentialId: 'IAMNEO-CP-2025',
  },
  {
    title: 'Object Oriented Programming',
    category: 'Programming & Core CS',
    issuer: 'LPU × iamneo',
    date: 'June 2026',
    file: '/certificates/oop.pdf',
    downloadName: 'OOP_Certificate.pdf',
    type: 'pdf',
    credentialId: 'IAMNEO-OOP-2026',
  },
  {
    title: 'Data Structure and Algorithm',
    category: 'Programming & Core CS',
    issuer: 'LPU × iamneo',
    date: 'June 2026',
    file: '/certificates/dsa.pdf',
    downloadName: 'DSA_Certificate.pdf',
    type: 'pdf',
    credentialId: 'IAMNEO-DSA-2026',
  },
  {
    title: 'Database Management System Part - 1',
    category: 'Programming & Core CS',
    issuer: 'Infosys',
    date: 'July 2026',
    file: '/certificates/dbms.pdf',
    downloadName: 'Infosys_DBMS_Certificate.pdf',
    type: 'pdf',
    credentialId: 'INFOSYS-DBMS-2026',
  },
  {
    title: 'Essentials of Cyber Security',
    category: 'Security & Skills',
    issuer: 'Tech Veda MOOC',
    date: 'March 2025',
    file: '/certificates/cyber-security.png',
    downloadName: 'Cyber_Security_Certificate.png',
    type: 'image',
    credentialId: 'TECHVEDA-SEC-2025',
  },
  {
    title: 'Elementary English as a Second Language',
    category: 'Security & Skills',
    issuer: 'Saylor Academy',
    date: 'April 2025',
    file: '/certificates/english.pdf',
    downloadName: 'English_Certificate.pdf',
    type: 'pdf',
    credentialId: 'SAYLOR-ENG-2025',
  },
  {
    title: 'Effective Time Management',
    category: 'Security & Skills',
    issuer: 'Master Union',
    date: 'October 2024',
    file: '/certificates/time-management.png',
    downloadName: 'Time_Management_Certificate.png',
    type: 'image',
    credentialId: 'MU-TM-2024',
  },
]

function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const filteredCertificates =
    selectedCategory === 'All'
      ? certificates
      : certificates.filter((c) => c.category === selectedCategory)

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
        className="relative overflow-hidden px-4 sm:px-6 py-24 sm:py-36"
      >
        {/* Ambient background - GPU Accelerated */}
        <div className="pointer-events-none absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full [background:radial-gradient(circle,rgba(6,182,212,0.06)_0%,transparent_70%)]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full [background:radial-gradient(circle,rgba(147,51,234,0.06)_0%,transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Section heading & Filter Tabs */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                05 / Certifications
              </p>

              <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Proof of{' '}
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  continuous learning.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
                Verified credentials across AI engineering, computer science, and
                software development. Click any card to inspect or download instantly.
              </p>
            </motion.div>

            {/* Filter Tabs - Smooth swipeable on mobile */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar rounded-2xl border border-white/10 bg-slate-900/60 p-1.5 backdrop-blur-md max-w-full">
              {certCategories.map((cat) => {
                const isSelected = selectedCategory === cat
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative rounded-xl px-3.5 py-2 text-xs font-medium transition-colors duration-200 ${
                      isSelected
                        ? 'text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeCertFilter"
                        className="absolute inset-0 rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Certificate Cards Grid - Visible Credential Badges & Direct Download */}
          <motion.div layout className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredCertificates.map((certificate, index) => (
                <motion.div
                  key={`${certificate.title}-${certificate.issuer}`}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.035] to-white/[0.01] p-6 transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.05] shadow-lg"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div>
                    {/* Top Credential Header: Certificate ID & Badge */}
                    <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-3">
                      <span className="font-mono text-[11px] tracking-wider text-slate-500">
                        {certificate.credentialId}
                      </span>

                      {certificate.badge ? (
                        <span className="rounded-full border border-purple-400/30 bg-purple-400/15 px-2.5 py-0.5 text-[10px] font-semibold text-purple-200">
                          {certificate.badge}
                        </span>
                      ) : (
                        <span className="rounded-md border border-cyan-400/20 bg-cyan-400/10 px-2 py-0.5 text-[10px] font-medium text-cyan-300">
                          {certificate.type === 'pdf' ? 'PDF Doc' : 'Verified PNG'}
                        </span>
                      )}
                    </div>

                    {/* Certificate Emblem & Title */}
                    <div className="mt-5 flex items-start gap-3.5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 transition-all duration-300 group-hover:border-cyan-300/40 group-hover:bg-cyan-300/20">
                        <span className="text-base text-cyan-300">✦</span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-base font-semibold leading-snug text-white group-hover:text-cyan-200 transition-colors">
                          {certificate.title}
                        </h3>
                        <p className="mt-1 text-xs text-slate-400">
                          {certificate.issuer}
                        </p>
                      </div>
                    </div>

                    {/* Date */}
                    <p className="mt-4 text-[11px] font-mono text-slate-500">
                      Completed: {certificate.date}
                    </p>
                  </div>

                  {/* Visible Two-Action Strip: Preview First + Direct Download */}
                  <div className="mt-6 flex items-center gap-2 border-t border-white/5 pt-4">
                    {/* Preview Button */}
                    <button
                      type="button"
                      onClick={() => openCertificate(certificate)}
                      className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-cyan-400/30 bg-cyan-400/10 py-2 text-xs font-medium text-cyan-200 transition hover:bg-cyan-400/20 hover:border-cyan-300"
                    >
                      <span>Preview</span>
                      <span>↗</span>
                    </button>

                    {/* Direct Download Button */}
                    <a
                      href={certificate.file}
                      download={certificate.downloadName}
                      className="flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-slate-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                      title={`Download ${certificate.downloadName}`}
                    >
                      <svg
                        className="h-3.5 w-3.5"
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
                      <span>Download</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Certificate Viewer Modal */}
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
                stiffness: 240,
                damping: 26,
              }}
              onMouseDown={(event) => event.stopPropagation()}
              className="relative flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#080d18] shadow-2xl shadow-black/50"
            >
              {/* Modal header */}
              <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-6 py-4">
                <div className="min-w-0 pr-4">
                  {selectedCertificate.badge && (
                    <span className="mb-1 inline-block rounded-md border border-purple-400/30 bg-purple-400/10 px-2 py-0.5 text-[10px] font-semibold text-purple-200">
                      {selectedCertificate.badge}
                    </span>
                  )}
                  <h3 className="truncate text-sm font-semibold text-white sm:text-base">
                    {selectedCertificate.title}
                  </h3>

                  <p className="mt-0.5 text-xs text-slate-400">
                    {selectedCertificate.issuer} · {selectedCertificate.date} · Credential ID: {selectedCertificate.credentialId}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedCertificate.file}
                    download={selectedCertificate.downloadName || 'certificate.pdf'}
                    className="flex items-center gap-1.5 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-200 transition hover:bg-cyan-400/20"
                    title="Download Certificate"
                  >
                    <svg
                      className="h-3.5 w-3.5"
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
                    <span>Download</span>
                  </a>

                  <button
                    type="button"
                    onClick={closeCertificate}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all duration-200 hover:border-cyan-300/30 hover:bg-white/5 hover:text-white"
                    aria-label="Close certificate"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Certificate content */}
              <div className="min-h-0 flex-1 overflow-auto bg-[#111827] p-3 sm:p-6">
                {selectedCertificate.type === 'image' ? (
                  <div className="flex min-h-full items-center justify-center">
                    <img
                      src={selectedCertificate.file}
                      alt={`${selectedCertificate.title} certificate`}
                      className="max-h-[80vh] max-w-full rounded-lg object-contain shadow-2xl"
                    />
                  </div>
                ) : (
                  <iframe
                    src={selectedCertificate.file}
                    title={`${selectedCertificate.title} certificate`}
                    className="h-[78vh] min-h-[500px] w-full rounded-lg border border-white/10 bg-white"
                  />
                )}
              </div>

              {/* Modal footer */}
              <div className="flex shrink-0 items-center justify-between border-t border-white/10 bg-[#080d18] px-6 py-3">
                <span className="hidden text-xs text-slate-500 sm:block">
                  Press ESC or click outside to close
                </span>

                <a
                  href={selectedCertificate.file}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto text-xs font-medium text-cyan-300 transition-colors hover:text-cyan-200"
                >
                  Open full certificate in new tab ↗
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