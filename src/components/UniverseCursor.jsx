import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

const particles = [
  { x: -16, y: -7, size: 2, duration: 2.2 },
  { x: 14, y: -12, size: 1.5, duration: 1.8 },
  { x: 20, y: 8, size: 2, duration: 2.7 },
  { x: -12, y: 15, size: 1.5, duration: 2.1 },
  { x: 4, y: 19, size: 1, duration: 1.6 },
]

function UniverseCursor() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [hoverText, setHoverText] = useState('')

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const x = useSpring(mouseX, {
    stiffness: 700,
    damping: 40,
    mass: 0.2,
  })

  const y = useSpring(mouseY, {
    stiffness: 700,
    damping: 40,
    mass: 0.2,
  })

  useEffect(() => {
    const desktop = window.matchMedia('(pointer: fine)').matches
    setIsDesktop(desktop)

    if (!desktop) return

    const handleMove = (event) => {
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)

      const target = event.target.closest('[data-cursor]')

      setHoverText(
        target?.getAttribute('data-cursor') || '',
      )
    }

    window.addEventListener('mousemove', handleMove)

    return () => {
      window.removeEventListener('mousemove', handleMove)
    }
  }, [mouseX, mouseY])

  if (!isDesktop) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{ x, y }}
    >
      {/* Atmospheric glow */}
      <div className="absolute -left-8 -top-8 h-16 w-16 rounded-full bg-cyan-400/10 blur-xl" />

      {/* Tiny galaxy */}
      <motion.div
        className="absolute -left-5 -top-5 h-10 w-10 rounded-full border border-cyan-300/20"
        animate={{
          rotate: 360,
          scale: [1, 1.04, 1],
        }}
        transition={{
          rotate: {
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
          },
          scale: {
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      />

      {/* Tilted galaxy ring */}
      <motion.div
        className="absolute -left-4 -top-3 h-7 w-14 rounded-[50%] border border-purple-400/30"
        animate={{ rotate: -360 }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Orbiting moon */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-purple-300 shadow-[0_0_8px_rgba(192,132,252,0.9)]"
        animate={{
          x: [0, 13, 0, -13, 0],
          y: [-12, 0, 12, 0, -12],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating particles */}
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-cyan-200"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            opacity: [0.15, 0.9, 0.15],
            scale: [0.6, 1.4, 0.6],
            x: [0, index % 2 ? 3 : -3, 0],
            y: [0, index % 2 ? -3 : 3, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.2,
          }}
        />
      ))}

      {/* Core */}
      <motion.div
        className="relative h-[5px] w-[5px] rounded-full bg-white"
        animate={{
          scale: [1, 1.5, 1],
          boxShadow: [
            '0 0 5px rgba(255,255,255,0.8), 0 0 10px rgba(34,211,238,0.6)',
            '0 0 8px rgba(255,255,255,1), 0 0 18px rgba(34,211,238,1)',
            '0 0 5px rgba(255,255,255,0.8), 0 0 10px rgba(34,211,238,0.6)',
          ],
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
        }}
      />

      {/* Hover command */}
      {hoverText && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            x: 12,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 12,
          }}
          className="absolute left-1 top-4 whitespace-nowrap rounded-full border border-cyan-300/20 bg-[#030712]/80 px-3 py-1.5 text-[9px] font-medium tracking-[0.25em] text-cyan-200 shadow-xl shadow-cyan-500/10 backdrop-blur-xl"
        >
          {hoverText}
        </motion.div>
      )}
    </motion.div>
  )
}

export default UniverseCursor