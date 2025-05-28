'use client'

import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  isMobile: boolean
  isLowEnd: boolean
  prefersReducedMotion: boolean
  connectionSpeed: 'slow' | 'fast' | 'unknown'
  deviceMemory: number
  hardwareConcurrency: number
}

export const usePerformance = (): PerformanceMetrics => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    isMobile: false,
    isLowEnd: false,
    prefersReducedMotion: false,
    connectionSpeed: 'unknown',
    deviceMemory: 4,
    hardwareConcurrency: 4
  })

  useEffect(() => {
    const detectPerformance = () => {
      // Mobile detection
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                       ('ontouchstart' in window) ||
                       (navigator.maxTouchPoints > 0) ||
                       (window.innerWidth <= 768)

      // Hardware detection
      const hardwareConcurrency = navigator.hardwareConcurrency || 4
      const deviceMemory = (navigator as any).deviceMemory || 4
      
      // Low-end device detection
      const isLowEnd = hardwareConcurrency <= 2 || deviceMemory <= 2

      // Motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      // Connection speed detection
      let connectionSpeed: 'slow' | 'fast' | 'unknown' = 'unknown'
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
      
      if (connection) {
        const effectiveType = connection.effectiveType
        if (effectiveType === 'slow-2g' || effectiveType === '2g') {
          connectionSpeed = 'slow'
        } else if (effectiveType === '3g' || effectiveType === '4g') {
          connectionSpeed = 'fast'
        }
      }

      setMetrics({
        isMobile,
        isLowEnd,
        prefersReducedMotion,
        connectionSpeed,
        deviceMemory,
        hardwareConcurrency
      })
    }

    detectPerformance()
    
    // Listen for changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = () => detectPerformance()
    
    mediaQuery.addEventListener('change', handleChange)
    window.addEventListener('resize', handleChange)
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
      window.removeEventListener('resize', handleChange)
    }
  }, [])

  return metrics
}

// Utility functions for performance optimization
export const getOptimalParticleCount = (metrics: PerformanceMetrics): number => {
  if (metrics.prefersReducedMotion) return 0
  if (metrics.isMobile && window.innerWidth < 480) return 0
  if (metrics.isMobile) return 15
  if (metrics.isLowEnd) return 25
  return 50
}

export const shouldUseReducedEffects = (metrics: PerformanceMetrics): boolean => {
  return metrics.isMobile || metrics.isLowEnd || metrics.prefersReducedMotion || metrics.connectionSpeed === 'slow'
}

export const getOptimalAnimationDuration = (metrics: PerformanceMetrics, defaultDuration: number): number => {
  if (metrics.prefersReducedMotion) return 0.01
  if (shouldUseReducedEffects(metrics)) return defaultDuration * 0.5
  return defaultDuration
}