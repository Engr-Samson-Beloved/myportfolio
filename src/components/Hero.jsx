import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { Github, Linkedin, Twitter, Download, Code } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gray-50 dark:bg-[#0F0F0F]"
    >
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Section */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            OWOOLUWA SAMSON, OLABANJI
            <motion.span
              className="block text-xl md:text-3xl text-purple-700 dark:text-purple-400 mt-2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Expert Frontend Engineer
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-6 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Crafting seamless user interfaces with cutting-edge technologies,
            transforming complex design challenges into elegant, performant web
            experiences. And a "Creative Specialist in Logo Design, Brand Development, Web Development & Media Services | Crafting Unique Visual Identities and Digital Experiences"
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors text-center flex items-center justify-center"
            >
              <Code className="mr-2" /> View My Work
            </a>
            <a
              href="/michael-rodriguez-resume.pdf"
              target="_blank"
              className="border border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors text-center flex items-center justify-center"
            >
              <Download className="mr-2" /> Download Resume
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-start space-x-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a
              href="https://github.com/Engr-Samson-Beloved"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-white hover:text-purple-600"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/owooluwa-olabanji"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-white hover:text-purple-600"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://X.com/techsamix"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-white hover:text-purple-600"
            >
              <Twitter size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="relative">
            <motion.div
              className="w-48 h-48 md:w-64 md:h-64 bg-purple-100 dark:bg-purple-900/30 rounded-full absolute inset-0 -z-10"
              animate={{ scale: [0.9, 1, 0.9] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <img
              src="/api/placeholder/400/400"
              alt="Michael Rodriguez"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white dark:border-[#1E1E1E] shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
