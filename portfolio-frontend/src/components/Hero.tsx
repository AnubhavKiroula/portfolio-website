import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiDownload, FiTwitter } from 'react-icons/fi';

const Hero: React.FC = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const animatedTitles = [
    'AI/ML Engineer',
    'Full Stack Developer', 
    'Problem Solver',
    'Tech Innovator',
    'Data Scientist',
    'React Developer'
  ];

  useEffect(() => {
    const currentTitle = animatedTitles[currentTitleIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % animatedTitles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentTitleIndex, displayedText, isDeleting]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-bg opacity-10" />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: 360,
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="text-lg md:text-xl text-text-secondary">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-gradient">Anubhav Kiroula</span>
          </motion.h1>

          {/* Animated titles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-text-primary font-semibold h-16 flex items-center justify-center">
              I'm a <span className="text-primary ml-3">{displayedText}</span>
              <span className="animate-pulse text-primary">|</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Passionate about creating intelligent solutions that bridge the gap between 
            artificial intelligence and real-world applications. Currently pursuing CSE 
            with AI/ML specialization.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.button
              onClick={() => scrollToSection('#projects')}
              className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold text-white flex items-center justify-center gap-3 min-w-[200px]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.a
              href="http://localhost:5000/api/generate-resume"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg text-lg font-semibold flex items-center justify-center gap-3 min-w-[200px] hover:bg-primary hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center gap-6 mb-16"
          >
            <motion.a
              href="https://github.com/AnubhavKiroula"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 glass-social text-text-primary hover:text-white rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub size={24} />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/anubhav-kiroula-109641376"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 glass-social text-text-primary hover:text-white rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLinkedin size={24} />
            </motion.a>
            
            <motion.a
              href="https://x.com/AnubhavKiroula?t=fSLiiFx77uVRShjF62Z2Pg&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 glass-social text-text-primary hover:text-white rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiTwitter size={24} />
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col items-center"
          >
            <span className="text-text-secondary mb-4">Scroll to explore</span>
            <motion.button
              onClick={() => scrollToSection('#about')}
              className="text-primary hover:text-secondary transition-colors duration-300"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.1 }}
            >
              <FiArrowDown size={24} />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;