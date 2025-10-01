"use client"; 
import React from 'react';

export default function PortfolioSkills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 80 },
        { name: 'Next.js', level: 75 },
        { name: 'JavaScript', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Python (Basic)', level: 85 },
        { name: 'Java', level: 75 },
        { name: 'REST APIs', level: 85 },
      ],
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MySQL', level: 75 },
        { name: 'MongoDB', level: 80 },
        { name: 'Postman', level: 70 },
        { name: 'Git/GitHub', level: 90 },
      ],
    },
    {
      title: 'Other Technologies',
      skills: [
        
        { name: 'Data Structures', level: 85 },
        { name: 'Algorithms', level: 85 },
        { name: 'OOP\'s', level: 80 },
        { name: 'Problem Solving', level: 90 },
       
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Also familiar with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              
              'CI/CD',
              'Agile Methodologies',
              'Django',
              'SDLC',
              'Figma',
              
              
              
              
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
