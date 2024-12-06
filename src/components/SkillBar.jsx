import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill }) => {
  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <motion.span 
          className="text-xs font-bold text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div 
          className={`${skill.color} h-2.5 rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;

