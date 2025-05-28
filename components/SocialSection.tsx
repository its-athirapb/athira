'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Linkedin, X, Instagram, Mail, ExternalLink, GitBranch, Star, Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import { githubStats, personalInfo } from '../data/demoData'

const SocialSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [currentGithubStats, setCurrentGithubStats] = useState(githubStats)

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: personalInfo.social.github,
      color: 'from-gray-600 to-gray-700',
      hoverColor: 'hover:from-gray-500 hover:to-gray-600',
      description: 'Check out my code repositories and contributions',
      stats: `${currentGithubStats.totalRepos} repositories`,
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: personalInfo.social.linkedin,
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-500 hover:to-blue-600',
      description: 'Connect with me professionally',
      stats: `${currentGithubStats.totalStars} stars`,
    },
    {
      name: 'X',
      icon: X,
      url: personalInfo.social.twitter,
      color: 'from-gray-800 to-black',
      hoverColor: 'hover:from-gray-700 hover:to-gray-800',
      description: 'Follow my tech thoughts and updates',
      stats: 'Tech discussions',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: personalInfo.social.instagram,
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-400 hover:to-purple-500',
      description: 'Behind the scenes and personal moments',
      stats: 'Creative content',
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
    <section id="social" className="py-20 px-4 sm:px-6 lg:px-8">
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
              Let's Connect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find me across various platforms and stay updated with my latest work and thoughts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* GitHub Activity Card */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 bento-card"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gray-700 rounded-lg">
                  <Github className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">GitHub Activity</h3>
                  <p className="text-gray-400 text-sm">My coding journey and contributions</p>
                </div>
              </div>

              {/* GitHub Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <motion.div
                    className="text-2xl font-bold text-primary-400"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.5, type: 'spring' }}
                  >
                    {currentGithubStats.totalRepos}
                  </motion.div>
                  <div className="text-gray-400 text-sm flex items-center justify-center mt-1">
                    <GitBranch size={14} className="mr-1" />
                    Repositories
                  </div>
                </div>
                
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <motion.div
                    className="text-2xl font-bold text-neon-blue"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.7, type: 'spring' }}
                  >
                    {currentGithubStats.totalCommits}
                  </motion.div>
                  <div className="text-gray-400 text-sm flex items-center justify-center mt-1">
                    <Users size={14} className="mr-1" />
                    Commits
                  </div>
                </div>
                
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <motion.div
                    className="text-2xl font-bold text-neon-purple"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.9, type: 'spring' }}
                  >
                    {currentGithubStats.totalPRs}
                  </motion.div>
                  <div className="text-gray-400 text-sm">Pull Requests</div>
                </div>
                
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <motion.div
                    className="text-2xl font-bold text-yellow-400"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 1.1, type: 'spring' }}
                  >
                    {currentGithubStats.totalStars}
                  </motion.div>
                  <div className="text-gray-400 text-sm flex items-center justify-center mt-1">
                    <Star size={14} className="mr-1" />
                    Stars Earned
                  </div>
                </div>
              </div>

              {/* Contribution Graph Placeholder */}
              <div className="bg-gray-800/30 rounded-lg p-4">
                <h4 className="text-white font-medium mb-3">Contribution Activity</h4>
                <div className="grid grid-cols-12 gap-1">
                  {[...Array(84)].map((_, i) => {
                    const intensity = Math.random()
                    let bgColor = 'bg-gray-800'
                    if (intensity > 0.7) bgColor = 'bg-primary-500'
                    else if (intensity > 0.5) bgColor = 'bg-primary-600'
                    else if (intensity > 0.3) bgColor = 'bg-primary-700'
                    else if (intensity > 0.1) bgColor = 'bg-primary-800'
                    
                    return (
                      <motion.div
                        key={i}
                        className={`w-3 h-3 rounded-sm ${bgColor}`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: i * 0.01 + 1.5 }}
                      />
                    )
                  })}
                </div>
                <p className="text-gray-400 text-xs mt-2">Last 12 weeks of activity</p>
              </div>

              <motion.a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 mt-6 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
                <span>View Full Profile</span>
                <ExternalLink size={16} />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Social Platforms</h3>
              
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block p-4 bg-gradient-to-r ${social.color} ${social.hoverColor} rounded-lg transition-all duration-300 group`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="text-white" size={24} />
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{social.name}</h4>
                        <p className="text-white/80 text-sm">{social.description}</p>
                        <p className="text-white/60 text-xs mt-1">{social.stats}</p>
                      </div>
                      <ExternalLink 
                        className="text-white/60 group-hover:text-white transition-colors duration-200" 
                        size={16} 
                      />
                    </div>
                  </motion.a>
                )
              })}
            </motion.div>
          </div>

          {/* Email CTA */}
          <motion.div
            className="text-center mt-16"
            variants={itemVariants}
          >
            <div className="bento-card max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="p-3 bg-primary-500/20 rounded-lg">
                  <Mail className="text-primary-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Get In Touch</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                Have a project in mind or just want to chat about technology? 
                I'd love to hear from you!
              </p>
              
              <motion.button
                onClick={() => {
                  const contactSection = document.querySelector('#contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-primary-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Me a Message
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialSection