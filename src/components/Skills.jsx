// import { DialogContent } from "@/components/ui/dialog"

// import { Dialog } from "@/components/ui/dialog"

// import { useState, useRef, useEffect } from "react"
// import { motion, useInView, AnimatePresence } from "framer-motion"
// import {
//   Info,
//   Star,
//   Sparkles,
//   ArrowUpRight,
//   Code,
//   Server,
//   Languages,
//   Wrench,
//   Zap,
//   ChevronUp,
//   Search,
//   X,
//   Clock,
//   BarChart3,
//   Lightbulb,
//   Bookmark,
//   BookmarkCheck,
//   Filter,
//   Brain,
//   Atom,
// } from "lucide-react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "./ui/card"
// import { Button } from "./ui/button"
// import { Badge } from "./ui/badge"
// import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"
// import { Input } from "./ui/input"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
// import { Progress } from "./ui/progress"
// import { Separator } from "./ui/separator"

// // Extended skills data with categories
// const skillsData = [
//   // Frontend
//   {
//     name: "JavaScript",
//     level: 90,
//     color: "bg-yellow-400",
//     textColor: "text-yellow-800",
//     icon: "🟨",
//     category: "Frontend",
//     description:
//       "Proficient in modern JavaScript (ES6+), including async/await, modules, and functional programming concepts.",
//     years: 4,
//     featured: true,
//     projects: 15,
//     relatedSkills: ["TypeScript", "React", "Node.js"],
//   },
//   {
//     name: "React",
//     level: 85,
//     color: "bg-blue-400",
//     textColor: "text-blue-800",
//     icon: "⚛️",
//     category: "Frontend",
//     description: "Experienced with React hooks, context API, and state management libraries like Redux and Zustand.",
//     years: 3,
//     featured: true,
//     projects: 12,
//     relatedSkills: ["JavaScript", "Redux", "Next.js"],
//   },
//   {
//     name: "TypeScript",
//     level: 82,
//     color: "bg-blue-700",
//     textColor: "text-blue-100",
//     icon: "🔷",
//     category: "Frontend",
//     description: "Strong typing skills with interfaces, generics, and advanced type utilities.",
//     years: 2,
//     featured: false,
//     projects: 8,
//     relatedSkills: ["JavaScript", "React", "Node.js"],
//   },
//   {
//     name: "HTML/CSS",
//     level: 88,
//     color: "bg-orange-500",
//     textColor: "text-orange-100",
//     icon: "🌐",
//     category: "Frontend",
//     description: "Expert in semantic HTML and modern CSS including Flexbox, Grid, and CSS animations.",
//     years: 5,
//     featured: false,
//     projects: 20,
//     relatedSkills: ["Tailwind CSS", "SASS", "JavaScript"],
//   },
//   {
//     name: "Tailwind CSS",
//     level: 85,
//     color: "bg-cyan-500",
//     textColor: "text-cyan-100",
//     icon: "🎨",
//     category: "Frontend",
//     description: "Proficient in utility-first CSS and creating responsive designs with Tailwind.",
//     years: 2,
//     featured: false,
//     projects: 10,
//     relatedSkills: ["HTML/CSS", "React", "Next.js"],
//   },

//   // Backend
//   {
//     name: "Node.js",
//     level: 80,
//     color: "bg-green-400",
//     textColor: "text-green-800",
//     icon: "🟩",
//     category: "Backend",
//     description: "Experienced in building RESTful APIs and server-side applications with Express.js.",
//     years: 3,
//     featured: true,
//     projects: 9,
//     relatedSkills: ["Express.js", "MongoDB", "JavaScript"],
//   },
//   {
//     name: "MongoDB",
//     level: 70,
//     color: "bg-green-600",
//     textColor: "text-green-100",
//     icon: "🍃",
//     category: "Backend",
//     description: "Skilled in document database design, queries, and aggregation pipelines.",
//     years: 2,
//     featured: false,
//     projects: 7,
//     relatedSkills: ["Node.js", "Express.js", "Mongoose"],
//   },
//   {
//     name: "SQL",
//     level: 72,
//     color: "bg-orange-500",
//     textColor: "text-orange-100",
//     icon: "🗃️",
//     category: "Backend",
//     description: "Experienced with relational database design, complex queries, and optimization.",
//     years: 3,
//     featured: false,
//     projects: 6,
//     relatedSkills: ["PostgreSQL", "MySQL", "Database Design"],
//   },
//   {
//     name: "GraphQL",
//     level: 65,
//     color: "bg-pink-600",
//     textColor: "text-pink-100",
//     icon: "⚡",
//     category: "Backend",
//     description: "Knowledge of schema design, resolvers, and integration with React using Apollo Client.",
//     years: 1,
//     featured: false,
//     projects: 3,
//     relatedSkills: ["Apollo", "Node.js", "React"],
//   },

//   // Languages
//   {
//     name: "Python",
//     level: 75,
//     color: "bg-blue-600",
//     textColor: "text-blue-100",
//     icon: "🐍",
//     category: "Languages",
//     description: "Proficient in Python for data analysis, automation, and backend development.",
//     years: 3,
//     featured: false,
//     projects: 5,
//     relatedSkills: ["Django", "Flask", "Data Analysis"],
//   },
//   {
//     name: "C++",
//     level: 80,
//     color: "bg-purple-500",
//     textColor: "text-purple-100",
//     icon: "🔠",
//     category: "Languages",
//     description: "Strong understanding of memory management, data structures, and algorithms.",
//     years: 4,
//     featured: true,
//     projects: 8,
//     relatedSkills: ["Data Structures", "Algorithms", "System Programming"],
//   },
//   {
//     name: "Java",
//     level: 40,
//     color: "bg-red-500",
//     textColor: "text-red-100",
//     icon: "☕",
//     category: "Languages",
//     description: "Basic knowledge of object-oriented programming concepts in Java.",
//     years: 1,
//     featured: false,
//     projects: 2,
//     relatedSkills: ["OOP", "Spring", "Android"],
//   },

//   // Tools & Others
//   {
//     name: "Git",
//     level: 85,
//     color: "bg-orange-600",
//     textColor: "text-orange-100",
//     icon: "📝",
//     category: "Tools",
//     description: "Experienced with version control, branching strategies, and collaborative workflows.",
//     years: 4,
//     featured: false,
//     projects: 25,
//     relatedSkills: ["GitHub", "GitLab", "CI/CD"],
//   },
//   {
//     name: "Docker",
//     level: 60,
//     color: "bg-blue-500",
//     textColor: "text-blue-100",
//     icon: "🐳",
//     category: "Tools",
//     description: "Familiar with containerization, Docker Compose, and basic orchestration.",
//     years: 2,
//     featured: false,
//     projects: 4,
//     relatedSkills: ["Kubernetes", "CI/CD", "DevOps"],
//   },
//   {
//     name: "AWS",
//     level: 55,
//     color: "bg-yellow-600",
//     textColor: "text-yellow-100",
//     icon: "☁️",
//     category: "Tools",
//     description: "Experience with S3, EC2, Lambda, and deployment pipelines.",
//     years: 1,
//     featured: false,
//     projects: 3,
//     relatedSkills: ["Cloud Computing", "Serverless", "DevOps"],
//   },
//   // Additional skills
//   {
//     name: "Next.js",
//     level: 78,
//     color: "bg-black",
//     textColor: "text-white",
//     icon: "▲",
//     category: "Frontend",
//     description: "Proficient in server-side rendering, static site generation, and API routes.",
//     years: 2,
//     featured: true,
//     projects: 6,
//     relatedSkills: ["React", "Vercel", "JavaScript"],
//   },
//   {
//     name: "Redux",
//     level: 75,
//     color: "bg-purple-600",
//     textColor: "text-purple-100",
//     icon: "🔄",
//     category: "Frontend",
//     description: "Experienced with state management, middleware, and Redux Toolkit.",
//     years: 2,
//     featured: false,
//     projects: 7,
//     relatedSkills: ["React", "JavaScript", "State Management"],
//   },
//   {
//     name: "Firebase",
//     level: 68,
//     color: "bg-yellow-500",
//     textColor: "text-yellow-800",
//     icon: "🔥",
//     category: "Backend",
//     description: "Skilled in authentication, Firestore, and real-time database implementation.",
//     years: 2,
//     featured: false,
//     projects: 5,
//     relatedSkills: ["NoSQL", "Authentication", "Cloud Functions"],
//   },
//   {
//     name: "CI/CD",
//     level: 65,
//     color: "bg-green-500",
//     textColor: "text-green-100",
//     icon: "🔄",
//     category: "Tools",
//     description: "Experience with GitHub Actions, Jenkins, and automated deployment pipelines.",
//     years: 2,
//     featured: false,
//     projects: 6,
//     relatedSkills: ["GitHub Actions", "Jenkins", "DevOps"],
//   },
//   {
//     name: "Testing",
//     level: 70,
//     color: "bg-red-400",
//     textColor: "text-red-100",
//     icon: "🧪",
//     category: "Tools",
//     description: "Proficient in Jest, React Testing Library, and Cypress for unit and integration testing.",
//     years: 2,
//     featured: false,
//     projects: 8,
//     relatedSkills: ["Jest", "Cypress", "TDD"],
//   },

//   // Machine Learning Skills
//   {
//     name: "TensorFlow",
//     level: 78,
//     color: "bg-orange-500",
//     textColor: "text-orange-100",
//     icon: "🧠",
//     category: "Machine Learning",
//     description:
//       "Experienced in building and training neural networks for various applications including computer vision and NLP.",
//     years: 2,
//     featured: true,
//     projects: 5,
//     relatedSkills: ["Python", "Deep Learning", "Keras"],
//   },
//   {
//     name: "PyTorch",
//     level: 72,
//     color: "bg-red-500",
//     textColor: "text-red-100",
//     icon: "🔥",
//     category: "Machine Learning",
//     description: "Proficient in building dynamic neural networks and implementing research papers with PyTorch.",
//     years: 1,
//     featured: false,
//     projects: 3,
//     relatedSkills: ["Python", "Deep Learning", "Computer Vision"],
//   },
//   {
//     name: "Scikit-Learn",
//     level: 85,
//     color: "bg-blue-500",
//     textColor: "text-blue-100",
//     icon: "📊",
//     category: "Machine Learning",
//     description: "Strong knowledge of classical machine learning algorithms and data preprocessing techniques.",
//     years: 3,
//     featured: true,
//     projects: 7,
//     relatedSkills: ["Python", "Data Science", "Statistics"],
//   },
//   {
//     name: "Computer Vision",
//     level: 70,
//     color: "bg-purple-600",
//     textColor: "text-purple-100",
//     icon: "👁️",
//     category: "Machine Learning",
//     description:
//       "Experience with image processing, object detection, and image classification using OpenCV and deep learning.",
//     years: 2,
//     featured: false,
//     projects: 4,
//     relatedSkills: ["OpenCV", "TensorFlow", "PyTorch"],
//   },
//   {
//     name: "NLP",
//     level: 65,
//     color: "bg-green-600",
//     textColor: "text-green-100",
//     icon: "💬",
//     category: "Machine Learning",
//     description: "Knowledge of natural language processing techniques, transformers, and language models.",
//     years: 1,
//     featured: false,
//     projects: 3,
//     relatedSkills: ["NLTK", "spaCy", "Hugging Face"],
//   },

//   // Quantum Computing Skills
//   {
//     name: "Qiskit",
//     level: 68,
//     color: "bg-indigo-600",
//     textColor: "text-indigo-100",
//     icon: "⚛️",
//     category: "Quantum Computing",
//     description: "Experience with IBM's quantum computing framework for building and simulating quantum circuits.",
//     years: 1,
//     featured: true,
//     projects: 2,
//     relatedSkills: ["Python", "Quantum Algorithms", "Linear Algebra"],
//   },
//   {
//     name: "Quantum Algorithms",
//     level: 60,
//     color: "bg-violet-600",
//     textColor: "text-violet-100",
//     icon: "🔮",
//     category: "Quantum Computing",
//     description:
//       "Understanding of fundamental quantum algorithms like Grover's, Shor's, and quantum machine learning approaches.",
//     years: 1,
//     featured: false,
//     projects: 2,
//     relatedSkills: ["Qiskit", "Quantum Mechanics", "Algorithms"],
//   },
//   {
//     name: "Quantum Simulation",
//     level: 55,
//     color: "bg-blue-700",
//     textColor: "text-blue-100",
//     icon: "🌌",
//     category: "Quantum Computing",
//     description: "Knowledge of simulating quantum systems and implementing quantum circuits for various applications.",
//     years: 1,
//     featured: false,
//     projects: 1,
//     relatedSkills: ["Qiskit", "PennyLane", "Physics"],
//   },
// ]

// // Get unique categories
// const categories = ["All", "Featured", ...Array.from(new Set(skillsData.map((skill) => skill.category)))]

// // Helper function to get category icon
// const getCategoryIcon = (category) => {
//   switch (category) {
//     case "Frontend":
//       return <Code className="w-4 h-4 mr-1" />
//     case "Backend":
//       return <Server className="w-4 h-4 mr-1" />
//     case "Languages":
//       return <Languages className="w-4 h-4 mr-1" />
//     case "Tools":
//       return <Wrench className="w-4 h-4 mr-1" />
//     case "Featured":
//       return <Star className="w-4 h-4 mr-1" />
//     case "Machine Learning":
//       return <Brain className="w-4 h-4 mr-1" />
//     case "Quantum Computing":
//       return <Atom className="w-4 h-4 mr-1" />
//     default:
//       return null
//   }
// }

// // Helper function to get proficiency level text
// const getProficiencyText = (level) => {
//   if (level >= 90) return "Expert"
//   if (level >= 75) return "Advanced"
//   if (level >= 60) return "Intermediate"
//   if (level >= 40) return "Basic"
//   return "Beginner"
// }

// const SkillCard = ({ skill, index, onSelect }) => {
//   const [isFlipped, setIsFlipped] = useState(false)
//   const [isBookmarked, setIsBookmarked] = useState(false)
//   const cardRef = useRef(null)
//   const isInView = useInView(cardRef, { once: false, amount: 0.3 })
//   const [animateProgress, setAnimateProgress] = useState(false)

//   useEffect(() => {
//     if (isInView) {
//       const timer = setTimeout(() => {
//         setAnimateProgress(true)
//       }, index * 100)
//       return () => clearTimeout(timer)
//     }
//   }, [isInView, index])

//   const handleBookmark = (e) => {
//     e.stopPropagation()
//     setIsBookmarked(!isBookmarked)
//   }

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         delay: index * 0.1,
//       },
//     },
//     hover: {
//       y: -10,
//       boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//       transition: { duration: 0.3 },
//     },
//   }

//   return (
//     <motion.div
//       ref={cardRef}
//       variants={cardVariants}
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"}
//       whileHover="hover"
//       className="relative h-[280px] perspective"
//       onClick={() => onSelect(skill)}
//     >
//       <motion.div
//         className="w-full h-full relative preserve-3d transition-all duration-500 cursor-pointer"
//         animate={{ rotateY: isFlipped ? 180 : 0 }}
//       >
//         {/* Front of card */}
//         <Card className="absolute inset-0 backface-hidden border-t-4 border-primary shadow-md hover:shadow-xl transition-shadow duration-300">
//           <CardHeader className="pb-2">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <span className="text-3xl mr-3">{skill.icon}</span>
//                 <CardTitle className="flex items-center">
//                   {skill.name}
//                   {skill.featured && (
//                     <Badge className="ml-2 bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-500/30">
//                       <Star className="w-3 h-3 mr-1" /> Featured
//                     </Badge>
//                   )}
//                 </CardTitle>
//               </div>
//               <div className="flex items-center space-x-1">
//                 <TooltipProvider>
//                   <Tooltip>
//                     <TooltipTrigger asChild>
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         className="h-8 w-8 p-0 rounded-full"
//                         onClick={(e) => {
//                           e.stopPropagation()
//                           setIsFlipped(true)
//                         }}
//                       >
//                         <Info className="h-4 w-4" />
//                         <span className="sr-only">More info</span>
//                       </Button>
//                     </TooltipTrigger>
//                     <TooltipContent>
//                       <p>View details</p>
//                     </TooltipContent>
//                   </Tooltip>
//                 </TooltipProvider>

//                 <TooltipProvider>
//                   <Tooltip>
//                     <TooltipTrigger asChild>
//                       <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full" onClick={handleBookmark}>
//                         {isBookmarked ? (
//                           <BookmarkCheck className="h-4 w-4 text-primary" />
//                         ) : (
//                           <Bookmark className="h-4 w-4" />
//                         )}
//                         <span className="sr-only">Bookmark</span>
//                       </Button>
//                     </TooltipTrigger>
//                     <TooltipContent>
//                       <p>{isBookmarked ? "Remove bookmark" : "Bookmark skill"}</p>
//                     </TooltipContent>
//                   </Tooltip>
//                 </TooltipProvider>
//               </div>
//             </div>
//             <CardDescription className="flex items-center mt-1">
//               <Clock className="h-3 w-3 mr-1" />
//               Experience: {skill.years} {skill.years === 1 ? "year" : "years"}
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="relative pt-1">
//               <div className="flex mb-2 items-center justify-between">
//                 <div>
//                   <Badge variant="outline" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
//                     <BarChart3 className="w-3 h-3 mr-1" />
//                     {getProficiencyText(skill.level)}
//                   </Badge>
//                 </div>
//                 <div className="text-right">
//                   <span className="text-xs font-semibold inline-block text-primary">{skill.level}%</span>
//                 </div>
//               </div>
//               <Progress
//                 value={animateProgress ? skill.level : 0}
//                 className="h-2 bg-primary/10"
//                 indicatorClassName={skill.color}
//               />
//               <div className="flex items-center justify-between mt-4">
//                 <Badge
//                   variant="outline"
//                   className="flex items-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//                 >
//                   {getCategoryIcon(skill.category)}
//                   {skill.category}
//                 </Badge>
//                 <Badge
//                   variant="outline"
//                   className="flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
//                 >
//                   <Zap className="w-3 h-3 mr-1" />
//                   {skill.projects} {skill.projects === 1 ? "Project" : "Projects"}
//                 </Badge>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Back of card */}
//         <Card className="absolute inset-0 backface-hidden rotateY-180 border-t-4 border-primary shadow-md hover:shadow-xl transition-shadow duration-300">
//           <CardHeader className="pb-2">
//             <div className="flex items-center justify-between">
//               <CardTitle className="flex items-center">
//                 <span className="text-2xl mr-2">{skill.icon}</span>
//                 {skill.name}
//               </CardTitle>
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 className="h-8 w-8 p-0 rounded-full"
//                 onClick={(e) => {
//                   e.stopPropagation()
//                   setIsFlipped(false)
//                 }}
//               >
//                 <ChevronUp className="h-4 w-4" />
//                 <span className="sr-only">Back to front</span>
//               </Button>
//             </div>
//             <CardDescription className="flex items-center">
//               <Lightbulb className="h-3 w-3 mr-1" />
//               Skill Details
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="flex flex-col h-[180px]">
//             <p className="text-sm text-muted-foreground mb-4 flex-grow">{skill.description}</p>
//             <div className="mt-auto">
//               <h4 className="text-xs font-semibold mb-1 text-muted-foreground">Related Skills:</h4>
//               <div className="flex flex-wrap gap-1">
//                 {skill.relatedSkills.map((relatedSkill) => (
//                   <Badge
//                     key={relatedSkill}
//                     variant="outline"
//                     className="text-xs bg-primary/5 hover:bg-primary/10 transition-colors"
//                   >
//                     {relatedSkill}
//                   </Badge>
//                 ))}
//               </div>
//             </div>
//           </CardContent>
//           <CardFooter className="pt-0 flex justify-between">
//             <Badge variant="outline" className={`${skill.color} ${skill.textColor} border-none text-xs font-medium`}>
//               {skill.level}% Proficiency
//             </Badge>
//             <Badge variant="outline" className="text-xs">
//               {skill.years} {skill.years === 1 ? "year" : "years"}
//             </Badge>
//           </CardFooter>
//         </Card>
//       </motion.div>
//     </motion.div>
//   )
// }

// const SkillDetailModal = ({ skill, isOpen, onClose }) => {
//   if (!skill) return null

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-3xl">
//         <div className="flex items-center space-x-3">
//           <div className={`p-3 rounded-full ${skill.color} ${skill.textColor}`}>
//             <span className="text-3xl">{skill.icon}</span>
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold flex items-center">
//               {skill.name}
//               {skill.featured && (
//                 <Badge className="ml-2 bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-500/30">
//                   <Star className="w-3 h-3 mr-1" /> Featured
//                 </Badge>
//               )}
//             </h2>
//             <p className="text-muted-foreground">
//               {getProficiencyText(skill.level)} • {skill.years} {skill.years === 1 ? "year" : "years"} of experience
//             </p>
//           </div>
//         </div>

//         <Separator className="my-4" />

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <h3 className="text-lg font-semibold mb-2 flex items-center">
//               <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
//               About this Skill
//             </h3>
//             <p className="text-muted-foreground mb-4">{skill.description}</p>

//             <h3 className="text-lg font-semibold mb-2 flex items-center">
//               <BarChart3 className="w-5 h-5 mr-2 text-blue-500" />
//               Proficiency
//             </h3>
//             <div className="mb-6">
//               <div className="flex justify-between mb-1">
//                 <span className="text-sm font-medium">{getProficiencyText(skill.level)}</span>
//                 <span className="text-sm font-medium">{skill.level}%</span>
//               </div>
//               <Progress value={skill.level} className="h-3" indicatorClassName={skill.color} />
//             </div>

//             <h3 className="text-lg font-semibold mb-2 flex items-center">
//               <Zap className="w-5 h-5 mr-2 text-purple-500" />
//               Projects Completed
//             </h3>
//             <p className="text-muted-foreground">
//               I've used {skill.name} in {skill.projects} {skill.projects === 1 ? "project" : "projects"} so far.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-2 flex items-center">
//               <Code className="w-5 h-5 mr-2 text-green-500" />
//               Related Skills
//             </h3>
//             <div className="flex flex-wrap gap-2 mb-6">
//               {skill.relatedSkills.map((relatedSkill) => (
//                 <Badge
//                   key={relatedSkill}
//                   className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors py-1 px-3"
//                 >
//                   {relatedSkill}
//                 </Badge>
//               ))}
//             </div>

//             <h3 className="text-lg font-semibold mb-2 flex items-center">
//               <Info className="w-5 h-5 mr-2 text-orange-500" />
//               Skill Details
//             </h3>
//             <div className="space-y-2">
//               <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
//                 <span className="text-muted-foreground">Category</span>
//                 <Badge variant="outline" className="flex items-center">
//                   {getCategoryIcon(skill.category)}
//                   {skill.category}
//                 </Badge>
//               </div>
//               <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
//                 <span className="text-muted-foreground">Experience</span>
//                 <span className="font-medium">
//                   {skill.years} {skill.years === 1 ? "year" : "years"}
//                 </span>
//               </div>
//               <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
//                 <span className="text-muted-foreground">Projects</span>
//                 <span className="font-medium">{skill.projects}</span>
//               </div>
//               <div className="flex justify-between py-2">
//                 <span className="text-muted-foreground">Proficiency</span>
//                 <span className="font-medium">{getProficiencyText(skill.level)}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   )
// }

// export function Skills() {
//   const [selectedCategory, setSelectedCategory] = useState("All")
//   const [searchTerm, setSearchTerm] = useState("")
//   const [selectedSkill, setSelectedSkill] = useState(null)
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [viewMode, setViewMode] = useState("grid") // grid or list
//   const containerRef = useRef(null)
//   const isInView = useInView(containerRef, { once: true, amount: 0.1 })

//   const handleSkillClick = (skill) => {
//     setSelectedSkill(skill)
//     setIsModalOpen(true)
//   }

//   const handleCloseModal = () => {
//     setIsModalOpen(false)
//   }

//   const filteredSkills = skillsData.filter((skill) => {
//     const matchesCategory =
//       selectedCategory === "All" ||
//       (selectedCategory === "Featured" && skill.featured) ||
//       skill.category === selectedCategory
//     const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase())
//     return matchesCategory && matchesSearch
//   })

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const sortedSkills = [...filteredSkills].sort((a, b) => {
//     // Sort by featured first, then by level
//     if (a.featured && !b.featured) return -1
//     if (!a.featured && b.featured) return 1
//     return b.level - a.level
//   })

//   return (
//     <section
//       id="skills"
//       className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
//     >
//       {/* Background decorative elements */}
//       <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/10 rounded-full filter blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400/10 dark:bg-purple-600/10 rounded-full filter blur-3xl"></div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary/30 dark:border-primary/50">
//             Expertise
//           </Badge>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Skills & Technologies</h2>
//           <div className="flex items-center justify-center mb-6">
//             <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
//             <Sparkles className="mx-4 text-purple-500 h-6 w-6" />
//             <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></div>
//           </div>
//           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             My technical skills and proficiency levels across different technologies, languages, and tools. Click on any
//             card to see more details about my experience.
//           </p>
//         </motion.div>

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
//                   placeholder="Search skills..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="pl-10"
//                 />
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className={`h-9 ${viewMode === "grid" ? "bg-primary/10 text-primary" : ""}`}
//                   onClick={() => setViewMode("grid")}
//                 >
//                   <div className="grid grid-cols-2 gap-1 mr-2">
//                     <div className="w-2 h-2 bg-current rounded-sm"></div>
//                     <div className="w-2 h-2 bg-current rounded-sm"></div>
//                     <div className="w-2 h-2 bg-current rounded-sm"></div>
//                     <div className="w-2 h-2 bg-current rounded-sm"></div>
//                   </div>
//                   Grid
//                 </Button>
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className={`h-9 ${viewMode === "list" ? "bg-primary/10 text-primary" : ""}`}
//                   onClick={() => setViewMode("list")}
//                 >
//                   <div className="flex flex-col gap-1 mr-2">
//                     <div className="w-4 h-1 bg-current rounded-sm"></div>
//                     <div className="w-4 h-1 bg-current rounded-sm"></div>
//                     <div className="w-4 h-1 bg-current rounded-sm"></div>
//                   </div>
//                   List
//                 </Button>
//                 <Separator orientation="vertical" className="h-8" />
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="h-9"
//                   onClick={() => {
//                     setSearchTerm("")
//                     setSelectedCategory("All")
//                   }}
//                 >
//                   <X className="w-4 h-4 mr-1" /> Clear
//                 </Button>
//               </div>
//             </div>

//             <Tabs defaultValue="All" value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
//               <TabsList className="flex flex-wrap justify-start mb-4 bg-transparent p-0 h-auto">
//                 {categories.map((category) => (
//                   <TabsTrigger
//                     key={category}
//                     value={category}
//                     className="m-1 data-[state=active]:bg-primary data-[state=active]:text-white"
//                   >
//                     {getCategoryIcon(category)}
//                     {category}
//                   </TabsTrigger>
//                 ))}
//               </TabsList>
//             </Tabs>
//           </Card>
//         </motion.div>

//         <AnimatePresence mode="wait">
//           {viewMode === "grid" ? (
//             <motion.div
//               key="grid-view"
//               ref={containerRef}
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               exit={{ opacity: 0, y: 20 }}
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
//             >
//               {sortedSkills.map((skill, index) => (
//                 <SkillCard key={skill.name} skill={skill} index={index} onSelect={handleSkillClick} />
//               ))}
//             </motion.div>
//           ) : (
//             <motion.div
//               key="list-view"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 20 }}
//               className="space-y-4"
//             >
//               {sortedSkills.map((skill, index) => (
//                 <motion.div
//                   key={skill.name}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.05 }}
//                 >
//                   <Card
//                     className="hover:shadow-md transition-shadow duration-300 cursor-pointer"
//                     onClick={() => handleSkillClick(skill)}
//                   >
//                     <CardContent className="p-4">
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center space-x-4">
//                           <div className={`p-3 rounded-full ${skill.color} ${skill.textColor}`}>
//                             <span className="text-xl">{skill.icon}</span>
//                           </div>
//                           <div>
//                             <h3 className="font-medium flex items-center">
//                               {skill.name}
//                               {skill.featured && (
//                                 <Badge className="ml-2 bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-500/30 text-xs">
//                                   <Star className="w-3 h-3 mr-1" /> Featured
//                                 </Badge>
//                               )}
//                             </h3>
//                             <p className="text-sm text-muted-foreground">
//                               {skill.category} • {skill.years} {skill.years === 1 ? "year" : "years"} • {skill.projects}{" "}
//                               {skill.projects === 1 ? "project" : "projects"}
//                             </p>
//                           </div>
//                         </div>
//                         <div className="flex items-center space-x-4">
//                           <div className="w-32">
//                             <div className="flex justify-between mb-1">
//                               <span className="text-xs font-medium">{getProficiencyText(skill.level)}</span>
//                               <span className="text-xs font-medium">{skill.level}%</span>
//                             </div>
//                             <Progress value={skill.level} className="h-2" indicatorClassName={skill.color} />
//                           </div>
//                           <Button variant="ghost" size="sm" className="rounded-full">
//                             <ArrowUpRight className="h-4 w-4" />
//                           </Button>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {sortedSkills.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
//           >
//             <p className="text-gray-600 dark:text-gray-400 text-lg">No skills found matching your criteria.</p>
//             <Button
//               variant="outline"
//               className="mt-4"
//               onClick={() => {
//                 setSearchTerm("")
//                 setSelectedCategory("All")
//               }}
//             >
//               <Filter className="mr-2 h-4 w-4" /> Reset Filters
//             </Button>
//           </motion.div>
//         )}

//         {/* Skill Detail Modal */}
//         <SkillDetailModal skill={selectedSkill} isOpen={isModalOpen} onClose={handleCloseModal} />
//       </div>
//     </section>
//   )
// }

// export default Skills

"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useState, useRef, useEffect, useMemo } from "react"
import { motion, useInView, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import {
  Star,
  Sparkles,
  ArrowUpRight,
  Code,
  Server,
  Languages,
  Wrench,
  Search,
  X,
  BarChart3,
  Lightbulb,
  Filter,
  Brain,
  Atom,
  TrendingUp,
  Target,
  Network,
  Compass,
  Rocket,
  Bot,
  Orbit,
  Layers,
  Maximize2,
  Play,
  Pause,
  RotateCcw,
  MousePointer,
  Database,
  Palette,
  Cloud,
  Award,
  BookOpen,
  Users,
  Hexagon,
  Triangle,
  Circle,
  Square,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"
import { Input } from "./ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { Progress } from "./ui/progress"
import { Slider } from "./ui/slider"

// Complete skills data with all technologies
const skillsData = [
  // Frontend Technologies
  {
    name: "JavaScript",
    level: 90,
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20",
    icon: "🟨",
    category: "Frontend",
    description:
      "Proficient in modern JavaScript (ES6+), including async/await, modules, and functional programming concepts.",
    years: 4,
    featured: true,
    projects: 15,
    marketDemand: 95,
    salaryImpact: 85,
    trendDirection: "up",
    size: "large",
    position: { x: 0, y: 0 },
    orbitRadius: 120,
    orbitSpeed: 0.02,
    glowIntensity: 0.8,
    complexity: 75,
    versatility: 95,
    aiInsight: "JavaScript remains the backbone of web development with growing demand in AI/ML integration.",
    learningPath: ["TypeScript", "WebAssembly", "Deno"],
    skillSynergy: ["React", "Node.js", "TypeScript"],
    aiGenerated: {
      strengthAreas: ["Async Programming", "Functional Programming", "DOM Manipulation"],
      improvementAreas: ["WebAssembly", "Service Workers", "Performance Optimization"],
      careerImpact: "High - Essential for modern web development roles",
      marketPosition: "Core Technology - Always in demand",
    },
  },
  {
    name: "React",
    level: 85,
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    icon: "⚛️",
    category: "Frontend",
    description: "Experienced with React hooks, context API, and state management libraries like Redux and Zustand.",
    years: 3,
    featured: true,
    projects: 12,
    marketDemand: 92,
    salaryImpact: 88,
    trendDirection: "up",
    size: "large",
    position: { x: 1, y: 0 },
    orbitRadius: 140,
    orbitSpeed: 0.015,
    glowIntensity: 0.9,
    complexity: 80,
    versatility: 85,
    aiInsight: "React continues to dominate frontend development with strong ecosystem growth.",
    learningPath: ["React Server Components", "Concurrent Features", "React Native"],
    skillSynergy: ["JavaScript", "TypeScript", "Next.js"],
    aiGenerated: {
      strengthAreas: ["Component Architecture", "State Management", "Performance Optimization"],
      improvementAreas: ["Server Components", "Concurrent Rendering", "Testing"],
      careerImpact: "Very High - Most sought-after frontend skill",
      marketPosition: "Leading Framework - Excellent career prospects",
    },
  },
  {
    name: "TypeScript",
    level: 82,
    color: "from-blue-600 to-indigo-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
    icon: "🔷",
    category: "Frontend",
    description: "Strong typing skills with interfaces, generics, and advanced type utilities.",
    years: 2,
    featured: false,
    projects: 8,
    marketDemand: 89,
    salaryImpact: 91,
    trendDirection: "up",
    size: "medium",
    position: { x: 0, y: 1 },
    orbitRadius: 100,
    orbitSpeed: 0.025,
    glowIntensity: 0.6,
    complexity: 85,
    versatility: 90,
    aiInsight: "TypeScript adoption is accelerating across all JavaScript environments.",
    learningPath: ["Advanced Types", "Decorators", "Template Literal Types"],
    skillSynergy: ["JavaScript", "React", "Node.js"],
    aiGenerated: {
      strengthAreas: ["Type Safety", "Code Quality", "Developer Experience"],
      improvementAreas: ["Advanced Generics", "Conditional Types", "Template Literals"],
      careerImpact: "High - Increasingly required for senior positions",
      marketPosition: "Growing Standard - Future-proof investment",
    },
  },
  {
    name: "Next.js",
    level: 78,
    color: "from-gray-800 to-black",
    bgColor: "bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-800/20 dark:to-slate-900/20",
    icon: "▲",
    category: "Frontend",
    description: "Proficient in server-side rendering, static site generation, and API routes.",
    years: 2,
    featured: true,
    projects: 6,
    marketDemand: 85,
    salaryImpact: 87,
    trendDirection: "up",
    size: "medium",
    position: { x: 1, y: 1 },
    orbitRadius: 110,
    orbitSpeed: 0.018,
    glowIntensity: 0.7,
    complexity: 78,
    versatility: 80,
    aiInsight: "Next.js is becoming the React meta-framework of choice for production applications.",
    learningPath: ["App Router", "Server Actions", "Edge Runtime"],
    skillSynergy: ["React", "TypeScript", "Vercel"],
    aiGenerated: {
      strengthAreas: ["Full-Stack Development", "Performance", "SEO"],
      improvementAreas: ["App Router", "Server Components", "Edge Functions"],
      careerImpact: "High - Premium framework for React developers",
      marketPosition: "Meta-Framework Leader - High demand",
    },
  },
  {
    name: "HTML/CSS",
    level: 88,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
    icon: "🌐",
    category: "Frontend",
    description: "Expert in semantic HTML and modern CSS including Flexbox, Grid, and CSS animations.",
    years: 5,
    featured: false,
    projects: 20,
    marketDemand: 85,
    salaryImpact: 70,
    trendDirection: "stable",
    size: "medium",
    position: { x: 0, y: 2 },
    orbitRadius: 85,
    orbitSpeed: 0.028,
    glowIntensity: 0.5,
    complexity: 60,
    versatility: 90,
    aiInsight: "HTML/CSS remains fundamental with new APIs constantly expanding web capabilities.",
    learningPath: ["Web Components", "Progressive Web Apps", "Web APIs"],
    skillSynergy: ["Tailwind CSS", "SASS", "JavaScript"],
    aiGenerated: {
      strengthAreas: ["Semantic Markup", "Accessibility", "Web Standards"],
      improvementAreas: ["Web Components", "Advanced APIs", "Performance"],
      careerImpact: "Essential - Foundation for all web development",
      marketPosition: "Core Technology - Always required",
    },
  },
  {
    name: "Tailwind CSS",
    level: 85,
    color: "from-cyan-400 to-blue-500",
    bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20",
    icon: "🎨",
    category: "Frontend",
    description: "Proficient in utility-first CSS framework for rapid UI development.",
    years: 2,
    featured: true,
    projects: 10,
    marketDemand: 82,
    salaryImpact: 78,
    trendDirection: "up",
    size: "medium",
    position: { x: 2, y: 1 },
    orbitRadius: 105,
    orbitSpeed: 0.02,
    glowIntensity: 0.7,
    complexity: 65,
    versatility: 85,
    aiInsight: "Tailwind CSS is rapidly becoming the preferred styling solution for modern web applications.",
    learningPath: ["Headless UI", "Tailwind UI", "Custom Components"],
    skillSynergy: ["HTML/CSS", "React", "Next.js"],
    aiGenerated: {
      strengthAreas: ["Rapid Prototyping", "Consistent Design", "Responsive Design"],
      improvementAreas: ["Custom Components", "Design Systems", "Performance"],
      careerImpact: "High - Increasingly popular in modern development",
      marketPosition: "Trending Framework - High demand",
    },
  },
  {
    name: "Redux",
    level: 75,
    color: "from-purple-600 to-violet-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
    icon: "🔄",
    category: "Frontend",
    description: "Experienced with state management, middleware, and Redux Toolkit.",
    years: 2,
    featured: false,
    projects: 7,
    marketDemand: 75,
    salaryImpact: 78,
    trendDirection: "stable",
    size: "small",
    position: { x: 0, y: 5 },
    orbitRadius: 73,
    orbitSpeed: 0.034,
    glowIntensity: 0.4,
    complexity: 75,
    versatility: 70,
    aiInsight: "Redux remains important for complex state management in large React applications.",
    learningPath: ["Redux Toolkit", "RTK Query", "Zustand"],
    skillSynergy: ["React", "JavaScript", "State Management"],
    aiGenerated: {
      strengthAreas: ["State Management", "Predictable Updates", "DevTools"],
      improvementAreas: ["Modern Patterns", "Performance", "Alternatives"],
      careerImpact: "Medium-High - Important for complex applications",
      marketPosition: "Established Tool - Still relevant",
    },
  },

  // Backend Technologies
  {
    name: "Node.js",
    level: 80,
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    icon: "🟩",
    category: "Backend",
    description: "Experienced in building RESTful APIs and server-side applications with Express.js.",
    years: 3,
    featured: true,
    projects: 9,
    marketDemand: 88,
    salaryImpact: 83,
    trendDirection: "stable",
    size: "large",
    position: { x: 2, y: 0 },
    orbitRadius: 130,
    orbitSpeed: 0.012,
    glowIntensity: 0.8,
    complexity: 75,
    versatility: 88,
    aiInsight: "Node.js remains strong for backend development with growing serverless adoption.",
    learningPath: ["Deno", "Bun", "Serverless Functions"],
    skillSynergy: ["Express.js", "MongoDB", "JavaScript"],
    aiGenerated: {
      strengthAreas: ["API Development", "Real-time Applications", "Microservices"],
      improvementAreas: ["Performance Optimization", "Security", "Monitoring"],
      careerImpact: "High - Essential for full-stack JavaScript development",
      marketPosition: "Established Backend - Reliable choice",
    },
  },
  {
    name: "MongoDB",
    level: 70,
    color: "from-green-500 to-green-700",
    bgColor: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20",
    icon: "🍃",
    category: "Database",
    description: "Skilled in document database design, queries, and aggregation pipelines.",
    years: 2,
    featured: false,
    projects: 7,
    marketDemand: 80,
    salaryImpact: 78,
    trendDirection: "stable",
    size: "medium",
    position: { x: 2, y: 2 },
    orbitRadius: 88,
    orbitSpeed: 0.024,
    glowIntensity: 0.5,
    complexity: 75,
    versatility: 80,
    aiInsight: "MongoDB remains popular for modern applications requiring flexible data models.",
    learningPath: ["MongoDB Atlas", "Aggregation Framework", "Sharding"],
    skillSynergy: ["Node.js", "Express.js", "Mongoose"],
    aiGenerated: {
      strengthAreas: ["NoSQL Design", "Document Storage", "Scalability"],
      improvementAreas: ["Performance Tuning", "Security", "Advanced Queries"],
      careerImpact: "High - Popular choice for modern applications",
      marketPosition: "Leading NoSQL - Strong market presence",
    },
  },
  {
    name: "SQL",
    level: 72,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
    icon: "🗃️",
    category: "Database",
    description: "Experienced with relational database design, complex queries, and optimization.",
    years: 3,
    featured: false,
    projects: 6,
    marketDemand: 82,
    salaryImpact: 85,
    trendDirection: "up",
    size: "small",
    position: { x: 0, y: 4 },
    orbitRadius: 75,
    orbitSpeed: 0.032,
    glowIntensity: 0.4,
    complexity: 80,
    versatility: 85,
    aiInsight: "SQL skills are fundamental and increasingly valuable with big data growth.",
    learningPath: ["Advanced SQL", "Database Optimization", "Data Warehousing"],
    skillSynergy: ["PostgreSQL", "MySQL", "Database Design"],
    aiGenerated: {
      strengthAreas: ["Complex Queries", "Data Integrity", "Performance"],
      improvementAreas: ["Advanced Features", "Optimization", "Administration"],
      careerImpact: "High - Essential database skills",
      marketPosition: "Fundamental Technology - Always in demand",
    },
  },
  {
    name: "GraphQL",
    level: 65,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
    icon: "⚡",
    category: "Backend",
    description: "Knowledge of schema design, resolvers, and integration with React using Apollo Client.",
    years: 1,
    featured: false,
    projects: 3,
    marketDemand: 78,
    salaryImpact: 82,
    trendDirection: "up",
    size: "small",
    position: { x: 1, y: 3 },
    orbitRadius: 90,
    orbitSpeed: 0.026,
    glowIntensity: 0.5,
    complexity: 75,
    versatility: 70,
    aiInsight: "GraphQL is gaining traction as a flexible alternative to REST APIs.",
    learningPath: ["Apollo Federation", "GraphQL Subscriptions", "Schema Stitching"],
    skillSynergy: ["Apollo", "Node.js", "React"],
    aiGenerated: {
      strengthAreas: ["API Design", "Data Fetching", "Client Integration"],
      improvementAreas: ["Performance", "Security", "Schema Management"],
      careerImpact: "Medium - Growing demand for API developers",
      marketPosition: "Emerging Technology - Good career prospects",
    },
  },
  {
    name: "Firebase",
    level: 68,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20",
    icon: "🔥",
    category: "Backend",
    description: "Skilled in authentication, Firestore, and real-time database implementation.",
    years: 2,
    featured: false,
    projects: 5,
    marketDemand: 75,
    salaryImpact: 75,
    trendDirection: "stable",
    size: "small",
    position: { x: 2, y: 3 },
    orbitRadius: 82,
    orbitSpeed: 0.029,
    glowIntensity: 0.4,
    complexity: 65,
    versatility: 75,
    aiInsight: "Firebase provides rapid development capabilities for modern web applications.",
    learningPath: ["Cloud Functions", "Firebase Security", "Advanced Queries"],
    skillSynergy: ["NoSQL", "Authentication", "Cloud Functions"],
    aiGenerated: {
      strengthAreas: ["Rapid Development", "Real-time Features", "Authentication"],
      improvementAreas: ["Security Rules", "Performance", "Cost Optimization"],
      careerImpact: "Medium - Good for rapid prototyping and startups",
      marketPosition: "Popular BaaS - Good for quick development",
    },
  },

  // Programming Languages
  {
    name: "Python",
    level: 75,
    color: "from-blue-500 to-yellow-400",
    bgColor: "bg-gradient-to-br from-blue-50 to-yellow-50 dark:from-blue-900/20 dark:to-yellow-900/20",
    icon: "🐍",
    category: "Languages",
    description: "Proficient in Python for data analysis, automation, and backend development.",
    years: 3,
    featured: false,
    projects: 5,
    marketDemand: 87,
    salaryImpact: 82,
    trendDirection: "up",
    size: "medium",
    position: { x: 1, y: 3 },
    orbitRadius: 95,
    orbitSpeed: 0.022,
    glowIntensity: 0.6,
    complexity: 70,
    versatility: 92,
    aiInsight: "Python's versatility makes it essential for AI, data science, and backend development.",
    learningPath: ["Django", "Flask", "Data Analysis"],
    skillSynergy: ["TensorFlow", "Data Science", "AI"],
    aiGenerated: {
      strengthAreas: ["Data Analysis", "Automation", "Backend Development"],
      improvementAreas: ["Web Development", "Concurrency", "Asynchronous Programming"],
      careerImpact: "High - Versatile language for various roles",
      marketPosition: "Popular Language - Wide range of applications",
    },
  },
  {
    name: "C++",
    level: 80,
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20",
    icon: "🔠",
    category: "Languages",
    description: "Strong understanding of memory management, data structures, and algorithms.",
    years: 4,
    featured: true,
    projects: 8,
    marketDemand: 78,
    salaryImpact: 85,
    trendDirection: "stable",
    size: "medium",
    position: { x: 0, y: 3 },
    orbitRadius: 115,
    orbitSpeed: 0.019,
    glowIntensity: 0.7,
    complexity: 90,
    versatility: 80,
    aiInsight: "C++ remains crucial for system programming, game development, and performance-critical applications.",
    learningPath: ["Modern C++", "System Programming", "Game Development"],
    skillSynergy: ["Data Structures", "Algorithms", "System Programming"],
    aiGenerated: {
      strengthAreas: ["Performance", "Memory Management", "System Programming"],
      improvementAreas: ["Modern C++ Features", "Concurrency", "Graphics Programming"],
      careerImpact: "High - Essential for system-level programming",
      marketPosition: "Established Language - High-performance applications",
    },
  },
  {
    name: "Java",
    level: 40,
    color: "from-red-500 to-orange-600",
    bgColor: "bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20",
    icon: "☕",
    category: "Languages",
    description: "Basic knowledge of object-oriented programming concepts in Java.",
    years: 1,
    featured: false,
    projects: 2,
    marketDemand: 85,
    salaryImpact: 80,
    trendDirection: "stable",
    size: "small",
    position: { x: 1, y: 4 },
    orbitRadius: 70,
    orbitSpeed: 0.035,
    glowIntensity: 0.3,
    complexity: 75,
    versatility: 85,
    aiInsight: "Java remains a cornerstone of enterprise development with strong job market demand.",
    learningPath: ["Spring Framework", "Enterprise Java", "Android Development"],
    skillSynergy: ["OOP", "Spring", "Android"],
    aiGenerated: {
      strengthAreas: ["Object-Oriented Programming", "Enterprise Development", "Platform Independence"],
      improvementAreas: ["Framework Knowledge", "Advanced Features", "Performance Tuning"],
      careerImpact: "High - Strong enterprise demand",
      marketPosition: "Enterprise Standard - Stable career prospects",
    },
  },

  // Tools & DevOps
  {
    name: "Git",
    level: 85,
    color: "from-orange-600 to-red-600",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
    icon: "📝",
    category: "Tools",
    description: "Experienced with version control, branching strategies, and collaborative workflows.",
    years: 4,
    featured: false,
    projects: 25,
    marketDemand: 90,
    salaryImpact: 70,
    trendDirection: "stable",
    size: "small",
    position: { x: 1, y: 4 },
    orbitRadius: 70,
    orbitSpeed: 0.035,
    glowIntensity: 0.4,
    complexity: 65,
    versatility: 95,
    aiInsight: "Git is essential for modern development workflows and team collaboration.",
    learningPath: ["GitHub", "GitLab", "CI/CD"],
    skillSynergy: ["GitHub Actions", "DevOps", "Collaboration"],
    aiGenerated: {
      strengthAreas: ["Version Control", "Collaboration", "Branching"],
      improvementAreas: ["Advanced Commands", "Workflow Optimization", "Automation"],
      careerImpact: "Essential - Required for all development roles",
      marketPosition: "Industry Standard - Universal requirement",
    },
  },
  {
    name: "Docker",
    level: 60,
    color: "from-blue-500 to-sky-400",
    bgColor: "bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20",
    icon: "🐳",
    category: "Tools",
    description: "Familiar with containerization, Docker Compose, and basic orchestration.",
    years: 2,
    featured: false,
    projects: 4,
    marketDemand: 82,
    salaryImpact: 78,
    trendDirection: "stable",
    size: "small",
    position: { x: 2, y: 2 },
    orbitRadius: 80,
    orbitSpeed: 0.03,
    glowIntensity: 0.4,
    complexity: 65,
    versatility: 75,
    aiInsight: "Docker is essential for modern DevOps and cloud deployment workflows.",
    learningPath: ["Kubernetes", "Docker Swarm", "CI/CD"],
    skillSynergy: ["Kubernetes", "DevOps", "Cloud"],
    aiGenerated: {
      strengthAreas: ["Containerization", "DevOps", "Cloud Deployment"],
      improvementAreas: ["Orchestration", "Security", "Networking"],
      careerImpact: "High - Essential for modern deployment pipelines",
      marketPosition: "Standard Tool - Widely used in the industry",
    },
  },
  {
    name: "AWS",
    level: 55,
    color: "from-orange-400 to-yellow-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20",
    icon: "☁️",
    category: "Cloud",
    description: "Experience with S3, EC2, Lambda, and deployment pipelines.",
    years: 1,
    featured: false,
    projects: 3,
    marketDemand: 90,
    salaryImpact: 85,
    trendDirection: "up",
    size: "small",
    position: { x: 0, y: 4 },
    orbitRadius: 85,
    orbitSpeed: 0.028,
    glowIntensity: 0.5,
    complexity: 80,
    versatility: 85,
    aiInsight: "AWS skills are highly valued in the cloud-first development landscape.",
    learningPath: ["Cloud Computing", "Serverless", "DevOps"],
    skillSynergy: ["Docker", "Serverless", "DevOps"],
    aiGenerated: {
      strengthAreas: ["Cloud Services", "Deployment", "Scalability"],
      improvementAreas: ["Security", "Cost Optimization", "Advanced Services"],
      careerImpact: "High - In-demand for cloud-based roles",
      marketPosition: "Leading Cloud Provider - Excellent career opportunities",
    },
  },
  {
    name: "CI/CD",
    level: 65,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    icon: "🔄",
    category: "Tools",
    description: "Experience with GitHub Actions, Jenkins, and automated deployment pipelines.",
    years: 2,
    featured: false,
    projects: 6,
    marketDemand: 85,
    salaryImpact: 80,
    trendDirection: "up",
    size: "small",
    position: { x: 2, y: 4 },
    orbitRadius: 77,
    orbitSpeed: 0.033,
    glowIntensity: 0.4,
    complexity: 70,
    versatility: 80,
    aiInsight: "CI/CD practices are essential for modern software development and deployment.",
    learningPath: ["Advanced Pipelines", "Infrastructure as Code", "Monitoring"],
    skillSynergy: ["GitHub Actions", "Jenkins", "DevOps"],
    aiGenerated: {
      strengthAreas: ["Automation", "Deployment", "Quality Assurance"],
      improvementAreas: ["Advanced Pipelines", "Security", "Monitoring"],
      careerImpact: "High - Critical for modern development workflows",
      marketPosition: "Industry Standard - Essential for DevOps",
    },
  },
  {
    name: "Testing",
    level: 70,
    color: "from-red-400 to-pink-500",
    bgColor: "bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20",
    icon: "🧪",
    category: "Tools",
    description: "Proficient in Jest, React Testing Library, and Cypress for unit and integration testing.",
    years: 2,
    featured: false,
    projects: 8,
    marketDemand: 80,
    salaryImpact: 75,
    trendDirection: "stable",
    size: "small",
    position: { x: 0, y: 5 },
    orbitRadius: 74,
    orbitSpeed: 0.034,
    glowIntensity: 0.4,
    complexity: 70,
    versatility: 85,
    aiInsight: "Testing skills are crucial for maintaining code quality and reliability.",
    learningPath: ["Advanced Testing Patterns", "E2E Testing", "Performance Testing"],
    skillSynergy: ["Jest", "Cypress", "TDD"],
    aiGenerated: {
      strengthAreas: ["Quality Assurance", "Test Automation", "Debugging"],
      improvementAreas: ["Performance Testing", "Visual Testing", "API Testing"],
      careerImpact: "High - Essential for quality software development",
      marketPosition: "Critical Skill - Always valued",
    },
  },

  // Machine Learning & AI
  {
    name: "TensorFlow",
    level: 78,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
    icon: "🧠",
    category: "Machine Learning",
    description:
      "Experienced in building and training neural networks for various applications including computer vision and NLP.",
    years: 2,
    featured: true,
    projects: 5,
    marketDemand: 94,
    salaryImpact: 95,
    trendDirection: "up",
    size: "large",
    position: { x: 1, y: 2 },
    orbitRadius: 150,
    orbitSpeed: 0.008,
    glowIntensity: 0.9,
    complexity: 90,
    versatility: 85,
    aiInsight: "TensorFlow remains a leading ML framework with strong enterprise adoption.",
    learningPath: ["TensorFlow.js", "TensorFlow Lite", "MLOps"],
    skillSynergy: ["Python", "Deep Learning", "Keras"],
    aiGenerated: {
      strengthAreas: ["Deep Learning", "Production ML", "Computer Vision"],
      improvementAreas: ["MLOps", "Model Optimization", "Edge Deployment"],
      careerImpact: "Very High - Critical for AI/ML roles",
      marketPosition: "Industry Standard - High-value skill",
    },
  },
  {
    name: "PyTorch",
    level: 72,
    color: "from-red-500 to-orange-600",
    bgColor: "bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20",
    icon: "🔥",
    category: "Machine Learning",
    description: "Proficient in building dynamic neural networks and implementing research papers with PyTorch.",
    years: 1,
    featured: false,
    projects: 3,
    marketDemand: 88,
    salaryImpact: 92,
    trendDirection: "up",
    size: "medium",
    position: { x: 2, y: 3 },
    orbitRadius: 95,
    orbitSpeed: 0.022,
    glowIntensity: 0.6,
    complexity: 88,
    versatility: 80,
    aiInsight: "PyTorch is gaining popularity in research and production environments.",
    learningPath: ["Advanced PyTorch", "Research Implementation", "Production Deployment"],
    skillSynergy: ["Python", "Deep Learning", "Computer Vision"],
    aiGenerated: {
      strengthAreas: ["Research Implementation", "Dynamic Networks", "Flexibility"],
      improvementAreas: ["Production Deployment", "Optimization", "Distributed Training"],
      careerImpact: "Very High - Popular in research and industry",
      marketPosition: "Growing Framework - Excellent prospects",
    },
  },
  {
    name: "Scikit-Learn",
    level: 85,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
    icon: "📊",
    category: "Machine Learning",
    description: "Strong knowledge of classical machine learning algorithms and data preprocessing techniques.",
    years: 3,
    featured: true,
    projects: 7,
    marketDemand: 85,
    salaryImpact: 88,
    trendDirection: "stable",
    size: "medium",
    position: { x: 0, y: 3 },
    orbitRadius: 125,
    orbitSpeed: 0.016,
    glowIntensity: 0.7,
    complexity: 75,
    versatility: 90,
    aiInsight: "Scikit-Learn is the go-to library for classical machine learning and data science.",
    learningPath: ["Advanced ML Algorithms", "Feature Engineering", "Model Selection"],
    skillSynergy: ["Python", "Data Science", "Statistics"],
    aiGenerated: {
      strengthAreas: ["Classical ML", "Data Preprocessing", "Model Evaluation"],
      improvementAreas: ["Advanced Algorithms", "Feature Engineering", "Pipeline Optimization"],
      careerImpact: "High - Essential for data science roles",
      marketPosition: "Standard Library - Widely used",
    },
  },
  {
    name: "Computer Vision",
    level: 70,
    color: "from-purple-600 to-pink-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
    icon: "👁️",
    category: "Machine Learning",
    description:
      "Experience with image processing, object detection, and image classification using OpenCV and deep learning.",
    years: 2,
    featured: false,
    projects: 4,
    marketDemand: 90,
    salaryImpact: 95,
    trendDirection: "up",
    size: "medium",
    position: { x: 1, y: 4 },
    orbitRadius: 105,
    orbitSpeed: 0.02,
    glowIntensity: 0.6,
    complexity: 85,
    versatility: 75,
    aiInsight: "Computer Vision is experiencing explosive growth with applications in autonomous systems and AR/VR.",
    learningPath: ["Advanced CV Techniques", "3D Vision", "Real-time Processing"],
    skillSynergy: ["OpenCV", "TensorFlow", "PyTorch"],
    aiGenerated: {
      strengthAreas: ["Image Processing", "Object Detection", "Deep Learning"],
      improvementAreas: ["3D Vision", "Real-time Processing", "Edge Deployment"],
      careerImpact: "Very High - High-demand specialized field",
      marketPosition: "Growing Field - Excellent opportunities",
    },
  },
  {
    name: "NLP",
    level: 65,
    color: "from-green-600 to-teal-600",
    bgColor: "bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20",
    icon: "💬",
    category: "Machine Learning",
    description: "Knowledge of natural language processing techniques, transformers, and language models.",
    years: 1,
    featured: false,
    projects: 3,
    marketDemand: 92,
    salaryImpact: 98,
    trendDirection: "up",
    size: "medium",
    position: { x: 2, y: 4 },
    orbitRadius: 98,
    orbitSpeed: 0.021,
    glowIntensity: 0.6,
    complexity: 88,
    versatility: 80,
    aiInsight: "NLP is at the forefront of AI with transformers and large language models revolutionizing the field.",
    learningPath: ["Transformer Architecture", "Large Language Models", "Prompt Engineering"],
    skillSynergy: ["NLTK", "spaCy", "Hugging Face"],
    aiGenerated: {
      strengthAreas: ["Text Processing", "Language Models", "Sentiment Analysis"],
      improvementAreas: ["Transformer Architecture", "Large Language Models", "Prompt Engineering"],
      careerImpact: "Extremely High - Cutting-edge field with premium salaries",
      marketPosition: "Hot Field - Exceptional growth potential",
    },
  },

  // Quantum Computing
  {
    name: "Qiskit",
    level: 68,
    color: "from-purple-600 to-indigo-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20",
    icon: "⚛️",
    category: "Quantum Computing",
    description: "Experience with IBM's quantum computing framework for building and simulating quantum circuits.",
    years: 1,
    featured: true,
    projects: 2,
    marketDemand: 75,
    salaryImpact: 98,
    trendDirection: "up",
    size: "medium",
    position: { x: 2, y: 1 },
    orbitRadius: 160,
    orbitSpeed: 0.005,
    glowIntensity: 1.0,
    complexity: 95,
    versatility: 60,
    aiInsight: "Quantum computing is emerging as the next frontier in computational technology.",
    learningPath: ["Quantum ML", "Quantum Cryptography", "NISQ Algorithms"],
    skillSynergy: ["Python", "Quantum Algorithms", "Linear Algebra"],
    aiGenerated: {
      strengthAreas: ["Quantum Circuits", "Quantum Simulation", "Research"],
      improvementAreas: ["Quantum ML", "Error Correction", "Hardware Understanding"],
      careerImpact: "Extremely High - Cutting-edge field with premium salaries",
      marketPosition: "Emerging Technology - Early adopter advantage",
    },
  },
  {
    name: "Quantum Algorithms",
    level: 60,
    color: "from-violet-600 to-purple-700",
    bgColor: "bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20",
    icon: "🔮",
    category: "Quantum Computing",
    description:
      "Understanding of fundamental quantum algorithms like Grover's, Shor's, and quantum machine learning approaches.",
    years: 1,
    featured: false,
    projects: 2,
    marketDemand: 70,
    salaryImpact: 95,
    trendDirection: "up",
    size: "small",
    position: { x: 1, y: 5 },
    orbitRadius: 85,
    orbitSpeed: 0.028,
    glowIntensity: 0.8,
    complexity: 98,
    versatility: 50,
    aiInsight:
      "Quantum algorithms represent the theoretical foundation of quantum computing's revolutionary potential.",
    learningPath: ["Advanced Quantum Algorithms", "Quantum Complexity Theory", "Quantum Advantage"],
    skillSynergy: ["Qiskit", "Quantum Mechanics", "Algorithms"],
    aiGenerated: {
      strengthAreas: ["Theoretical Understanding", "Algorithm Design", "Research"],
      improvementAreas: ["Implementation", "Optimization", "Practical Applications"],
      careerImpact: "Extremely High - Highly specialized and valuable",
      marketPosition: "Cutting-edge Research - Future technology",
    },
  },
  {
    name: "Quantum Simulation",
    level: 55,
    color: "from-blue-700 to-indigo-800",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
    icon: "🌌",
    category: "Quantum Computing",
    description: "Knowledge of simulating quantum systems and implementing quantum circuits for various applications.",
    years: 1,
    featured: false,
    projects: 1,
    marketDemand: 65,
    salaryImpact: 92,
    trendDirection: "up",
    size: "small",
    position: { x: 2, y: 5 },
    orbitRadius: 78,
    orbitSpeed: 0.032,
    glowIntensity: 0.7,
    complexity: 92,
    versatility: 55,
    aiInsight: "Quantum simulation bridges theoretical quantum computing with practical applications.",
    learningPath: ["Advanced Simulation Techniques", "Quantum Chemistry", "Materials Science"],
    skillSynergy: ["Qiskit", "PennyLane", "Physics"],
    aiGenerated: {
      strengthAreas: ["Quantum Systems", "Simulation Techniques", "Research Applications"],
      improvementAreas: ["Advanced Simulations", "Optimization", "Real-world Applications"],
      careerImpact: "Very High - Specialized quantum field",
      marketPosition: "Research-focused - High potential",
    },
  },
]

// AI-powered skill analysis functions
const generateAIInsights = (skills) => {
  const totalSkills = skills.length
  const avgLevel = skills.reduce((sum, skill) => sum + skill.level, 0) / totalSkills
  const featuredCount = skills.filter((skill) => skill.featured).length
  const categories = [...new Set(skills.map((skill) => skill.category))]

  return {
    overallStrength: Math.round(avgLevel),
    skillDiversity: categories.length,
    marketReadiness: Math.round(skills.reduce((sum, skill) => sum + skill.marketDemand, 0) / totalSkills),
    careerGrowthPotential: Math.round(skills.reduce((sum, skill) => sum + skill.salaryImpact, 0) / totalSkills),
    recommendedFocus: skills.sort((a, b) => b.marketDemand - a.marketDemand)[0]?.category || "Frontend",
    nextSkillSuggestion: "WebAssembly",
    strengthProfile: avgLevel >= 80 ? "Expert" : avgLevel >= 70 ? "Advanced" : "Intermediate",
  }
}

// Get unique categories
const categories = [
  "All",
  "Featured",
  "AI Recommended",
  ...Array.from(new Set(skillsData.map((skill) => skill.category))),
]

// Enhanced category icons
const getCategoryIcon = (category) => {
  switch (category) {
    case "Frontend":
      return <Code className="w-4 h-4 mr-1" />
    case "Backend":
      return <Server className="w-4 h-4 mr-1" />
    case "Languages":
      return <Languages className="w-4 h-4 mr-1" />
    case "Tools":
      return <Wrench className="w-4 h-4 mr-1" />
    case "Database":
      return <Database className="w-4 h-4 mr-1" />
    case "Cloud":
      return <Cloud className="w-4 h-4 mr-1" />
    case "Design":
      return <Palette className="w-4 h-4 mr-1" />
    case "Featured":
      return <Star className="w-4 h-4 mr-1" />
    case "Machine Learning":
      return <Brain className="w-4 h-4 mr-1" />
    case "Quantum Computing":
      return <Atom className="w-4 h-4 mr-1" />
    case "AI Recommended":
      return <Bot className="w-4 h-4 mr-1" />
    default:
      return null
  }
}

// Helper function to get proficiency level text
const getProficiencyText = (level) => {
  if (level >= 90) return "Expert"
  if (level >= 75) return "Advanced"
  if (level >= 60) return "Intermediate"
  if (level >= 40) return "Basic"
  return "Beginner"
}

// Floating Skill Bubble Component
const SkillBubble = ({ skill, index, onSelect, isOrbiting = false, time = 0 }) => {
  const [isHovered, setIsHovered] = useState(false)
  const bubbleRef = useRef(null)
  const isInView = useInView(bubbleRef, { once: false, amount: 0.3 })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(0, { stiffness: 300, damping: 30 })
  const rotateY = useSpring(0, { stiffness: 300, damping: 30 })

  // Calculate orbital position if orbiting
  const orbitX = isOrbiting ? Math.cos(time * skill.orbitSpeed) * skill.orbitRadius : 0
  const orbitY = isOrbiting ? Math.sin(time * skill.orbitSpeed) * skill.orbitRadius : 0

  const handleMouseMove = (event) => {
    if (!bubbleRef.current) return
    const rect = bubbleRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const rotateXValue = (event.clientY - centerY) / 20
    const rotateYValue = (centerX - event.clientX) / 20

    mouseX.set(event.clientX - rect.left)
    mouseY.set(event.clientY - rect.top)
    rotateX.set(rotateXValue)
    rotateY.set(rotateYValue)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    setIsHovered(false)
  }

  const getSizeClasses = () => {
    switch (skill.size) {
      case "large":
        return "w-72 h-48"
      case "medium":
        return "w-56 h-40"
      case "small":
        return "w-44 h-32"
      default:
        return "w-56 h-40"
    }
  }

  const bubbleVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  }

  return (
    <motion.div
      ref={bubbleRef}
      variants={bubbleVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      whileTap="tap"
      className={`${getSizeClasses()} relative cursor-pointer group`}
      onClick={() => onSelect(skill)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        x: orbitX,
        y: orbitY,
      }}
    >
      {/* Glow Effect */}
      <motion.div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${skill.color} opacity-20 blur-xl`}
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? skill.glowIntensity : 0.2,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Main Bubble */}
      <motion.div
        className={`relative w-full h-full ${skill.bgColor} backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-3xl overflow-hidden shadow-2xl`}
        animate={{
          boxShadow: isHovered
            ? `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)`
            : `0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)`,
        }}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className={`w-full h-full bg-gradient-to-br ${skill.color}`}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
              }}
              style={{
                left: `${20 + i * 12}%`,
                top: `${30 + i * 8}%`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <motion.div
                className="text-4xl"
                animate={{
                  rotate: isHovered ? [0, 10, -10, 0] : 0,
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                {skill.icon}
              </motion.div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 dark:text-white">{skill.name}</h3>
                <div className="flex items-center space-x-2 mt-1">
                  {skill.featured && (
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-none text-xs px-2 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  <Badge variant="outline" className="text-xs flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
                    {skill.marketDemand}%
                  </Badge>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation()
                  onSelect(skill)
                }}
              >
                <Maximize2 className="h-4 w-4 text-white" />
              </Button>
            </div>
          </div>

          {/* Progress Section */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {getProficiencyText(skill.level)}
              </span>
              <span className="text-sm font-bold text-gray-800 dark:text-white">{skill.level}%</span>
            </div>
            <div className="relative">
              <Progress value={skill.level} className="h-2 bg-white/30 dark:bg-gray-700/30" />
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-white/40 to-transparent rounded-full"
                animate={{ x: [-20, 200] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.3,
                }}
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mt-auto">
            <div className="text-center p-2 bg-white/20 dark:bg-gray-800/20 rounded-lg backdrop-blur-sm">
              <div className="text-lg font-bold text-gray-800 dark:text-white">{skill.years}y</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">Experience</div>
            </div>
            <div className="text-center p-2 bg-white/20 dark:bg-gray-800/20 rounded-lg backdrop-blur-sm">
              <div className="text-lg font-bold text-gray-800 dark:text-white">{skill.projects}</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">Projects</div>
            </div>
          </div>

          {/* Hover Overlay */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent backdrop-blur-[1px] rounded-3xl flex items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="text-center text-white"
                >
                  <MousePointer className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">Click to explore</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Orbital Skills Display Component
const OrbitalSkillsDisplay = ({ skills, onSkillSelect }) => {
  const [time, setTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setTime((prev) => prev + 1)
    }, 50)

    return () => clearInterval(interval)
  }, [isPlaying])

  const featuredSkills = skills.filter((skill) => skill.featured)

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Central Hub */}
      <motion.div
        className="absolute z-10 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl"
        animate={{
          rotate: time * 0.5,
          boxShadow: [
            "0 0 20px rgba(147, 51, 234, 0.3)",
            "0 0 40px rgba(147, 51, 234, 0.5)",
            "0 0 20px rgba(147, 51, 234, 0.3)",
          ],
        }}
        transition={{
          boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
        }}
      >
        <Brain className="w-12 h-12 text-white" />
      </motion.div>

      {/* Orbital Rings */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute border border-white/10 dark:border-gray-700/20 rounded-full"
          style={{
            width: `${ring * 200}px`,
            height: `${ring * 200}px`,
          }}
          animate={{ rotate: time * (0.1 / ring) }}
        />
      ))}

      {/* Orbiting Skills */}
      {featuredSkills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="absolute"
          style={{
            x: Math.cos(time * skill.orbitSpeed + index * ((Math.PI * 2) / featuredSkills.length)) * skill.orbitRadius,
            y: Math.sin(time * skill.orbitSpeed + index * ((Math.PI * 2) / featuredSkills.length)) * skill.orbitRadius,
          }}
        >
          <SkillBubble skill={skill} index={index} onSelect={onSkillSelect} isOrbiting={true} time={time} />
        </motion.div>
      ))}

      {/* Control Panel */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-full px-4 py-2">
        <Button variant="ghost" size="sm" onClick={() => setIsPlaying(!isPlaying)} className="rounded-full">
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>
        <Button variant="ghost" size="sm" onClick={() => setTime(0)} className="rounded-full">
          <RotateCcw className="w-4 h-4" />
        </Button>
        <span className="text-xs text-gray-600 dark:text-gray-300 px-2">{isPlaying ? "Playing" : "Paused"}</span>
      </div>
    </div>
  )
}

// Bento Box Layout Component
const BentoSkillsLayout = ({ skills, onSkillSelect }) => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  // Group skills by size for bento layout
  const largeSkills = skills.filter((skill) => skill.size === "large")
  const mediumSkills = skills.filter((skill) => skill.size === "medium")
  const smallSkills = skills.filter((skill) => skill.size === "small")

  return (
    <motion.div
      ref={containerRef}
      className="grid grid-cols-12 gap-6 auto-rows-min"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Large Skills - Take more space */}
      {largeSkills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="col-span-12 md:col-span-6 lg:col-span-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <SkillBubble skill={skill} index={index} onSelect={onSkillSelect} />
        </motion.div>
      ))}

      {/* Medium Skills */}
      {mediumSkills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="col-span-12 md:col-span-6 lg:col-span-3"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: (largeSkills.length + index) * 0.1 }}
        >
          <SkillBubble skill={skill} index={largeSkills.length + index} onSelect={onSkillSelect} />
        </motion.div>
      ))}

      {/* Small Skills */}
      {smallSkills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="col-span-12 md:col-span-4 lg:col-span-2"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: (largeSkills.length + mediumSkills.length + index) * 0.1 }}
        >
          <SkillBubble
            skill={skill}
            index={largeSkills.length + mediumSkills.length + index}
            onSelect={onSkillSelect}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

// Enhanced Skill Detail Modal with Beautiful UI
const EnhancedSkillDetailModal = ({ skill, isOpen, onClose }) => {
  if (!skill) return null

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
                className={`w-full h-full bg-gradient-to-br ${skill.color} opacity-10`}
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
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute opacity-5"
                  animate={{
                    x: [0, 100, 0],
                    y: [0, -100, 0],
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
                    className={`p-6 rounded-3xl bg-gradient-to-br ${skill.color} shadow-2xl relative overflow-hidden`}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-6xl relative z-10">{skill.icon}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      animate={{ x: [-100, 200] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </motion.div>
                  <div>
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">{skill.name}</h1>
                    <div className="flex items-center space-x-3 mb-3">
                      <Badge className={`bg-gradient-to-r ${skill.color} text-white border-none px-3 py-1`}>
                        {getProficiencyText(skill.level)}
                      </Badge>
                      {skill.featured && (
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-none px-3 py-1">
                          <Star className="w-4 h-4 mr-1" />
                          Featured
                        </Badge>
                      )}
                      <Badge variant="outline" className="flex items-center px-3 py-1">
                        <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
                        {skill.marketDemand}% Demand
                      </Badge>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">{skill.description}</p>
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
                    <div className="text-3xl font-bold text-gray-800 dark:text-white">{skill.level}%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Proficiency</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-white/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-gray-800 dark:text-white">{skill.years}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Years</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-white/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-gray-800 dark:text-white">{skill.projects}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Projects</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-white/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-gray-800 dark:text-white">${skill.salaryImpact}k</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Salary Impact</div>
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
                {/* AI Insights */}
                <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200/50 dark:border-purple-700/30">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Bot className="w-6 h-6 mr-3 text-purple-600" />
                      AI Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{skill.aiInsight}</p>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex justify-between items-center p-3 bg-white/30 dark:bg-gray-800/30 rounded-lg">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Career Impact:</span>
                        <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                          {skill.aiGenerated.careerImpact}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/30 dark:bg-gray-800/30 rounded-lg">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Market Position:</span>
                        <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                          {skill.aiGenerated.marketPosition}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Strength Areas */}
                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200/50 dark:border-green-700/30">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Target className="w-6 h-6 mr-3 text-green-600" />
                      Strength Areas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {skill.aiGenerated.strengthAreas.map((area, index) => (
                        <motion.div
                          key={area}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-3 py-2 text-sm">
                            <Award className="w-3 h-3 mr-1" />
                            {area}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Improvement Areas */}
                <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200/50 dark:border-yellow-700/30">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Lightbulb className="w-6 h-6 mr-3 text-yellow-600" />
                      Growth Opportunities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {skill.aiGenerated.improvementAreas.map((area, index) => (
                        <motion.div
                          key={area}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Badge
                            variant="outline"
                            className="bg-yellow-50 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-300 dark:border-yellow-600 px-3 py-2 text-sm"
                          >
                            <BookOpen className="w-3 h-3 mr-1" />
                            {area}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Learning Path */}
                <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200/50 dark:border-blue-700/30">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Compass className="w-6 h-6 mr-3 text-blue-600" />
                      Recommended Learning Path
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {skill.learningPath.map((nextSkill, index) => (
                        <motion.div
                          key={nextSkill}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-4 p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm"
                        >
                          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-sm font-bold text-blue-600">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-3 py-1">
                              <Rocket className="w-3 h-3 mr-1" />
                              {nextSkill}
                            </Badge>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-blue-500" />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Skill Synergy */}
                <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200/50 dark:border-purple-700/30">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Network className="w-6 h-6 mr-3 text-purple-600" />
                      Skill Synergies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {skill.skillSynergy.map((synergySkill, index) => (
                        <motion.div
                          key={synergySkill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 px-3 py-2 text-sm">
                            <Users className="w-3 h-3 mr-1" />
                            {synergySkill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Detailed Metrics */}
                <Card className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-800/50 dark:to-slate-800/50 border-gray-200/50 dark:border-gray-700/30">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <BarChart3 className="w-6 h-6 mr-3 text-gray-600" />
                      Detailed Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Complexity</span>
                        <div className="flex items-center space-x-3">
                          <Progress value={skill.complexity} className="w-24 h-2" indicatorClassName="bg-orange-500" />
                          <span className="text-sm font-bold text-gray-800 dark:text-white w-12">
                            {skill.complexity}%
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Versatility</span>
                        <div className="flex items-center space-x-3">
                          <Progress value={skill.versatility} className="w-24 h-2" indicatorClassName="bg-green-500" />
                          <span className="text-sm font-bold text-gray-800 dark:text-white w-12">
                            {skill.versatility}%
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Market Demand</span>
                        <div className="flex items-center space-x-3">
                          <Progress value={skill.marketDemand} className="w-24 h-2" indicatorClassName="bg-blue-500" />
                          <span className="text-sm font-bold text-gray-800 dark:text-white w-12">
                            {skill.marketDemand}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}

// Main Skills Component
export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSkill, setSelectedSkill] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [layout, setLayout] = useState("orbital") // orbital, bento
  const [skillComplexityFilter, setSkillComplexityFilter] = useState([0, 100])
  const [marketDemandFilter, setMarketDemandFilter] = useState([0, 100])

  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  const aiInsights = useMemo(() => generateAIInsights(skillsData), [])

  const filteredSkills = useMemo(() => {
    let filtered = [...skillsData]

    if (selectedCategory !== "All") {
      if (selectedCategory === "Featured") {
        filtered = filtered.filter((skill) => skill.featured)
      } else if (selectedCategory === "AI Recommended") {
        filtered = filtered.filter((skill) => skill.marketDemand > 85)
      } else {
        filtered = filtered.filter((skill) => skill.category === selectedCategory)
      }
    }

    if (searchTerm) {
      filtered = filtered.filter((skill) => skill.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    filtered = filtered.filter(
      (skill) =>
        skill.complexity >= skillComplexityFilter[0] &&
        skill.complexity <= skillComplexityFilter[1] &&
        skill.marketDemand >= marketDemandFilter[0] &&
        skill.marketDemand <= marketDemandFilter[1],
    )

    return filtered
  }, [selectedCategory, searchTerm, skillComplexityFilter, marketDemandFilter])

  const handleSkillSelect = (skill) => {
    setSelectedSkill(skill)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-600/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full filter blur-3xl animate-pulse delay-2000"></div>

        {/* Floating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 1.5,
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
          >
            {i % 4 === 0 && <Hexagon className="w-8 h-8 text-blue-500" />}
            {i % 4 === 1 && <Triangle className="w-6 h-6 text-purple-500" />}
            {i % 4 === 2 && <Circle className="w-7 h-7 text-cyan-500" />}
            {i % 4 === 3 && <Square className="w-6 h-6 text-pink-500" />}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Beautiful Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-1 text-primary border-primary/30 dark:border-primary/50 bg-white/80 backdrop-blur-sm"
          >
            <Bot className="w-4 h-4 mr-2" />
            My Skills
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="flex items-center justify-center mb-6">
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
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my technical expertise through AI-powered insights, interactive visualizations, and intelligent
            skill recommendations. Experience the future of portfolio presentation.
          </p>
        </motion.div>

        {/* AI Insights Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          {/* <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bot className="w-5 h-5 mr-2 text-purple-600" />
                AI Career Insights
              </CardTitle>
              <CardDescription>Personalized analysis powered by AI</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{aiInsights.overallStrength}%</div>
                  <div className="text-xs text-muted-foreground">Overall Strength</div>
                </div>
                <div className="text-center p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{aiInsights.marketReadiness}%</div>
                  <div className="text-xs text-muted-foreground">Market Ready</div>
                </div>
                <div className="text-center p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{aiInsights.skillDiversity}</div>
                  <div className="text-xs text-muted-foreground">Categories</div>
                </div>
                <div className="text-center p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{aiInsights.careerGrowthPotential}%</div>
                  <div className="text-xs text-muted-foreground">Growth Potential</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Target className="w-4 h-4 mr-1 text-green-600" />
                    Recommended Focus
                  </h4>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                    {aiInsights.recommendedFocus}
                  </Badge>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Rocket className="w-4 h-4 mr-1 text-orange-600" />
                    Next Skill to Learn
                  </h4>
                  <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                    {aiInsights.nextSkillSuggestion}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card> */}
        </motion.div>

        {/* Enhanced Control Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="p-6 shadow-lg dark:shadow-gray-800/30 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
            <div className="space-y-4">
              {/* Search and View Controls */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    type="text"
                    placeholder="Search skills with AI..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Button
                          variant={layout === "orbital" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setLayout("orbital")}
                          className="h-10"
                        >
                          <Orbit className="w-4 h-4 mr-2" />
                          Orbital
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Orbital Layout</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger>
                        <Button
                          variant={layout === "bento" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setLayout("bento")}
                          className="h-10"
                        >
                          <Layers className="w-4 h-4 mr-2" />
                          Bento
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Bento Layout</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>

              {/* AI-Powered Filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block flex items-center">
                    <Brain className="w-4 h-4 mr-2 text-purple-600" />
                    Complexity Level: {skillComplexityFilter[0]}% - {skillComplexityFilter[1]}%
                  </label>
                  <Slider
                    value={skillComplexityFilter}
                    onValueChange={setSkillComplexityFilter}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                    Market Demand: {marketDemandFilter[0]}% - {marketDemandFilter[1]}%
                  </label>
                  <Slider
                    value={marketDemandFilter}
                    onValueChange={setMarketDemandFilter}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Category Tabs */}
              <Tabs defaultValue="All" value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                <TabsList className="flex flex-wrap justify-start bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm p-1 h-auto">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="m-1 data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-200"
                    >
                      {getCategoryIcon(category)}
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                    setSkillComplexityFilter([0, 100])
                    setMarketDemandFilter([0, 100])
                  }}
                  className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm"
                >
                  <X className="w-4 h-4 mr-1" /> Clear All
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedCategory("AI Recommended")}
                  className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 border-purple-200 dark:border-purple-700"
                >
                  <Bot className="w-4 h-4 mr-1" /> AI Picks
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedCategory("Featured")}
                  className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 border-yellow-200 dark:border-yellow-700"
                >
                  <Star className="w-4 h-4 mr-1" /> Featured
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Skills Display */}
        <div ref={containerRef}>
          <AnimatePresence mode="wait">
            {layout === "orbital" ? (
              <motion.div
                key="orbital-view"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="mb-8"
              >
                <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center">
                      <Orbit className="w-5 h-5 mr-2 text-blue-600" />
                      AI Skill Constellation
                    </CardTitle>
                    <CardDescription>Interactive visualization of skill relationships and synergies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <OrbitalSkillsDisplay skills={filteredSkills} onSkillSelect={handleSkillSelect} />
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                key="bento-view"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <BentoSkillsLayout skills={filteredSkills} onSkillSelect={handleSkillSelect} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* No Results State */}
        {filteredSkills.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800/50 dark:to-blue-900/20 rounded-xl backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Bot className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              No skills found matching your criteria
            </h3>
            <p className="text-gray-500 dark:text-gray-500 mb-6">
              Try adjusting your filters or search terms to discover more skills
            </p>
            <Button
              variant="outline"
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
                setSkillComplexityFilter([0, 100])
                setMarketDemandFilter([0, 100])
              }}
            >
              <Filter className="mr-2 h-4 w-4" /> Reset All Filters
            </Button>
          </motion.div>
        )}

        {/* Enhanced Skill Detail Modal */}
        <EnhancedSkillDetailModal skill={selectedSkill} isOpen={isModalOpen} onClose={handleCloseModal} />

        {/* Floating AI Assistant */}
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="lg"
                  className="rounded-full w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelectedCategory("AI Recommended")}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Bot className="w-6 h-6" />
                  </motion.div>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Get AI Recommendations</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills