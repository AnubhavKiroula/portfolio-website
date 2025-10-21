import React from 'react';

import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCalendar, FiCode } from 'react-icons/fi';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "AI Agent with CrewAI",
      description: "An intelligent project management system that leverages CrewAI to oversee AI workflows, review tasks, and provide real-time logging and monitoring capabilities.",
      longDescription: "This project demonstrates advanced AI orchestration using CrewAI framework. The system intelligently manages complex workflows, provides automated task reviews, and offers comprehensive monitoring dashboards for AI operations.",
      technologies: ["AI", "CrewAI", "Python", "Real-time Monitoring", "Task Management"],
      liveUrl: "https://ai-agent-crewai.netlify.app/",
      githubUrl: "https://github.com/AnubhavKiroula",
      status: "Live",
      year: "2024",
      features: ["AI Workflow Management", "Real-time Monitoring", "Automated Task Review", "Intelligent Logging"]
    },
    {
      title: "Stock Price Prediction System",
      description: "AI-powered financial analysis tool that provides real-time stock prices and uses machine learning algorithms to predict investment worthiness and market trends.",
      longDescription: "A comprehensive financial analysis platform that combines real-time market data with advanced machine learning models to provide accurate stock predictions and investment insights.",
      technologies: ["AI", "Machine Learning", "Python", "Financial APIs", "Data Analysis"],
      liveUrl: "https://stock-price-prediction1.netlify.app/",
      githubUrl: "https://github.com/AnubhavKiroula",
      status: "Live",
      year: "2024",
      features: ["Real-time Data", "ML Predictions", "Market Analysis", "Investment Insights"]
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-primary/5 to-accent/5"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">Featured Projects</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Showcasing innovative solutions that combine AI/ML expertise with modern web technologies
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card p-8 rounded-lg card-hover group"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <FiCode className="text-primary text-xl" />
                    <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-text-secondary">
                    <div className="flex items-center gap-1">
                      <FiCalendar />
                      <span>{project.year}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-text-secondary mb-6 leading-relaxed">{project.description}</p>
              
              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary mb-3">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                      className="text-sm text-text-secondary flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                      className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full hover:bg-primary/30 transition-colors duration-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-4">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-200 group-hover:scale-105 transform"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <FiExternalLink />
                  <span>Live Demo</span>
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 group-hover:scale-105 transform"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <FiGithub />
                  <span>GitHub</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;