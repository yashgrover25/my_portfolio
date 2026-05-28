import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Stucknot Flutter Dev",
      date: "Dec 2024 – Feb 2025",
      description: "Engineered cross-platform mobile applications with high-performance UI constraints. Developed custom state management solutions and integrated complex third-party APIs for real-time data synchronization.",
      active: false,
    },
    {
      title: "Stucknot Engineer",
      date: "May 2025 – July 2025",
      description: "Gained foundational knowledge of LLM and RAG through hands-on project involvement",
      active: true,
    }
  ];

  return (
    <section id='experience' className="min-h-screen bg-[#0d1117] text-white p-8 md:p-20 font-sans">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-12">Experience</h2>

        <div className="relative border-l border-gray-800 ml-3 space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8">
              {/* Timeline Dot */}
              <div 
                className={`absolute w-3 h-3 rounded-full -left-[6.5px] top-6 border-2 border-[#0d1117] ${
                  exp.active ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]' : 'bg-gray-600'
                }`} 
              />
              
              {/* Card Container */}
              <div className="bg-[#161b22]/40 border border-gray-800 rounded-md p-6 hover:bg-[#161b22]/60 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-100">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0 font-medium">
                    {exp.date}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed text-[15px]">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;