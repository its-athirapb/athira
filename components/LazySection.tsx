'use client'

import { useState, useRef, useEffect, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface LazySectionProps {
  children: ReactNode
  threshold?: number
  rootMargin?: string
  fallback?: ReactNode
  className?: string
  animationDelay?: number
}

const LazySection = ({
  children,
  threshold = 0.1,
  rootMargin = '100px',
  fallback = null,
  className = '',
  animationDelay = 0
}: LazySectionProps) => {
  const [hasLoaded, setHasLoaded] = useState(false)
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView && !hasLoaded) {
      // Immediate loading for better performance
      if (animationDelay === 0) {
        setHasLoaded(true)
      } else {
        const timer = setTimeout(() => {
          setHasLoaded(true)
        }, Math.min(animationDelay, 50)) // Reduced max delay to 50ms
        
        return () => clearTimeout(timer)
      }
    }
  }, [inView, hasLoaded, animationDelay])

  return (
    <div ref={ref} className={className}>
      {hasLoaded ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4, 
            ease: 'easeOut',
            delay: animationDelay / 1000
          }}
        >
          {children}
        </motion.div>
      ) : (
        <div className="min-h-[400px] flex items-center justify-center">
          {fallback || (
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default LazySection