'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const [shouldRender, setShouldRender] = useState(true)
  const [particleCount, setParticleCount] = useState(50)

  useEffect(() => {
    // Performance detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    // Adjust particle count based on device capabilities - Reduced for better performance
    if (prefersReducedMotion) {
      setShouldRender(false)
      return
    }
    
    if (isMobile) {
      setParticleCount(window.innerWidth < 480 ? 0 : 8) // Reduced from 15 to 8
    } else if (isLowEnd) {
      setParticleCount(15) // Reduced from 25 to 15
    } else {
      setParticleCount(25) // Reduced from 50 to 25
    }
    
    if (particleCount === 0) {
      setShouldRender(false)
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
    }> = []

    const colors = ['#7916ff', '#bf00ff', '#00f5ff', '#9f75ff']

    // Create particles with dynamic count
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }

    let lastTime = 0
    const targetFPS = 24 // Further reduced FPS for better performance
    const frameInterval = 1000 / targetFPS
    
    const animate = (currentTime: number) => {
      if (currentTime - lastTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }
      
      lastTime = currentTime
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle with reduced effects on mobile
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = particle.color
        
        // Only add glow effect on desktop
        if (particleCount > 25) {
          ctx.shadowBlur = 10
          ctx.shadowColor = particle.color
        }
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        // Draw connections only on high-end desktop for performance
        if (particleCount > 20 && !isMobile && !isLowEnd) {
          particles.slice(index + 1).forEach(otherParticle => {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 80) { // Reduced connection distance
              ctx.save()
              ctx.globalAlpha = (80 - distance) / 80 * 0.15 // Reduced opacity
              ctx.strokeStyle = particle.color
              ctx.lineWidth = 0.3 // Thinner lines
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.stroke()
              ctx.restore()
            }
          })
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [particleCount])

  if (!shouldRender) {
    return null
  }

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  )
}

export default ParticleBackground