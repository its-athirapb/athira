'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Play, Star } from 'lucide-react'
import Image from 'next/image'
import { projects } from '../data/demoData'

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Projects data is imported from demoData

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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
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
              Project Showcase
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A collection of my recent projects showcasing various technologies and problem-solving approaches
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <Star className="text-primary-400 mr-2" size={24} />
              Featured Projects
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.filter(project => project.featured).map((project) => (
                <motion.div
                  key={project.id}
                  className="bento-card group cursor-pointer overflow-hidden"
                  whileHover={{ scale: 1.02, y: -5 }}
                  variants={itemVariants}
                >
                  {/* Project Image */}
                  <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-primary-500/20 to-neon-purple/20">
                    <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                      <Play size={48} className="text-gray-600" />
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="flex space-x-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-primary-500/50 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github size={20} />
                        </motion.a>
                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-primary-500/50 transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink size={20} />
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-semibold text-white group-hover:text-primary-300 transition-colors duration-200">
                        {project.title}
                      </h4>
                      <span className="px-3 py-1 bg-primary-500/20 text-primary-300 text-xs rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-700 hover:border-primary-500/50 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-white mb-8">Other Projects</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(project => !project.featured).map((project) => (
                <motion.div
                  key={project.id}
                  className="bento-card group cursor-pointer"
                  whileHover={{ scale: 1.02, y: -3 }}
                  variants={itemVariants}
                >
                  {/* Project Image */}
                  <div className="relative h-32 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play size={32} className="text-gray-600" />
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-semibold text-white group-hover:text-primary-300 transition-colors duration-200">
                        {project.title}
                      </h4>
                      <span className="px-2 py-1 bg-primary-500/20 text-primary-300 text-xs rounded">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Actions */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex space-x-2">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github size={16} />
                        </motion.a>
                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink size={16} />
                          </motion.a>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* View More Button */}
          <motion.div
            className="text-center mt-12"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-primary-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              <span>View All Projects on GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection