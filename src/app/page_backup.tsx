'use client';

import React, { useState, useEffect, JSX } from 'react';
import { Mail, Phone, Linkedin, Github, Code, MapPin, Calendar, Award, Briefcase, GraduationCap, Terminal, Lightbulb, ExternalLink, ChevronRight, Zap, Brain, Target, Database, Shield, Wifi, Lock } from 'lucide-react';

interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
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

interface POCProject {
  title: string;
  tech: string;
  status: string;
}

export default function HackerResume(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [terminalText, setTerminalText] = useState<string>('');

  useEffect(() => {
    setIsVisible(true);
    const text = 'root@sanjay:~$ cat resume.json | jq .';
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setTerminalText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: 'CORE_LANGUAGES',
      skills: ['Python', 'JavaScript', 'TypeScript'],
      color: 'text-green-400',
      icon: <Code className="w-5 h-5" />
    },
    {
      title: 'AI_FRAMEWORKS',
      skills: ['TensorFlow', 'Scikit-learn', 'Transformers', 'OpenCV', 'LangChain'],
      color: 'text-purple-400',
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: 'BACKEND_STACK',
      skills: ['Flask', 'NestJS', 'REST APIs', 'WebSockets', 'NumPy', 'Pandas'],
      color: 'text-cyan-400',
      icon: <Database className="w-5 h-5" />
    },
    {
      title: 'CLOUD_OPS',
      skills: ['AWS (EC2, S3)', 'Docker', 'Git', 'CI/CD', 'Linux'],
      color: 'text-orange-400',
      icon: <Shield className="w-5 h-5" />
    }
  ];

  const projects: Project[] = [
    {
      title: 'LLM_EVALUATION_SUITE',
      description: 'Comprehensive evaluation framework for benchmarking large language models across multiple agent tasks including QA, summarization, and intent classification with automated scoring metrics.',
      tags: ['Python', 'Flask', 'LLM', 'Evaluation', 'APIs'],
      icon: <Brain className="w-6 h-6" />,
      status: 'DEPLOYED'
    },
    {
      title: 'AI_DRAWING_CLASSIFIER',
      description: 'MobileNetV2-based sketch classification system for educational applications, providing real-time feedback and accuracy scoring for children\'s drawings.',
      tags: ['Computer Vision', 'MobileNet', 'Education', 'Mobile'],
      icon: <Target className="w-6 h-6" />,
      status: 'ACTIVE'
    },
    {
      title: 'SATELLITE_SEGMENTATION',
      description: 'Land-use classification system using manually curated satellite imagery datasets, achieving high accuracy in identifying residential, farmland, and water bodies.',
      tags: ['Segmentation', 'OpenCV', 'Geospatial', 'Classification'],
      icon: <Wifi className="w-6 h-6" />,
      status: 'COMPLETED'
    },
    {
      title: 'FACE_RECOGNITION_SYS',
      description: 'Scalable attendance system using InsightFace and FAISS indexing, migrated to microservices architecture for enterprise deployment.',
      tags: ['Face Recognition', 'FAISS', 'NestJS', 'Microservices'],
      icon: <Lock className="w-6 h-6" />,
      status: 'PRODUCTION'
    }
  ];

  const achievements: string[] = [
    "Architected and deployed end-to-end AI models for sketch classification, face recognition, and satellite image segmentation",
    "Led migration of ML APIs from Flask to NestJS microservices, improving scalability and performance by 40%",
    "Developed comprehensive LLM evaluation frameworks for benchmarking AI agents across multiple task domains",
    "Delivered 8+ production-ready PoCs including liveness detection, vehicle tracking, and intelligent HR chatbots"
  ];

  const educationData: Education[] = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "NMAM Institute of Technology, Karkala, VTU",
      period: "2020-2022",
      grade: "CGPA: 8.7/10"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Sacred Heart College, Mangalore University",
      period: "2017-2020",
      grade: "CGPA: 7.6/10"
    }
  ];

  const pocProjects: POCProject[] = [
    { title: "Face Liveness Detection", tech: "MediaPipe + JavaScript", status: "ACTIVE" },
    { title: "Vehicle Tracking System", tech: "YOLO Object Detection", status: "TESTING" },
    { title: "Agentic HR Chatbot", tech: "Vercel AI SDK + OpenAI", status: "DEPLOYED" }
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden relative">
      {/* Animated Matrix Background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,#00ff41_100%)] bg-[length:20px_20px] animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_98%,#00ff41_100%)] bg-[length:20px_20px] animate-pulse"></div>
      </div>

      {/* Glitch lines */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-cyan-400 opacity-50 animate-pulse"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-purple-400 opacity-30 animate-pulse"></div>
      </div>

      {/* Header Terminal */}
      <header className={`relative z-10 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="border-b border-green-400/30 bg-black/90 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Terminal Header */}
            <div className="bg-gray-900 rounded-t-lg border border-green-400/30 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-t-lg border-b border-green-400/30">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-green-400 text-sm">terminal - sanjay@ai-engineer</span>
              </div>
              <div className="p-4 bg-black rounded-b-lg">
                <div className="text-green-400 text-sm">
                  {terminalText}<span className="animate-pulse">█</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-cyan-400">[</span>
                  <span className="text-purple-400">STATUS</span>
                  <span className="text-cyan-400">]</span>
                  <span className="text-green-400 ml-2">ONLINE</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full ml-2 animate-pulse"></div>
                </div>
                
                <h1 className="text-6xl lg:text-8xl font-bold mb-4 tracking-wider">
                  <span className="text-green-400">S</span>
                  <span className="text-cyan-400">A</span>
                  <span className="text-purple-400">N</span>
                  <span className="text-yellow-400">J</span>
                  <span className="text-pink-400">A</span>
                  <span className="text-green-400">Y</span>
                </h1>
                
                <div className="text-xl mb-4">
                  <span className="text-cyan-400">role:</span> 
                  <span className="text-green-400 ml-2">"AI_ENGINEER"</span>
                </div>
                
                <div className="flex items-center gap-3 text-purple-400 mb-6">
                  <MapPin className="w-5 h-5" />
                  <span>bangalore.india</span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div><span className="text-cyan-400">experience:</span> <span className="text-green-400">"2+ years"</span></div>
                  <div><span className="text-cyan-400">specialization:</span> <span className="text-green-400">["machine_learning", "computer_vision", "ai_agents"]</span></div>
                  <div><span className="text-cyan-400">status:</span> <span className="text-green-400">"transforming_data_into_intelligence"</span></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a href="mailto:sanjudevadiga671@gmail.com" 
                     className="group flex items-center gap-3 px-6 py-3 bg-gray-900 border border-green-400/50 hover:border-green-400 rounded-lg transition-all duration-300 hover:bg-green-400/10">
                    <Mail className="w-5 h-5 text-green-400" />
                    <span className="text-green-400">SEND_MAIL</span>
                    <ExternalLink className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="tel:+918495899492" 
                     className="group flex items-center gap-3 px-6 py-3 bg-gray-900 border border-cyan-400/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-400/10">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-400">CALL</span>
                    <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                
                <div className="flex gap-4 justify-center">
                  {[
                    { icon: <Linkedin className="w-5 h-5" />, color: "text-blue-400", borderColor: "border-blue-400/50", hoverColor: "hover:border-blue-400 hover:bg-blue-400/10" },
                    { icon: <Github className="w-5 h-5" />, color: "text-purple-400", borderColor: "border-purple-400/50", hoverColor: "hover:border-purple-400 hover:bg-purple-400/10" },
                    { icon: <Terminal className="w-5 h-5" />, color: "text-orange-400", borderColor: "border-orange-400/50", hoverColor: "hover:border-orange-400 hover:bg-orange-400/10" }
                  ].map((social, index) => (
                    <a key={index} href="#" 
                       className={`group flex items-center justify-center w-12 h-12 bg-gray-900 border ${social.borderColor} ${social.hoverColor} rounded-lg transition-all duration-300 hover:scale-110`}>
                      <span className={`${social.color} group-hover:scale-110 transition-transform`}>
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="xl:col-span-2 space-y-8">
            {/* Experience Section */}
            <section className={`transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-green-400/30 p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-black border border-green-400/50 rounded-lg">
                    <Briefcase className="w-6 h-6 text-green-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-green-400 tracking-wider">
                    ./EXPERIENCE
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-black/50 border border-cyan-400/30 rounded-lg p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-cyan-400">SOFTWARE_ENGINEER</h3>
                      <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-green-400/30 rounded">
                        <Calendar className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 text-sm">AUG_2022 -&gt; PRESENT</span>
                      </div>
                    </div>
                    <p className="text-xl text-purple-400 font-semibold mb-6">Someshwara_Software_Pvt_Ltd</p>
                    <div className="space-y-3">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-3 group">
                          <div className="p-1 bg-green-400/20 border border-green-400/50 rounded mt-1">
                            <ChevronRight className="w-3 h-3 text-green-400 group-hover:translate-x-1 transition-transform" />
                          </div>
                          <p className="text-gray-300 leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section className={`transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-purple-400/30 p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-black border border-purple-400/50 rounded-lg">
                    <Lightbulb className="w-6 h-6 text-purple-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-purple-400 tracking-wider">
                    ./PROJECTS
                  </h2>
                </div>
                
                <div className="grid gap-6">
                  {projects.map((project, index) => (
                    <div 
                      key={index} 
                      className="group bg-black/50 border border-gray-700 hover:border-cyan-400/50 rounded-lg p-6 transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                      onMouseEnter={() => setHoveredProject(index)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 bg-gray-800 border border-cyan-400/30 rounded-lg transition-all duration-300 ${hoveredProject === index ? 'scale-110 border-cyan-400' : ''}`}>
                          <span className="text-cyan-400">
                            {project.icon}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-bold text-cyan-400 group-hover:text-green-400 transition-colors">
                              {project.title}
                            </h3>
                            <span className={`px-3 py-1 text-xs border rounded-full ${
                              project.status === 'DEPLOYED' ? 'text-green-400 border-green-400/30 bg-green-400/10' :
                              project.status === 'ACTIVE' ? 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10' :
                              project.status === 'PRODUCTION' ? 'text-purple-400 border-purple-400/30 bg-purple-400/10' :
                              'text-gray-400 border-gray-400/30 bg-gray-400/10'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                          <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                              <span 
                                key={tagIndex} 
                                className="px-3 py-1 bg-gray-800 border border-gray-600 text-gray-300 rounded text-sm hover:border-green-400/50 hover:text-green-400 transition-all"
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
              <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-orange-400/30 p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-black border border-orange-400/50 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-orange-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-orange-400 tracking-wider">
                    ./EDUCATION
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {educationData.map((edu, index) => (
                    <div key={index} className="bg-black/50 border border-gray-700 rounded-lg p-6 hover:border-orange-400/50 transition-all duration-300">
                      <h3 className="text-xl font-bold text-orange-400 mb-2">{edu.degree}</h3>
                      <p className="text-cyan-400 font-semibold mb-3">{edu.institution}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">{edu.period}</span>
                        <span className="px-4 py-2 bg-orange-400/20 border border-orange-400/50 text-orange-400 font-bold rounded">
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
              <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-cyan-400/30 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-black border border-cyan-400/50 rounded">
                    <Terminal className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h2 className="text-xl font-bold text-cyan-400">./SKILLS</h2>
                </div>
                
                <div className="space-y-6">
                  {skillCategories.map((category, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className={category.color}>
                          {category.icon}
                        </span>
                        <h3 className={`font-bold ${category.color}`}>{category.title}</h3>
                      </div>
                      <div className="space-y-2">
                        {category.skills.map((skill, skillIndex) => (
                          <div 
                            key={skillIndex} 
                            className="flex items-center justify-between py-2 px-3 bg-black/50 border border-gray-700 hover:border-green-400/50 rounded transition-all duration-300"
                          >
                            <span className="text-gray-300 text-sm">{skill}</span>
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-yellow-400/30 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-black border border-yellow-400/50 rounded">
                    <Award className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h2 className="text-xl font-bold text-yellow-400">./CERTS</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-black/50 border border-green-400/30 rounded p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <div>
                        <p className="font-bold text-green-400 text-sm">AI_AGENTS_FUNDAMENTALS</p>
                        <p className="text-green-400/70 text-xs">HuggingFace</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/50 border border-yellow-400/30 rounded p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                      <div>
                        <p className="font-bold text-yellow-400 text-sm">AWS_SOLUTIONS_ARCHITECT</p>
                        <p className="text-yellow-400/70 text-xs">IN_PROGRESS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* POC Projects */}
            <section className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg border border-pink-400/30 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-black border border-pink-400/50 rounded">
                    <Database className="w-5 h-5 text-pink-400" />
                  </div>
                  <h2 className="text-xl font-bold text-pink-400">./POC</h2>
                </div>
                
                <div className="space-y-3">
                  {pocProjects.map((poc, index) => (
                    <div key={index} className="group bg-black/50 border border-gray-700 hover:border-pink-400/50 rounded p-4 transition-all duration-300 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${
                            poc.status === 'ACTIVE' ? 'bg-green-400' :
                            poc.status === 'TESTING' ? 'bg-yellow-400' :
                            'bg-purple-400'
                          } animate-pulse`}></div>
                          <div>
                            <h3 className="font-bold text-pink-400 group-hover:text-green-400 transition-colors text-sm">{poc.title}</h3>
                            <p className="text-xs text-gray-400">{poc.tech}</p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-pink-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-12">
        <div className="bg-black border-t border-green-400/30">
          <div className="max-w-7xl mx-auto px-6 py-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
              <h3 className="text-xl font-bold text-green-400">BUILDING_THE_FUTURE</h3>
              <Zap className="w-5 h-5 text-purple-400 animate-pulse" />
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              <span className="text-cyan-400">mission:</span> "Transforming complex challenges into elegant AI-driven solutions"
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}