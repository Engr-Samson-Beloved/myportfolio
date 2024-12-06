import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, ChevronRight } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const listItemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const journeyItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
      },
    },
  };

  return (
    <section 
      id="about" 
      className="py-16 bg-white dark:bg-[#121212] overflow-hidden"
    >
      <motion.div 
        className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="w-full md:w-1/2 mb-8 md:mb-0" variants={itemVariants}>
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white flex items-center"
            variants={itemVariants}
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                transition: { repeat: Infinity, duration: 2 },
              }}
            >
              <User className="mr-3 text-purple-600" />
            </motion.div>
            About Me
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4"
            variants={itemVariants}
          >
            With over 7 years of experience in frontend development, I specialize in creating 
            responsive, accessible, and high-performance web applications. My passion lies in 
            bridging design and functionality, ensuring every pixel and interaction delivers 
            an exceptional user experience.
          </motion.p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={itemVariants}
          >
            <div>
              <h3 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">Core Technologies</h3>
              <motion.ul className="space-y-2">
                {['React & Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'React Native'].map((tech, index) => (
                  <motion.li 
                    key={tech}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                    variants={listItemVariants}
                    custom={index}
                  >
                    <ChevronRight className="mr-2 text-purple-600" size={16} />
                    {tech}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <div>
              <h3 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">Specialties</h3>
              <motion.ul className="space-y-2">
                {['Performance Optimization', 'Accessibility Design', 'State Management', 'Responsive Design', 'Design Systems'].map((specialty, index) => (
                  <motion.li 
                    key={specialty}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                    variants={listItemVariants}
                    custom={index}
                  >
                    <ChevronRight className="mr-2 text-purple-600" size={16} />
                    {specialty}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
          variants={itemVariants}
        >
          <motion.div 
            className="bg-purple-50 dark:bg-purple-900/20 p-6 md:p-8 rounded-lg shadow-md w-full max-w-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h3 
              className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-400 flex items-center"
              variants={itemVariants}
            >
              <Code className="mr-2" />
              Professional Journey
            </motion.h3>
            <motion.div className="space-y-4" variants={containerVariants}>
              {[
                { title: "Senior Frontend Engineer", company: "Digital Innovation Labs", period: "2021-Present" },
                { title: "Frontend Developer", company: "TechSolutions Inc.", period: "2018-2021" },
                { title: "Junior Developer", company: "WebCraft Studios", period: "2016-2018" },
              ].map((job, index) => (
                <motion.div 
                  key={job.title}
                  className="border-l-4 border-purple-600 pl-4"
                  variants={journeyItemVariants}
                  custom={index}
                >
                  <p className="font-semibold text-sm md:text-base">{job.title}</p>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                    {job.company} | {job.period}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

