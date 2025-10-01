"use client";
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "../ui/button";

export default function PortfolioProjects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      github: "https://github.com/rahul8651",
      live: "https://github.com/rahul8651",
      featured: false,
    },

    {
      title: "Weather Forecast App",
      description:
        "Beautiful weather application with real-time data, location-based forecasts, and interactive weather maps.",
      technologies: ["React", "TailwindCSS", "OpenWeather API", ],
      image:
        "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800&q=80",
      github: "https://github.com/rahul8651",
      live: "https://weatherapp-rahulkumar.netlify.app",
      featured: true,
    },
    {
      title: "To-Do App",
      description:
        "A simple and responsive To-Do application to manage tasks efficiently, with features like adding, editing, deleting tasks, and marking tasks as complete.",
      technologies: ["React.js", "Tailwind CSS", "LocalStorage"],
      image:
        "/assest/todo.jpg", 
      github: "https://github.com/rahul8651",
      live: "https://todoapp-rahul.netlify.app",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50"
                    >
                      <Github className="mr-2 w-4 h-4" />
                      Code
                    </Button>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      <ExternalLink className="mr-2 w-4 h-4" />
                      Live
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="px-8 py-6 rounded-xl border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50"
          >
            <Github className="mr-2 w-5 h-5" />
            <a href="https://github.com/rahul8651" target="_blank">View All Projects on GitHub</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
