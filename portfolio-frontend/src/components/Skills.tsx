import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiGlobe, FiTool } from 'react-icons/fi';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: FiCode,
      title: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C", "SQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FiCpu,
      title: "AI/ML & Data Science",
      skills: ["NumPy", "Pandas", "Matplotlib", "Machine Learning", "Data Analysis", "AI Algorithms"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FiGlobe,
      title: "Web Development",
      skills: ["HTML5", "CSS3", "React", "JavaScript", "TypeScript", "Responsive Design"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FiTool,
      title: "Tools & Databases",
      skills: ["MySQL", "Supabase", "Git", "VS Code", "DBMS"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-secondary/3 to-accent/3"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">Technical Skills</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A comprehensive toolkit spanning multiple domains, from AI/ML to full-stack development
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card p-6 rounded-lg card-hover group"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    className="text-text-secondary text-sm hover:text-primary transition-colors duration-200"
                  >
                    • {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;