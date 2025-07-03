'use client';

import React, { useState, useEffect, JSX } from 'react';
import { Mail, Phone, Linkedin, Github, Code, MapPin, Calendar, Award, Briefcase, GraduationCap, User, ExternalLink, ChevronRight, Target, Database, Users, Brain, Eye, Smartphone, Gamepad2 } from 'lucide-react';

interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  status: string;
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

interface WorkExperience {
  title: string;
  company: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
}

export default function ProfessionalResume(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      skills: ['C#', 'C/C++', 'JavaScript', 'HTML5', 'CSS'],
      icon: <Code className="w-5 h-5" />
    },
    {
      title: 'Frameworks & Tools',
      skills: ['Unity', 'React.js', 'Node.js', 'Express.js', 'Blender'],
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: 'Database & Technology',
      skills: ['MySQL', 'MongoDB', 'Git', 'Material UI'],
      icon: <Database className="w-5 h-5" />
    },
    {
      title: 'Specializations',
      skills: ['VR/AR Development', 'Game Development', '3D Modeling', 'UI/UX Design'],
      icon: <Gamepad2 className="w-5 h-5" />
    }
  ];

  const projects: Project[] = [
    {
      title: 'AI Image Generator',
      description: 'Built a prompt-based image generation website using OpenAI\'s DALL·E and the MERN stack. Enabled users to view, share, and interact with generated images, fostering a community-driven platform.',
      tags: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'OpenAI API'],
      icon: <Brain className="w-6 h-6" />,
      status: 'Completed'
    },
    {
      title: 'Social Media Platform',
      description: 'Built a responsive social media platform using the MERN stack and Material UI. Enabled features like friend requests, likes, comments, shares, and photo uploads with captions for rich user interaction.',
      tags: ['Node.js', 'Express.js', 'React.js', 'Material UI', 'MongoDB'],
      icon: <Users className="w-6 h-6" />,
      status: 'Completed'
    },
    {
      title: 'VR CPR Training',
      description: 'Developed immersive VR healthcare project that teaches and simulates CPR using headsets for realistic training. Also created mobile app version with voice/text commands and mannequin integration.',
      tags: ['Unity', 'VR Development', 'Healthcare', 'Mobile App', 'C#'],
      icon: <Eye className="w-6 h-6" />,
      status: 'Production'
    },
    {
      title: 'Tourism VR Experience',
      description: 'Worked on tourism project with 3D walkthroughs using panoramic and 360° images to simulate real tour paths. Currently developing Unity-based mobile app using AR technology.',
      tags: ['Unity', 'AR/VR', 'Tourism', '3D Modeling', 'Mobile Development'],
      icon: <Smartphone className="w-6 h-6" />,
      status: 'Active'
    }
  ];

  const workExperience: WorkExperience[] = [
    {
      title: 'Associate Software Engineer',
      company: 'Someshwara Software Pvt Ltd',
      period: 'Feb 2024 - Present',
      type: 'Full-time',
      description: 'Developed immersive VR experiences in Unity, focusing on games and virtual environments optimized for headsets.',
      achievements: [
        'Built a healthcare VR project that teaches and simulates CPR using a headset for realistic training',
        'Developed a mobile app version of the CPR project with voice/text commands, mannequin integration, and signal graph display',
        'Worked on a tourism project with 3D walkthroughs using panoramic and 360° images to simulate real tour paths',
        'Currently developing a Unity-based mobile app using AR technology, contributing to both design and development'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Horigine Consulting Pvt Ltd',
      period: 'Jun 2023 - Dec 2023',
      type: 'Internship',
      description: 'Worked as a Front-End Developer on a performance tracking platform to improve task management and user interaction.',
      achievements: [
        'Developed responsive UI components using React.js for real-time performance tracking and task monitoring',
        'Integrated an intuitive dashboard and notification system to enhance user experience and communication'
      ]
    },
    {
      title: 'Team Member',
      company: 'Vision Student Project',
      period: '2021 - 2022',
      type: 'Project',
      description: 'A Team Member of the Student Project VISION, where I worked on design and development of 3D Models for AR/VR Applications.',
      achievements: [
        'Worked on few Assets on Blender, have created few game scenes and worked on it',
        'Participated in a VR based Hackathon'
      ]
    }
  ];

  const educationData: Education[] = [
    {
      degree: "B.Tech in Computer and Communication Engineering",
      institution: "Manipal Institute of Technology",
      period: "2020-2024",
      grade: "CGPA: 7/10"
    },
    {
      degree: "Class 11th and 12th",
      institution: "Vidyodaya PU College",
      period: "2018-2020",
      grade: "Completed"
    }
  ];

  const coursework: string[] = [
    "Data Structures and Algorithm",
    "Operating Systems", 
    "Object-Oriented Programming",
    "Database Management Systems"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <header className={`bg-gray-800 shadow-2xl transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 font-semibold tracking-wide">Available for Opportunities</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-black text-white mb-6" style={{ 
                fontFamily: '"Playfair Display", "Georgia", serif',
                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 65%, #60a5fa 85%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
                fontWeight: '900',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                filter: 'contrast(1.1) brightness(1.05)',
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased'
              }}>
                Shashank
              </h1>
 
              
              <div className="text-2xl text-cyan-400 mb-6 font-semibold">
                Software Developer
              </div>
              
              <div className="flex items-center gap-3 text-gray-400 mb-8">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">Manipal, Karnataka, India</span>
              </div>
              
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-lg"><span className="font-semibold text-white">Experience:</span> 1+ years</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-lg"><span className="font-semibold text-white">Specialization:</span> VR/AR Development, Game Development, Full Stack.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-lg"><span className="font-semibold text-white">Focus:</span> Building immersive digital experiences</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <a href="mailto:shashank.8872@gmail.com" 
                   className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">shashank.8872@gmail.com</span>
                </a>
                <a href="tel:+919483879128" 
                   className="flex items-center gap-3 px-6 py-4 bg-gray-700 text-gray-100 rounded-xl hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">+91 9483879128</span>
                </a>
              </div>
              
              <div className="flex gap-4 justify-center">
                <a href="https://www.linkedin.com/in/shashank-h-9840b0250/" className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/Shashank8872" className="flex items-center justify-center w-14 h-14 bg-gray-700 text-gray-100 rounded-xl hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="xl:col-span-2 space-y-8">
            {/* Experience Section */}
            <section className={`transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-8 hover:border-gray-600 transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>
                    Work Experience
                  </h2>
                </div>
                
                <div className="space-y-8">
                  {workExperience.map((job, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-cyan-500 last:border-l-0">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">{job.title}</h3>
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-xl">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300 text-sm font-medium">{job.period}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mb-4">
                        <p className="text-lg text-cyan-400 font-semibold">{job.company}</p>
                        <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                          job.type === 'Full-time' ? 'text-green-400 bg-green-900/30' :
                          job.type === 'Internship' ? 'text-yellow-400 bg-yellow-900/30' :
                          'text-purple-400 bg-purple-900/30'
                        }`}>
                          {job.type}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">{job.description}</p>
                      <div className="space-y-3">
                        {job.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start gap-3">
                            <ChevronRight className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                            <p className="text-gray-300 leading-relaxed">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section className={`transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-8 hover:border-gray-600 transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>
                    Projects
                  </h2>
                </div>
                
                <div className="grid gap-6">
                  {projects.map((project, index) => (
                    <div 
                      key={index} 
                      className="border border-gray-700 hover:border-cyan-500 rounded-xl p-6 transition-all duration-300 hover:shadow-2xl bg-gray-900/50 backdrop-blur-sm"
                      onMouseEnter={() => setHoveredProject(index)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 bg-gray-700 rounded-xl transition-all duration-300 ${hoveredProject === index ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : ''}`}>
                          <span className={`text-gray-400 ${hoveredProject === index ? 'text-white' : ''}`}>
                            {project.icon}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-bold text-white">
                              {project.title}
                            </h3>
                            <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                              project.status === 'Completed' ? 'text-green-400 bg-green-900/30' :
                              project.status === 'Active' ? 'text-blue-400 bg-blue-900/30' :
                              project.status === 'Production' ? 'text-purple-400 bg-purple-900/30' :
                              'text-gray-400 bg-gray-700'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                          <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                              <span 
                                key={tagIndex} 
                                className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all duration-300 font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section className={`transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-8 hover:border-gray-600 transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>
                    Education
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {educationData.map((edu, index) => (
                    <div key={index} className="border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm">
                      <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-green-400 font-semibold mb-3">{edu.institution}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">{edu.period}</span>
                        <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-xl">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills Section */}
            <section className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-6 hover:border-gray-600 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>Technical Skills</h2>
                </div>
                
                <div className="space-y-6">
                  {skillCategories.map((category, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400">
                          {category.icon}
                        </span>
                        <h3 className="font-semibold text-white">{category.title}</h3>
                      </div>
                      <div className="space-y-2">
                        {category.skills.map((skill, skillIndex) => (
                          <div 
                            key={skillIndex} 
                            className="flex items-center justify-between py-3 px-4 bg-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 group"
                          >
                            <span className="text-gray-300 text-sm font-medium group-hover:text-white">{skill}</span>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:bg-white"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Coursework */}
            <section className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-6 hover:border-gray-600 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>Relevant Coursework</h2>
                </div>
                
                <div className="space-y-3">
                  {coursework.map((course, index) => (
                    <div key={index} className="bg-gray-700 rounded-xl p-4 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 transition-all duration-300 group">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:bg-white"></div>
                        <p className="text-gray-300 text-sm font-medium group-hover:text-white">{course}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Career Objective */}
            <section className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-6 hover:border-gray-600 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>Career Objective</h2>
                </div>
                
                <div className="bg-gray-700 rounded-xl p-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Highly motivated and eager to learn, I am seeking an Internship or Full-time role as a Software Developer. 
                    I aim to apply my skills in real-world projects while growing in a dynamic environment that encourages 
                    learning and innovation.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>
            Building Tomorrow's Digital Experiences
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Passionate about creating immersive digital experiences that bridge reality and imagination through innovative technology.
          </p>
        </div>
      </footer>
    </div>
  );
}