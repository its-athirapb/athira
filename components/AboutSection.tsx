'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Heart, Target, Camera, Code2, Palette } from 'lucide-react'
import Image from 'next/image'
import { personalInfo, education, stats, interests } from '../data/demoData'

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

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
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3">
              About Me
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {personalInfo.bio}
            </p>
          </motion.div>

          {/* Bento Grid - Responsive Asymmetric Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-4 auto-rows-min">
            {/* Education Timeline - Largest Card (Most Important Content) */}
            <motion.div
              variants={itemVariants}
              className="bento-card col-span-1 sm:col-span-2 lg:col-span-7 row-span-1 lg:row-span-2"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-primary-500/20 rounded-lg">
                  <GraduationCap className="text-primary-400" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">Education Journey</h3>
              </div>
              
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-primary-500/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full" />
                    <div className={index < education.length - 1 ? "pb-4" : ""}>
                      <h4 className="font-semibold text-white text-sm mb-1">{edu.degree}</h4>
                      <p className="text-primary-400 text-sm font-medium">{edu.institution}</p>
                      <p className="text-gray-300 text-sm mt-1 leading-relaxed">
                        {edu.field}
                      </p>
                      <p className="text-sm text-gray-400 mt-1">{edu.year}</p>
                      <p className="text-sm text-gray-400 mt-1">Grade: {edu.grade}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Profile Photo Card - Tall Card */}
            <motion.div
              variants={itemVariants}
              className="bento-card group cursor-pointer col-span-1 sm:col-span-2 lg:col-span-5 row-span-1 lg:row-span-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-full min-h-[280px] lg:min-h-[320px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-neon-purple/20 z-10" />
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-neon-purple rounded-full flex items-center justify-center">
                    <Camera size={32} className="text-white" />
                  </div>
                </div>
                <motion.div
                  className="absolute bottom-4 left-4 right-4 z-20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{personalInfo.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {personalInfo.title}
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Stats Card - Wide Card */}
            <motion.div
              variants={itemVariants}
              className="bento-card col-span-1 sm:col-span-2 lg:col-span-8"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-gradient-to-br from-primary-500/20 to-neon-purple/20 rounded-lg">
                  <Code2 className="text-primary-400" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">Quick Stats</h3>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-3 rounded-lg bg-white/5 border border-primary-500/20">
                    <motion.div
                      className="text-2xl font-bold gradient-text mb-1"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.2, type: 'spring' }}
                    >
                      {stat.value}{stat.label.includes('Passion') ? '%' : '+'}
                    </motion.div>
                    <div className="text-gray-400 text-sm leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mission Card - Medium Card */}
            <motion.div
              variants={itemVariants}
              className="bento-card col-span-1 sm:col-span-1 lg:col-span-4"
            >
              <div className="flex items-center space-x-2 mb-3">
                <div className="p-2 bg-neon-purple/20 rounded-lg">
                  <Target className="text-neon-purple" size={18} />
                </div>
                <h3 className="text-base font-semibold text-white">Mission</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                To bridge the gap between technology and human experience, 
                creating innovative solutions that make a positive impact on society.
              </p>
            </motion.div>

            {/* Interests Card - Expanded Card */}
            <motion.div
              variants={itemVariants}
              className="bento-card col-span-1 sm:col-span-2 lg:col-span-12 lg:row-span-2 flex flex-col"
            >
              <div className="flex items-center space-x-2 mb-3">
                <div className="p-2 bg-neon-blue/20 rounded-lg">
                  <Heart className="text-neon-blue" size={18} />
                </div>
                <h3 className="text-base font-semibold text-white">Interests</h3>
              </div>
              
              <div className="grid grid-cols-5 grid-rows-2 gap-2 w-full flex-1 content-start">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 rounded-lg bg-white/5 border border-neon-blue/20 w-full">
                    <span className="text-sm">{interest.icon}</span>
                    <span className="text-gray-300 text-sm">{interest.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection