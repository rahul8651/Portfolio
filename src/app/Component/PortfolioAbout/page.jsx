import React from 'react';
import { Code2, Database, Smartphone, Brain } from 'lucide-react';

export default function PortfolioAbout() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Building responsive web applications with modern frameworks',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Designing efficient database schemas and optimizing queries',
    },
    
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Implementing AI/ML solutions for real-world problems',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate B.Tech Computer Science student with a keen interest
              in software development and emerging technologies. Recently completed
              my degree, I've been actively involved in building projects that solve
              real-world problems.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey in computer science has equipped me with strong problem-solving
              skills and a deep understanding of data structures, algorithms, and software
              design principles. I'm always eager to learn new technologies and take on
              challenging projects.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new tech trends, contributing
              to open-source projects, or participating in hackathons and coding competitions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Problem Solver</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700">Quick Learner</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Team Player</span>
              </div>
            </div>
          </div>

          {/* Right Content - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
