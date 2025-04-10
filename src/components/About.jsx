// import React from 'react';
// import { motion } from 'framer-motion';
// import { Code, Book, Globe, Coffee } from 'lucide-react';

// const About = () => {
//   const facts = [
//     { icon: <Code className="w-6 h-6" />, text: "Proficient in C++ programming languages" },
//     { icon: <Book className="w-6 h-6" />, text: "B.Tech in ECE from IIIT Dharwad" },
//     { icon: <Globe className="w-6 h-6" />, text: "Inclined towards Changes" },
//     { icon: <Coffee className="w-6 h-6" />, text: "200+ cups of coffee consumed while coding" },
//   ];

//   return (
//     <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white"
//         >
//           About Me
//         </motion.h2>
//         <div className="flex flex-col items-center space-y-8">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="max-w-2xl text-center"
//           >
//             <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
//             Hey, I’m Saharsh Kumar!
// I’m a Full Stack Developer with a passion for building practical, high-quality web applications. My focus is always on creating clean, efficient solutions that solve real problems. I love tackling challenges and pushing myself to work smarter, not harder.

// I first got into tech back in university, where I discovered how much I enjoyed coding. Since then, I’ve had the chance to work on everything from small websites to large enterprise systems. Each project has helped me grow, and I’m always looking for new ways to improve my skills.

// I’m particularly into React, Node.js, and cloud technologies. But more than that, I believe in writing code that’s easy to maintain and scale. I’m always learning, whether it’s through building side projects, reading up on new tech, or experimenting with different tools.
//             </p>
//             <p classname="text-lg mb-4 text-gray-700 dark:text-gray-300">
//             <strong>Remember:</strong> The best code is not just functional, but also tells a story. Let's write some great stories together!
//             </p>
//             {/* <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
//               Hello! I'm Saharsh Kumar, a passionate Full Stack Developer with a knack for creating elegant solutions in the least amount of time. I specialize in building robust web applications using modern technologies and best practices.
//             </p>
//             <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
//               My journey in tech began during my university years, where I discovered my love for coding. Since then, I've worked on a diverse range of projects, from small business websites to large-scale enterprise applications.
//             </p>
//             <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
//               I'm particularly interested in React, Node.js, and cloud technologies. I believe in writing clean, maintainable code and am always eager to learn new technologies and methodologies to stay at the cutting edge of web development.
//             </p>
//             <p className="text-lg text-gray-700 dark:text-gray-300">
//               When I'm not coding, you can find me preparing for GATE, writing tech blogs, or exploring the great outdoors. I'm always open to new opportunities and collaborations!
//             </p> */}
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="w-full max-w-4xl"
//           >
//             <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">Quick Facts</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {facts.map((fact, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
//                   className="flex items-center space-x-3 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md"
//                 >
//                   <div className="text-blue-500 dark:text-blue-400">{fact.icon}</div>
//                   <p className="text-gray-700 dark:text-gray-300">{fact.text}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
// import { Card, CardContent, CardHeader } from "./ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { Badge } from "./ui/badge";
// import { Button } from "./ui/button";
// import { Code, Book, Globe, Coffee, Briefcase, Heart, Download, Github, Linkedin, Twitter } from 'lucide-react';

// const About = () => {
//   const [activeTab, setActiveTab] = useState("overview");

//   const personalFacts = [
//     { icon: <Code className="w-6 h-6" />, text: "Proficient in C++ programming languages" },
//     { icon: <Book className="w-6 h-6" />, text: "B.Tech in ECE from IIIT Dharwad" },
//     { icon: <Globe className="w-6 h-6" />, text: "Inclined towards Changes" },
//     { icon: <Coffee className="w-6 h-6" />, text: "200+ cups of coffee consumed while coding" },
//   ];

//   const educationTimeline = [
//     {
//       year: "2020 - 2024",
//       degree: "B.Tech in Electronics and Communication Engineering",
//       institution: "IIIT Dharwad",
//       description: "Focused on core electronics principles while developing strong programming skills.",
//     },
//     {
//       year: "2018 - 2020",
//       degree: "Higher Secondary Education",
//       institution: "Gyan Bharti Senior Secondary",
//       description: "Specialized in Physics, Chemistry, and Mathematics with distinction.",
//     },
//   ];

//   const experienceTimeline = [
//     {
//       year: "2023 - Present",
//       position: "Freelance Full Stack Developer",
//       company: "Self-employed",
//       description: "Building custom web applications for clients using React, Node.js, and MongoDB.",
//     },
//     {
//       year: "2022 - 2023",
//       position: "Web Development Intern",
//       company: "Tech Startup",
//       description: "Developed responsive web interfaces and contributed to backend API development.",
//     },
//   ];

//   const interests = [
//     { name: "Competitive Programming", icon: <Code className="w-4 h-4" /> },
//     { name: "Open Source", icon: <Github className="w-4 h-4" /> },
//     { name: "Web Development", icon: <Globe className="w-4 h-4" /> },
//     { name: "AI & Machine Learning", icon: <Briefcase className="w-4 h-4" /> },
//     { name: "Reading Tech Blogs", icon: <Book className="w-4 h-4" /> },
//     { name: "Hiking", icon: <Heart className="w-4 h-4" /> },
//   ];

//   return (
//     <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
//           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Full Stack Developer passionate about creating elegant solutions
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="lg:col-span-1"
//           >
//             <Card className="overflow-hidden h-full">
//               <CardContent className="p-0">
//                 <div className="relative">
//                   <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600"></div>
//                   <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
//                     <Avatar className="w-32 h-32 border-4 border-white dark:border-gray-800">
//                       <AvatarImage src="/assets/images/me.jpg" alt="Saharsh Kumar" />
//                       <AvatarFallback>SK</AvatarFallback>
//                     </Avatar>
//                   </div>
//                 </div>
//                 <div className="pt-20 pb-8 px-6 text-center">
//                   <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Saharsh Kumar</h3>
//                   <p className="text-gray-600 dark:text-gray-400 mb-4">Full Stack Developer</p>

//                   <div className="flex justify-center space-x-4 mb-6">
//                     <Button variant="outline" size="icon" asChild>
//                       <a href="https://github.com/Slygriyrsk" target="_blank" rel="noopener noreferrer">
//                         <Github className="h-4 w-4" />
//                         <span className="sr-only">GitHub</span>
//                       </a>
//                     </Button>
//                     <Button variant="outline" size="icon" asChild>
//                       <a
//                         href="https://www.linkedin.com/in/saharshkumar03/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <Linkedin className="h-4 w-4" />
//                         <span className="sr-only">LinkedIn</span>
//                       </a>
//                     </Button>
//                     <Button variant="outline" size="icon" asChild>
//                       <a href="https://twitter.com/repatriation_23" target="_blank" rel="noopener noreferrer">
//                         <Twitter className="h-4 w-4" />
//                         <span className="sr-only">Twitter</span>
//                       </a>
//                     </Button>
//                   </div>

//                   <Button className="w-full">
//                   <a
//                     href="assets/Saharsh-Resume.pdf"
//                     download
//                     className="flex items-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
//                   >
//                     <FileText className="mr-2 h-4 w-4" /> Download Resume
//                   </a> 
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="lg:col-span-2"
//           >
//             <Card className="h-full">
//               <CardHeader>
//                 <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
//                   <TabsList className="grid grid-cols-4 mb-4">
//                     <TabsTrigger value="overview">Overview</TabsTrigger>
//                     <TabsTrigger value="education">Education</TabsTrigger>
//                     <TabsTrigger value="experience">Experience</TabsTrigger>
//                     <TabsTrigger value="interests">Interests</TabsTrigger>
//                   </TabsList>

//                   <TabsContent value="overview" className="mt-0">
//                     <div className="space-y-4">
//                       <p className="text-gray-700 dark:text-gray-300">
//                         Hey, I'm Saharsh Kumar! I'm a Full Stack Developer with a passion for building practical,
//                         high-quality web applications. My focus is always on creating clean, efficient solutions that
//                         solve real problems. I love tackling challenges and pushing myself to work smarter, not harder.
//                       </p>
//                       <p className="text-gray-700 dark:text-gray-300">
//                         I first got into tech back in university, where I discovered how much I enjoyed coding. Since
//                         then, I've had the chance to work on everything from small websites to large enterprise systems.
//                         Each project has helped me grow, and I'm always looking for new ways to improve my skills.
//                       </p>
//                       <p className="text-gray-700 dark:text-gray-300">
//                         I'm particularly into React, Node.js, and cloud technologies. But more than that, I believe in
//                         writing code that's easy to maintain and scale. I'm always learning, whether it's through building
//                         side projects, reading up on new tech, or experimenting with different tools.
//                       </p>
//                       <p className="text-gray-700 dark:text-gray-300 font-medium">
//                         <strong>Remember:</strong> The best code is not just functional, but also tells a story. Let's
//                         write some great stories together!
//                       </p>

//                       <div className="pt-4">
//                         <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Quick Facts</h4>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                           {personalFacts.map((fact, index) => (
//                             <motion.div
//                               key={index}
//                               initial={{ opacity: 0, y: 20 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
//                               className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg"
//                             >
//                               <div className="text-primary">{fact.icon}</div>
//                               <p className="text-gray-700 dark:text-gray-300">{fact.text}</p>
//                             </motion.div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </TabsContent>

//                   <TabsContent value="education" className="mt-0">
//                     <div className="space-y-8">
//                       {educationTimeline.map((item, index) => (
//                         <motion.div
//                           key={index}
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ duration: 0.5, delay: index * 0.2 }}
//                           className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:pb-0"
//                         >
//                           <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
//                           <Badge className="mb-2">{item.year}</Badge>
//                           <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{item.degree}</h4>
//                           <p className="text-primary font-medium">{item.institution}</p>
//                           <p className="text-gray-600 dark:text-gray-400 mt-2">{item.description}</p>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </TabsContent>

//                   <TabsContent value="experience" className="mt-0">
//                     <div className="space-y-8">
//                       {experienceTimeline.map((item, index) => (
//                         <motion.div
//                           key={index}
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ duration: 0.5, delay: index * 0.2 }}
//                           className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:pb-0"
//                         >
//                           <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
//                           <Badge className="mb-2">{item.year}</Badge>
//                           <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{item.position}</h4>
//                           <p className="text-primary font-medium">{item.company}</p>
//                           <p className="text-gray-600 dark:text-gray-400 mt-2">{item.description}</p>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </TabsContent>

//                   <TabsContent value="interests" className="mt-0">
//                     <div>
//                       <p className="text-gray-700 dark:text-gray-300 mb-6">
//                         Beyond coding, I have diverse interests that keep me inspired and help me approach problems from
//                         different angles.
//                       </p>
//                       <div className="flex flex-wrap gap-3">
//                         {interests.map((interest, index) => (
//                           <motion.div
//                             key={index}
//                             initial={{ opacity: 0, scale: 0.9 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             transition={{ duration: 0.3, delay: index * 0.1 }}
//                             whileHover={{ scale: 1.05 }}
//                           >
//                             <Badge variant="secondary" className="px-3 py-1.5 text-sm">
//                               <span className="mr-1.5">{interest.icon}</span>
//                               {interest.name}
//                             </Badge>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>
//                   </TabsContent>
//                 </Tabs>
//               </CardHeader>
//             </Card>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           className="text-center"
//         >
//           <blockquote className="italic text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//             "I believe that great software is built with passion, attention to detail, and a deep understanding of user
//             needs."
//           </blockquote>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import {
  Code,
  Book,
  Globe,
  Coffee,
  Briefcase,
  Heart,
  Github,
  Linkedin,
  Twitter,
  FileText,
  Mail,
  MapPin,
  Calendar,
  Sparkles,
} from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

const About = () => {
  const [activeTab, setActiveTab] = useState("overview")

  const personalFacts = [
    { icon: <Code className="w-6 h-6" />, text: "Proficient in C++ programming languages" },
    { icon: <Book className="w-6 h-6" />, text: "B.Tech in ECE from IIIT Dharwad" },
    { icon: <Globe className="w-6 h-6" />, text: "Inclined towards Changes" },
    { icon: <Coffee className="w-6 h-6" />, text: "200+ cups of coffee consumed while coding" },
  ]

  const educationTimeline = [
    {
      year: "2020 - 2024",
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "IIIT Dharwad",
      description: "Focused on core electronics principles while developing strong programming skills.",
    },
    {
      year: "2018 - 2020",
      degree: "Higher Secondary Education",
      institution: "Gyan Bharti Senior Secondary",
      description: "Specialized in Physics, Chemistry, and Mathematics with distinction.",
    },
  ]

  const experienceTimeline = [
    {
      year: "2023 - Present",
      position: "Freelance Full Stack Developer",
      company: "Self-employed",
      description: "Building custom web applications for clients using React, Node.js, and MongoDB.",
    },
    {
      year: "2022 - 2023",
      position: "Web Development Intern",
      company: "Tech Startup",
      description: "Developed responsive web interfaces and contributed to backend API development.",
    },
  ]

  const interests = [
    { name: "Competitive Programming", icon: <Code className="w-4 h-4" /> },
    { name: "Open Source", icon: <Github className="w-4 h-4" /> },
    { name: "Web Development", icon: <Globe className="w-4 h-4" /> },
    { name: "AI & Machine Learning", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Reading Tech Blogs", icon: <Book className="w-4 h-4" /> },
    { name: "Hiking", icon: <Heart className="w-4 h-4" /> },
  ]

  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, text: "saharshkumar003@gmail.com" },
    { icon: <MapPin className="w-4 h-4" />, text: "Dharwad, Karnataka, India" },
    { icon: <Calendar className="w-4 h-4" />, text: "Available from July 2024" },
  ]

  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement("a")
    // Set the href to the path of your resume file
    link.href = "/assets/Saharsh_Resume.pdf"
    // Set the download attribute to suggest a filename
    link.download = "Saharsh_Resume.pdf"
    // Append to the document
    document.body.appendChild(link)
    // Trigger the click event
    link.click()
    // Clean up
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-20 bg-primary rounded-full"></div>
            <Sparkles className="mx-4 text-primary h-6 w-6" />
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Full Stack Developer passionate about creating elegant solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
                    <Avatar className="w-32 h-32 border-4 border-white dark:border-gray-800 shadow-md">
                      <AvatarImage src="/assets/images/me.jpg" alt="Saharsh Kumar" />
                      <AvatarFallback className="bg-primary text-white text-2xl font-bold">SK</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="pt-20 pb-8 px-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">Saharsh Kumar</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Full Stack Developer</p>

                  <div className="space-y-3 mb-6">
                    {contactInfo.map((info, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400"
                      >
                        <span className="mr-2 text-primary">{info.icon}</span>
                        {info.text}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-4 mb-6">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full hover:bg-primary hover:text-white transition-colors"
                            asChild
                          >
                            <a href="https://github.com/Slygriyrsk" target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                              <span className="sr-only">GitHub</span>
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full hover:bg-primary hover:text-white transition-colors"
                            asChild
                          >
                            <a
                              href="https://www.linkedin.com/in/saharshkumar03/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Linkedin className="h-4 w-4" />
                              <span className="sr-only">LinkedIn</span>
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>LinkedIn</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full hover:bg-primary hover:text-white transition-colors"
                            asChild
                          >
                            <a href="https://twitter.com/repatriation_23" target="_blank" rel="noopener noreferrer">
                              <Twitter className="h-4 w-4" />
                              <span className="sr-only">Twitter</span>
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Twitter</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>

                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 hover:scale-105"
                    onClick={handleDownloadResume}
                  >
                    <FileText className="mr-2 h-4 w-4" /> Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid grid-cols-4 mb-4">
                    <TabsTrigger
                      value="overview"
                      className="data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                      Overview
                    </TabsTrigger>
                    <TabsTrigger
                      value="education"
                      className="data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                      Education
                    </TabsTrigger>
                    <TabsTrigger
                      value="experience"
                      className="data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                      Experience
                    </TabsTrigger>
                    <TabsTrigger
                      value="interests"
                      className="data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                      Interests
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="mt-0">
                    <div className="space-y-4">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Hey, I'm Saharsh Kumar! I'm a Full Stack Developer with a passion for building practical,
                        high-quality web applications. My focus is always on creating clean, efficient solutions that
                        solve real problems. I love tackling challenges and pushing myself to work smarter, not harder.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        I first got into tech back in university, where I discovered how much I enjoyed coding. Since
                        then, I've had the chance to work on everything from small websites to large enterprise systems.
                        Each project has helped me grow, and I'm always looking for new ways to improve my skills.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        I'm particularly into React, Node.js, and cloud technologies. But more than that, I believe in
                        writing code that's easy to maintain and scale. I'm always learning, whether it's through
                        building side projects, reading up on new tech, or experimenting with different tools.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                        <strong>Remember:</strong> The best code is not just functional, but also tells a story. Let's
                        write some great stories together!
                      </p>

                      <div className="pt-4">
                        <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
                          <Sparkles className="mr-2 h-5 w-5 text-primary" /> Quick Facts
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {personalFacts.map((fact, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                              whileHover={{ scale: 1.03 }}
                              className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                            >
                              <div className="text-primary">{fact.icon}</div>
                              <p className="text-gray-700 dark:text-gray-300">{fact.text}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="education" className="mt-0">
                    <div className="space-y-8">
                      {educationTimeline.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                          whileHover={{ x: 5 }}
                          className="relative pl-8 pb-8 border-l-2 border-primary dark:border-primary last:pb-0"
                        >
                          <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                          <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20">{item.year}</Badge>
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{item.degree}</h4>
                          <p className="text-primary font-medium">{item.institution}</p>
                          <p className="text-gray-600 dark:text-gray-400 mt-2">{item.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="experience" className="mt-0">
                    <div className="space-y-8">
                      {experienceTimeline.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                          whileHover={{ x: 5 }}
                          className="relative pl-8 pb-8 border-l-2 border-primary dark:border-primary last:pb-0"
                        >
                          <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                          <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20">{item.year}</Badge>
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{item.position}</h4>
                          <p className="text-primary font-medium">{item.company}</p>
                          <p className="text-gray-600 dark:text-gray-400 mt-2">{item.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="interests" className="mt-0">
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        Beyond coding, I have diverse interests that keep me inspired and help me approach problems from
                        different angles.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {interests.map((interest, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge
                              variant="secondary"
                              className="px-3 py-2 text-sm bg-primary/10 text-primary hover:bg-primary/20"
                            >
                              <span className="mr-1.5">{interest.icon}</span>
                              {interest.name}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardHeader>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 p-8 rounded-xl">
            <blockquote className="italic text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              "I believe that great software is built with passion, attention to detail, and a deep understanding of
              user needs."
            </blockquote>
            <div className="mt-4 font-semibold text-primary">— Saharsh Kumar</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About