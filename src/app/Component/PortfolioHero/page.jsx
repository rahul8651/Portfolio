"use client";
import React from "react";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function PortfolioHero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  👋 Welcome to my portfolio
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Rahul Kumar
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600">
                B.Tech Computer Science Student
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Passionate about building innovative solutions and exploring
                cutting-edge technologies. Specializing in full-stack
                development, machine learning, and problem-solving.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                asChild
                variant="outline"
                className="px-8 py-6 rounded-xl border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50"
              >
                <a href="https://drive.google.com/file/d/1aVPPiat1TeUr0XRelq2r0qPZ52gyElvI/view?usp=sharing" download>
                  <Download className="mr-2 w-5 h-5" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/rahul8651"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-all"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-kumar-878266216/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:rahul865162@gmail.com"
                className="p-3 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-all"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>

              {/* Main Circle */}
              <div className="absolute inset-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-center space-y-4">
                  {/* Profile Photo inside Circle */}
                  <Image
                      src="/assest/Photo.jpg" // place your image inside /public/assest/Photo.jpg
                      alt="My Profile"
                      fill
                      className="object-cover overflow-hidden rounded-full border-4 border-white shadow-lg"
                      
                    />

                  
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-0 right-0 bg-white rounded-lg shadow-lg p-4 animate-bounce">
                <span className="text-2xl">💡</span>
              </div>
              <div
                className="absolute bottom-0 left-0 bg-white rounded-lg shadow-lg p-4 animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
