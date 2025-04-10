// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-scroll';

// const skillsData = [
//   { name: 'JavaScript', level: 90, color: 'bg-yellow-400', icon: '🟨' },
//   { name: 'React', level: 85, color: 'bg-blue-400', icon: '⚛️' },
//   { name: 'Node.js', level: 80, color: 'bg-green-400', icon: '🟩' },
//   { name: 'Python', level: 75, color: 'bg-blue-600', icon: '🐍' },
//   { name: 'MongoDB', level: 70, color: 'bg-green-600', icon: '🍃' },
//   { name: 'TypeScript', level: 82, color: 'bg-blue-700', icon: '🔷' },
//   { name: 'Java', level: 40, color: 'bg-red-500', icon: '☕' },
//   { name: 'C++', level: 80, color: 'bg-purple-500', icon: '🔠' },
//   { name: 'SQL', level: 72, color: 'bg-orange-500', icon: '🗃️' },
// ];

// const SkillCard = ({ name, level, color, icon, index }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5, delay: index * 0.1 }}
//     whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
//     className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition duration-300 hover:shadow-xl"
//   >
//     <div className="flex items-center mb-4">
//       <span className="text-3xl mr-3">{icon}</span>
//       <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{name}</h3>
//     </div>
//     <div className="relative pt-1">
//       <div className="flex mb-2 items-center justify-between">
//         <div>
//           <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 dark:bg-blue-800 dark:text-blue-200">
//             Proficiency
//           </span>
//         </div>
//         <div className="text-right">
//           <span className="text-xs font-semibold inline-block text-blue-600 dark:text-blue-200">
//             {level}%
//           </span>
//         </div>
//       </div>
//       <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
//         <motion.div
//           initial={{ width: 0 }}
//           animate={{ width: `${level}%` }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${color}`}
//         />
//       </div>
//     </div>
//     <motion.div
//       animate={{ scale: [1, 1.1, 1] }}
//       transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//       className="w-4 h-4 rounded-full bg-blue-500 mx-auto mt-4"
//     />
//   </motion.div>
// );

// const Skills = () => {
//   return (
//     <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
//             My Skills
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-400">
//             Constantly learning and improving
//           </p>
//         </motion.div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {skillsData.map((skill, index) => (
//             <SkillCard key={skill.name} {...skill} index={index} />
//           ))}
//         </div>
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           className="text-center mt-12"
//         >
//           <p className="text-gray-600 dark:text-gray-400 mb-4">Always expanding my skillset!</p>
//           <Link
//             to="projects"
//             smooth={true}
//             duration={500}
//             offset={-70}
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center cursor-pointer"
//             >
//               <span className="mr-2">🚀</span>
//               <span>Explore My Projects</span>
//             </motion.button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-scroll";
// import { Search, Filter, ArrowRight, Info, X } from 'lucide-react';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
// import { Button } from "./ui/button";
// import { Badge } from "./ui/badge";
// import { Input } from "./ui/input";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

// // Extended skills data with categories
// const skillsData = [
//   // Frontend
//   {
//     name: "JavaScript",
//     level: 90,
//     color: "bg-yellow-400",
//     icon: "🟨",
//     category: "Frontend",
//     description: "Proficient in modern JavaScript (ES6+), including async/await, modules, and functional programming concepts.",
//     years: 4,
//   },
//   {
//     name: "React",
//     level: 85,
//     color: "bg-blue-400",
//     icon: "⚛️",
//     category: "Frontend",
//     description: "Experienced with React hooks, context API, and state management libraries like Redux and Zustand.",
//     years: 3,
//   },
//   {
//     name: "TypeScript",
//     level: 82,
//     color: "bg-blue-700",
//     icon: "🔷",
//     category: "Frontend",
//     description: "Strong typing skills with interfaces, generics, and advanced type utilities.",
//     years: 2,
//   },
//   {
//     name: "HTML/CSS",
//     level: 88,
//     color: "bg-orange-500",
//     icon: "🌐",
//     category: "Frontend",
//     description: "Expert in semantic HTML and modern CSS including Flexbox, Grid, and CSS animations.",
//     years: 5,
//   },
  
//   // Backend
//   {
//     name: "Node.js",
//     level: 80,
//     color: "bg-green-400",
//     icon: "🟩",
//     category: "Backend",
//     description: "Experienced in building RESTful APIs and server-side applications with Express.js.",
//     years: 3,
//   },
//   {
//     name: "MongoDB",
//     level: 70,
//     color: "bg-green-600",
//     icon: "🍃",
//     category: "Backend",
//     description: "Skilled in document database design, queries, and aggregation pipelines.",
//     years: 2,
//   },
//   {
//     name: "SQL",
//     level: 72,
//     color: "bg-orange-500",
//     icon: "🗃️",
//     category: "Backend",
//     description: "Experienced with relational database design, complex queries, and optimization.",
//     years: 3,
//   },
  
//   // Languages
//   {
//     name: "Python",
//     level: 75,
//     color: "bg-blue-600",
//     icon: "🐍",
//     category: "Languages",
//     description: "Proficient in Python for data analysis, automation, and backend development.",
//     years: 3,
//   },
//   {
//     name: "C++",
//     level: 80,
//     color: "bg-purple-500",
//     icon: "🔠",
//     category: "Languages",
//     description: "Strong understanding of memory management, data structures, and algorithms.",
//     years: 4,
//   },
//   {
//     name: "Java",
//     level: 40,
//     color: "bg-red-500",
//     icon: "☕",
//     category: "Languages",
//     description: "Basic knowledge of object-oriented programming concepts in Java.",
//     years: 1,
//   },
// ];

// // Get unique categories
// const categories = ["All", ...Array.from(new Set(skillsData.map((skill) => skill.category)))];

// const SkillCard = ({ skill, index }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       className="relative h-[280px] perspective"
//     >
//       <motion.div
//         className="w-full h-full relative preserve-3d transition-all duration-500"
//         animate={{ rotateY: isFlipped ? 180 : 0 }}
//       >
//         {/* Front of card */}
//         <Card className="absolute inset-0 backface-hidden">
//           <CardHeader className="pb-2">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <span className="text-3xl mr-3">{skill.icon}</span>
//                 <CardTitle>{skill.name}</CardTitle>
//               </div>
//               <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => setIsFlipped(true)}>
//                 <Info className="h-4 w-4" />
//                 <span className="sr-only">More info</span>
//               </Button>
//             </div>
//             <CardDescription>
//               Experience: {skill.years} {skill.years === 1 ? "year" : "years"}
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="relative pt-1">
//               <div className="flex mb-2 items-center justify-between">
//                 <div>
//                   <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-primary/20 text-primary">
//                     Proficiency
//                   </span>
//                 </div>
//                 <div className="text-right">
//                   <span className="text-xs font-semibold inline-block text-primary">{skill.level}%</span>
//                 </div>
//               </div>
//               <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: `${skill.level}%` }}
//                   transition={{ duration: 1, ease: "easeOut" }}
//                   className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${skill.color}`}
//                 />
//               </div>
//             </div>
//             <motion.div
//               animate={{ scale: [1, 1.1, 1] }}
//               transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
//               className="w-4 h-4 rounded-full bg-primary mx-auto mt-4"
//             />
//           </CardContent>
//         </Card>

//         {/* Back of card */}
//         <Card className="absolute inset-0 backface-hidden [transform:rotateY(180deg)]">
//           <CardHeader>
//             <CardTitle>{skill.name}</CardTitle>
//             <CardDescription>{skill.category}</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
//           </CardContent>
//           <CardFooter>
//             <Button variant="ghost" size="sm" onClick={() => setIsFlipped(false)} className="ml-auto">
//               <X className="h-4 w-4 mr-1" />
//               Flip back
//             </Button>
//           </CardFooter>
//         </Card>
//       </motion.div>
//     </motion.div>
//   );
// };

// const Skills = () => {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter skills based on active category and search term
//   const filteredSkills = skillsData.filter((skill) => {
//     const matchesCategory = activeCategory === "All" || skill.category === activeCategory;
//     const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/10 rounded-full filter blur-3xl"></div>
//       <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-400/10 dark:bg-purple-600/10 rounded-full filter blur-3xl"></div>
      
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <Badge variant="outline" className="mb-4 px-4 py-1 text-blue-600 dark:text-blue-400 border-blue-300 dark:border-blue-700">
//             My Expertise
//           </Badge>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
//             Technical Skills
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Constantly learning and improving my technical expertise
//           </p>
//         </motion.div>

//         <div className="mb-8 space-y-4">
//           {/* Search and filter */}
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="relative flex-grow">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//               <Input
//                 type="text"
//                 placeholder="Search skills..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-10"
//               />
//             </div>
//             <div className="flex items-center gap-2">
//               <Filter className="text-gray-500 dark:text-gray-400" size={18} />
//               <span className="text-sm text-gray-500 dark:text-gray-400">Filter:</span>
//             </div>
//           </div>

//           {/* Category tabs */}
//           <Tabs defaultValue="All" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
//             <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
//               {categories.map((category) => (
//                 <TabsTrigger key={category} value={category}>
//                   {category}
//                 </TabsTrigger>
//               ))}
//             </TabsList>
//           </Tabs>
//         </div>

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeCategory + searchTerm}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             {filteredSkills.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {filteredSkills.map((skill, index) => (
//                   <SkillCard key={skill.name} skill={skill} index={index} />
//                 ))}
//               </div>
//             ) : (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="text-center py-12"
//               >
//                 <p className="text-gray-600 dark:text-gray-400 text-lg">No skills found matching your criteria.</p>
//                 <Button
//                   variant="outline"
//                   className="mt-4"
//                   onClick={() => {
//                     setSearchTerm("");
//                     setActiveCategory("All");
//                   }}
//                 >
//                   <X className="mr-2 h-4 w-4" /> Clear Filters
//                 </Button>
//               </motion.div>
//             )}
//           </motion.div>
//         </AnimatePresence>

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           className="text-center mt-16"
//         >
//           <p className="text-gray-600 dark:text-gray-400 mb-6">
//             Always expanding my skillset and learning new technologies!
//           </p>
//           <Button
//             asChild
//             size="lg"
//             className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
//           >
//             <Link to="projects" smooth={true} duration={500} offset={-70}>
//               <span>Explore My Projects</span>
//               <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </Link>
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Info } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

// Extended skills data with categories
const skillsData = [
  // Frontend
  {
    name: "JavaScript",
    level: 90,
    color: "bg-yellow-400",
    icon: "🟨",
    category: "Frontend",
    description:
      "Proficient in modern JavaScript (ES6+), including async/await, modules, and functional programming concepts.",
    years: 4,
  },
  {
    name: "React",
    level: 85,
    color: "bg-blue-400",
    icon: "⚛️",
    category: "Frontend",
    description: "Experienced with React hooks, context API, and state management libraries like Redux and Zustand.",
    years: 3,
  },
  {
    name: "TypeScript",
    level: 82,
    color: "bg-blue-700",
    icon: "🔷",
    category: "Frontend",
    description: "Strong typing skills with interfaces, generics, and advanced type utilities.",
    years: 2,
  },
  {
    name: "HTML/CSS",
    level: 88,
    color: "bg-orange-500",
    icon: "🌐",
    category: "Frontend",
    description: "Expert in semantic HTML and modern CSS including Flexbox, Grid, and CSS animations.",
    years: 5,
  },
  {
    name: "Tailwind CSS",
    level: 85,
    color: "bg-cyan-500",
    icon: "🎨",
    category: "Frontend",
    description: "Proficient in utility-first CSS and creating responsive designs with Tailwind.",
    years: 2,
  },

  // Backend
  {
    name: "Node.js",
    level: 80,
    color: "bg-green-400",
    icon: "🟩",
    category: "Backend",
    description: "Experienced in building RESTful APIs and server-side applications with Express.js.",
    years: 3,
  },
  {
    name: "MongoDB",
    level: 70,
    color: "bg-green-600",
    icon: "🍃",
    category: "Backend",
    description: "Skilled in document database design, queries, and aggregation pipelines.",
    years: 2,
  },
  {
    name: "SQL",
    level: 72,
    color: "bg-orange-500",
    icon: "🗃️",
    category: "Backend",
    description: "Experienced with relational database design, complex queries, and optimization.",
    years: 3,
  },
  {
    name: "GraphQL",
    level: 65,
    color: "bg-pink-600",
    icon: "⚡",
    category: "Backend",
    description: "Knowledge of schema design, resolvers, and integration with React using Apollo Client.",
    years: 1,
  },

  // Languages
  {
    name: "Python",
    level: 75,
    color: "bg-blue-600",
    icon: "🐍",
    category: "Languages",
    description: "Proficient in Python for data analysis, automation, and backend development.",
    years: 3,
  },
  {
    name: "C++",
    level: 80,
    color: "bg-purple-500",
    icon: "🔠",
    category: "Languages",
    description: "Strong understanding of memory management, data structures, and algorithms.",
    years: 4,
  },
  {
    name: "Java",
    level: 40,
    color: "bg-red-500",
    icon: "☕",
    category: "Languages",
    description: "Basic knowledge of object-oriented programming concepts in Java.",
    years: 1,
  },

  // Tools & Others
  {
    name: "Git",
    level: 85,
    color: "bg-orange-600",
    icon: "📝",
    category: "Tools",
    description: "Experienced with version control, branching strategies, and collaborative workflows.",
    years: 4,
  },
  {
    name: "Docker",
    level: 60,
    color: "bg-blue-500",
    icon: "🐳",
    category: "Tools",
    description: "Familiar with containerization, Docker Compose, and basic orchestration.",
    years: 2,
  },
  {
    name: "AWS",
    level: 55,
    color: "bg-yellow-600",
    icon: "☁️",
    category: "Tools",
    description: "Experience with S3, EC2, Lambda, and deployment pipelines.",
    years: 1,
  },
  // Additional skills
  {
    name: "Next.js",
    level: 78,
    color: "bg-black",
    icon: "▲",
    category: "Frontend",
    description: "Proficient in server-side rendering, static site generation, and API routes.",
    years: 2,
  },
  {
    name: "Redux",
    level: 75,
    color: "bg-purple-600",
    icon: "🔄",
    category: "Frontend",
    description: "Experienced with state management, middleware, and Redux Toolkit.",
    years: 2,
  },
  {
    name: "Firebase",
    level: 68,
    color: "bg-yellow-500",
    icon: "🔥",
    category: "Backend",
    description: "Skilled in authentication, Firestore, and real-time database implementation.",
    years: 2,
  },
  {
    name: "CI/CD",
    level: 65,
    color: "bg-green-500",
    icon: "🔄",
    category: "Tools",
    description: "Experience with GitHub Actions, Jenkins, and automated deployment pipelines.",
    years: 2,
  },
  {
    name: "Testing",
    level: 70,
    color: "bg-red-400",
    icon: "🧪",
    category: "Tools",
    description: "Proficient in Jest, React Testing Library, and Cypress for unit and integration testing.",
    years: 2,
  },
]

// Get unique categories
const categories = ["All", ...Array.from(new Set(skillsData.map((skill) => skill.category)))]

const SkillCard = ({ skill, index }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: false, amount: 0.3 })
  const [animateProgress, setAnimateProgress] = useState(false)

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setAnimateProgress(true)
      }, index * 100)
    }
  }, [isInView, index])

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      className="relative h-[280px] perspective"
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front of card */}
        <Card className="absolute inset-0 backface-hidden border-t-4 border-primary">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-3xl mr-3">{skill.icon}</span>
                <CardTitle>{skill.name}</CardTitle>
              </div>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => setIsFlipped(true)}>
                <Info className="h-4 w-4" />
                <span className="sr-only">More info</span>
              </Button>
            </div>
            <CardDescription>
              Experience: {skill.years} {skill.years === 1 ? "year" : "years"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-primary/20 text-primary">
                    Proficiency
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-primary">
                    {skill.level}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary/10">
                <motion.div
                  className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${skill.color}`}
                  initial={{ width: "0%" }}
                  animate={{ width: animateProgress ? `${skill.level}%` : "0%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                ></motion.div>
              </div>
              <Badge variant="outline" className="mt-2">
                {skill.category}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Back of card */}
        <Card className="absolute inset-0 backface-hidden rotateY-180 border-t-4 border-primary">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-2">{skill.icon}</span>
                {skill.name}
              </CardTitle>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => setIsFlipped(false)}>
                <Info className="h-4 w-4" />
                <span className="sr-only">Back to front</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <Badge variant="secondary">{skill.category}</Badge>
              <Badge variant="outline">{skill.years} {skill.years === 1 ? "year" : "years"}</Badge>
              <Badge className={`${skill.color.replace('bg-', 'bg-opacity-20 text-')} border-none`}>
                {skill.level}% Proficiency
              </Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  const filteredSkills = skillsData.filter(
    (skill) => selectedCategory === "All" || skill.category === selectedCategory
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="skills" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical skills and proficiency levels across different technologies, languages, and tools.
            Click on any card to see more details about my experience.
          </p>
        </motion.div>

        <Tabs defaultValue="All" className="mb-8">
          <TabsList className="flex flex-wrap justify-center mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setSelectedCategory(category)}
                className="m-1"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <motion.div
                ref={containerRef}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredSkills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default Skills