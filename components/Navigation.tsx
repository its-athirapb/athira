'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Code, Briefcase, MessageCircle, Github, Linkedin } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: MessageCircle },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass backdrop-blur-md border-b border-primary-500/20' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* No logo needed */}
            <div className="flex-shrink-0">
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2 lg:space-x-4">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="relative flex items-center space-x-1.5 lg:space-x-2 text-gray-300 hover:text-white px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={14} className="lg:w-4 lg:h-4 text-primary-400 group-hover:text-primary-300" />
                      <span className="text-xs lg:text-sm">{item.name}</span>
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-neon-purple"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.button>
                  )
                })}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-primary-500/20 transition-colors duration-200"
                whileTap={{ scale: 0.95 }}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden"
          >
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              className="fixed top-0 right-0 w-72 sm:w-80 h-full glass-dark border-l border-primary-500/20 z-50"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full pt-16 sm:pt-20 pb-6 px-4 sm:px-6">
                {/* Close button */}
                <div className="flex justify-end mb-4">
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-primary-500/20 transition-colors duration-200"
                    whileTap={{ scale: 0.95 }}
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </motion.button>
                </div>
                
                {/* Navigation items */}
                <div className="space-y-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.button
                        key={item.name}
                        onClick={() => {
                          scrollToSection(item.href)
                          setIsOpen(false)
                        }}
                        className="w-full flex items-center space-x-3 text-gray-300 hover:text-white py-3 px-4 rounded-lg transition-all duration-200 group hover:bg-primary-500/10"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 8 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon size={20} className="text-primary-400 group-hover:text-primary-300" />
                        <span className="text-base font-medium">{item.name}</span>
                      </motion.button>
                    )
                  })}
                </div>
                
                {/* Social links */}
                <div className="mt-auto pt-6 border-t border-primary-500/20">
                  <div className="space-y-2">
                    <motion.a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-300 hover:text-white py-3 px-4 rounded-lg transition-all duration-200 hover:bg-primary-500/10"
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github size={20} className="text-primary-400" />
                      <span className="text-base">GitHub</span>
                    </motion.a>
                    
                    <motion.a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-300 hover:text-white py-3 px-4 rounded-lg transition-all duration-200 hover:bg-primary-500/10"
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Linkedin size={20} className="text-primary-400" />
                      <span className="text-base">LinkedIn</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation