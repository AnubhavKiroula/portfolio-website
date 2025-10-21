const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Resume data
const resumeData = {
  personalInfo: {
    name: "ANUBHAV KIROULA",
    email: "anubhavkiroula1@gmail.com",
    mobile: "+91 7983978359",
    linkedin: "https://www.linkedin.com/in/anubhav-kiroula-109641376"
  },
  education: [
    {
      institution: "University/College Name",
      degree: "Computer Science & Engineering (AI/ML)",
      gpa: "Current Student",
      duration: "Present",
      location: "India"
    }
  ],
  skillsSummary: {
    languages: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C", "SQL"],
    aiMl: ["NumPy", "Pandas", "Matplotlib", "Machine Learning", "Data Analysis", "AI Algorithms"],
    webDev: ["HTML5", "CSS3", "React", "JavaScript", "TypeScript", "Responsive Design"],
    databases: ["MySQL", "Supabase", "DBMS"],
    tools: ["Git", "VS Code"]
  },
  workExperience: [
    {
      title: "AI/ML Student",
      company: "Computer Science & Engineering Program",
      duration: "Present",
      location: "India",
      responsibilities: [
        "Specializing in Artificial Intelligence and Machine Learning with hands-on project experience",
        "Building intelligent solutions using modern web technologies and AI frameworks",
        "Developing projects that bridge AI capabilities with real-world applications",
        "Focusing on practical implementations of AI algorithms and machine learning models"
      ]
    }
  ],
  projects: [
    {
      title: "AI Agent with CrewAI",
      duration: "Recent Project",
      description: "An intelligent project management system leveraging CrewAI for AI workflow oversight",
      achievements: [
        "Developed AI-powered task oversight and review system with real-time monitoring",
        "Integrated CrewAI framework for enhanced AI collaboration and workflow management",
        "Implemented intelligent logging system for comprehensive activity tracking",
        "Created user-friendly interface for seamless AI agent interaction"
      ],
      technologies: ["AI", "CrewAI", "Python", "Real-time Monitoring"]
    },
    {
      title: "Stock Price Prediction System",
      duration: "Recent Project", 
      description: "AI-powered financial analysis tool for investment decision support",
      achievements: [
        "Built machine learning model for stock price prediction with high accuracy",
        "Implemented real-time stock data integration and analysis pipeline",
        "Developed AI-driven investment recommendation engine",
        "Created comprehensive financial dashboard with market trend visualization"
      ],
      technologies: ["AI", "Machine Learning", "Python", "Financial APIs", "Data Analysis"]
    }
  ],
  certificates: [
    {
      title: "HTML & CSS Bootcamp",
      issuer: "Let's Upgrade",
      date: "September 2025",
      certificateId: "LUEHTMLSEPT125468"
    },
    {
      title: "React Project Bootcamp: Build a To-Do App", 
      issuer: "SkillElected",
      date: "August 2025"
    }
  ]
};

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Portfolio Backend API', 
    status: 'Running',
    endpoints: [
      '/api/health',
      '/api/resume-data', 
      '/api/generate-resume',
      '/api/contact'
    ]
  });
});

app.get('/api/resume-data', (req, res) => {
  res.json(resumeData);
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Create transporter (you'll need to configure this with your email service)
    const transporter = nodemailer.createTransporter({
      service: 'gmail', // or your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS  // Your email password or app password
      }
    });

    // Email options
    const mailOptions = {
      from: email,
      to: 'anubhavkiroula1@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Generate resume HTML
app.get('/api/generate-resume', (req, res) => {
  const resumeHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anubhav Kiroula - Resume</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            font-size: 11px;
            line-height: 1.4;
            color: #333;
            background: white;
            padding: 20px;
        }
        
        .resume-container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            padding: 30px;
        }
        
        .header {
            text-align: left;
            border-bottom: 2px solid #333;
            padding-bottom: 15px;
            margin-bottom: 20px;
        }
        
        .name {
            font-size: 24px;
            font-weight: bold;
            color: #333;
            margin-bottom: 5px;
        }
        
        .contact-info {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            font-size: 11px;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .section {
            margin-bottom: 20px;
        }
        
        .section-title {
            font-size: 14px;
            font-weight: bold;
            color: #333;
            border-bottom: 1px solid #333;
            padding-bottom: 5px;
            margin-bottom: 10px;
            text-transform: uppercase;
        }
        
        .education-item, .work-item, .project-item {
            margin-bottom: 15px;
        }
        
        .item-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 5px;
        }
        
        .item-title {
            font-weight: bold;
            font-size: 12px;
        }
        
        .item-subtitle {
            font-style: italic;
            color: #666;
            font-size: 11px;
        }
        
        .item-date {
            font-weight: bold;
            font-size: 11px;
            white-space: nowrap;
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 10px;
            font-size: 11px;
        }
        
        .skill-category {
            font-weight: bold;
        }
        
        .responsibilities {
            margin-top: 5px;
        }
        
        .responsibilities li {
            margin-bottom: 3px;
            margin-left: 15px;
        }
        
        .certificates-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
        }
        
        .certificate-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px 0;
        }
        
        @media print {
            body {
                padding: 0;
            }
            .resume-container {
                box-shadow: none;
                padding: 0;
            }
        }
    </style>
</head>
<body>
    <div class="resume-container">
        <div class="header">
            <div class="name">${resumeData.personalInfo.name}</div>
            <div class="contact-info">
                <div class="contact-item">
                    <strong>Email:</strong> ${resumeData.personalInfo.email}
                </div>
                <div class="contact-item">
                    <strong>Mobile:</strong> ${resumeData.personalInfo.mobile}
                </div>
                <div class="contact-item">
                    <strong>LinkedIn:</strong> ${resumeData.personalInfo.linkedin}
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Education</div>
            ${resumeData.education.map(edu => `
                <div class="education-item">
                    <div class="item-header">
                        <div>
                            <div class="item-title">${edu.institution}</div>
                            <div class="item-subtitle">${edu.degree} • GPA: ${edu.gpa}</div>
                        </div>
                        <div class="item-date">${edu.duration}</div>
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="section">
            <div class="section-title">Skills Summary</div>
            <div class="skills-grid">
                <div class="skill-category">Languages:</div>
                <div>${resumeData.skillsSummary.languages.join(', ')}</div>
                
                <div class="skill-category">AI/ML & Data Science:</div>
                <div>${resumeData.skillsSummary.aiMl.join(', ')}</div>
                
                <div class="skill-category">Web Development:</div>
                <div>${resumeData.skillsSummary.webDev.join(', ')}</div>
                
                <div class="skill-category">Databases & Tools:</div>
                <div>${resumeData.skillsSummary.databases.concat(resumeData.skillsSummary.tools).join(', ')}</div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Work Experience</div>
            ${resumeData.workExperience.map(work => `
                <div class="work-item">
                    <div class="item-header">
                        <div>
                            <div class="item-title">${work.title}</div>
                            <div class="item-subtitle">${work.company}</div>
                        </div>
                        <div class="item-date">${work.duration}</div>
                    </div>
                    <ul class="responsibilities">
                        ${work.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>

        <div class="section">
            <div class="section-title">Projects</div>
            ${resumeData.projects.map(project => `
                <div class="project-item">
                    <div class="item-header">
                        <div>
                            <div class="item-title">${project.title}</div>
                            <div class="item-subtitle">${project.description}</div>
                        </div>
                        <div class="item-date">${project.duration}</div>
                    </div>
                    <ul class="responsibilities">
                        ${project.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                    <div style="margin-top: 5px; font-style: italic; color: #666;">
                        <strong>Technologies:</strong> ${project.technologies.join(', ')}
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="section">
            <div class="section-title">Certificates</div>
            <div class="certificates-grid">
                ${resumeData.certificates.map(cert => `
                    <div class="certificate-item">
                        <div>
                            <div class="item-title">${cert.title}</div>
                            <div class="item-subtitle">${cert.issuer}</div>
                        </div>
                        <div class="item-date">${cert.date}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    </div>
</body>
</html>`;
  
  res.send(resumeHTML);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});