'use client'

import { useEffect, useState } from 'react'
import { usePerformance } from '../hooks/usePerformance'

interface PerformanceMetrics {
  fcp?: number // First Contentful Paint
  lcp?: number // Largest Contentful Paint
  fid?: number // First Input Delay
  cls?: number // Cumulative Layout Shift
  ttfb?: number // Time to First Byte
}

const PerformanceMonitor = () => {
  // Early return for production builds to prevent any rendering
  if (process.env.NODE_ENV === 'production') {
    return null
  }

  const [metrics, setMetrics] = useState<PerformanceMetrics>({})
  const { isMobile, isLowEnd: isLowEndDevice, connectionSpeed } = usePerformance()
  const hasSlowConnection = connectionSpeed === 'slow'
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show performance monitor in development or when explicitly enabled
    // For production builds, completely disable the monitor
    const isDevelopment = process.env.NODE_ENV === 'development'
    const isExplicitlyEnabled = typeof window !== 'undefined' && 
                               localStorage.getItem('show-performance-monitor') === 'true'
    
    const showMonitor = isDevelopment || isExplicitlyEnabled
    setIsVisible(showMonitor)

    if (!showMonitor) return

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
            }
            break
          case 'largest-contentful-paint':
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }))
            break
          case 'first-input':
            setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }))
            break
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              setMetrics(prev => ({ 
                ...prev, 
                cls: (prev.cls || 0) + (entry as any).value 
              }))
            }
            break
        }
      }
    })

    // Observe performance entries
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] })
    } catch (e) {
      console.warn('Performance Observer not supported')
    }

    // Get navigation timing
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigation) {
      setMetrics(prev => ({ 
        ...prev, 
        ttfb: navigation.responseStart - navigation.requestStart 
      }))
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const getScoreColor = (metric: string, value: number) => {
    const thresholds: Record<string, { good: number; poor: number }> = {
      fcp: { good: 1800, poor: 3000 },
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      ttfb: { good: 800, poor: 1800 }
    }

    const threshold = thresholds[metric]
    if (!threshold) return 'text-gray-400'

    if (value <= threshold.good) return 'text-green-400'
    if (value <= threshold.poor) return 'text-yellow-400'
    return 'text-red-400'
  }

  const formatValue = (metric: string, value: number) => {
    if (metric === 'cls') {
      return value.toFixed(3)
    }
    return Math.round(value) + 'ms'
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-lg p-3 text-xs font-mono max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-white font-semibold">Performance</h3>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="text-gray-300">{key.toUpperCase()}:</span>
            <span className={getScoreColor(key, value)}>
              {formatValue(key, value)}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-2 pt-2 border-t border-gray-700 space-y-1">
        <div className="flex justify-between">
          <span className="text-gray-300">Device:</span>
          <span className="text-blue-400">
            {isMobile ? 'Mobile' : 'Desktop'}
            {isLowEndDevice && ' (Low-end)'}
          </span>
        </div>
        {hasSlowConnection && (
          <div className="flex justify-between">
            <span className="text-gray-300">Connection:</span>
            <span className="text-orange-400">Slow</span>
          </div>
        )}
      </div>
      
      <div className="mt-2 text-gray-500 text-xs">
        Press F12 → Console for detailed metrics
      </div>
    </div>
  )
}

export default PerformanceMonitor