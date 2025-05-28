'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { personalInfo } from '../data/demoData'

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [isMobile, setIsMobile] = useState(false)

  // Memoized mobile check function
  const checkMobile = useCallback(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    const isSmallScreen = window.innerWidth <= 768
    setIsMobile(isTouchDevice || isSmallScreen)
  }, [])

  // Optimized mouse move handler with throttling
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isMobile) {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
  }, [isMobile])

  useEffect(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })
    
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true })
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isMobile, checkMobile, handleMouseMove])

  const scrollToAbout = useCallback(() => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  // Memoized background style
  const backgroundStyle = useMemo(() => ({
    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.2) 0%, rgba(126, 34, 206, 0.1) 30%, transparent 60%)`
  }), [mousePosition.x, mousePosition.y])

  // Memoized cursor glow style
  const cursorGlowStyle = useMemo(() => ({
    left: `${mousePosition.x}%`,
    top: `${mousePosition.y}%`,
    transform: 'translate(-50%, -50%)',
    background: `radial-gradient(circle, rgba(147, 51, 234, 0.6) 0%, rgba(126, 34, 206, 0.4) 20%, rgba(107, 33, 168, 0.3) 40%, rgba(88, 28, 135, 0.2) 60%, rgba(69, 26, 108, 0.1) 80%, transparent 100%)`,
    filter: 'blur(40px)'
  }), [mousePosition.x, mousePosition.y])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 opacity-40"
        style={backgroundStyle}
      />
      
      {/* Cursor Glow Effect */}
      {!isMobile && (
        <div
          className="absolute pointer-events-none z-20 w-96 h-96 rounded-full transition-all duration-300 ease-out"
          style={cursorGlowStyle}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h1 
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="gradient-text">Athira P B</span>
          </motion.h1>
          
          <motion.p 
            className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {personalInfo.title}
          </motion.p>
          
          <motion.p 
            className="text-sm xs:text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-xl mx-auto px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.a
              href="/resume.pdf"
              download
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-neon-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} className="sm:w-5 sm:h-5" />
              <span>Download Resume</span>
            </motion.a>
            
            <motion.div className="flex space-x-3 sm:space-x-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 glass rounded-lg hover:bg-primary-500/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} className="sm:w-6 sm:h-6 text-primary-400" />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 glass rounded-lg hover:bg-primary-500/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} className="sm:w-6 sm:h-6 text-primary-400" />
              </motion.a>
              
              <motion.a
                href="mailto:contact@example.com"
                className="p-2.5 sm:p-3 glass rounded-lg hover:bg-primary-500/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} className="sm:w-6 sm:h-6 text-primary-400" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-white transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center space-y-2"
            >
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown size={20} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-300 to-transparent" />
    </section>
  )
}

export default HeroSection