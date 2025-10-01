"use client"; 
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

export default function PortfolioFooter() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/rahul8651',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/rahul-kumar-878266216/',
      label: 'LinkedIn',
    },
    {
      icon: Twitter,
      url: 'https://x.com/Rahulkr1_',
      label: 'Twitter',
    },
    {
      icon: Mail,
      url: 'mailto:rahul865162@gmail.com',
      label: 'Email',
    },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {'Rahul Kumar'}
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              B.Tech Computer Science Student passionate about building innovative
              solutions and exploring cutting-edge technologies.
            </p>
            <p className="text-gray-400">
              Let's build something amazing together!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-lg mb-4">Connect With Me</h4>
            <p className="text-gray-300 mb-4">
              Follow me on social media for updates and new projects.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start gap-2">
              © {currentYear} Rahul Kumar. Made with{' '}
              <Heart className="w-4 h-4 text-red-500 fill-current" /> using Next.js & Tailwind CSS
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}