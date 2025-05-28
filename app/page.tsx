'use client'

import { motion } from 'framer-motion'
import { lazy, Suspense, memo } from 'react'
import dynamic from 'next/dynamic'
import HeroSection from '@/components/HeroSection'
import Navigation from '@/components/Navigation'
import LazySection from '@/components/LazySection'

// Optimized dynamic imports with preloading
const AboutSection = dynamic(() => import('@/components/AboutSection'), {
  loading: () => <SectionLoader />,
  ssr: false
})
const SkillsSection = dynamic(() => import('@/components/SkillsSection'), {
  loading: () => <SectionLoader />,
  ssr: false
})
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'), {
  loading: () => <SectionLoader />,
  ssr: false
})
const SocialSection = dynamic(() => import('@/components/SocialSection'), {
  loading: () => <SectionLoader />,
  ssr: false
})
const ContactSection = dynamic(() => import('@/components/ContactSection'), {
  loading: () => <SectionLoader />,
  ssr: false
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <SectionLoader />,
  ssr: false
})

// Loading fallback component - Optimized and memoized
const SectionLoader = memo(() => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="flex items-center space-x-2">
      <div className="w-2 h-2 bg-primary-500/60 rounded-full animate-pulse"></div>
      <div className="w-2 h-2 bg-primary-500/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
      <div className="w-2 h-2 bg-primary-500/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
    </div>
  </div>
))

SectionLoader.displayName = 'SectionLoader'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero section loads immediately */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <HeroSection />
      </motion.div>
      
      {/* Lazy loaded sections - Optimized for performance */}
      <LazySection animationDelay={0}>
        <AboutSection />
      </LazySection>
      
      <LazySection animationDelay={0}>
        <SkillsSection />
      </LazySection>
      
      <LazySection animationDelay={0}>
        <ProjectsSection />
      </LazySection>
      
      <LazySection animationDelay={0}>
        <SocialSection />
      </LazySection>
      
      <LazySection animationDelay={0}>
        <ContactSection />
      </LazySection>
      
      <LazySection animationDelay={0}>
        <Footer />
      </LazySection>
    </main>
  )
}