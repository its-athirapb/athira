'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const animationFrameRef = useRef<number>()
  const lastUpdateRef = useRef(0)

  // Throttled mouse position update using requestAnimationFrame
  const updateMousePosition = useCallback((e: MouseEvent) => {
    const now = Date.now()
    if (now - lastUpdateRef.current < 16) return // Throttle to ~60fps
    
    lastUpdateRef.current = now
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
    
    animationFrameRef.current = requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    })
  }, [])

  const handleMouseEnter = useCallback(() => setIsHovering(true), [])
  const handleMouseLeave = useCallback(() => setIsHovering(false), [])

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const isSmallScreen = window.innerWidth <= 768
      setIsMobile(isTouchDevice || isSmallScreen)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    if (isMobile) {
      return () => window.removeEventListener('resize', checkMobile)
    }

    window.addEventListener('mousemove', updateMousePosition, { passive: true })
    
    // Add hover listeners to interactive elements with delegation
    const handleDocumentMouseOver = (e: Event) => {
      const target = e.target as Element
      if (target.matches('a, button, [role="button"], input, textarea, .cursor-hover')) {
        setIsHovering(true)
      }
    }
    
    const handleDocumentMouseOut = (e: Event) => {
      const target = e.target as Element
      if (target.matches('a, button, [role="button"], input, textarea, .cursor-hover')) {
        setIsHovering(false)
      }
    }
    
    document.addEventListener('mouseover', handleDocumentMouseOver, { passive: true })
    document.addEventListener('mouseout', handleDocumentMouseOut, { passive: true })

    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseover', handleDocumentMouseOver)
      document.removeEventListener('mouseout', handleDocumentMouseOut)
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isMobile, updateMousePosition])

  // Don't render cursor on mobile devices
  if (isMobile) {
    return null
  }

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed w-5 h-5 border-2 border-primary-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? '#00f5ff' : '#7916ff',
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />
      
      {/* Cursor follower */}
      <motion.div
        className="fixed w-2 h-2 bg-primary-500 rounded-full pointer-events-none z-[9998]"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          backgroundColor: isHovering ? '#00f5ff' : '#7916ff',
        }}
        transition={
          {
          type: 'spring',
          stiffness: 150,
          damping: 15,
          delay: 0.02,
        }}
      />
    </>
  )
}

export default CustomCursor