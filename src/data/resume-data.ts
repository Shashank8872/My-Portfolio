import { Brain, Cpu, Lightbulb, Target } from 'lucide-react';

export const achievements = [
  "Architected and deployed end-to-end AI models for sketch classification, face recognition, and satellite image segmentation",
  "Led migration of ML APIs from Flask to NestJS microservices, improving scalability and performance by 40%",
  "Developed comprehensive LLM evaluation frameworks for benchmarking AI agents across multiple task domains",
  "Delivered 8+ production-ready PoCs including liveness detection, vehicle tracking, and intelligent HR chatbots",
];

export const projects = [
  {
    title: 'LLM Evaluation Suite',
    description: 'Built comprehensive evaluation framework for benchmarking large language models across multiple agent tasks including QA, summarization, and intent classification with automated scoring metrics.',
    tags: ['Python', 'Flask', 'LLM', 'Evaluation', 'APIs'],
    icon: Brain,
    gradient: 'from-purple-600 to-violet-700',
    color: 'purple',
  },
  {
    title: 'AI-Powered Drawing Classifier',
    description: 'Developed MobileNetV2-based sketch classification system for educational applications, providing real-time feedback and accuracy scoring for children\'s drawings.',
    tags: ['Computer Vision', 'MobileNet', 'Education', 'Mobile'],
    icon: Lightbulb,
    gradient: 'from-amber-500 to-orange-600',
    color: 'orange',
  },
  {
    title: 'Satellite Image Segmentation',
    description: 'Created land-use classification system using manually curated satellite imagery datasets, achieving high accuracy in identifying residential, farmland, and water bodies.',
    tags: ['Segmentation', 'OpenCV', 'Geospatial', 'Classification'],
    icon: Target,
    gradient: 'from-emerald-500 to-teal-600',
    color: 'emerald',
  },
  {
    title: 'Production Face Recognition',
    description: 'Engineered scalable attendance system using InsightFace and FAISS indexing, migrated to microservices architecture for enterprise deployment.',
    tags: ['Face Recognition', 'FAISS', 'NestJS', 'Microservices'],
    icon: Cpu,
    gradient: 'from-cyan-500 to-blue-600',
    color: 'cyan',
  }
];

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'NMAM Institute of Technology, Karkala, VTU',
    period: '2020-2022',
    grade: 'CGPA: 8.7/10',
    gradient: 'from-purple-500 to-violet-600',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Sacred Heart College, Mangalore University',
    period: '2017-2020',
    grade: 'CGPA: 7.6/10',
    gradient: 'from-blue-500 to-cyan-600',
  }
];

export const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'TypeScript'],
    gradient: 'from-emerald-400 via-cyan-500 to-blue-500',
  },
  {
    title: 'AI/ML Frameworks',
    skills: ['TensorFlow', 'Scikit-learn', 'Transformers', 'OpenCV', 'LangChain'],
    gradient: 'from-purple-500 via-violet-500 to-purple-600',
  },
  {
    title: 'Backend & APIs',
    skills: ['Flask', 'NestJS', 'REST APIs', 'WebSockets', 'NumPy', 'Pandas'],
    gradient: 'from-orange-400 via-red-500 to-pink-500',
  },
  {
    title: 'Cloud & Infrastructure',
    skills: ['AWS (EC2, S3)', 'Docker', 'Git', 'CI/CD', 'Linux'],
    gradient: 'from-indigo-500 via-blue-600 to-cyan-600',
  }
];

export const certifications = [
  {
    title: 'AI Agents Fundamentals',
    provider: 'HuggingFace',
    color: 'green'
  },
  {
    title: 'AWS Solutions Architect',
    provider: 'In Progress',
    color: 'amber'
  }
];

export const pocProjects = [
  { title: 'Face Liveness Detection', tech: 'MediaPipe + JavaScript', gradient: 'from-blue-500 to-cyan-500' },
  { title: 'Vehicle Tracking System', tech: 'YOLO Object Detection', gradient: 'from-purple-500 to-violet-500' },
  { title: 'Agentic HR Chatbot', tech: 'Vercel AI SDK + OpenAI', gradient: 'from-emerald-500 to-teal-500' }
];
