import React, { useState } from 'react';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mrbyvrbp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center text-gradient mb-4">Let's Connect</h2>
        <p className="text-xl text-text-secondary text-center mb-16 max-w-2xl mx-auto">
          Have a project idea or want to collaborate? Let's build something amazing together!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FiMail className="text-primary text-xl" />
                <div>
                  <p className="font-semibold text-text-primary">Email</p>
                  <p className="text-text-secondary">anubhavkiroula1@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <FiPhone className="text-primary text-xl" />
                <div>
                  <p className="font-semibold text-text-primary">Phone</p>
                  <p className="text-text-secondary">+91 7983978359</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-6 mt-8">
              <a
                href="https://www.linkedin.com/in/anubhav-kiroula-109641376"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-social text-primary rounded-full flex items-center justify-center hover:text-white transition-colors"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://github.com/AnubhavKiroula"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-social text-primary rounded-full flex items-center justify-center hover:text-white transition-colors"
              >
                <FiGithub />
              </a>
              <a
                href="https://x.com/AnubhavKiroula?t=fSLiiFx77uVRShjF62Z2Pg&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-social text-primary rounded-full flex items-center justify-center hover:text-white transition-colors"
              >
                <FiTwitter />
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 glass-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-text-primary"
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 glass-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-text-primary"
              />
            </div>
            
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 glass-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-text-primary"
              />
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-background border border-surface rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-text-primary resize-none"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-3 rounded-lg font-semibold text-white disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitStatus === 'success' && (
              <p className="text-green-500 text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;