// import React from 'react';
// import { motion } from 'framer-motion';
// import { Code, ExternalLink } from 'lucide-react';

// const projectsData = [
//   {
//     title: 'Blog Application',
//     description: 'A full-stack blog platform built with React, Node.js, and MongoDB.',
//     image: '/assets/images/blog.png',
//     technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
//     githubLink: 'https://github.com/Slygriyrsk/Blog-mern',
//     liveLink: 'https://github.com/Slygriyrsk/Blog-mern',
//   },
//   {
//     title: 'Personal ChatGPT',
//     description: 'A conversational AI application designed to assist with various tasks, providing instant responses and personalized interactions.',
//     image: '/assets/images/SABOT.png',
//     technologies: ['React', 'Gemini API', 'Material-UI'],
//     githubLink: 'https://github.com/Slygriyrsk/advanced-AIGPT',
//     liveLink: 'https://insightviz.netlify.app/',
//   },
//   {
//     title: 'Weather Forecast Dashboard',
//     description: 'A weather forecast dashboard using OpenWeatherMap API and Chart.js.',
//     image: '/assets/images/weather.png',
//     technologies: ['JavaScript', 'Chart.js', 'API Integration'],
//     githubLink: 'https://github.com/Slygriyrsk/my-weather-app',
//     liveLink: 'https://coolweatherforecast-app.netlify.app/',
//   },
//   {
//     title: 'TypeScript Algorithm and Data Structures Library',
//     description: 'A comprehensive collection of common data structures and algorithms implemented in TypeScript.',
//     image: '/assets/images/TS.png',
//     technologies: ['JavaScript', 'TypeScript', 'DSA'],
//     githubLink: 'https://github.com/Slygriyrsk/ts-algo-lib',
//     liveLink: 'https://www.npmjs.com/package/ts-algo-lib',
//   },
//   {
//     title: 'Basic Browser Rendering Engine',
//     description: 'A lightweight engine that interprets HTML, CSS, and JavaScript to render web pages.',
//     image: '/assets/images/BE.png',
//     technologies: ['HTML/CSS', 'python', 'tkinter', 'pyqt-5'],
//     githubLink: 'https://github.com/Slygriyrsk/browsing-engine',
//     liveLink: 'https://github.com/Slygriyrsk/browsing-engine',
//   },
// ];

// const ProjectCard = ({ project }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5 }}
//     className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
//   >
//     <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
//     <div className="p-6">
//       <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
//       <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
//       <div className="flex flex-wrap gap-2 mb-4">
//         {project.technologies.map((tech) => (
//           <span key={tech} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm text-gray-700 dark:text-gray-300">
//             {tech}
//           </span>
//         ))}
//       </div>
//       <div className="flex justify-between">
//         <a
//           href={project.githubLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
//         >
//           <Code className="w-5 h-5 mr-1" />
//           GitHub
//         </a>
//         <a
//           href={project.liveLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300"
//         >
//           <ExternalLink className="w-5 h-5 mr-1" />
//           Live Demo
//         </a>
//       </div>
//     </div>
//   </motion.div>
// );

// const Projects = () => {
//   return (
//     <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white"
//         >
//           My Projects
//         </motion.h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projectsData.map((project, index) => (
//             <ProjectCard key={index} project={project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Code, ExternalLink, Search, Filter, X, ChevronRight, ChevronLeft, Eye } from 'lucide-react';
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// // Extended project data with more projects
// const projectsData = [
//   {
//     title: 'Blog Application',
//     description: 'A full-stack blog platform built with React, Node.js, and MongoDB.',
//     image: '/assets/images/blog.png',
//     technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
//     githubLink: 'https://github.com/Slygriyrsk/Blog-mern',
//     liveLink: 'https://github.com/Slygriyrsk/Blog-mern',
//     category: 'Full Stack',
//     featured: true,
//     longDescription: 'A comprehensive blogging platform with user authentication, rich text editing, comment system, and responsive design. Users can create, edit, and delete posts, follow other users, and receive notifications.'
//   },
//   {
//     title: 'Personal ChatGPT',
//     description: 'A conversational AI application designed to assist with various tasks, providing instant responses and personalized interactions.',
//     image: '/assets/images/SABOT.png',
//     technologies: ['React', 'Gemini API', 'Material-UI'],
//     githubLink: 'https://github.com/Slygriyrsk/sabot-gpt',
//     liveLink: 'https://cool-sabotgpt.netlify.app/',
//     category: 'AI',
//     featured: true,
//     longDescription: 'An AI assistant that leverages the Gemini API to provide intelligent responses to user queries. Features include conversation history, voice input/output, and customizable UI themes.'
//   },
//   {
//     title: 'Weather Forecast Dashboard',
//     description: 'A weather forecast dashboard using OpenWeatherMap API and Chart.js.',
//     image: '/assets/images/weather.png',
//     technologies: ['JavaScript', 'Chart.js', 'API Integration'],
//     githubLink: 'https://github.com/Slygriyrsk/my-weather-app',
//     liveLink: 'https://coolweatherforecast-app.netlify.app/',
//     category: 'Frontend',
//     featured: false,
//     longDescription: 'A comprehensive weather application that provides current conditions, hourly forecasts, and 7-day predictions. Features interactive charts for temperature, precipitation, and wind speed trends.'
//   },
//   {
//     title: 'TypeScript Algorithm and Data Structures Library',
//     description: 'A comprehensive collection of common data structures and algorithms implemented in TypeScript.',
//     image: '/assets/images/TS.png',
//     technologies: ['JavaScript', 'TypeScript', 'DSA'],
//     githubLink: 'https://github.com/Slygriyrsk/ts-algo-lib',
//     liveLink: 'https://www.npmjs.com/package/ts-algo-lib',
//     category: 'Library',
//     featured: true,
//     longDescription: 'A well-documented library of data structures and algorithms in TypeScript, including sorting algorithms, search algorithms, trees, graphs, and more. Includes performance benchmarks and usage examples.'
//   },
//   {
//     title: 'Basic Browser Rendering Engine',
//     description: 'A lightweight engine that interprets HTML, CSS, and JavaScript to render web pages.',
//     image: '/assets/images/BE.png',
//     technologies: ['HTML/CSS', 'Python', 'Tkinter', 'PyQt-5'],
//     githubLink: 'https://github.com/Slygriyrsk/browsing-engine',
//     liveLink: 'https://github.com/Slygriyrsk/browsing-engine',
//     category: 'Systems',
//     featured: false,
//     longDescription: 'A simplified browser rendering engine built from scratch that parses HTML and CSS to create a visual representation. Includes basic JavaScript interpretation and DOM manipulation capabilities.'
//   },
//   {
//     title: 'E-commerce Platform',
//     description: 'A full-featured online store with product catalog, shopping cart, and payment processing.',
//     image: '/placeholder.svg?height=300&width=400',
//     technologies: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
//     githubLink: 'https://github.com/Slygriyrsk/ecommerce-platform',
//     liveLink: 'https://ecommerce-platform-demo.vercel.app/',
//     category: 'Full Stack',
//     featured: true,
//     longDescription: 'A modern e-commerce solution with product search, filtering, user accounts, order tracking, and secure payment processing via Stripe. Features an admin dashboard for inventory management.'
//   },
//   {
//     title: 'Task Management App',
//     description: 'A Kanban-style task management application with drag-and-drop functionality.',
//     image: '/placeholder.svg?height=300&width=400',
//     technologies: ['React', 'Redux', 'Firebase', 'React DnD'],
//     githubLink: 'https://github.com/Slygriyrsk/task-manager',
//     liveLink: 'https://task-manager-demo.netlify.app/',
//     category: 'Frontend',
//     featured: false,
//     longDescription: 'A productivity tool that helps users organize tasks using a Kanban board interface. Features include task categorization, due dates, priority levels, and team collaboration capabilities.'
//   },
//   {
//     title: 'Fitness Tracker',
//     description: 'A mobile-first web application for tracking workouts and nutrition.',
//     image: '/placeholder.svg?height=300&width=400',
//     technologies: ['React Native', 'GraphQL', 'Apollo', 'MongoDB'],
//     githubLink: 'https://github.com/Slygriyrsk/fitness-tracker',
//     liveLink: 'https://fitness-tracker-demo.vercel.app/',
//     category: 'Mobile',
//     featured: false,
//     longDescription: 'A comprehensive fitness application that allows users to track workouts, set goals, monitor nutrition, and visualize progress over time with interactive charts and statistics.'
//   },
//   {
//     title: 'Real-time Collaborative Editor',
//     description: 'A Google Docs-like collaborative text editor with real-time synchronization.',
//     image: '/placeholder.svg?height=300&width=400',
//     technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
//     githubLink: 'https://github.com/Slygriyrsk/collaborative-editor',
//     liveLink: 'https://collaborative-editor-demo.herokuapp.com/',
//     category: 'Full Stack',
//     featured: true,
//     longDescription: 'A real-time collaborative document editor that allows multiple users to edit the same document simultaneously. Features include cursor tracking, version history, and document sharing capabilities.'
//   },
//   {
//     title: 'Portfolio Website Generator',
//     description: 'A tool that generates customizable portfolio websites for developers.',
//     image: '/placeholder.svg?height=300&width=400',
//     technologies: ['Next.js', 'Tailwind CSS', 'Vercel', 'MDX'],
//     githubLink: 'https://github.com/Slygriyrsk/portfolio-generator',
//     liveLink: 'https://portfolio-generator-demo.vercel.app/',
//     category: 'Tool',
//     featured: false,
//     longDescription: 'A web application that allows developers to create professional portfolio websites by inputting their information and selecting from various templates and themes. Includes automatic deployment to Vercel.'
//   }
// ];

// // Extract all unique technologies for filtering
// const allTechnologies = Array.from(
//   new Set(projectsData.flatMap(project => project.technologies))
// ).sort();

// // Extract all unique categories for filtering
// const allCategories = Array.from(
//   new Set(projectsData.map(project => project.category))
// ).sort();

// const ProjectCard = ({ project, onClick }) => (
//   <motion.div
//     layout
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, scale: 0.95 }}
//     transition={{ duration: 0.5 }}
//     whileHover={{ 
//       y: -10,
//       boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
//     }}
//     className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300"
//   >
//     <div className="relative overflow-hidden group">
//       <img 
//         src={project.image || "/placeholder.svg"} 
//         alt={project.title} 
//         className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//         <Button 
//           variant="outline" 
//           size="sm" 
//           className="text-white border-white hover:bg-white hover:text-black"
//           onClick={(e) => {
//             e.stopPropagation();
//             onClick(project);
//           }}
//         >
//           <Eye className="mr-2 h-4 w-4" /> View Details
//         </Button>
//       </div>
//       {project.featured && (
//         <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold px-2 py-1 m-2 rounded-md">
//           Featured
//         </div>
//       )}
//     </div>
//     <div className="p-6">
//       <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
//       <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
//       <div className="flex flex-wrap gap-2 mb-4">
//         {project.technologies.slice(0, 3).map((tech) => (
//           <Badge key={tech} variant="outline" className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200">
//             {tech}
//           </Badge>
//         ))}
//         {project.technologies.length > 3 && (
//           <Badge variant="outline" className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
//             +{project.technologies.length - 3}
//           </Badge>
//         )}
//       </div>
//       <div className="flex justify-between">
//         <Button
//           variant="ghost"
//           size="sm"
//           asChild
//           className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
//         >
//           <a
//             href={project.githubLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <Code className="w-4 h-4 mr-1" />
//             GitHub
//           </a>
//         </Button>
//         <Button
//           variant="ghost"
//           size="sm"
//           asChild
//           className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300"
//         >
//           <a
//             href={project.liveLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <ExternalLink className="w-4 h-4 mr-1" />
//             Live Demo
//           </a>
//         </Button>
//       </div>
//     </div>
//   </motion.div>
// );

// const ProjectDetailModal = ({ project, isOpen, onClose }) => {
//   if (!project) return null;
  
//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-3xl">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
//         </DialogHeader>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <img 
//               src={project.image || "/placeholder.svg"} 
//               alt={project.title} 
//               className="w-full h-auto rounded-lg object-cover" 
//             />
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Description</h3>
//             <p className="text-gray-600 dark:text-gray-300 mb-4">{project.longDescription}</p>
            
//             <h3 className="text-lg font-semibold mb-2">Technologies</h3>
//             <div className="flex flex-wrap gap-2 mb-4">
//               {project.technologies.map((tech) => (
//                 <Badge key={tech} variant="outline" className="bg-gray-100 dark:bg-gray-700">
//                   {tech}
//                 </Badge>
//               ))}
//             </div>
            
//             <h3 className="text-lg font-semibold mb-2">Links</h3>
//             <div className="flex space-x-4">
//               <Button asChild>
//                 <a
//                   href={project.githubLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center"
//                 >
//                   <Code className="w-5 h-5 mr-2" />
//                   View Code
//                 </a>
//               </Button>
//               <Button asChild variant="outline">
//                 <a
//                   href={project.liveLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center"
//                 >
//                   <ExternalLink className="w-5 h-5 mr-2" />
//                   Live Demo
//                 </a>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedTech, setSelectedTech] = useState('All');
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [currentPage, setCurrentPage] = useState(1);
//   const projectsPerPage = 6;

//   // Filter projects based on search term, selected technology, and category
//   const filteredProjects = projectsData.filter(project => {
//     const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
//                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesTech = selectedTech === 'All' || project.technologies.includes(selectedTech);
//     const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    
//     return matchesSearch && matchesTech && matchesCategory;
//   });

//   // Calculate pagination
//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
//   const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

//   const handleProjectClick = (project) => {
//     setSelectedProject(project);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     // Scroll to top of projects section
//     document.getElementById('projects-grid').scrollIntoView({ behavior: 'smooth' });
//   };

//   // Reset to first page when filters change
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [searchTerm, selectedTech, selectedCategory]);

//   return (
//     <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
//             My Projects
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Explore my portfolio of web applications, tools, and libraries
//           </p>
//         </motion.div>

//         {/* Filters and Search */}
//         <div className="mb-8">
//           <div className="flex flex-col md:flex-row gap-4 mb-4">
//             <div className="relative flex-grow">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//               <Input
//                 type="text"
//                 placeholder="Search projects..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-10"
//               />
//             </div>
//             <div className="flex gap-2">
//               <Button
//                 variant={selectedCategory === 'All' ? "default" : "outline"}
//                 size="sm"
//                 onClick={() => setSelectedCategory('All')}
//               >
//                 All
//               </Button>
//               {allCategories.map(category => (
//                 <Button
//                   key={category}
//                   variant={selectedCategory === category ? "default" : "outline"}
//                   size="sm"
//                   onClick={() => setSelectedCategory(category)}
//                 >
//                   {category}
//                 </Button>
//               ))}
//             </div>
//           </div>

//           <Tabs defaultValue="all" className="w-full">
//             <TabsList className="mb-4 flex flex-wrap">
//               <TabsTrigger value="all" onClick={() => setSelectedTech('All')}>
//                 All Technologies
//               </TabsTrigger>
//               {allTechnologies.map(tech => (
//                 <TabsTrigger 
//                   key={tech} 
//                   value={tech}
//                   onClick={() => setSelectedTech(tech)}
//                 >
//                   {tech}
//                 </TabsTrigger>
//               ))}
//             </TabsList>
//           </Tabs>
//         </div>

//         {/* Projects Grid */}
//         <div id="projects-grid">
//           <AnimatePresence>
//             {filteredProjects.length === 0 ? (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="text-center py-12"
//               >
//                 <p className="text-gray-600 dark:text-gray-400 text-lg">
//                   No projects found matching your criteria.
//                 </p>
//                 <Button 
//                   variant="outline" 
//                   className="mt-4"
//                   onClick={() => {
//                     setSearchTerm('');
//                     setSelectedTech('All');
//                     setSelectedCategory('All');
//                   }}
//                 >
//                   <X className="mr-2 h-4 w-4" /> Clear Filters
//                 </Button>
//               </motion.div>
//             ) : (
//               <motion.div 
//                 layout
//                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//               >
//                 {currentProjects.map((project, index) => (
//                   <ProjectCard 
//                     key={project.title} 
//                     project={project} 
//                     onClick={handleProjectClick}
//                   />
//                 ))}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="flex justify-center mt-8">
//             <div className="flex items-center space-x-2">
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => handlePageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//               >
//                 <ChevronLeft className="h-4 w-4" />
//               </Button>
              
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                 <Button
//                   key={page}
//                   variant={currentPage === page ? "default" : "outline"}
//                   size="sm"
//                   onClick={() => handlePageChange(page)}
//                 >
//                   {page}
//                 </Button>
//               ))}
              
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => handlePageChange(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//               >
//                 <ChevronRight className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//         )}

//         {/* Project Detail Modal */}
//         <ProjectDetailModal 
//           project={selectedProject} 
//           isOpen={isModalOpen} 
//           onClose={handleCloseModal} 
//         />
//       </div>
//     </section>
//   );
// };

// export default Projects;

"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import {
  Code,
  ExternalLink,
  Search,
  X,
  ChevronRight,
  ChevronLeft,
  Eye,
  Github,
  Sparkles,
  Star,
  ArrowUpRight,
  Bookmark,
  BookmarkCheck,
  Share2,
  Layers,
  Cpu,
  Globe,
  Database,
  Lightbulb,
  Rocket,
  Smartphone,
  Book,
  PenToolIcon as Tool,
  Terminal,
  Atom,
  Brain,
} from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Badge } from "./ui/badge"
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"
import { Card } from "./ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

// Updated project data with the requested changes
const projectsData = [
  {
    title: "Apple Website Clone",
    description: "A stunning 3D Apple product showcase built with Three.js, replicating the iconic Apple design and interactivity.",
    image: "/assets/images/apple.png",
    technologies: ["Three.js", "React", "GSAP", "Tailwind CSS"],
    githubLink: "https://github.com/Slygriyrsk/apple-web-clone",
    liveLink: "https://orchardaura.netlify.app/",
    category: "3D",
    featured: true,
    longDescription:
      "A visually immersive Apple website clone featuring 3D models, smooth scroll-triggered animations, and responsive design. Built with Three.js and GSAP for dynamic visuals, the project emulates Apple's elegant product storytelling. Includes custom shaders, camera motion, and scroll-based transitions to deliver a premium user experience.",
  },  
  {
    title: "ChatGPT Clone",
    description: "An advanced AI chat application with OpenAI integration and conversation memory.",
    image: "/assets/images/chatgpt.png",
    technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel AI SDK"],
    githubLink: "https://github.com/Slygriyrsk/advanced-AIGPT",
    liveLink: "https://insightviz.netlify.app/",
    category: "AI",
    featured: true,
    longDescription:
      "A feature-rich ChatGPT clone that uses the OpenAI API to generate human-like responses. Includes features like conversation history, multiple chat sessions, code highlighting, and markdown support. The application also supports image generation and voice input capabilities.",
  },
  {
    title: "Emotion Recognition in Conversation",
    description: "A real-time ERC system using HingBERT-LSTM for Hindi-English code-mixed dialogues.",
    image: "/assets/images/bert.png",
    technologies: ["Python", "Transformers", "BERT", "LSTM", "NLP"],
    githubLink: "https://colab.research.google.com/drive/1EA-WKRfhI9RtRekauXaBUSkqHufwKvcl?usp=sharing", // update if different
    liveLink: "https://colab.research.google.com/drive/1EA-WKRfhI9RtRekauXaBUSkqHufwKvcl?usp=sharing",
    category: "AI/ML",
    featured: true,
    longDescription:
      "This project develops an Emotion Recognition in Conversations (ERC) system using a fine-tuned BERT model with speaker embeddings and a bidirectional LSTM classifier to predict emotions in Hindi-English code-mixed dialogues. The HingBERT-LSTM model achieves a weighted F1 score of 0.3753, outperforming Base LLaMA, Quantized LLaMA, and LoRA LLaMA, with strong performance on neutral and joy emotions. It includes a conversational interface for real-time emotion detection, supported by dynamic visualizations that highlight emotion shifts and training behaviors. The project tackles challenges such as class imbalance and contextual modeling, with a focus on robust multilingual emotion understanding.",
  },  
  {
    title: "Land Classification Machine Learning Project",
    description: "A machine learning system for satellite image analysis and land classification.",
    image: "/assets/images/soil.png",
    technologies: ["Python", "TensorFlow", "Keras", "Satellite Imagery"],
    githubLink: "https://github.com/Slygriyrsk/LandClassification",
    liveLink: "https://soil-quality-analysis-sn9ysnkomv4jzeotnhbnxb.streamlit.app/",
    category: "Machine Learning",
    featured: true,
    longDescription:
      "A sophisticated machine learning project that uses convolutional neural networks to classify land types from satellite imagery. The system can identify urban areas, forests, agricultural land, water bodies, and more with high accuracy. Features include interactive map visualization, historical change detection, and exportable reports. The model was trained on a diverse dataset of satellite images from different geographical regions and seasons.",
  },
  {
    title: "Quantum Simulator",
    description: "A quantum computing simulator for educational and research purposes.",
    image: "/assets/images/qc.png",
    technologies: ["Python", "Qiskit", "quNetSim", "BB84"],
    githubLink: "https://github.com/Slygriyrsk/quantum-communication-simulator",
    liveLink: "https://devrizz.github.io/quantum-communication-simulator/",
    category: "Quantum Computing",
    featured: true,
    longDescription:
      "An interactive quantum computing simulator that allows users to design, visualize, and execute quantum circuits. The application supports various quantum gates, multi-qubit operations, and measurement capabilities. It includes educational modules explaining quantum computing concepts and visualizations of quantum states and probabilities. Ideal for students, researchers, and quantum computing enthusiasts.",
  },
  {
    title: "Healthcare Management Application",
    description: "A comprehensive healthcare management system for patients, doctors, and administrators.",
    image: "/assets/images/health.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    githubLink: "https://github.com/Slygriyrsk/healthcare-hub",
    liveLink: "https://github.com/Slygriyrsk/healthcare-hub",
    category: "Full Stack",
    featured: true,
    longDescription:
      "A full-featured healthcare management application that streamlines patient care and administrative tasks. Features include appointment scheduling, electronic health records, prescription management, billing integration, and secure messaging between patients and healthcare providers. The system also includes analytics dashboards for administrators to monitor key performance indicators.",
  },
  {
    title: "Blog Application",
    description: "A full-stack blog platform built with React, Node.js, and MongoDB.",
    image: "/assets/images/blog.png",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/Slygriyrsk/Blog-mern",
    liveLink: "https://github.com/Slygriyrsk/Blog-mern",
    category: "Full Stack",
    featured: true,
    longDescription:
      "A comprehensive blogging platform with user authentication, rich text editing, comment system, and responsive design. Users can create, edit, and delete posts, follow other users, and receive notifications.",
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with product catalog, shopping cart, and payment processing.",
    image: "/assets/images/e-commerce.png",
    technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/DevRizz/unstop-task?tab=readme-ov-file",
    liveLink: "https://mytalorzone-frontend.vercel.app/",
    category: "Full Stack",
    featured: true,
    longDescription:
      "A modern e-commerce solution with product search, filtering, user accounts, order tracking, and secure payment processing via Stripe. Features an admin dashboard for inventory management.",
  },
  {
    title: "TypeScript Algorithm and Data Structures Library",
    description: "A comprehensive collection of common data structures and algorithms implemented in TypeScript.",
    image: "/assets/images/TS.png",
    technologies: ["JavaScript", "TypeScript", "DSA"],
    githubLink: "https://github.com/Slygriyrsk/ts-algo-lib",
    liveLink: "https://www.npmjs.com/package/ts-algo-lib",
    category: "Library",
    featured: true,
    longDescription:
      "A well-documented library of data structures and algorithms in TypeScript, including sorting algorithms, search algorithms, trees, graphs, and more. Includes performance benchmarks and usage examples.",
  },
  {
    title: "Basic Browser Rendering Engine",
    description: "A lightweight engine that interprets HTML, CSS, and JavaScript to render web pages.",
    image: "/assets/images/BE.png",
    technologies: ["HTML/CSS", "Python", "Tkinter", "PyQt-5"],
    githubLink: "https://github.com/Slygriyrsk/browsing-engine",
    liveLink: "https://github.com/Slygriyrsk/browsing-engine",
    category: "Systems",
    featured: false,
    longDescription:
      "A simplified browser rendering engine built from scratch that parses HTML and CSS to create a visual representation. Includes basic JavaScript interpretation and DOM manipulation capabilities.",
  }
]

// Extract all unique technologies for filtering
const allTechnologies = Array.from(new Set(projectsData.flatMap((project) => project.technologies))).sort()

// Extract all unique categories for filtering
const allCategories = Array.from(new Set(projectsData.map((project) => project.category))).sort()

const getCategoryIcon = (category) => {
  switch (category) {
    case "Full Stack":
      return <Layers className="w-4 h-4" />
    case "Frontend":
      return <Globe className="w-4 h-4" />
    case "Backend":
      return <Database className="w-4 h-4" />
    case "Mobile":
      return <Smartphone className="w-4 h-4" />
    case "AI":
      return <Brain className="w-4 h-4" />
    case "Library":
      return <Book className="w-4 h-4" />
    case "Tool":
      return <Tool className="w-4 h-4" />
    case "Systems":
      return <Terminal className="w-4 h-4" />
    case "Quantum Computing":
      return <Atom className="w-4 h-4" />
    case "Machine Learning":
      return <Cpu className="w-4 h-4" />
    default:
      return <Code className="w-4 h-4" />
  }
}

const ProjectCard = ({ project, onClick, index }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })
  const [isBookmarked, setIsBookmarked] = useState(false)

  const handleBookmark = (e) => {
    e.stopPropagation()
    setIsBookmarked(!isBookmarked)
  }

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 h-full flex flex-col"
    >
      <div className="relative overflow-hidden group">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            variant="outline"
            size="sm"
            className="text-white border-white hover:bg-white hover:text-black"
            onClick={(e) => {
              e.stopPropagation()
              onClick(project)
            }}
          >
            <Eye className="mr-2 h-4 w-4" /> View Details
          </Button>
        </div>
        <div className="absolute top-0 right-0 p-2 flex space-x-2">
          {project.featured && (
            <Badge className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-md">
              <Star className="w-3 h-3 mr-1" /> Featured
            </Badge>
          )}
        </div>
        <div className="absolute top-0 left-0 p-2">
          <Badge className="bg-black/50 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center">
            {getCategoryIcon(project.category)}
            <span className="ml-1">{project.category}</span>
          </Badge>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white group flex items-center">
          {project.title}
          <Button
            variant="ghost"
            size="sm"
            className="ml-auto p-0 h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={handleBookmark}
          >
            {isBookmarked ? (
              <BookmarkCheck className="h-4 w-4 text-primary" />
            ) : (
              <Bookmark className="h-4 w-4 text-gray-400 hover:text-primary" />
            )}
          </Button>
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>
        <div className="flex justify-between mt-auto">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View source code on GitHub</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/20"
                >
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View live demo</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </motion.div>
  )
}

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
              {project.featured && (
                <Badge className="ml-2 bg-yellow-500 text-black">
                  <Star className="w-3 h-3 mr-1" /> Featured
                </Badge>
              )}
            </div>
            <Badge className="bg-primary/10 text-primary">{project.category}</Badge>
          </div>
          <DialogDescription>
            A {project.category} project using {project.technologies.slice(0, 3).join(", ")}
            {project.technologies.length > 3 ? ` and ${project.technologies.length - 3} more` : ""}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="space-y-4">
            <div className="relative group rounded-lg overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-auto rounded-lg object-cover border dark:border-gray-700"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-white border-white hover:bg-white hover:text-black"
                  asChild
                >
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Project
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
                About the Project
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.longDescription}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <Rocket className="w-5 h-5 mr-2 text-blue-500" />
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.longDescription
                  .split(".")
                  .filter((s) => s.trim().length > 0)
                  .slice(0, 3)
                  .map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <ArrowUpRight className="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature.trim()}.</span>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-3">
              <Button asChild variant="default" className="w-full justify-between group">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <div className="flex items-center">
                    <Github className="w-5 h-5 mr-2" />
                    View Source Code
                  </div>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Button>

              <Button asChild variant="outline" className="w-full justify-between group">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <div className="flex items-center">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </div>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-between group"
                onClick={() => {
                  navigator.clipboard.writeText(project.liveLink)
                  // You could add a toast notification here
                }}
              >
                <div className="flex items-center">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share Project
                </div>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTech, setSelectedTech] = useState("All")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  // Filter projects based on search term, selected technology, and category
  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTech = selectedTech === "All" || project.technologies.includes(selectedTech)
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory

    return matchesSearch && matchesTech && matchesCategory
  })

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    // Scroll to top of projects section
    document.getElementById("projects-grid").scrollIntoView({ behavior: "smooth" })
  }

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedTech, selectedCategory])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary/30 dark:border-primary/50">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">My Projects</h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <Sparkles className="mx-4 text-purple-500 h-6 w-6" />
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of web applications, tools, and libraries
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="p-4 shadow-md dark:shadow-gray-800/30">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={selectedCategory === "All" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory("All")}
                  className={selectedCategory === "All" ? "bg-primary text-white" : ""}
                >
                  All
                </Button>
                {allCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={
                      selectedCategory === category ? "bg-primary text-white" : "hover:bg-primary/10 hover:text-primary"
                    }
                  >
                    {getCategoryIcon(category)}
                    <span className="ml-1">{category}</span>
                  </Button>
                ))}
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-4 flex flex-wrap">
                <TabsTrigger
                  value="all"
                  onClick={() => setSelectedTech("All")}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  All Technologies
                </TabsTrigger>
                {allTechnologies.map((tech) => (
                  <TabsTrigger
                    key={tech}
                    value={tech}
                    onClick={() => setSelectedTech(tech)}
                    className="data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    {tech}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </Card>
        </motion.div>

        {/* Projects Grid */}
        <div id="projects-grid">
          <AnimatePresence>
            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <p className="text-gray-600 dark:text-gray-400 text-lg">No projects found matching your criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedTech("All")
                    setSelectedCategory("All")
                  }}
                >
                  <X className="mr-2 h-4 w-4" /> Clear Filters
                </Button>
              </motion.div>
            ) : (
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} onClick={handleProjectClick} index={index} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center mt-12"
          >
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="hover:bg-primary/10 hover:text-primary"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => handlePageChange(page)}
                  className={currentPage === page ? "bg-primary text-white" : "hover:bg-primary/10 hover:text-primary"}
                >
                  {page}
                </Button>
              ))}

              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="hover:bg-primary/10 hover:text-primary"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* Project Detail Modal */}
        <ProjectDetailModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </section>
  )
}

export default Projects