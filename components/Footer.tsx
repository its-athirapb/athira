'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, X, Mail, Heart, ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com',
      hoverColor: 'hover:text-gray-300',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      hoverColor: 'hover:text-blue-400',
    },
    {
      name: 'X',
      icon: X,
      url: 'https://x.com',
      hoverColor: 'hover:text-gray-300',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:athira@example.com',
      hoverColor: 'hover:text-primary-400',
    },
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-gradient-to-t from-dark-200 to-dark-300 border-t border-gray-800">
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full text-white shadow-lg hover:shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0 
        }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={20} />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-3xl font-bold gradient-text mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Athira P B
            </motion.h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Computer Engineering student passionate about creating innovative solutions 
              that bridge technology and creativity. Always learning, always building.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-800/50 rounded-lg text-gray-400 ${social.hoverColor} transition-all duration-200 hover:bg-gray-700/50`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-left"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <motion.a
                href="mailto:athira@example.com"
                className="block text-gray-400 hover:text-primary-400 transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                athira@example.com
              </motion.a>
              <motion.a
                href="tel:+15551234567"
                className="block text-gray-400 hover:text-primary-400 transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                +1 (555) 123-4567
              </motion.a>
              <motion.p
                className="text-gray-400"
                whileHover={{ x: 5 }}
              >
                San Francisco, CA
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.p 
              className="text-gray-400 text-sm flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              © {new Date().getFullYear()} Athira P B. Made with 
              <motion.span
                className="mx-1 text-red-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={16} fill="currentColor" />
              </motion.span>
              and lots of coffee.
            </motion.p>

            {/* Tech Stack */}
            <motion.div 
              className="flex items-center space-x-4 text-gray-400 text-sm"
              whileHover={{ scale: 1.02 }}
            >
              <span>Built with</span>
              <div className="flex space-x-2">
                {['Next.js', 'Tailwind', 'Framer Motion'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-2 py-1 bg-gray-800/50 rounded text-xs hover:bg-primary-500/20 hover:text-primary-400 transition-colors duration-200 cursor-default"
                    whileHover={{ scale: 1.1, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Footer Elements */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-gray-500 text-xs"
            whileHover={{ color: '#7916ff' }}
          >
            "The best way to predict the future is to create it." - Peter Drucker
          </motion.p>
        </motion.div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-transparent to-transparent pointer-events-none" />
      
      {/* Subtle Animation Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
    </footer>
  )
}

export default Footer