'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock } from 'lucide-react'
import { useState } from 'react'
import { personalInfo, contactInfo } from '../data/demoData'

const ContactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setFormStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000)
    } catch (error) {
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 3000)
    }
  }

  const contactCards = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`,
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: contactInfo.location,
      href: '#',
      color: 'from-purple-500 to-pink-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project or just have a chat about technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 bento-card"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Full Name *
                    </label>
                    <motion.div
                      className="relative"
                      animate={{
                        scale: focusedField === 'name' ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
                        placeholder="Your full name"
                      />
                      {focusedField === 'name' && (
                        <motion.div
                          className="absolute inset-0 border-2 border-primary-500/50 rounded-lg pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </motion.div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email Address *
                    </label>
                    <motion.div
                      className="relative"
                      animate={{
                        scale: focusedField === 'email' ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                      {focusedField === 'email' && (
                        <motion.div
                          className="absolute inset-0 border-2 border-primary-500/50 rounded-lg pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </motion.div>
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                    Subject *
                  </label>
                  <motion.div
                    className="relative"
                    animate={{
                      scale: focusedField === 'subject' ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
                      placeholder="What's this about?"
                    />
                    {focusedField === 'subject' && (
                      <motion.div
                        className="absolute inset-0 border-2 border-primary-500/50 rounded-lg pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </motion.div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Message *
                  </label>
                  <motion.div
                    className="relative"
                    animate={{
                      scale: focusedField === 'message' ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    />
                    {focusedField === 'message' && (
                      <motion.div
                        className="absolute inset-0 border-2 border-primary-500/50 rounded-lg pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </motion.div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg text-white font-semibold hover:shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  whileHover={formStatus === 'idle' ? { scale: 1.02, y: -2 } : {}}
                  whileTap={formStatus === 'idle' ? { scale: 0.98 } : {}}
                >
                  {formStatus === 'sending' && (
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                  )}
                  {formStatus === 'success' && <CheckCircle size={20} />}
                  {formStatus === 'error' && <AlertCircle size={20} />}
                  {formStatus === 'idle' && <Send size={20} />}
                  
                  <span>
                    {formStatus === 'sending' && 'Sending...'}
                    {formStatus === 'success' && 'Message Sent!'}
                    {formStatus === 'error' && 'Failed to Send'}
                    {formStatus === 'idle' && 'Send Message'}
                  </span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              {contactCards.map((info, index) => {
                const Icon = info.icon
                const content = (
                  <motion.div
                    className="bento-card group cursor-pointer"
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 bg-gradient-to-r ${info.color} rounded-lg`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{info.label}</h4>
                        <p className="text-gray-300 group-hover:text-primary-300 transition-colors duration-200">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )

                return info.href ? (
                  <a key={info.label} href={info.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>
                    {content}
                  </div>
                )
              })}

              {/* Additional Info */}
              <motion.div
                className="bento-card"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 0.8 }}
              >
                <h4 className="text-white font-semibold mb-3">Response Time</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  I typically respond to messages within 24 hours. For urgent matters, 
                  feel free to reach out via phone or LinkedIn.
                </p>
              </motion.div>

              <motion.div
                className="bento-card"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 1.0 }}
              >
                <h4 className="text-white font-semibold mb-3">Availability</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Open to freelance projects, internship opportunities, and 
                  collaboration on interesting tech initiatives.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection