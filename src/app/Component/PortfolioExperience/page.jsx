import React from "react";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export default function PortfolioExperience() {
  const experiences = [
    {
      type: "work",
      title: "Front-End Developer Intern",
      company: "IREED, India",
      location: "Gurugram, Haryana",
      period: "Aug'25 - Sep'25",
      description: [
        "Developed responsive web pages using React.js and CSS3 ensuring cross-browser compatibility.",
        "Optimized website performance by refactoring legacy CSS into modular, responsive styles.",
        "Collaborated with design teams to implement Figma designs into functional web components.",
        "Enhanced UI/UX for multiple sections including navbar, footer, and content areas.",
      ],
    },
    {
      type: "work",
      title: "Web Development Intern",
      company: "NIT, Patna",
      location: "Patna, Bihar",
      period: "May\'23 - June\'23 ",
      description: [
        "Built responsive websites using HTML, CSS, JavaScript, and React",
        "Worked with RESTful APIs and integrated third-party services",
        "Participated in code reviews and agile development processes",
      ],
    },
  ];

  const education = [
    {
      type: "education",
      degree: "Bachelor of Technology in Computer Science",
      institution: "Noida Institute of Engineering and Technology",
      location: "Greater Noida, Uttar Pradesh",
      period: "2021 - 2025",
      description: [
        
        "Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management",
        "Active member of coding club and tech societies",
      ],
    },
    {
      type: "education",
      degree: "Higher Secondary Education (12th)",
      institution: "Anugrah Narayan College, Patna",
      location: "Patna, Bihar",
      period: "2018 - 2020",
      description: [
        "Stream: Science (PCM)",
      ],
    },
    {
      type: "education",
      degree: "Secondary Education (10th)",
      institution: "Oasis Res. Public School, Patna",
      location: "Patna, Bihar",
      period: "2017 - 2018",
      description: [
        
      ],
    },
  ];

  const TimelineItem = ({ item, index }) => {
    const isWork = item.type === "work";
    const Icon = isWork ? Briefcase : GraduationCap;
    const bgColor = isWork
      ? "from-blue-600 to-purple-600"
      : "from-purple-600 to-pink-600";

    return (
      <div className="relative pl-8 pb-12 group">
        {/* Timeline line */}
        <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-purple-200 group-last:hidden"></div>

        {/* Timeline dot */}
        <div
          className={`absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-r ${bgColor} flex items-center justify-center shadow-lg z-10`}
        >
          <Icon className="w-4 h-4 text-white" />
        </div>

        {/* Content card */}
        <div className="ml-6 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl text-gray-900 mb-1">
                {isWork ? item.title : item.degree}
              </h3>
              <p className="text-blue-600 mb-1">
                {isWork ? item.company : item.institution}
              </p>
              <p className="text-gray-500 text-sm">{item.location}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{item.period}</span>
          </div>

          <ul className="space-y-2">
            {item.description.map((desc, i) => (
              <li key={i} className="text-gray-600 flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl text-gray-900">Work Experience</h3>
            </div>
            <div>
              {experiences.map((exp, index) => (
                <TimelineItem key={index} item={exp} index={index} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl text-gray-900">Education</h3>
            </div>
            <div>
              {education.map((edu, index) => (
                <TimelineItem key={index} item={edu} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
