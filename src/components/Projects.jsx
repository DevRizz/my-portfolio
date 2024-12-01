import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: 'Blog Application',
    description: 'A full-stack blog platform built with React, Node.js, and MongoDB.',
    image: '/assets/images/blog.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubLink: 'https://github.com/Slygriyrsk/Blog-mern',
    liveLink: 'https://github.com/Slygriyrsk/Blog-mern',
  },
  {
    title: 'Personal ChatGPT',
    description: 'A conversational AI application designed to assist with various tasks, providing instant responses and personalized interactions.',
    image: '/assets/images/SABOT.png',
    technologies: ['React', 'Gemini API', 'Material-UI'],
    githubLink: 'https://github.com/Slygriyrsk/sabot-gpt',
    liveLink: 'https://cool-sabotgpt.netlify.app/',
  },
  {
    title: 'Weather Forecast Dashboard',
    description: 'A weather forecast dashboard using OpenWeatherMap API and Chart.js.',
    image: '/assets/images/weather.png',
    technologies: ['JavaScript', 'Chart.js', 'API Integration'],
    githubLink: 'https://github.com/Slygriyrsk/my-weather-app',
    liveLink: 'https://coolweatherforecast-app.netlify.app/',
  },
  {
    title: 'TypeScript Algorithm and Data Structures Library',
    description: 'A comprehensive collection of common data structures and algorithms implemented in TypeScript.',
    image: '/assets/images/TS.png',
    technologies: ['JavaScript', 'TypeScript', 'DSA'],
    githubLink: 'https://github.com/Slygriyrsk/ts-algo-lib',
    liveLink: 'https://www.npmjs.com/package/ts-algo-lib',
  },
  {
    title: 'Basic Browser Rendering Engine',
    description: 'A lightweight engine that interprets HTML, CSS, and JavaScript to render web pages.',
    image: '/assets/images/BE.png',
    technologies: ['HTML/CSS', 'python', 'tkinter', 'pyqt-5'],
    githubLink: 'https://github.com/Slygriyrsk/browsing-engine',
    liveLink: 'https://github.com/Slygriyrsk/browsing-engine',
  },
];

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
  >
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span key={tech} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm text-gray-700 dark:text-gray-300">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <Code className="w-5 h-5 mr-1" />
          GitHub
        </a>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300"
        >
          <ExternalLink className="w-5 h-5 mr-1" />
          Live Demo
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;