import React from 'react';
import { Code, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import SkillBar from './SkillBar';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 85, color: 'bg-blue-600' },
        { name: 'Vite', level: 80, color: 'bg-gray-800' },
        { name: 'Tailwind CSS', level: 90, color: 'bg-teal-500' }
      ]
    },
    {
      category: 'Tools & Platforms',
      skills: [
        { name: 'Git', level: 85, color: 'bg-orange-500' },
        { name: 'Docker', level: 70, color: 'bg-blue-400' },
        { name: 'Figma', level: 75, color: 'bg-purple-500' },
        { name: 'AWS', level: 65, color: 'bg-yellow-500' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <section 
      id="skills" 
      className="py-16 bg-gray-50 dark:bg-[#0F0F0F] overflow-hidden"
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
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Code className="mr-3 text-purple-600" size={36} />
            </motion.div>
            My Skills
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Zap className="ml-3 text-yellow-500" size={36} />
            </motion.div>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies I leverage to build innovative and performant web applications.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.category}
              className="bg-white dark:bg-[#1E1E1E] rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-purple-700 dark:text-purple-400 border-b pb-2 border-gray-200 dark:border-gray-700">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

