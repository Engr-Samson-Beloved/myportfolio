import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      name: 'AI-Powered Dashboard',
      description: 'Comprehensive analytics platform with machine learning insights',
      technologies: ['React', 'TypeScript', 'GraphQL', 'D3.js'],
      githubLink: '#',
      liveLink: '#',
      category: 'Web App',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'E-commerce Microservices',
      description: 'Scalable online marketplace with distributed architecture',
      technologies: ['Next.js', 'Node.js', 'Docker', 'Kubernetes'],
      githubLink: '#',
      liveLink: '#',
      category: 'Full Stack',
      image: '/api/placeholder/400/300'
    },
    {
      name: 'Real-time Collaboration Tool',
      description: 'Collaborative workspace with live editing and communication',
      technologies: ['React', 'WebSockets', 'Firebase', 'Tailwind'],
      githubLink: '#',
      liveLink: '#',
      category: 'Web App',
      image: '/api/placeholder/400/300'
    }
  ];

  const filters = ['All', 'Web App', 'Full Stack', 'Mobile'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section 
      id="projects" 
      className="py-16 bg-white dark:bg-[#121212] overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white flex justify-center items-center">
            <motion.div
              animate={{
                rotate: [0, 360],
                transition: { duration: 2, repeat: Infinity, ease: "linear" }
              }}
            >
              <Briefcase className="mr-3 text-purple-600" size={36} />
            </motion.div>
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of innovative projects demonstrating technical expertise and creative problem-solving.
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center mb-8 space-x-2 md:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-4 py-2 rounded-full text-sm transition-all duration-300
                ${activeFilter === filter 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-600'}
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.name}
                className="bg-gray-50 dark:bg-[#1E1E1E] rounded-lg overflow-hidden shadow-lg"
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-48 object-cover"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-black"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.5 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </motion.div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-purple-700 dark:text-purple-400">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <motion.span 
                        key={tech} 
                        className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <motion.a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 flex items-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="mr-2" size={20} /> GitHub
                    </motion.a>
                    <motion.a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 flex items-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="mr-2" size={20} /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

