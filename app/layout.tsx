import type { Metadata } from 'next'
import './globals.css'
import PerformanceOptimizer from '@/components/PerformanceOptimizer'

export const metadata: Metadata = {
  title: 'Athira P B - AI/ML Engineer Portfolio',
  description: 'Portfolio of Athira P B, an AI/ML Engineer specializing in machine learning, deep learning, and innovative AI solutions.',
  keywords: ['AI', 'ML', 'Machine Learning', 'Deep Learning', 'Portfolio', 'Engineer'],
  authors: [{ name: 'Athira P B' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Athira P B - AI/ML Engineer Portfolio',
    description: 'Portfolio of Athira P B, an AI/ML Engineer specializing in machine learning, deep learning, and innovative AI solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//avatars.githubusercontent.com" />
        
        {/* Performance hints */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        
        {/* Reduce layout shift */}
        <style dangerouslySetInnerHTML={{
          __html: `
            * {
              box-sizing: border-box;
            }
            html {
              scroll-behavior: smooth;
            }
            body {
              margin: 0;
              padding: 0;
              overflow-x: hidden;
            }
          `
        }} />
      </head>
      <body>
        <PerformanceOptimizer />
        {children}
      </body>
    </html>
  )
}