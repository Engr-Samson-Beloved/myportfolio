import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, 
  Moon, 
  Github, 
  Linkedin, 
  Twitter, 
  Menu,
  X
} from 'lucide-react';

// Animated Background Component
const AnimatedBackground = () => {
  const shapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    delay: Math.random() * 2,
    duration: Math.random() * 5 + 3,
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
    color: getRandomColor()
  }));

  function getRandomColor() {
    const colors = [
      'rgba(126, 34, 206, 0.1)', 
      'rgba(126, 34, 206, 0.05)', 
      'rgba(79, 70, 229, 0.1)', 
      'rgba(55, 48, 163, 0.05)'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full blur-2xl opacity-50"
          style={{
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color
          }}
          animate={{
            x: [shape.x, -shape.x, shape.x],
            y: [shape.y, -shape.y, shape.y],
            scale: [1, 1.2, 1],
            rotate: [0, 360, 0]
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            repeatType: "reverse",
            delay: shape.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Import the sections
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen bg-white dark:bg-[#121212] text-gray-900 dark:text-white transition-colors duration-300"
    >
      {/* Animated Background */}
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Header 
          darkMode={darkMode} 
          setDarkMode={setDarkMode}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <main className="pt-16">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </motion.div>
  );
};

const Header = ({ darkMode, setDarkMode, mobileMenuOpen, setMobileMenuOpen }) => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      className="fixed w-full z-50 bg-white/80 dark:bg-[#1E1E1E]/80 backdrop-blur-md shadow-sm"
    >
      <nav className="container mx-auto flex justify-between items-center p-4">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-purple-700 dark:text-purple-400"
        >
          SAMSON OLABANJI
        </motion.div>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 dark:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <motion.a 
              key={item.name} 
              href={item.href} 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: index * 0.1, 
                type: "spring", 
                stiffness: 300 
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-purple-600 transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.3 }}
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-700 dark:text-white hover:text-purple-600 dark:hover:text-purple-400"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-white dark:bg-[#1E1E1E] md:hidden"
            >
              <div className="flex flex-col items-center space-y-4 p-4">
                {navItems.map((item, index) => (
                  <motion.a 
                    key={item.name} 
                    href={item.href} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.1, 
                      type: "spring", 
                      stiffness: 300 
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="hover:text-purple-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setDarkMode(!darkMode);
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-700 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 flex items-center"
                >
                  {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                  <span className="ml-2">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-[#121212] py-6 border-t dark:border-gray-800"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          {[
            { Icon: Github, link: 'https://github.com/Engr-Samson-Beloved' },
            { Icon: Linkedin, link: 'www.linkedin.com/in/owooluwa-olabanji-199860265' },
            { Icon: Twitter, link: 'https://X.com/techsamix' }
          ].map(({ Icon, link }, index) => (
            <motion.a 
              key={link}
              href={link}
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ 
                delay: index * 0.2,
                type: "spring",
                stiffness: 300
              }}
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xs md:text-sm text-gray-600 dark:text-gray-300"
        >
          © 2024 SAMIX TECH. All Rights Reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default App;