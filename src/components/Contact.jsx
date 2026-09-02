import { motion } from 'motion/react'
import { useForm } from '@formspree/react'

const FORMSPREE_FORM_ID = 'mjyvryyw'

const contactLinks = [
  {
    label: 'Email',
    value: 'arunprashathpersonal@gmail.com',
    href: 'mailto:arunprashathpersonal@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/arunprashath',
    href: 'https://www.linkedin.com/in/arunprashath/',
  },
  {
    label: 'GitHub',
    value: 'github.com/arunprashath06',
    href: 'https://github.com/arunprashath06',
  },
]

function Contact() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID)

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32 sm:py-40"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-cyan-300"
        >
          06 / Contact
        </motion.p>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">

          {/* Left side */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
            >
              Let's build
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                something interesting.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
            >
              Have an idea, opportunity, internship, project or simply
              want to connect? Send me a message directly through the form.
            </motion.p>

            {/* Contact links */}
            <div className="mt-10 space-y-3">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={
                    link.label === 'Email'
                      ? undefined
                      : '_blank'
                  }
                  rel={
                    link.label === 'Email'
                      ? undefined
                      : 'noreferrer'
                  }
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ x: 4 }}
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.04]"
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600">
                      {link.label}
                    </p>

                    <p className="mt-1 text-sm text-slate-300 transition-colors duration-300 group-hover:text-white">
                      {link.value}
                    </p>
                  </div>

                  <span className="text-slate-600 transition-colors duration-300 group-hover:text-cyan-300">
                    ↗
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl sm:p-8"
          >
            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[420px] flex-col items-center justify-center text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10">
                  <span className="text-2xl text-cyan-300">
                    ✓
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  Message sent.
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                  Thanks for reaching out. I'll get back to you as soon
                  as possible.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                    Send a message
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    Start a conversation.
                  </h3>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs text-slate-500"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-700 transition focus:border-cyan-300/30 focus:bg-black/30"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs text-slate-500"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-700 transition focus:border-cyan-300/30 focus:bg-black/30"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-xs text-slate-500"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      required
                      placeholder="What would you like to discuss?"
                      className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-700 transition focus:border-cyan-300/30 focus:bg-black/30"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs text-slate-500"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="6"
                      placeholder="Write your message..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-700 transition focus:border-cyan-300/30 focus:bg-black/30"
                    />
                  </div>

                  {/* Error */}
                  {state.errors && (
                    <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm leading-6 text-red-300">
                      Something went wrong while sending the message.
                      Please try again.
                    </div>
                  )}

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    whileHover={{
                      scale: state.submitting ? 1 : 1.02,
                    }}
                    whileTap={{
                      scale: state.submitting ? 1 : 0.98,
                    }}
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-3.5 text-sm font-medium text-slate-950 transition disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {state.submitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950/20 border-t-slate-950" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <span>↗</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>

        {/* Bottom identity */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 border-t border-white/5 pt-6"
        >
          <p className="text-xs tracking-wide text-slate-600">
            Arun Prashath · B.Tech CSE · AI & ML
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact