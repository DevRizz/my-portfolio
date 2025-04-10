// import React from 'react';
// import { motion } from 'framer-motion';
// import { Calendar, MapPin, Award } from 'lucide-react';

// const experiences = [
//   {
//     organization: 'Innomatics Research Lab',
//     role: 'Full Stack Developer',
//     duration: 'Sep 2024 - Nov 2024',
//     location: 'Hyderabad',
//     description: 'Developed a full-stack e-commerce platform with features like user authentication, product management, product listings, shopping cart, order processing, and order history. Utilized React for the frontend and Node.js with Express.js for the backend, and MongoDB for the database.',
//     skills: ['React', 'Node.js', 'Express.js', 'MongoDB'],
//   },
//   // {
//   //   organization: 'Summer Internship Program',
//   //   role: 'Software Development Intern',
//   //   duration: 'May 2022 - Jul 2022',
//   //   location: 'TechCorp, Bangalore',
//   //   description: 'Developed a responsive web application for inventory management, reducing manual data entry time by 25%.',
//   //   skills: ['JavaScript', 'React', 'Express.js', 'PostgreSQL'],
//   // },
//   // {
//   //   organization: 'Hackathon Victory',
//   //   role: 'Team Member',
//   //   duration: 'Feb 2022',
//   //   location: 'National Level Hackathon',
//   //   description: 'Won 2nd place for developing an innovative IoT solution for smart water management in urban areas.',
//   //   skills: ['IoT', 'Arduino', 'Python', 'Data Visualization'],
//   // },
// ];

// const ExperienceCard = ({ experience, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       whileHover={{ scale: 1.03 }}
//       className={`mb-12 flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
//     >
//       <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full max-w-md transform transition duration-300 hover:shadow-xl">
//         <div className="p-6">
//           <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">{experience.organization}</h3>
//           <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-2">{experience.role}</p>
//           <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 mb-1">
//             <Calendar className="w-4 h-4 mr-2" />
//             <span>{experience.duration}</span>
//           </div>
//           <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 mb-3">
//             <MapPin className="w-4 h-4 mr-2" />
//             <span>{experience.location}</span>
//           </div>
//           <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{experience.description}</p>
//           <div className="flex flex-wrap gap-2">
//             {experience.skills.map((skill, skillIndex) => (
//               <span
//                 key={skillIndex}
//                 className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Experience = () => {
//   return (
//     <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-900">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
//             Experience & Achievements
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-400">
//             My journey in tech so far
//           </p>
//         </motion.div>
//         <div className="relative">
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-500 dark:bg-blue-700"></div>
//           {experiences.map((exp, index) => (
//             <div key={index} className="relative z-10">
//               <div className={`flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 dark:bg-blue-700 rounded-full`}>
//                 <div className="w-4 h-4 bg-white dark:bg-gray-900 rounded-full"></div>
//               </div>
//               <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
//                 <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
//                   <ExperienceCard experience={exp} index={index} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           className="text-center mt-16"
//         >
//           <p className="text-gray-600 dark:text-gray-400 mb-4">Always eager to learn and take on new challenges!</p>
//           <motion.a
//             href="/assets/Saharsh-Resume.pdf"
//             download
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center cursor-pointer"
//           >
//             <Award className="w-5 h-5 mr-2" />
//             <span>View My Resume</span>
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Calendar, MapPin, Award, ExternalLink, ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
// import { Badge } from "./ui/badge";
// import { Button } from "./ui/button";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

// const experiences = [
//   {
//     organization: "Innomatics Research Lab",
//     role: "Full Stack Developer",
//     duration: "Sep 2024 - Nov 2024",
//     location: "Hyderabad",
//     description:
//       "Developed a full-stack e-commerce platform with features like user authentication, product management, product listings, shopping cart, order processing, and order history. Utilized React for the frontend and Node.js with Express.js for the backend, and MongoDB for the database.",
//     skills: ["React", "Node.js", "Express.js", "MongoDB"],
//     achievements: [
//       "Implemented responsive design that improved mobile user engagement by 40%",
//       "Reduced page load time by 30% through code optimization",
//       "Integrated secure payment gateway with 99.9% transaction success rate"
//     ],
//     link: "https://example.com/project"
//   },
//   // Add more experiences as needed
// ];

// const ExperienceCard = ({ experience, index }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.2 }}
//       className={`mb-12 flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}
//     >
//       <Card className="w-full max-w-md overflow-hidden border-t-4 border-blue-500 dark:border-blue-400 shadow-lg hover:shadow-xl transition-all duration-300">
//         <CardHeader className="pb-2">
//           <div className="flex justify-between items-start">
//             <div>
//               <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">
//                 {experience.organization}
//               </CardTitle>
//               <CardDescription className="text-blue-600 dark:text-blue-400 font-semibold">
//                 {experience.role}
//               </CardDescription>
//             </div>
//             <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
//               <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
//             </div>
//           </div>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-3">
//             <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
//               <Calendar className="w-4 h-4 mr-2 text-blue-500 dark:text-blue-400" />
//               <span>{experience.duration}</span>
//             </div>
//             <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
//               <MapPin className="w-4 h-4 mr-2 text-blue-500 dark:text-blue-400" />
//               <span>{experience.location}</span>
//             </div>
//             <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{experience.description}</p>
            
//             <AnimatePresence>
//               {isExpanded && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   className="pt-3 space-y-3"
//                 >
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Achievements:</h4>
//                     <ul className="list-disc list-inside space-y-1">
//                       {experience.achievements?.map((achievement, i) => (
//                         <li key={i} className="text-sm text-gray-700 dark:text-gray-300">
//                           {achievement}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
                  
//                   {experience.link && (
//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button variant="outline" size="sm" className="mt-2" asChild>
//                             <a href={experience.link} target="_blank" rel="noopener noreferrer">
//                               <ExternalLink className="w-4 h-4 mr-1" /> View Project
//                             </a>
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Open project in new tab</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                   )}
//                 </motion.div>
//               )}
//             </AnimatePresence>
            
//             <div className="flex flex-wrap gap-2 pt-2">
//               {experience.skills.map((skill, skillIndex) => (
//                 <Badge
//                   key={skillIndex}
//                   variant="secondary"
//                   className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/50"
//                 >
//                   {skill}
//                 </Badge>
//               ))}
//             </div>
//           </div>
//         </CardContent>
//         <CardFooter className="pt-0">
//           <Button 
//             variant="ghost" 
//             size="sm" 
//             onClick={() => setIsExpanded(!isExpanded)}
//             className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 w-full justify-center"
//           >
//             {isExpanded ? (
//               <>
//                 <ChevronUp className="w-4 h-4 mr-1" /> Show Less
//               </>
//             ) : (
//               <>
//                 <ChevronDown className="w-4 h-4 mr-1" /> Show More
//               </>
//             )}
//           </Button>
//         </CardFooter>
//       </Card>
//     </motion.div>
//   );
// };

// const Experience = () => {
//   return (
//     <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/10 rounded-full filter blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400/10 dark:bg-purple-600/10 rounded-full filter blur-3xl"></div>
      
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <Badge variant="outline" className="mb-4 px-4 py-1 text-blue-600 dark:text-blue-400 border-blue-300 dark:border-blue-700">
//             My Journey
//           </Badge>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
//             Experience & Achievements
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             A timeline of my professional growth and key milestones
//           </p>
//         </motion.div>
        
//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-blue-500 to-purple-600 rounded-full"></div>
          
//           {experiences.map((exp, index) => (
//             <div key={index} className="relative z-10">
//               {/* Timeline node */}
//               <motion.div 
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
//                 className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg"
//               >
//                 <div className="w-5 h-5 bg-white dark:bg-gray-900 rounded-full"></div>
//               </motion.div>
              
//               {/* Timeline content */}
//               <div className={`flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
//                 <div className={`w-5/12 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}>
//                   <ExperienceCard experience={exp} index={index} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           className="text-center mt-16"
//         >
//           <p className="text-gray-600 dark:text-gray-400 mb-6">
//             Always eager to learn and take on new challenges!
//           </p>
//           <Button 
//             asChild
//             size="lg"
//             className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
//           >
//             <a href="/Saharsh_Resume.pdf" download>
//               <Award className="w-5 h-5 mr-2" />
//               <span>Download My Resume</span>
//             </a>
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Calendar, MapPin, Award, ExternalLink, ChevronDown, ChevronUp, Briefcase, Star, Sparkles, Download, ArrowRight, GraduationCap, Code, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

const experiences = [
  {
    organization: "Innomatics Research Lab",
    role: "Full Stack Developer",
    duration: "Sep 2023 - Nov 2023",
    location: "Hyderabad",
    description:
      "Developed a full-stack e-commerce platform with features like user authentication, product management, product listings, shopping cart, order processing, and order history. Utilized React for the frontend and Node.js with Express.js for the backend, and MongoDB for the database.",
    skills: ["React", "Node.js", "Express.js", "MongoDB"],
    achievements: [
      "Implemented responsive design that improved mobile user engagement by 40%",
      "Reduced page load time by 30% through code optimization",
      "Integrated secure payment gateway with 99.9% transaction success rate",
    ],
    link: "https://example.com/project",
    type: "work",
  },
  {
    organization: "TechNova Solutions",
    role: "Frontend Developer Intern",
    duration: "May 2023 - Aug 2023",
    location: "Remote",
    description:
      "Collaborated with a team of developers to build and maintain responsive web applications. Focused on implementing UI components and integrating with backend APIs. Participated in code reviews and agile development processes.",
    skills: ["React", "TypeScript", "Tailwind CSS", "RESTful APIs"],
    achievements: [
      "Developed 15+ reusable UI components that reduced development time by 25%",
      "Improved application accessibility to meet WCAG 2.1 AA standards",
      "Participated in daily stand-ups and bi-weekly sprint planning sessions",
    ],
    link: "https://technova-solutions.com",
    type: "work",
  },
  {
    organization: "IIIT Dharwad",
    role: "Research Assistant",
    duration: "Jan 2023 - Apr 2023",
    location: "Dharwad",
    description:
      "Assisted in research on machine learning applications for natural language processing. Implemented and tested various algorithms for sentiment analysis and text classification. Contributed to a research paper on efficient text processing techniques.",
    skills: ["Python", "TensorFlow", "NLP", "Data Analysis"],
    achievements: [
      "Developed a sentiment analysis model with 87% accuracy",
      "Optimized data preprocessing pipeline reducing processing time by 35%",
      "Co-authored a research paper submitted to an international conference",
    ],
    link: "https://iiitdwd.ac.in/research.php",
    type: "research",
  },
  {
    organization: "Open Source Contribution",
    role: "Contributor",
    duration: "Ongoing",
    location: "Remote",
    description:
      "Active contributor to various open-source projects, focusing on web development libraries and tools. Regularly submit pull requests, fix bugs, and implement new features. Participate in community discussions and code reviews.",
    skills: ["JavaScript", "Git", "Open Source", "Documentation"],
    achievements: [
      "Merged 20+ pull requests across different projects",
      "Improved documentation for 5 popular JavaScript libraries",
      "Mentored new contributors through their first pull requests",
    ],
    link: "https://github.com/Slygriyrsk",
    type: "open-source",
  },
  {
    organization: "IIIT Dharwad",
    role: "B.Tech in Electronics and Communication",
    duration: "2020 - 2024",
    location: "Dharwad",
    description: "Pursued a BTech in Electronics and Communication Engineering with a focus on digital systems and programming. Maintained a strong academic record while participating in various technical clubs and events.",
    skills: ["C++", "Digital Electronics", "Signal Processing", "Embedded Systems", "Quantum Communication"],
    achievements: [
      "Maintained a CGPA of 9.14/10 throughout the program",
      "Led the college's coding club organizing workshops and hackathons",
      "Completed capstone project on IoT-based smart home automation",
    ],
    link: "https://iiitdwd.ac.in",
    type: "education",
  },
]

const ExperienceCard = ({ experience, index, activeTab }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: false, amount: 0.2 })

  const getIconByType = (type) => {
    switch (type) {
      case "work":
        return <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
      case "education":
        return <GraduationCap className="w-5 h-5 text-green-600 dark:text-green-400" />
      case "research":
        return <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
      case "open-source":
        return <Code className="w-5 h-5 text-orange-600 dark:text-orange-400" />
      default:
        return <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    }
  }

  const getCardBorderColor = (type) => {
    switch (type) {
      case "work":
        return "border-blue-500 dark:border-blue-400"
      case "education":
        return "border-green-500 dark:border-green-400"
      case "research":
        return "border-purple-500 dark:border-purple-400"
      case "open-source":
        return "border-orange-500 dark:border-orange-400"
      default:
        return "border-blue-500 dark:border-blue-400"
    }
  }

  const getBgColor = (type) => {
    switch (type) {
      case "work":
        return "bg-blue-100 dark:bg-blue-900/30"
      case "education":
        return "bg-green-100 dark:bg-green-900/30"
      case "research":
        return "bg-purple-100 dark:bg-purple-900/30"
      case "open-source":
        return "bg-orange-100 dark:bg-orange-900/30"
      default:
        return "bg-blue-100 dark:bg-blue-900/30"
    }
  }

  const getTextColor = (type) => {
    switch (type) {
      case "work":
        return "text-blue-600 dark:text-blue-400"
      case "education":
        return "text-green-600 dark:text-green-400"
      case "research":
        return "text-purple-600 dark:text-purple-400"
      case "open-source":
        return "text-orange-600 dark:text-orange-400"
      default:
        return "text-blue-600 dark:text-blue-400"
    }
  }

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`mb-12 w-full`}
    >
      <Card
        className={`overflow-hidden border-t-4 ${getCardBorderColor(
          experience.type
        )} shadow-lg hover:shadow-xl transition-all duration-300 h-full`}
      >
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-white group flex items-center">
                {experience.organization}
                {experience.type === "work" && (
                  <Badge className="ml-2 bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                    Work
                  </Badge>
                )}
                {experience.type === "education" && (
                  <Badge className="ml-2 bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">
                    Education
                  </Badge>
                )}
                {experience.type === "research" && (
                  <Badge className="ml-2 bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300">
                    Research
                  </Badge>
                )}
                {experience.type === "open-source" && (
                  <Badge className="ml-2 bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300">
                    Open Source
                  </Badge>
                )}
              </CardTitle>
              <CardDescription className={`font-semibold ${getTextColor(experience.type)}`}>
                {experience.role}
              </CardDescription>
            </div>
            <div className={`p-2 rounded-full ${getBgColor(experience.type)}`}>{getIconByType(experience.type)}</div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Calendar className={`w-4 h-4 mr-2 ${getTextColor(experience.type)}`} />
              <span>{experience.duration}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <MapPin className={`w-4 h-4 mr-2 ${getTextColor(experience.type)}`} />
              <span>{experience.location}</span>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{experience.description}</p>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pt-3 space-y-3"
                >
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                      <Star className={`w-4 h-4 mr-2 ${getTextColor(experience.type)}`} />
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements?.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="text-sm text-gray-700 dark:text-gray-300 flex items-start"
                        >
                          <Zap className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${getTextColor(experience.type)}`} />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {experience.link && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className={`mt-2 border-${experience.type === "work" ? "blue" : experience.type === "education" ? "green" : experience.type === "research" ? "purple" : "orange"}-500`}
                            asChild
                          >
                            <a href={experience.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-1" /> View More
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Open in new tab</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-wrap gap-2 pt-2">
              {experience.skills.map((skill, skillIndex) => (
                <Badge
                  key={skillIndex}
                  variant="secondary"
                  className={`${getBgColor(experience.type)} ${
                    experience.type === "work"
                      ? "text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/50"
                      : experience.type === "education"
                      ? "text-green-800 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800/50"
                      : experience.type === "research"
                      ? "text-purple-800 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800/50"
                      : "text-orange-800 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-800/50"
                  }`}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-full justify-center ${getTextColor(experience.type)} hover:${getBgColor(experience.type)}`}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4 mr-1" /> Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-1" /> Show More
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

const Experience = () => {
  const [activeTab, setActiveTab] = useState("all")
  const timelineRef = useRef(null)
  const isTimelineInView = useInView(timelineRef, { once: false, amount: 0.1 })

  const filteredExperiences = experiences.filter((exp) => {
    if (activeTab === "all") return true
    return exp.type === activeTab
  })

  return (
    <section
      id="experience"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400/10 dark:bg-purple-600/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-1 text-blue-600 dark:text-blue-400 border-blue-300 dark:border-blue-700"
          >
            My Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Experience & Achievements
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <Sparkles className="mx-4 text-purple-500 h-6 w-6" />
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A timeline of my professional growth and key milestones
          </p>
        </motion.div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid grid-cols-5 w-full max-w-2xl mx-auto">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="work"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Work
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              value="research"
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
            >
              Research
            </TabsTrigger>
            <TabsTrigger
              value="open-source"
              className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
            >
              Open Source
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="relative" ref={timelineRef}>
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isTimelineInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-blue-600 rounded-full"
          ></motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredExperiences.map((exp, index) => (
              <div
                key={index}
                className={`relative z-10 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* Timeline node */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isTimelineInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                  className={`hidden md:flex items-center justify-center absolute top-10 ${
                    index % 2 === 0 ? "right-0 -mr-5" : "left-0 -ml-5"
                  } w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg timeline-dot`}
                >
                  <div className="w-5 h-5 bg-white dark:bg-gray-900 rounded-full"></div>
                </motion.div>

                {/* Timeline content */}
                <ExperienceCard experience={exp} index={index} activeTab={activeTab} />
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 p-8 rounded-xl max-w-3xl mx-auto">
            <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
              "Always eager to learn and take on new challenges! Let's connect and create something amazing together."
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <a href="/assets/Saharsh_Resume.pdf" download>
                <Download className="w-5 h-5 mr-2" />
                <span>Download My Resume</span>
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience