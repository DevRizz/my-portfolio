// "use client"

// import { useState, useEffect, useRef } from "react"
// import { motion, AnimatePresence, useInView } from "framer-motion"
// import {
//   Code,
//   ExternalLink,
//   Search,
//   X,
//   ChevronRight,
//   ChevronLeft,
//   Eye,
//   Github,
//   Sparkles,
//   Star,
//   ArrowUpRight,
//   Bookmark,
//   BookmarkCheck,
//   Share2,
//   Layers,
//   Cpu,
//   Globe,
//   Database,
//   Lightbulb,
//   Rocket,
//   Smartphone,
//   Book,
//   PenToolIcon as Tool,
//   Terminal,
//   Atom,
//   Brain,
// } from "lucide-react"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
// import { Button } from "./ui/button"
// import { Input } from "./ui/input"
// import { Badge } from "./ui/badge"
// import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"
// import { Card } from "./ui/card"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

// // Updated project data with the requested changes
// const projectsData = [
//   {
//     title: "Apple Website Clone",
//     description: "A stunning 3D Apple product showcase built with Three.js, replicating the iconic Apple design and interactivity.",
//     image: "/assets/images/apple.png",
//     technologies: ["Three.js", "React", "GSAP", "Tailwind CSS"],
//     githubLink: "https://github.com/Slygriyrsk/apple-web-clone",
//     liveLink: "https://orchardaura.netlify.app/",
//     category: "3D",
//     featured: true,
//     longDescription:
//       "A visually immersive Apple website clone featuring 3D models, smooth scroll-triggered animations, and responsive design. Built with Three.js and GSAP for dynamic visuals, the project emulates Apple's elegant product storytelling. Includes custom shaders, camera motion, and scroll-based transitions to deliver a premium user experience.",
//   },  
//   {
//     title: "ChatGPT Clone",
//     description: "An advanced AI chat application with OpenAI integration and conversation memory.",
//     image: "/assets/images/chatgpt.png",
//     technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel AI SDK"],
//     githubLink: "https://github.com/Slygriyrsk/advanced-AIGPT",
//     liveLink: "https://insightviz.netlify.app/",
//     category: "AI",
//     featured: true,
//     longDescription:
//       "A feature-rich ChatGPT clone that uses the OpenAI API to generate human-like responses. Includes features like conversation history, multiple chat sessions, code highlighting, and markdown support. The application also supports image generation and voice input capabilities.",
//   },
//   {
//     title: "Emotion Recognition in Conversation",
//     description: "A real-time ERC system using HingBERT-LSTM for Hindi-English code-mixed dialogues.",
//     image: "/assets/images/bert.png",
//     technologies: ["Python", "Transformers", "BERT", "LSTM", "NLP"],
//     githubLink: "https://colab.research.google.com/drive/1EA-WKRfhI9RtRekauXaBUSkqHufwKvcl?usp=sharing", // update if different
//     liveLink: "https://colab.research.google.com/drive/1EA-WKRfhI9RtRekauXaBUSkqHufwKvcl?usp=sharing",
//     category: "AI/ML",
//     featured: true,
//     longDescription:
//       "This project develops an Emotion Recognition in Conversations (ERC) system using a fine-tuned BERT model with speaker embeddings and a bidirectional LSTM classifier to predict emotions in Hindi-English code-mixed dialogues. The HingBERT-LSTM model achieves a weighted F1 score of 0.3753, outperforming Base LLaMA, Quantized LLaMA, and LoRA LLaMA, with strong performance on neutral and joy emotions. It includes a conversational interface for real-time emotion detection, supported by dynamic visualizations that highlight emotion shifts and training behaviors. The project tackles challenges such as class imbalance and contextual modeling, with a focus on robust multilingual emotion understanding.",
//   },  
//   {
//     title: "Land Classification Machine Learning Project",
//     description: "A machine learning system for satellite image analysis and land classification.",
//     image: "/assets/images/soil.png",
//     technologies: ["Python", "TensorFlow", "Keras", "Satellite Imagery"],
//     githubLink: "https://github.com/Slygriyrsk/LandClassification",
//     liveLink: "https://soil-quality-analysis-sn9ysnkomv4jzeotnhbnxb.streamlit.app/",
//     category: "Machine Learning",
//     featured: true,
//     longDescription:
//       "A sophisticated machine learning project that uses convolutional neural networks to classify land types from satellite imagery. The system can identify urban areas, forests, agricultural land, water bodies, and more with high accuracy. Features include interactive map visualization, historical change detection, and exportable reports. The model was trained on a diverse dataset of satellite images from different geographical regions and seasons.",
//   },
//   {
//     title: "Quantum Simulator",
//     description: "A quantum computing simulator for educational and research purposes.",
//     image: "/assets/images/qc.png",
//     technologies: ["Python", "Qiskit", "quNetSim", "BB84"],
//     githubLink: "https://github.com/Slygriyrsk/quantum-communication-simulator",
//     liveLink: "https://devrizz.github.io/quantum-communication-simulator/",
//     category: "Quantum Computing",
//     featured: true,
//     longDescription:
//       "An interactive quantum computing simulator that allows users to design, visualize, and execute quantum circuits. The application supports various quantum gates, multi-qubit operations, and measurement capabilities. It includes educational modules explaining quantum computing concepts and visualizations of quantum states and probabilities. Ideal for students, researchers, and quantum computing enthusiasts.",
//   },
//   {
//     title: "Healthcare Management Application",
//     description: "A comprehensive healthcare management system for patients, doctors, and administrators.",
//     image: "/assets/images/health.jpg",
//     technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
//     githubLink: "https://github.com/Slygriyrsk/healthcare-hub",
//     liveLink: "https://github.com/Slygriyrsk/healthcare-hub",
//     category: "Full Stack",
//     featured: true,
//     longDescription:
//       "A full-featured healthcare management application that streamlines patient care and administrative tasks. Features include appointment scheduling, electronic health records, prescription management, billing integration, and secure messaging between patients and healthcare providers. The system also includes analytics dashboards for administrators to monitor key performance indicators.",
//   },
//   {
//     title: "Blog Application",
//     description: "A full-stack blog platform built with React, Node.js, and MongoDB.",
//     image: "/assets/images/blog.png",
//     technologies: ["React", "Node.js", "MongoDB", "Express"],
//     githubLink: "https://github.com/Slygriyrsk/Blog-mern",
//     liveLink: "https://github.com/Slygriyrsk/Blog-mern",
//     category: "Full Stack",
//     featured: true,
//     longDescription:
//       "A comprehensive blogging platform with user authentication, rich text editing, comment system, and responsive design. Users can create, edit, and delete posts, follow other users, and receive notifications.",
//   },
//   {
//     title: "E-commerce Platform",
//     description: "A full-featured online store with product catalog, shopping cart, and payment processing.",
//     image: "/assets/images/e-commerce.png",
//     technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
//     githubLink: "https://github.com/DevRizz/unstop-task?tab=readme-ov-file",
//     liveLink: "https://mytalorzone-frontend.vercel.app/",
//     category: "Full Stack",
//     featured: true,
//     longDescription:
//       "A modern e-commerce solution with product search, filtering, user accounts, order tracking, and secure payment processing via Stripe. Features an admin dashboard for inventory management.",
//   },
//   {
//     title: "TypeScript Algorithm and Data Structures Library",
//     description: "A comprehensive collection of common data structures and algorithms implemented in TypeScript.",
//     image: "/assets/images/TS.png",
//     technologies: ["JavaScript", "TypeScript", "DSA"],
//     githubLink: "https://github.com/Slygriyrsk/ts-algo-lib",
//     liveLink: "https://www.npmjs.com/package/ts-algo-lib",
//     category: "Library",
//     featured: true,
//     longDescription:
//       "A well-documented library of data structures and algorithms in TypeScript, including sorting algorithms, search algorithms, trees, graphs, and more. Includes performance benchmarks and usage examples.",
//   },
//   {
//     title: "Basic Browser Rendering Engine",
//     description: "A lightweight engine that interprets HTML, CSS, and JavaScript to render web pages.",
//     image: "/assets/images/BE.png",
//     technologies: ["HTML/CSS", "Python", "Tkinter", "PyQt-5"],
//     githubLink: "https://github.com/Slygriyrsk/browsing-engine",
//     liveLink: "https://github.com/Slygriyrsk/browsing-engine",
//     category: "Systems",
//     featured: false,
//     longDescription:
//       "A simplified browser rendering engine built from scratch that parses HTML and CSS to create a visual representation. Includes basic JavaScript interpretation and DOM manipulation capabilities.",
//   }
// ]

// // Extract all unique technologies for filtering
// const allTechnologies = Array.from(new Set(projectsData.flatMap((project) => project.technologies))).sort()

// // Extract all unique categories for filtering
// const allCategories = Array.from(new Set(projectsData.map((project) => project.category))).sort()

// const getCategoryIcon = (category) => {
//   switch (category) {
//     case "Full Stack":
//       return <Layers className="w-4 h-4" />
//     case "Frontend":
//       return <Globe className="w-4 h-4" />
//     case "Backend":
//       return <Database className="w-4 h-4" />
//     case "Mobile":
//       return <Smartphone className="w-4 h-4" />
//     case "AI":
//       return <Brain className="w-4 h-4" />
//     case "Library":
//       return <Book className="w-4 h-4" />
//     case "Tool":
//       return <Tool className="w-4 h-4" />
//     case "Systems":
//       return <Terminal className="w-4 h-4" />
//     case "Quantum Computing":
//       return <Atom className="w-4 h-4" />
//     case "Machine Learning":
//       return <Cpu className="w-4 h-4" />
//     default:
//       return <Code className="w-4 h-4" />
//   }
// }

// const ProjectCard = ({ project, onClick, index }) => {
//   const cardRef = useRef(null)
//   const isInView = useInView(cardRef, { once: true, amount: 0.2 })
//   const [isBookmarked, setIsBookmarked] = useState(false)

//   const handleBookmark = (e) => {
//     e.stopPropagation()
//     setIsBookmarked(!isBookmarked)
//   }

//   return (
//     <motion.div
//       ref={cardRef}
//       layout
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 h-full flex flex-col"
//     >
//       <div className="relative overflow-hidden group">
//         <img
//           src={project.image || "/placeholder.svg"}
//           alt={project.title}
//           className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//           <Button
//             variant="outline"
//             size="sm"
//             className="text-white border-white hover:bg-white hover:text-black"
//             onClick={(e) => {
//               e.stopPropagation()
//               onClick(project)
//             }}
//           >
//             <Eye className="mr-2 h-4 w-4" /> View Details
//           </Button>
//         </div>
//         <div className="absolute top-0 right-0 p-2 flex space-x-2">
//           {project.featured && (
//             <Badge className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-md">
//               <Star className="w-3 h-3 mr-1" /> Featured
//             </Badge>
//           )}
//         </div>
//         <div className="absolute top-0 left-0 p-2">
//           <Badge className="bg-black/50 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center">
//             {getCategoryIcon(project.category)}
//             <span className="ml-1">{project.category}</span>
//           </Badge>
//         </div>
//       </div>
//       <div className="p-6 flex-grow flex flex-col">
//         <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white group flex items-center">
//           {project.title}
//           <Button
//             variant="ghost"
//             size="sm"
//             className="ml-auto p-0 h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
//             onClick={handleBookmark}
//           >
//             {isBookmarked ? (
//               <BookmarkCheck className="h-4 w-4 text-primary" />
//             ) : (
//               <Bookmark className="h-4 w-4 text-gray-400 hover:text-primary" />
//             )}
//           </Button>
//         </h3>
//         <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 flex-grow">{project.description}</p>
//         <div className="flex flex-wrap gap-2 mb-4">
//           {project.technologies.slice(0, 3).map((tech) => (
//             <Badge
//               key={tech}
//               variant="outline"
//               className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200"
//             >
//               {tech}
//             </Badge>
//           ))}
//           {project.technologies.length > 3 && (
//             <Badge variant="outline" className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
//               +{project.technologies.length - 3}
//             </Badge>
//           )}
//         </div>
//         <div className="flex justify-between mt-auto">
//           <TooltipProvider>
//             <Tooltip>
//               <TooltipTrigger asChild>
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   asChild
//                   className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
//                 >
//                   <a
//                     href={project.githubLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     <Github className="w-4 h-4 mr-1" />
//                     Code
//                   </a>
//                 </Button>
//               </TooltipTrigger>
//               <TooltipContent>
//                 <p>View source code on GitHub</p>
//               </TooltipContent>
//             </Tooltip>
//           </TooltipProvider>

//           <TooltipProvider>
//             <Tooltip>
//               <TooltipTrigger asChild>
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   asChild
//                   className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/20"
//                 >
//                   <a
//                     href={project.liveLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     <ExternalLink className="w-4 h-4 mr-1" />
//                     Demo
//                   </a>
//                 </Button>
//               </TooltipTrigger>
//               <TooltipContent>
//                 <p>View live demo</p>
//               </TooltipContent>
//             </Tooltip>
//           </TooltipProvider>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// const ProjectDetailModal = ({ project, isOpen, onClose }) => {
//   if (!project) return null

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-auto">
//         <DialogHeader>
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
//               {project.featured && (
//                 <Badge className="ml-2 bg-yellow-500 text-black">
//                   <Star className="w-3 h-3 mr-1" /> Featured
//                 </Badge>
//               )}
//             </div>
//             <Badge className="bg-primary/10 text-primary">{project.category}</Badge>
//           </div>
//           <DialogDescription>
//             A {project.category} project using {project.technologies.slice(0, 3).join(", ")}
//             {project.technologies.length > 3 ? ` and ${project.technologies.length - 3} more` : ""}
//           </DialogDescription>
//         </DialogHeader>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
//           <div className="space-y-4">
//             <div className="relative group rounded-lg overflow-hidden">
//               <img
//                 src={project.image || "/placeholder.svg"}
//                 alt={project.title}
//                 className="w-full h-auto rounded-lg object-cover border dark:border-gray-700"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="text-white border-white hover:bg-white hover:text-black"
//                   asChild
//                 >
//                   <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
//                     <ExternalLink className="mr-2 h-4 w-4" /> Visit Project
//                   </a>
//                 </Button>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               {project.technologies.map((tech) => (
//                 <Badge
//                   key={tech}
//                   variant="outline"
//                   className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
//                 >
//                   {tech}
//                 </Badge>
//               ))}
//             </div>
//           </div>

//           <div className="space-y-6">
//             <div>
//               <h3 className="text-lg font-semibold mb-2 flex items-center">
//                 <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
//                 About the Project
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.longDescription}</p>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold mb-2 flex items-center">
//                 <Rocket className="w-5 h-5 mr-2 text-blue-500" />
//                 Key Features
//               </h3>
//               <ul className="space-y-2">
//                 {project.longDescription
//                   .split(".")
//                   .filter((s) => s.trim().length > 0)
//                   .slice(0, 3)
//                   .map((feature, idx) => (
//                     <li key={idx} className="flex items-start">
//                       <ArrowUpRight className="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" />
//                       <span className="text-gray-600 dark:text-gray-300">{feature.trim()}.</span>
//                     </li>
//                   ))}
//               </ul>
//             </div>

//             <div className="flex flex-col space-y-3">
//               <Button asChild variant="default" className="w-full justify-between group">
//                 <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
//                   <div className="flex items-center">
//                     <Github className="w-5 h-5 mr-2" />
//                     View Source Code
//                   </div>
//                   <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
//                 </a>
//               </Button>

//               <Button asChild variant="outline" className="w-full justify-between group">
//                 <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
//                   <div className="flex items-center">
//                     <ExternalLink className="w-5 h-5 mr-2" />
//                     Live Demo
//                   </div>
//                   <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
//                 </a>
//               </Button>

//               <Button
//                 variant="ghost"
//                 className="w-full justify-between group"
//                 onClick={() => {
//                   navigator.clipboard.writeText(project.liveLink)
//                   // You could add a toast notification here
//                 }}
//               >
//                 <div className="flex items-center">
//                   <Share2 className="w-5 h-5 mr-2" />
//                   Share Project
//                 </div>
//                 <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   )
// }

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null)
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [searchTerm, setSearchTerm] = useState("")
//   const [selectedTech, setSelectedTech] = useState("All")
//   const [selectedCategory, setSelectedCategory] = useState("All")
//   const [currentPage, setCurrentPage] = useState(1)
//   const projectsPerPage = 6
//   const sectionRef = useRef(null)
//   const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

//   // Filter projects based on search term, selected technology, and category
//   const filteredProjects = projectsData.filter((project) => {
//     const matchesSearch =
//       project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.description.toLowerCase().includes(searchTerm.toLowerCase())
//     const matchesTech = selectedTech === "All" || project.technologies.includes(selectedTech)
//     const matchesCategory = selectedCategory === "All" || project.category === selectedCategory

//     return matchesSearch && matchesTech && matchesCategory
//   })

//   // Calculate pagination
//   const indexOfLastProject = currentPage * projectsPerPage
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage
//   const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)
//   const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)

//   const handleProjectClick = (project) => {
//     setSelectedProject(project)
//     setIsModalOpen(true)
//   }

//   const handleCloseModal = () => {
//     setIsModalOpen(false)
//   }

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber)
//     // Scroll to top of projects section
//     document.getElementById("projects-grid").scrollIntoView({ behavior: "smooth" })
//   }

//   // Reset to first page when filters change
//   useEffect(() => {
//     setCurrentPage(1)
//   }, [searchTerm, selectedTech, selectedCategory])

//   return (
//     <section
//       id="projects"
//       ref={sectionRef}
//       className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary/30 dark:border-primary/50">
//             Portfolio
//           </Badge>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">My Projects</h2>
//           <div className="flex items-center justify-center mb-6">
//             <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
//             <Sparkles className="mx-4 text-purple-500 h-6 w-6" />
//             <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></div>
//           </div>
//           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Explore my portfolio of web applications, tools, and libraries
//           </p>
//         </motion.div>

//         {/* Filters and Search */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="mb-8"
//         >
//           <Card className="p-4 shadow-md dark:shadow-gray-800/30">
//             <div className="flex flex-col md:flex-row gap-4 mb-4">
//               <div className="relative flex-grow">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//                 <Input
//                   type="text"
//                   placeholder="Search projects..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="pl-10"
//                 />
//               </div>
//               <div className="flex gap-2 flex-wrap">
//                 <Button
//                   variant={selectedCategory === "All" ? "default" : "outline"}
//                   size="sm"
//                   onClick={() => setSelectedCategory("All")}
//                   className={selectedCategory === "All" ? "bg-primary text-white" : ""}
//                 >
//                   All
//                 </Button>
//                 {allCategories.map((category) => (
//                   <Button
//                     key={category}
//                     variant={selectedCategory === category ? "default" : "outline"}
//                     size="sm"
//                     onClick={() => setSelectedCategory(category)}
//                     className={
//                       selectedCategory === category ? "bg-primary text-white" : "hover:bg-primary/10 hover:text-primary"
//                     }
//                   >
//                     {getCategoryIcon(category)}
//                     <span className="ml-1">{category}</span>
//                   </Button>
//                 ))}
//               </div>
//             </div>

//             <Tabs defaultValue="all" className="w-full">
//               <TabsList className="mb-4 flex flex-wrap">
//                 <TabsTrigger
//                   value="all"
//                   onClick={() => setSelectedTech("All")}
//                   className="data-[state=active]:bg-primary data-[state=active]:text-white"
//                 >
//                   All Technologies
//                 </TabsTrigger>
//                 {allTechnologies.map((tech) => (
//                   <TabsTrigger
//                     key={tech}
//                     value={tech}
//                     onClick={() => setSelectedTech(tech)}
//                     className="data-[state=active]:bg-primary data-[state=active]:text-white"
//                   >
//                     {tech}
//                   </TabsTrigger>
//                 ))}
//               </TabsList>
//             </Tabs>
//           </Card>
//         </motion.div>

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
//                 <p className="text-gray-600 dark:text-gray-400 text-lg">No projects found matching your criteria.</p>
//                 <Button
//                   variant="outline"
//                   className="mt-4"
//                   onClick={() => {
//                     setSearchTerm("")
//                     setSelectedTech("All")
//                     setSelectedCategory("All")
//                   }}
//                 >
//                   <X className="mr-2 h-4 w-4" /> Clear Filters
//                 </Button>
//               </motion.div>
//             ) : (
//               <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {currentProjects.map((project, index) => (
//                   <ProjectCard key={project.title} project={project} onClick={handleProjectClick} index={index} />
//                 ))}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="flex justify-center mt-12"
//           >
//             <div className="flex items-center space-x-2">
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => handlePageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className="hover:bg-primary/10 hover:text-primary"
//               >
//                 <ChevronLeft className="h-4 w-4" />
//               </Button>

//               {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                 <Button
//                   key={page}
//                   variant={currentPage === page ? "default" : "outline"}
//                   size="sm"
//                   onClick={() => handlePageChange(page)}
//                   className={currentPage === page ? "bg-primary text-white" : "hover:bg-primary/10 hover:text-primary"}
//                 >
//                   {page}
//                 </Button>
//               ))}

//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => handlePageChange(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 className="hover:bg-primary/10 hover:text-primary"
//               >
//                 <ChevronRight className="h-4 w-4" />
//               </Button>
//             </div>
//           </motion.div>
//         )}

//         {/* Project Detail Modal */}
//         <ProjectDetailModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
//       </div>
//     </section>
//   )
// }

// export default Projects

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
  Filter,
  Grid3X3,
  List,
  TrendingUp,
  Award,
  Calendar,
  Users,
  Heart,
  Target,
  Hexagon,
  Triangle,
  Circle,
  Square,
} from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Badge } from "./ui/badge"
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { Slider } from "./ui/slider"

// Enhanced project data with more details
const projectsData = [
  {
    title: "Apple Website Clone",
    description:
      "A stunning 3D Apple product showcase built with Three.js, replicating the iconic Apple design and interactivity.",
    image: "/assets/images/apple.png",
    technologies: ["Three.js", "React", "GSAP", "Tailwind CSS"],
    githubLink: "https://github.com/Slygriyrsk/apple-web-clone",
    liveLink: "https://orchardaura.netlify.app/",
    category: "3D",
    featured: true,
    complexity: 90,
    impact: 95,
    year: "2024",
    status: "Completed",
    likes: 127,
    views: 2340,
    longDescription:
      "A visually immersive Apple website clone featuring 3D models, smooth scroll-triggered animations, and responsive design. Built with Three.js and GSAP for dynamic visuals, the project emulates Apple's elegant product storytelling. Includes custom shaders, camera motion, and scroll-based transitions to deliver a premium user experience.",
    keyFeatures: [
      "Interactive 3D product models with realistic lighting",
      "Smooth scroll-triggered animations using GSAP",
      "Responsive design optimized for all devices",
      "Custom WebGL shaders for enhanced visual effects",
      "Performance-optimized rendering pipeline",
    ],
    challenges: [
      "Optimizing 3D performance across different devices",
      "Creating smooth scroll-based animations",
      "Implementing realistic lighting and shadows",
    ],
    learnings: [
      "Advanced Three.js techniques and optimization",
      "Complex animation orchestration with GSAP",
      "WebGL shader programming fundamentals",
    ],
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
    complexity: 85,
    impact: 90,
    year: "2024",
    status: "Completed",
    likes: 203,
    views: 4560,
    longDescription:
      "A feature-rich ChatGPT clone that uses the OpenAI API to generate human-like responses. Includes features like conversation history, multiple chat sessions, code highlighting, and markdown support. The application also supports image generation and voice input capabilities.",
    keyFeatures: [
      "Real-time AI conversation with OpenAI GPT models",
      "Conversation history and session management",
      "Code syntax highlighting and markdown support",
      "Voice input and text-to-speech capabilities",
      "Image generation using DALL-E integration",
    ],
    challenges: [
      "Managing API rate limits and costs",
      "Implementing real-time streaming responses",
      "Creating intuitive conversation management",
    ],
    learnings: [
      "OpenAI API integration and optimization",
      "Real-time data streaming techniques",
      "Advanced React state management patterns",
    ],
  },
  {
    title: "Emotion Recognition in Conversation",
    description: "A real-time ERC system using HingBERT-LSTM for Hindi-English code-mixed dialogues.",
    image: "/assets/images/bert.png",
    technologies: ["Python", "Transformers", "BERT", "LSTM", "NLP"],
    githubLink: "https://colab.research.google.com/drive/1EA-WKRfhI9RtRekauXaBUSkqHufwKvcl?usp=sharing",
    liveLink: "https://colab.research.google.com/drive/1EA-WKRfhI9RtRekauXaBUSkqHufwKvcl?usp=sharing",
    category: "AI/ML",
    featured: true,
    complexity: 95,
    impact: 88,
    year: "2024",
    status: "Research",
    likes: 89,
    views: 1890,
    longDescription:
      "This project develops an Emotion Recognition in Conversations (ERC) system using a fine-tuned BERT model with speaker embeddings and a bidirectional LSTM classifier to predict emotions in Hindi-English code-mixed dialogues. The HingBERT-LSTM model achieves a weighted F1 score of 0.3753, outperforming Base LLaMA, Quantized LLaMA, and LoRA LLaMA, with strong performance on neutral and joy emotions.",
    keyFeatures: [
      "Fine-tuned BERT model for multilingual emotion detection",
      "Bidirectional LSTM for contextual understanding",
      "Real-time emotion prediction interface",
      "Dynamic visualization of emotion patterns",
      "Support for Hindi-English code-mixed text",
    ],
    challenges: [
      "Handling class imbalance in emotion datasets",
      "Processing code-mixed language effectively",
      "Optimizing model performance for real-time inference",
    ],
    learnings: [
      "Advanced NLP model fine-tuning techniques",
      "Multilingual text processing strategies",
      "Emotion classification in conversational contexts",
    ],
  },
  {
    title: "Land Classification ML Project",
    description: "A machine learning system for satellite image analysis and land classification.",
    image: "/assets/images/soil.png",
    technologies: ["Python", "TensorFlow", "Keras", "Satellite Imagery"],
    githubLink: "https://github.com/Slygriyrsk/LandClassification",
    liveLink: "https://soil-quality-analysis-sn9ysnkomv4jzeotnhbnxb.streamlit.app/",
    category: "Machine Learning",
    featured: true,
    complexity: 80,
    impact: 85,
    year: "2024",
    status: "Completed",
    likes: 156,
    views: 2780,
    longDescription:
      "A sophisticated machine learning project that uses convolutional neural networks to classify land types from satellite imagery. The system can identify urban areas, forests, agricultural land, water bodies, and more with high accuracy. Features include interactive map visualization, historical change detection, and exportable reports.",
    keyFeatures: [
      "CNN-based land classification with 92% accuracy",
      "Interactive map visualization interface",
      "Historical land use change detection",
      "Exportable analysis reports and insights",
      "Support for multiple satellite data sources",
    ],
    challenges: [
      "Processing large satellite image datasets",
      "Achieving high classification accuracy",
      "Creating intuitive visualization interfaces",
    ],
    learnings: [
      "Computer vision for satellite imagery analysis",
      "Large-scale data processing techniques",
      "Geospatial data visualization methods",
    ],
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
    complexity: 98,
    impact: 75,
    year: "2024",
    status: "Completed",
    likes: 67,
    views: 1234,
    longDescription:
      "An interactive quantum computing simulator that allows users to design, visualize, and execute quantum circuits. The application supports various quantum gates, multi-qubit operations, and measurement capabilities. It includes educational modules explaining quantum computing concepts and visualizations of quantum states and probabilities.",
    keyFeatures: [
      "Interactive quantum circuit designer",
      "Real-time quantum state visualization",
      "Educational modules for quantum concepts",
      "Support for various quantum algorithms",
      "Quantum cryptography protocol simulation",
    ],
    challenges: [
      "Visualizing complex quantum states",
      "Implementing accurate quantum simulations",
      "Creating intuitive educational interfaces",
    ],
    learnings: [
      "Quantum computing principles and algorithms",
      "Quantum state visualization techniques",
      "Educational software design patterns",
    ],
  },
  {
    title: "Healthcare Management App",
    description: "A comprehensive healthcare management system for patients, doctors, and administrators.",
    image: "/assets/images/health.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    githubLink: "https://github.com/Slygriyrsk/healthcare-hub",
    liveLink: "https://github.com/Slygriyrsk/healthcare-hub",
    category: "Full Stack",
    featured: true,
    complexity: 88,
    impact: 92,
    year: "2024",
    status: "Completed",
    likes: 234,
    views: 3456,
    longDescription:
      "A full-featured healthcare management application that streamlines patient care and administrative tasks. Features include appointment scheduling, electronic health records, prescription management, billing integration, and secure messaging between patients and healthcare providers.",
    keyFeatures: [
      "Comprehensive patient management system",
      "Real-time appointment scheduling",
      "Secure electronic health records",
      "Integrated billing and payment processing",
      "HIPAA-compliant data security measures",
    ],
    challenges: [
      "Ensuring HIPAA compliance and data security",
      "Creating intuitive interfaces for different user types",
      "Implementing real-time communication features",
    ],
    learnings: [
      "Healthcare industry regulations and compliance",
      "Secure data handling and encryption",
      "Complex multi-user system architecture",
    ],
  },
  {
    title: "Blog Application",
    description: "A full-stack blog platform built with React, Node.js, and MongoDB.",
    image: "/assets/images/blog.png",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/Slygriyrsk/Blog-mern",
    liveLink: "https://github.com/Slygriyrsk/Blog-mern",
    category: "Full Stack",
    featured: false,
    complexity: 70,
    impact: 75,
    year: "2023",
    status: "Completed",
    likes: 145,
    views: 2890,
    longDescription:
      "A comprehensive blogging platform with user authentication, rich text editing, comment system, and responsive design. Users can create, edit, and delete posts, follow other users, and receive notifications.",
    keyFeatures: [
      "Rich text editor with markdown support",
      "User authentication and authorization",
      "Comment system with nested replies",
      "Social features like following and notifications",
      "SEO-optimized blog post rendering",
    ],
    challenges: [
      "Implementing rich text editing capabilities",
      "Creating efficient content management",
      "Optimizing for search engine visibility",
    ],
    learnings: [
      "Full-stack MERN development patterns",
      "Content management system design",
      "SEO optimization techniques",
    ],
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
    complexity: 85,
    impact: 88,
    year: "2024",
    status: "Completed",
    likes: 189,
    views: 3245,
    longDescription:
      "A modern e-commerce solution with product search, filtering, user accounts, order tracking, and secure payment processing via Stripe. Features an admin dashboard for inventory management.",
    keyFeatures: [
      "Advanced product search and filtering",
      "Secure payment processing with Stripe",
      "Real-time inventory management",
      "Order tracking and management system",
      "Responsive design for mobile commerce",
    ],
    challenges: [
      "Implementing secure payment processing",
      "Creating efficient product search algorithms",
      "Managing complex order workflows",
    ],
    learnings: ["E-commerce platform architecture", "Payment gateway integration", "Inventory management systems"],
  },
  {
    title: "TypeScript Algorithm Library",
    description: "A comprehensive collection of common data structures and algorithms implemented in TypeScript.",
    image: "/assets/images/TS.png",
    technologies: ["JavaScript", "TypeScript", "DSA"],
    githubLink: "https://github.com/Slygriyrsk/ts-algo-lib",
    liveLink: "https://www.npmjs.com/package/ts-algo-lib",
    category: "Library",
    featured: false,
    complexity: 75,
    impact: 70,
    year: "2023",
    status: "Maintained",
    likes: 98,
    views: 1567,
    longDescription:
      "A well-documented library of data structures and algorithms in TypeScript, including sorting algorithms, search algorithms, trees, graphs, and more. Includes performance benchmarks and usage examples.",
    keyFeatures: [
      "Comprehensive algorithm implementations",
      "TypeScript type safety and documentation",
      "Performance benchmarking tools",
      "Interactive examples and tutorials",
      "NPM package with easy integration",
    ],
    challenges: [
      "Ensuring optimal algorithm performance",
      "Creating comprehensive documentation",
      "Maintaining backward compatibility",
    ],
    learnings: [
      "Advanced TypeScript programming patterns",
      "Algorithm optimization techniques",
      "Open-source library maintenance",
    ],
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
    complexity: 92,
    impact: 65,
    year: "2023",
    status: "Experimental",
    likes: 76,
    views: 1123,
    longDescription:
      "A simplified browser rendering engine built from scratch that parses HTML and CSS to create a visual representation. Includes basic JavaScript interpretation and DOM manipulation capabilities.",
    keyFeatures: [
      "HTML and CSS parsing engines",
      "Basic JavaScript interpretation",
      "DOM tree construction and manipulation",
      "Simple layout and rendering pipeline",
      "Educational codebase with detailed comments",
    ],
    challenges: [
      "Implementing HTML/CSS parsing from scratch",
      "Creating efficient rendering algorithms",
      "Handling complex layout calculations",
    ],
    learnings: [
      "Browser engine architecture and design",
      "Parsing and compilation techniques",
      "Graphics rendering fundamentals",
    ],
  },
]

// Extract all unique technologies and categories
const allTechnologies = Array.from(new Set(projectsData.flatMap((project) => project.technologies))).sort()
const allCategories = Array.from(new Set(projectsData.map((project) => project.category))).sort()

const getCategoryIcon = (category) => {
  const icons = {
    "Full Stack": <Layers className="w-4 h-4" />,
    Frontend: <Globe className="w-4 h-4" />,
    Backend: <Database className="w-4 h-4" />,
    Mobile: <Smartphone className="w-4 h-4" />,
    AI: <Brain className="w-4 h-4" />,
    "AI/ML": <Brain className="w-4 h-4" />,
    Library: <Book className="w-4 h-4" />,
    Tool: <Tool className="w-4 h-4" />,
    Systems: <Terminal className="w-4 h-4" />,
    "Quantum Computing": <Atom className="w-4 h-4" />,
    "Machine Learning": <Cpu className="w-4 h-4" />,
    "3D": <Hexagon className="w-4 h-4" />,
  }
  return icons[category] || <Code className="w-4 h-4" />
}

const getCategoryColor = (category) => {
  const colors = {
    "Full Stack": "from-blue-500 to-indigo-600",
    Frontend: "from-green-500 to-emerald-600",
    Backend: "from-purple-500 to-violet-600",
    Mobile: "from-pink-500 to-rose-600",
    AI: "from-orange-500 to-red-600",
    "AI/ML": "from-orange-500 to-red-600",
    Library: "from-cyan-500 to-blue-600",
    Tool: "from-yellow-500 to-orange-600",
    Systems: "from-gray-600 to-gray-800",
    "Quantum Computing": "from-purple-600 to-indigo-700",
    "Machine Learning": "from-teal-500 to-cyan-600",
    "3D": "from-violet-500 to-purple-600",
  }
  return colors[category] || "from-blue-500 to-indigo-600"
}

const ProjectCard = ({ project, onClick, index, viewMode = "grid" }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const handleBookmark = (e) => {
    e.stopPropagation()
    setIsBookmarked(!isBookmarked)
  }

  const handleLike = (e) => {
    e.stopPropagation()
    setIsLiked(!isLiked)
  }

  const categoryColor = getCategoryColor(project.category)

  if (viewMode === "list") {
    return (
      <motion.div
        ref={cardRef}
        layout
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group cursor-pointer"
        onClick={() => onClick(project)}
      >
        <Card className="overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
          <div className="flex">
            <div className="w-48 h-32 relative overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </div>
            <div className="flex-1 p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3
                    className="text-xl font-bold text-gray-800 dark:text-white mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  {project.featured && (
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-none">
                      <Star className="w-3 h-3 mr-1" fill="currentColor" />
                      Featured
                    </Badge>
                  )}
                  <Badge className={`bg-gradient-to-r ${categoryColor} text-white border-none`}>
                    {getCategoryIcon(project.category)}
                    <span className="ml-1">{project.category}</span>
                  </Badge>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.slice(0, 4).map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {project.views}
                  </span>
                  <span className="flex items-center">
                    <Heart className="w-4 h-4 mr-1" />
                    {project.likes}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.year}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" onClick={handleLike}>
                    <Heart className={`w-4 h-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={handleBookmark}>
                    {isBookmarked ? (
                      <BookmarkCheck className="w-4 h-4 text-blue-500" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group cursor-pointer h-full"
      onClick={() => onClick(project)}
    >
      {/* Floating Background Effect */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${categoryColor} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-all duration-500 -z-10`}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <Card className="relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2 h-full flex flex-col">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <motion.img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
            whileHover={{ scale: 1.1 }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              className="flex space-x-3"
            >
              <Button
                variant="outline"
                size="sm"
                className="text-white border-white/50 hover:bg-white hover:text-black backdrop-blur-sm bg-transparent"
                onClick={(e) => {
                  e.stopPropagation()
                  onClick(project)
                }}
              >
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </motion.div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 right-3 flex flex-col space-y-2">
            {project.featured && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-none shadow-lg">
                  <Star className="w-3 h-3 mr-1" fill="currentColor" />
                  Featured
                </Badge>
              </motion.div>
            )}
            <Badge
              className={`bg-gradient-to-r ${categoryColor} text-white border-none shadow-lg`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {getCategoryIcon(project.category)}
              <span className="ml-1">{project.category}</span>
            </Badge>
          </div>

          {/* Status Badge */}
          <div className="absolute top-3 left-3">
            <Badge
              variant="outline"
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-white/50"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {project.status}
            </Badge>
          </div>
        </div>

        {/* Content Section */}
        <CardContent className="p-6 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-3">
            <h3
              className="text-xl font-bold text-gray-800 dark:text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {project.title}
            </h3>
            <div className="flex items-center space-x-1">
              <Button variant="ghost" size="sm" className="p-1 h-8 w-8" onClick={handleLike}>
                <Heart className={`w-4 h-4 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
              </Button>
              <Button variant="ghost" size="sm" className="p-1 h-8 w-8" onClick={handleBookmark}>
                {isBookmarked ? (
                  <BookmarkCheck className="w-4 h-4 text-blue-500" />
                ) : (
                  <Bookmark className="w-4 h-4 text-gray-400" />
                )}
              </Button>
            </div>
          </div>

          <p
            className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 flex-1"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {project.description}
          </p>

          {/* Metrics */}
          <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-3">
              <span className="flex items-center">
                <Eye className="w-3 h-3 mr-1" />
                {project.views}
              </span>
              <span className="flex items-center">
                <Heart className="w-3 h-3 mr-1" />
                {project.likes}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
                <span className="text-xs">{project.complexity}%</span>
              </div>
              <div className="flex items-center">
                <Target className="w-3 h-3 mr-1 text-blue-500" />
                <span className="text-xs">{project.impact}%</span>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, techIndex) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + techIndex * 0.05 }}
              >
                <Badge
                  variant="outline"
                  className="bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors border-gray-200 dark:border-gray-600"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
            {project.technologies.length > 3 && (
              <Badge
                variant="outline"
                className="bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between mt-auto">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4 mr-2" />
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
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
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
        </CardContent>
      </Card>
    </motion.div>
  )
}

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  if (!project) return null

  const categoryColor = getCategoryColor(project.category)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-6xl max-h-[95vh] overflow-y-auto p-0 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 border-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          {/* Hero Section */}
          <div className="relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
              <motion.div
                className={`w-full h-full bg-gradient-to-br ${categoryColor} opacity-10`}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              {/* Floating Shapes */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute opacity-5"
                  animate={{
                    x: [0, 50, 0],
                    y: [0, -50, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 15 + i * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 2,
                  }}
                  style={{
                    left: `${10 + i * 15}%`,
                    top: `${20 + i * 10}%`,
                  }}
                >
                  {i % 4 === 0 && <Hexagon className="w-8 h-8 text-blue-500" />}
                  {i % 4 === 1 && <Triangle className="w-6 h-6 text-purple-500" />}
                  {i % 4 === 2 && <Circle className="w-7 h-7 text-cyan-500" />}
                  {i % 4 === 3 && <Square className="w-6 h-6 text-pink-500" />}
                </motion.div>
              ))}
            </div>

            {/* Header Content */}
            <div className="relative z-10 p-8 pb-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-6">
                  <motion.div
                    className={`p-6 rounded-3xl bg-gradient-to-br ${categoryColor} shadow-2xl relative overflow-hidden`}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-4xl text-white relative z-10">{getCategoryIcon(project.category)}</div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      animate={{ x: [-100, 200] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </motion.div>
                  <div>
                    <h1
                      className="text-4xl font-bold text-gray-800 dark:text-white mb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {project.title}
                    </h1>
                    <div className="flex items-center space-x-3 mb-3">
                      <Badge className={`bg-gradient-to-r ${categoryColor} text-white border-none px-3 py-1`}>
                        {project.category}
                      </Badge>
                      {project.featured && (
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-none px-3 py-1">
                          <Star className="w-4 h-4 mr-1" fill="currentColor" />
                          Featured
                        </Badge>
                      )}
                      <Badge variant="outline" className="flex items-center px-3 py-1">
                        <Calendar className="w-4 h-4 mr-1 text-blue-500" />
                        {project.year}
                      </Badge>
                    </div>
                    <p
                      className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={onClose}
                  className="rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-white/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-gray-800 dark:text-white">{project.complexity}%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Complexity</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-white/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-gray-800 dark:text-white">{project.impact}%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Impact</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-white/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-gray-800 dark:text-white">{project.views}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Views</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-white/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-gray-800 dark:text-white">{project.likes}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Likes</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8 pt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Project Image */}
                <div className="relative group rounded-2xl overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-auto rounded-2xl object-cover border border-gray-200/50 dark:border-gray-700/50"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                    <Button
                      variant="outline"
                      size="lg"
                      className="text-white border-white hover:bg-white hover:text-black bg-transparent"
                      asChild
                    >
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Visit Project
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Technologies */}
                <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200/50 dark:border-blue-700/30">
                  <CardHeader>
                    <h3
                      className="text-xl font-semibold flex items-center"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <Code className="w-5 h-5 mr-2 text-blue-600" />
                      Technologies Used
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Badge
                            className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-3 py-2 text-sm hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* About */}
                <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200/50 dark:border-purple-700/30">
                  <CardHeader>
                    <h3
                      className="text-xl font-semibold flex items-center"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <Lightbulb className="w-5 h-5 mr-2 text-purple-600" />
                      About the Project
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p
                      className="text-gray-700 dark:text-gray-300 leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {project.longDescription}
                    </p>
                  </CardContent>
                </Card>

                {/* Key Features */}
                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200/50 dark:border-green-700/30">
                  <CardHeader>
                    <h3
                      className="text-xl font-semibold flex items-center"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <Rocket className="w-5 h-5 mr-2 text-green-600" />
                      Key Features
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {project.keyFeatures?.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <ArrowUpRight className="w-4 h-4 mr-2 mt-1 text-green-600 flex-shrink-0" />
                          <span
                            className="text-gray-700 dark:text-gray-300"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-3">
                  <Button
                    asChild
                    size="lg"
                    className={`w-full justify-between group bg-gradient-to-r ${categoryColor} hover:shadow-lg transition-all duration-300`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center">
                        <Github className="w-5 h-5 mr-2" />
                        View Source Code
                      </div>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full justify-between group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-700/50"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </div>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </Button>

                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full justify-between group"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    onClick={() => {
                      navigator.clipboard.writeText(project.liveLink)
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
          </div>
        </motion.div>
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
  const [viewMode, setViewMode] = useState("grid")
  const [complexityFilter, setComplexityFilter] = useState([0, 100])
  const [impactFilter, setImpactFilter] = useState([0, 100])
  const projectsPerPage = 6

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  // Filter projects
  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTech = selectedTech === "All" || project.technologies.includes(selectedTech)
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    const matchesComplexity = project.complexity >= complexityFilter[0] && project.complexity <= complexityFilter[1]
    const matchesImpact = project.impact >= impactFilter[0] && project.impact <= impactFilter[1]

    return matchesSearch && matchesTech && matchesCategory && matchesComplexity && matchesImpact
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
    document.getElementById("projects-grid")?.scrollIntoView({ behavior: "smooth" })
  }

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedTech, selectedCategory, complexityFilter, impactFilter])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 25%, #cbd5e1 50%, #94a3b8 75%, #64748b 100%)",
      }}
    >
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        {/* Subtle Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)`,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Floating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 2,
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
          >
            {i % 4 === 0 && <Hexagon className="w-6 h-6 text-blue-500" />}
            {i % 4 === 1 && <Triangle className="w-4 h-4 text-purple-500" />}
            {i % 4 === 2 && <Circle className="w-5 h-5 text-cyan-500" />}
            {i % 4 === 3 && <Square className="w-4 h-4 text-pink-500" />}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-6 px-6 py-2 text-primary border-primary/30 dark:border-primary/50 bg-white/80 backdrop-blur-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <Rocket className="w-4 h-4 mr-2" />
            Portfolio Showcase
          </Badge>

          <h2
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Featured Projects
          </h2>

          <div className="flex items-center justify-center mb-8">
            <motion.div
              className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="mx-4 text-purple-500 h-6 w-6" />
            </motion.div>
            <motion.div
              className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
            />
          </div>

          <p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Explore my portfolio of innovative web applications, AI projects, and cutting-edge tools that showcase my
            technical expertise and creative problem-solving abilities.
          </p>
        </motion.div>

        {/* Enhanced Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="p-6 shadow-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="space-y-6">
              {/* Search and View Controls */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    type="text"
                    placeholder="Search projects with AI-powered suggestions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-600/50"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Button
                          variant={viewMode === "grid" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setViewMode("grid")}
                          className="h-10"
                        >
                          <Grid3X3 className="w-4 h-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Grid View</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger>
                        <Button
                          variant={viewMode === "list" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setViewMode("list")}
                          className="h-10"
                        >
                          <List className="w-4 h-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>List View</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>

              {/* Advanced Filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="text-sm font-medium mb-2 block flex items-center"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <TrendingUp className="w-4 h-4 mr-2 text-blue-600" />
                    Complexity Level: {complexityFilter[0]}% - {complexityFilter[1]}%
                  </label>
                  <Slider
                    value={complexityFilter}
                    onValueChange={setComplexityFilter}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    className="text-sm font-medium mb-2 block flex items-center"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <Target className="w-4 h-4 mr-2 text-green-600" />
                    Impact Score: {impactFilter[0]}% - {impactFilter[1]}%
                  </label>
                  <Slider value={impactFilter} onValueChange={setImpactFilter} max={100} step={5} className="w-full" />
                </div>
              </div>

              {/* Category Tabs */}
              <Tabs defaultValue="All" value={selectedCategory} onValueChange={setSelectedCategory}>
                <TabsList className="flex flex-wrap justify-start bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm p-1 h-auto">
                  <TabsTrigger
                    value="All"
                    className="m-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all duration-200"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <Target className="w-4 h-4 mr-1" />
                    All
                  </TabsTrigger>
                  {allCategories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="m-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all duration-200"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {getCategoryIcon(category)}
                      <span className="ml-1">{category}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              {/* Technology Filter */}
              <div>
                <label
                  className="text-sm font-medium mb-2 block flex items-center"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <Code className="w-4 h-4 mr-2 text-purple-600" />
                  Filter by Technology
                </label>
                <Tabs defaultValue="All" value={selectedTech} onValueChange={setSelectedTech}>
                  <TabsList className="flex flex-wrap justify-start bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm p-1 h-auto">
                    <TabsTrigger
                      value="All"
                      className="m-1 data-[state=active]:bg-purple-600 data-[state=active]:text-white transition-all duration-200"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      All Technologies
                    </TabsTrigger>
                    {allTechnologies.map((tech) => (
                      <TabsTrigger
                        key={tech}
                        value={tech}
                        className="m-1 data-[state=active]:bg-purple-600 data-[state=active]:text-white transition-all duration-200"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {tech}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedTech("All")
                    setSelectedCategory("All")
                    setComplexityFilter([0, 100])
                    setImpactFilter([0, 100])
                  }}
                  className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <X className="w-4 h-4 mr-1" />
                  Clear All
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedCategory("AI")}
                  className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 border-orange-200 dark:border-orange-700"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <Brain className="w-4 h-4 mr-1" />
                  AI Projects
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedCategory("All")
                    setComplexityFilter([80, 100])
                  }}
                  className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-purple-200 dark:border-purple-700"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <Award className="w-4 h-4 mr-1" />
                  Complex Projects
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Projects Display */}
        <div id="projects-grid">
          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800/50 dark:to-blue-900/20 rounded-xl backdrop-blur-sm"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Rocket className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                </motion.div>
                <h3
                  className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  No projects found matching your criteria
                </h3>
                <p className="text-gray-500 dark:text-gray-500 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Try adjusting your filters or search terms to discover more projects
                </p>
                <Button
                  variant="outline"
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedTech("All")
                    setSelectedCategory("All")
                    setComplexityFilter([0, 100])
                    setImpactFilter([0, 100])
                  }}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Reset All Filters
                </Button>
              </motion.div>
            ) : (
              <motion.div
                layout
                className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}
              >
                {currentProjects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    onClick={handleProjectClick}
                    index={index}
                    viewMode={viewMode}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center mt-16"
          >
            <div className="flex items-center space-x-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl p-2 border border-gray-200/50 dark:border-gray-700/50">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-xl hover:bg-white/70 dark:hover:bg-gray-700/70"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "ghost"}
                  size="sm"
                  onClick={() => handlePageChange(page)}
                  className={
                    currentPage === page
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl"
                      : "hover:bg-white/70 dark:hover:bg-gray-700/70 rounded-xl"
                  }
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {page}
                </Button>
              ))}

              <Button
                variant="ghost"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="rounded-xl hover:bg-white/70 dark:hover:bg-gray-700/70"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="relative bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 p-12 rounded-3xl max-w-4xl mx-auto backdrop-blur-sm border border-white/20">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                className="mb-6"
              >
                <Rocket className="w-16 h-16 text-purple-500 mx-auto" />
              </motion.div>

              <h3
                className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Ready to Build Something Amazing?
              </h3>

              <p
                className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                I'm always excited to work on innovative projects and collaborate with talented teams. Let's create
                something extraordinary together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <a href="#contact">
                    <Users className="w-5 h-5 mr-2" />
                    Let's Collaborate
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.div>
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-2 border-purple-200 dark:border-purple-700 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  asChild
                >
                  <a href="https://github.com/Slygriyrsk" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    View All Projects
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Detail Modal */}
        <ProjectDetailModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </section>
  )
}

export default Projects