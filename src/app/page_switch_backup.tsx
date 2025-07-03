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
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className={`bg-white shadow-sm transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-blue-600 font-semibold">Available for Opportunities</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Shashank
              </h1>
              
              <div className="text-xl text-gray-600 mb-4">
                Software Developer
              </div>
              
              <div className="flex items-center gap-3 text-gray-500 mb-6">
                <MapPin className="w-5 h-5" />
                <span>Manipal, Karnataka, India</span>
              </div>
              
              <div className="space-y-2 text-gray-600">
                <div><span className="font-semibold">Experience:</span> 1+ years</div>
                <div><span className="font-semibold">Specialization:</span> Full Stack, VR/AR Development, Game Development</div>
                <div><span className="font-semibold">Focus:</span> Building immersive digital experiences</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-3">
                <a href="mailto:shashank.8872@gmail.com" 
                   className="flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>shashank.8872@gmail.com</span>
                </a>
                <a href="tel:+919483879128" 
                   className="flex items-center gap-3 px-4 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+91 9483879128</span>
                </a>
              </div>
              
              <div className="flex gap-3 justify-center">
                <a href="#" className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="xl:col-span-2 space-y-8">
            {/* Experience Section */}
            <section className={`transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Work Experience
                  </h2>
                </div>
                
                <div className="space-y-8">
                  {workExperience.map((job, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-blue-200 last:border-l-0">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                        <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600 text-sm">{job.period}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mb-4">
                        <p className="text-lg text-blue-600 font-semibold">{job.company}</p>
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          job.type === 'Full-time' ? 'text-green-700 bg-green-100' :
                          job.type === 'Internship' ? 'text-yellow-700 bg-yellow-100' :
                          'text-purple-700 bg-purple-100'
                        }`}>
                          {job.type}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="space-y-2">
                        {job.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start gap-3">
                            <ChevronRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                            <p className="text-gray-700">{achievement}</p>
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
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Code className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Projects
                  </h2>
                </div>
                
                <div className="grid gap-6">
                  {projects.map((project, index) => (
                    <div 
                      key={index} 
                      className="border border-gray-200 hover:border-blue-300 rounded-lg p-6 transition-all duration-300 hover:shadow-md"
                      onMouseEnter={() => setHoveredProject(index)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 bg-gray-100 rounded-lg transition-all duration-300 ${hoveredProject === index ? 'bg-blue-100' : ''}`}>
                          <span className={`text-gray-600 ${hoveredProject === index ? 'text-blue-600' : ''}`}>
                            {project.icon}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-bold text-gray-900">
                              {project.title}
                            </h3>
                            <span className={`px-3 py-1 text-xs rounded-full ${
                              project.status === 'Completed' ? 'text-green-700 bg-green-100' :
                              project.status === 'Active' ? 'text-blue-700 bg-blue-100' :
                              project.status === 'Production' ? 'text-purple-700 bg-purple-100' :
                              'text-gray-700 bg-gray-100'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                              <span 
                                key={tagIndex} 
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors"
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
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Education
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {educationData.map((edu, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-purple-300 transition-colors">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                      <p className="text-purple-600 font-semibold mb-3">{edu.institution}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">{edu.period}</span>
                        <span className="px-4 py-2 bg-purple-100 text-purple-700 font-semibold rounded-lg">
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
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Code className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Technical Skills</h2>
                </div>
                
                <div className="space-y-6">
                  {skillCategories.map((category, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">
                          {category.icon}
                        </span>
                        <h3 className="font-semibold text-gray-900">{category.title}</h3>
                      </div>
                      <div className="space-y-2">
                        {category.skills.map((skill, skillIndex) => (
                          <div 
                            key={skillIndex} 
                            className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                          >
                            <span className="text-gray-700 text-sm">{skill}</span>
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
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
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Award className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Relevant Coursework</h2>
                </div>
                
                <div className="space-y-3">
                  {coursework.map((course, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <p className="text-gray-700 text-sm font-medium">{course}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Career Objective */}
            <section className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Target className="w-5 h-5 text-orange-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Career Objective</h2>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
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
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Building Tomorrow's Digital Experiences</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate about creating immersive digital experiences that bridge reality and imagination through innovative technology.
          </p>
        </div>
      </footer>
    </div>
  );
}