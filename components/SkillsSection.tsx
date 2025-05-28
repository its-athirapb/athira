'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Database, Brain, Wrench, Globe } from 'lucide-react'
import { skills } from '../data/demoData'

const SkillsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Map icon names to actual icon components
  const iconMap = {
    Globe,
    Code,
    Palette,
    Database,
    Brain,
    Wrench,
  }

  const skillCategories = skills.categories.map(category => ({
    ...category,
    icon: iconMap[category.icon as keyof typeof iconMap] || Code,
  }))

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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
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
              Skills Matrix
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and expertise across various domains
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className="bento-card group will-change-transform"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  style={{ willChange: 'transform' }}
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-primary-400 text-sm font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-900 border border-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full relative shadow-lg`}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{
                              duration: 1.5,
                              delay: categoryIndex * 0.2 + skillIndex * 0.1,
                              ease: 'easeOut',
                            }}
                            style={{
                              boxShadow: `0 0 10px rgba(59, 130, 246, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)`
                            }}
                          >
                            {/* Enhanced Glow Effect */}
                            <motion.div
                              className="absolute inset-0 bg-white/30 rounded-full will-change-transform"
                              animate={{
                                opacity: [0.3, 0.7, 0.3],
                                scale: [1, 1.05, 1],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1.5,
                                ease: "easeInOut"
                              }}
                            />
                            {/* Shimmer Effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full will-change-transform"
                              animate={{
                                x: ['-100%', '100%'],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: categoryIndex * 0.2 + skillIndex * 0.1 + 2,
                                repeatDelay: 5,
                                ease: "linear"
                              }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none will-change-auto"
                  />
                </motion.div>
              )
            })}
          </div>

          {/* Additional Skills Tags */}
          <motion.div
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.additionalTechnologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 glass-dark rounded-full text-sm text-gray-300 hover:text-white transition-colors duration-200 cursor-default"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    transition: { duration: 0.15, ease: "easeOut" }
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection