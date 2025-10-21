import React from 'react';

const Certifications: React.FC = () => {
  const certificates = [
    {
      title: "HTML & CSS Bootcamp",
      issuer: "Let's Upgrade",
      date: "September 1-3, 2025",
      certificateId: "LUEHTMLSEPT125468",
      description: "Intensive 3-day bootcamp covering advanced HTML5 and CSS3 concepts"
    },
    {
      title: "React Project Bootcamp: Build a To-Do App",
      issuer: "SkillElected",
      date: "August 3, 2025",
      description: "Hands-on React development bootcamp focusing on practical application building"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gradient mb-16">Certifications & Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-surface p-8 rounded-lg card-hover">
              <h3 className="text-2xl font-bold text-primary mb-2">{cert.title}</h3>
              <p className="text-text-secondary mb-4">{cert.issuer}</p>
              <p className="text-sm text-text-secondary mb-4">{cert.date}</p>
              {cert.certificateId && (
                <p className="text-xs text-primary mb-4">ID: {cert.certificateId}</p>
              )}
              <p className="text-text-secondary">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;