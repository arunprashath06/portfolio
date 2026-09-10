import { useRef, useEffect, useState, useCallback } from 'react'

export default function StarryName() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const animationFrameRef = useRef(null)
  const starsRef = useRef([])
  const particlesRef = useRef([])
  const opacityRef = useRef(0)
  const shootingStarRef = useRef(null)

  // Initialize static stars within bounding box
  const initStars = useCallback((width, height) => {
    const isDark = document.documentElement.classList.contains('dark')
    const starCount = 65
    const stars = []
    const colors = isDark
      ? ['#22d3ee', '#38bdf8', '#a855f7', '#c084fc', '#fef08a', '#ffffff']
      : ['#0891b2', '#0284c7', '#7c3aed', '#9333ea', '#d97706', '#4f46e5']

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseRadius: Math.random() * 1.8 + 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        twinkleSpeed: Math.random() * 0.05 + 0.02,
        twinkleOffset: Math.random() * Math.PI * 2,
        isCross: Math.random() > 0.65, // 35% are 4-pointed sparkle stars
        crossSize: Math.random() * 5 + 3,
        rotation: Math.random() * Math.PI,
        rotSpeed: (Math.random() - 0.5) * 0.02,
      })
    }
    starsRef.current = stars
  }, [])

  // Spawn dynamic stardust on mouse movement
  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const isDark = document.documentElement.classList.contains('dark')
    const colors = isDark
      ? ['#22d3ee', '#67e8f9', '#c084fc', '#fef08a', '#ffffff']
      : ['#0891b2', '#0284c7', '#7c3aed', '#d97706', '#4f46e5']

    for (let i = 0; i < 2; i++) {
      particlesRef.current.push({
        x: x + (Math.random() - 0.5) * 16,
        y: y + (Math.random() - 0.5) * 16,
        vx: (Math.random() - 0.5) * 1.8,
        vy: (Math.random() - 0.5) * 1.8 - 0.5,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        decay: Math.random() * 0.03 + 0.02,
      })
    }
  }

  // Draw 4-point sparkle star
  const drawSparkle = (ctx, x, y, size, color, alpha, rot) => {
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(rot)
    ctx.globalAlpha = alpha

    ctx.strokeStyle = color
    ctx.lineWidth = 1.2
    ctx.beginPath()
    // Horizontal and vertical sparkle beams
    ctx.moveTo(-size, 0)
    ctx.lineTo(size, 0)
    ctx.moveTo(0, -size)
    ctx.lineTo(0, size)
    ctx.stroke()

    // Inner diamond core
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()
    ctx.arc(0, 0, size * 0.25, 0, Math.PI * 2)
    ctx.fill()

    ctx.restore()
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const updateDimensions = () => {
      const rect = container.getBoundingClientRect()
      // Slightly larger canvas than the text to allow stars to float gently around edges
      canvas.width = rect.width + 80
      canvas.height = rect.height + 40
      initStars(canvas.width, canvas.height)
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    let shootingStarCooldown = 120

    const render = (time) => {
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Smooth opacity interpolation for enter/exit
      const targetOpacity = isHovered ? 1 : 0
      opacityRef.current += (targetOpacity - opacityRef.current) * 0.1

      if (opacityRef.current > 0.01) {
        ctx.save()
        ctx.globalAlpha = opacityRef.current

        // 1. Draw Subtle Cosmic Nebula Glow behind the text
        const nebulaX = canvas.width * 0.5
        const nebulaY = canvas.height * 0.5
        const nebulaRadius = Math.max(canvas.width, canvas.height) * 0.55

        const nebulaGrad = ctx.createRadialGradient(
          nebulaX,
          nebulaY,
          10,
          nebulaX,
          nebulaY,
          nebulaRadius
        )
        nebulaGrad.addColorStop(0, 'rgba(34, 211, 238, 0.18)')
        nebulaGrad.addColorStop(0.4, 'rgba(168, 85, 247, 0.14)')
        nebulaGrad.addColorStop(0.7, 'rgba(59, 130, 246, 0.08)')
        nebulaGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')

        ctx.fillStyle = nebulaGrad
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // 2. Render Static / Twinkling Stars
        starsRef.current.forEach((star) => {
          star.rotation += star.rotSpeed
          const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset)
          const starAlpha = Math.max(0.2, (twinkle + 1) * 0.45) * opacityRef.current

          if (star.isCross && twinkle > 0.2) {
            drawSparkle(
              ctx,
              star.x,
              star.y,
              star.crossSize * (0.8 + twinkle * 0.4),
              star.color,
              starAlpha,
              star.rotation
            )
          } else {
            ctx.save()
            ctx.globalAlpha = starAlpha
            ctx.fillStyle = star.color
            ctx.shadowColor = star.color
            ctx.shadowBlur = 8
            ctx.beginPath()
            ctx.arc(star.x, star.y, star.baseRadius * (0.8 + twinkle * 0.3), 0, Math.PI * 2)
            ctx.fill()
            ctx.restore()
          }
        })

        // 3. Render Shooting Star
        shootingStarCooldown--
        if (shootingStarCooldown <= 0 && Math.random() < 0.04 && !shootingStarRef.current) {
          shootingStarRef.current = {
            x: Math.random() * (canvas.width * 0.6),
            y: Math.random() * (canvas.height * 0.4),
            length: Math.random() * 45 + 30,
            speed: Math.random() * 7 + 6,
            angle: Math.PI / 5 + (Math.random() - 0.5) * 0.2,
            life: 1,
            color: '#38bdf8',
          }
          shootingStarCooldown = 180 + Math.random() * 120
        }

        if (shootingStarRef.current) {
          const ss = shootingStarRef.current
          ss.x += Math.cos(ss.angle) * ss.speed
          ss.y += Math.sin(ss.angle) * ss.speed
          ss.life -= 0.025

          const tailX = ss.x - Math.cos(ss.angle) * ss.length
          const tailY = ss.y - Math.sin(ss.angle) * ss.length

          const grad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y)
          grad.addColorStop(0, 'rgba(56, 189, 248, 0)')
          grad.addColorStop(1, `rgba(255, 255, 255, ${ss.life * opacityRef.current})`)

          ctx.strokeStyle = grad
          ctx.lineWidth = 1.8
          ctx.beginPath()
          ctx.moveTo(tailX, tailY)
          ctx.lineTo(ss.x, ss.y)
          ctx.stroke()

          if (ss.life <= 0 || ss.x > canvas.width || ss.y > canvas.height) {
            shootingStarRef.current = null
          }
        }

        // 4. Render Dynamic Interactive Cursor Stardust
        particlesRef.current.forEach((p, idx) => {
          p.x += p.vx
          p.y += p.vy
          p.alpha -= p.decay
          p.radius *= 0.97

          if (p.alpha > 0.05 && p.radius > 0.3) {
            ctx.save()
            ctx.globalAlpha = p.alpha * opacityRef.current
            ctx.fillStyle = p.color
            ctx.shadowColor = p.color
            ctx.shadowBlur = 6
            ctx.beginPath()
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
            ctx.fill()
            ctx.restore()
          } else {
            particlesRef.current.splice(idx, 1)
          }
        })

        ctx.restore()
      }

      // Only schedule next frame if still hovered or still fading out
      if (isHovered || opacityRef.current > 0.005) {
        animationFrameRef.current = requestAnimationFrame(render)
      } else {
        opacityRef.current = 0
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        animationFrameRef.current = null
      }
    }

    if (isHovered || opacityRef.current > 0.005) {
      if (!animationFrameRef.current) {
        animationFrameRef.current = requestAnimationFrame(render)
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
      window.removeEventListener('resize', updateDimensions)
    }
  }, [isHovered, initStars])

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => {
        setIsHovered(true)
        setTimeout(() => setIsHovered(false), 2400)
      }}
      className="relative inline-block cursor-pointer select-none group"
    >
      {/* Starry Sky Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute -top-5 -left-10 z-0 transition-opacity duration-300"
      />

      {/* Atmospheric Starry Pill Indicator on Hover */}
      <div
        className={`pointer-events-none absolute -top-4 right-0 flex items-center gap-1 rounded-full border border-cyan-500/40 dark:border-cyan-400/40 bg-white/90 dark:bg-slate-950/80 px-2.5 py-0.5 text-[9px] font-mono font-medium text-cyan-700 dark:text-cyan-300 backdrop-blur-md shadow-md dark:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300 ${
          isHovered ? 'opacity-100 -translate-y-1' : 'opacity-0 translate-y-1'
        }`}
      >
        <span className="text-[11px] animate-spin" style={{ animationDuration: '4s' }}>✨</span>
        <span>STARRY SKY</span>
      </div>

      {/* Heading Text */}
      <h1 className="relative z-10 mt-4 text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight">
        <span className="text-slate-900 dark:text-white transition-colors duration-300 drop-shadow-sm">
          Arun
        </span>{' '}
        <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 dark:from-cyan-300 dark:via-sky-400 dark:to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-300 group-hover:drop-shadow-[0_0_45px_rgba(34,211,238,0.6)]">
          Prashath
        </span>
      </h1>
    </div>
  )
}

