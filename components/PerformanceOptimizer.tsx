'use client'

import { useEffect } from 'react'

// Performance optimization utilities
class PerformanceOptimizer {
  private static instance: PerformanceOptimizer
  private observers: Map<string, IntersectionObserver> = new Map()
  private prefetchedResources: Set<string> = new Set()

  static getInstance(): PerformanceOptimizer {
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer()
    }
    return PerformanceOptimizer.instance
  }

  // Preload critical resources
  preloadResource(href: string, as: string = 'script'): void {
    if (this.prefetchedResources.has(href)) return

    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = href
    link.as = as
    link.crossOrigin = 'anonymous'
    document.head.appendChild(link)
    
    this.prefetchedResources.add(href)
  }

  // Optimize images with intersection observer
  optimizeImages(): void {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            if (img.dataset.src) {
              img.src = img.dataset.src
              img.removeAttribute('data-src')
              imageObserver.unobserve(img)
            }
          }
        })
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01
      })

      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img)
      })

      this.observers.set('images', imageObserver)
    }
  }

  // Prefetch next page resources
  prefetchNextPage(): void {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        const links = document.querySelectorAll('a[href^="/"]')
        links.forEach((link) => {
          const href = (link as HTMLAnchorElement).href
          if (!this.prefetchedResources.has(href)) {
            this.preloadResource(href, 'document')
          }
        })
      })
    }
  }

  // Optimize CSS delivery
  optimizeCSS(): void {
    // Remove unused CSS classes (basic implementation)
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
    stylesheets.forEach((stylesheet) => {
      const link = stylesheet as HTMLLinkElement
      if (link.media !== 'all') {
        link.media = 'all'
      }
    })
  }

  // Monitor Core Web Vitals
  monitorWebVitals(): void {
    if ('PerformanceObserver' in window) {
      // Monitor LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1] as any
        if (lastEntry && process.env.NODE_ENV === 'development') {
          console.log('LCP:', lastEntry.startTime)
        }
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // Monitor FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (process.env.NODE_ENV === 'development') {
            console.log('FID:', entry.processingStart - entry.startTime)
          }
        })
      })
      fidObserver.observe({ entryTypes: ['first-input'] })

      // Monitor CLS (Cumulative Layout Shift)
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        })
        if (process.env.NODE_ENV === 'development') {
          console.log('CLS:', clsValue)
        }
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })
    }
  }

  // Clean up observers
  cleanup(): void {
    this.observers.forEach((observer) => {
      observer.disconnect()
    })
    this.observers.clear()
  }
}

// React component for performance optimization
const PerformanceOptimizerComponent = () => {
  useEffect(() => {
    const optimizer = PerformanceOptimizer.getInstance()
    
    // Initialize optimizations
    optimizer.optimizeImages()
    optimizer.optimizeCSS()
    optimizer.monitorWebVitals()
    
    // Prefetch resources after initial load
    const timer = setTimeout(() => {
      optimizer.prefetchNextPage()
    }, 2000)

    return () => {
      clearTimeout(timer)
      optimizer.cleanup()
    }
  }, [])

  return null // This component doesn't render anything
}

export default PerformanceOptimizerComponent
export { PerformanceOptimizer }