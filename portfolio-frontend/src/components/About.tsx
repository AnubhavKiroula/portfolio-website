import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">About Me</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            I am a dedicated Computer Science student specializing in Artificial Intelligence and Machine Learning. 
            My journey combines theoretical knowledge with practical implementation, focusing on creating innovative 
            solutions using modern web technologies and AI frameworks.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="text-3xl font-bold text-primary mb-2">2+</div>
            <div className="text-text-secondary">Years Learning</div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-text-secondary">Projects Built</div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-text-secondary">Certifications</div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-6 rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-text-secondary">Dedication</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;