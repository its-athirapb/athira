'use client'

import { useEffect } from 'react'

const ServiceWorkerRegistration = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      const registerSW = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/'
          })

          console.log('Service Worker registered successfully:', registration)

          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available, show update notification
                  if (confirm('New version available! Reload to update?')) {
                    window.location.reload()
                  }
                }
              })
            }
          })

          // Listen for messages from service worker
          navigator.serviceWorker.addEventListener('message', (event) => {
            if (event.data && event.data.type === 'CACHE_UPDATED') {
              console.log('Cache updated:', event.data.payload)
            }
          })

        } catch (error) {
          console.error('Service Worker registration failed:', error)
        }
      }

      registerSW()
    }

    // Register for push notifications (optional)
    const requestNotificationPermission = async () => {
      if ('Notification' in window && 'serviceWorker' in navigator) {
        const permission = await Notification.requestPermission()
        if (permission === 'granted') {
          console.log('Notification permission granted')
        }
      }
    }

    // Uncomment if you want to request notification permission
    // requestNotificationPermission()

  }, [])

  return null // This component doesn't render anything
}

export default ServiceWorkerRegistration