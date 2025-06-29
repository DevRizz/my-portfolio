// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
// import { Card, CardContent, CardHeader } from "./ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
// import { Badge } from "./ui/badge"
// import { Button } from "./ui/button"
// import {
//   Code,
//   Book,
//   Globe,
//   Coffee,
//   Briefcase,
//   Heart,
//   Github,
//   Linkedin,
//   Twitter,
//   FileText,
//   Mail,
//   MapPin,
//   Calendar,
//   Sparkles,
// } from "lucide-react"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

// const About = () => {
//   const [activeTab, setActiveTab] = useState("overview")

//   const personalFacts = [
//     { icon: <Code className="w-6 h-6" />, text: "Proficient in C++ programming languages" },
//     { icon: <Book className="w-6 h-6" />, text: "B.Tech in ECE from IIIT Dharwad" },
//     { icon: <Globe className="w-6 h-6" />, text: "Inclined towards Changes" },
//     { icon: <Coffee className="w-6 h-6" />, text: "200+ cups of coffee consumed while coding" },
//   ]

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
//   ]

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
//   ]

//   const interests = [
//     { name: "Competitive Programming", icon: <Code className="w-4 h-4" /> },
//     { name: "Open Source", icon: <Github className="w-4 h-4" /> },
//     { name: "Web Development", icon: <Globe className="w-4 h-4" /> },
//     { name: "AI & Machine Learning", icon: <Briefcase className="w-4 h-4" /> },
//     { name: "Reading Tech Blogs", icon: <Book className="w-4 h-4" /> },
//     { name: "Hiking", icon: <Heart className="w-4 h-4" /> },
//   ]

//   const contactInfo = [
//     { icon: <Mail className="w-4 h-4" />, text: "saharshkumar003@gmail.com" },
//     { icon: <MapPin className="w-4 h-4" />, text: "Dharwad, Karnataka, India" },
//     { icon: <Calendar className="w-4 h-4" />, text: "Available from July 2024" },
//   ]

//   const handleDownloadResume = () => {
//     // Create a link element
//     const link = document.createElement("a")
//     // Set the href to the path of your resume file
//     link.href = "/assets/Saharsh_Resume.pdf"
//     // Set the download attribute to suggest a filename
//     link.download = "Saharsh_Resume.pdf"
//     // Append to the document
//     document.body.appendChild(link)
//     // Trigger the click event
//     link.click()
//     // Clean up
//     document.body.removeChild(link)
//   }

//   return (
//     <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
//           <div className="flex items-center justify-center mb-6">
//             <div className="h-1 w-20 bg-primary rounded-full"></div>
//             <Sparkles className="mx-4 text-primary h-6 w-6" />
//             <div className="h-1 w-20 bg-primary rounded-full"></div>
//           </div>
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
//             <Card className="overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <CardContent className="p-0">
//                 <div className="relative">
//                   <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600"></div>
//                   <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
//                     <Avatar className="w-32 h-32 border-4 border-white dark:border-gray-800 shadow-md">
//                       <AvatarImage src="/assets/images/me.jpg" alt="Saharsh Kumar" />
//                       <AvatarFallback className="bg-primary text-white text-2xl font-bold">SK</AvatarFallback>
//                     </Avatar>
//                   </div>
//                 </div>
//                 <div className="pt-20 pb-8 px-6 text-center">
//                   <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">Saharsh Kumar</h3>
//                   <p className="text-gray-600 dark:text-gray-400 mb-4">Full Stack Developer</p>

//                   <div className="space-y-3 mb-6">
//                     {contactInfo.map((info, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400"
//                       >
//                         <span className="mr-2 text-primary">{info.icon}</span>
//                         {info.text}
//                       </div>
//                     ))}
//                   </div>

//                   <div className="flex justify-center space-x-4 mb-6">
//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="rounded-full hover:bg-primary hover:text-white transition-colors"
//                             asChild
//                           >
//                             <a href="https://github.com/Slygriyrsk" target="_blank" rel="noopener noreferrer">
//                               <Github className="h-4 w-4" />
//                               <span className="sr-only">GitHub</span>
//                             </a>
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>GitHub</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>

//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="rounded-full hover:bg-primary hover:text-white transition-colors"
//                             asChild
//                           >
//                             <a
//                               href="https://www.linkedin.com/in/saharshkumar03/"
//                               target="_blank"
//                               rel="noopener noreferrer"
//                             >
//                               <Linkedin className="h-4 w-4" />
//                               <span className="sr-only">LinkedIn</span>
//                             </a>
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>LinkedIn</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>

//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="rounded-full hover:bg-primary hover:text-white transition-colors"
//                             asChild
//                           >
//                             <a href="https://twitter.com/repatriation_23" target="_blank" rel="noopener noreferrer">
//                               <Twitter className="h-4 w-4" />
//                               <span className="sr-only">Twitter</span>
//                             </a>
//                           </Button>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Twitter</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                   </div>

//                   <Button
//                     className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 hover:scale-105"
//                     onClick={handleDownloadResume}
//                   >
//                     <FileText className="mr-2 h-4 w-4" /> Download Resume
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
//             <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <CardHeader>
//                 <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
//                   <TabsList className="grid grid-cols-4 mb-4">
//                     <TabsTrigger
//                       value="overview"
//                       className="data-[state=active]:bg-primary data-[state=active]:text-white"
//                     >
//                       Overview
//                     </TabsTrigger>
//                     <TabsTrigger
//                       value="education"
//                       className="data-[state=active]:bg-primary data-[state=active]:text-white"
//                     >
//                       Education
//                     </TabsTrigger>
//                     <TabsTrigger
//                       value="experience"
//                       className="data-[state=active]:bg-primary data-[state=active]:text-white"
//                     >
//                       Experience
//                     </TabsTrigger>
//                     <TabsTrigger
//                       value="interests"
//                       className="data-[state=active]:bg-primary data-[state=active]:text-white"
//                     >
//                       Interests
//                     </TabsTrigger>
//                   </TabsList>

//                   <TabsContent value="overview" className="mt-0">
//                     <div className="space-y-4">
//                       <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//                         Hey, I'm Saharsh Kumar! I'm a Full Stack Developer with a passion for building practical,
//                         high-quality web applications. My focus is always on creating clean, efficient solutions that
//                         solve real problems. I love tackling challenges and pushing myself to work smarter, not harder.
//                       </p>
//                       <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//                         I first got into tech back in university, where I discovered how much I enjoyed coding. Since
//                         then, I've had the chance to work on everything from small websites to large enterprise systems.
//                         Each project has helped me grow, and I'm always looking for new ways to improve my skills.
//                       </p>
//                       <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//                         I'm particularly into React, Node.js, and cloud technologies. But more than that, I believe in
//                         writing code that's easy to maintain and scale. I'm always learning, whether it's through
//                         building side projects, reading up on new tech, or experimenting with different tools.
//                       </p>
//                       <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
//                         <strong>Remember:</strong> The best code is not just functional, but also tells a story. Let's
//                         write some great stories together!
//                       </p>

//                       <div className="pt-4">
//                         <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
//                           <Sparkles className="mr-2 h-5 w-5 text-primary" /> Quick Facts
//                         </h4>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                           {personalFacts.map((fact, index) => (
//                             <motion.div
//                               key={index}
//                               initial={{ opacity: 0, y: 20 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
//                               whileHover={{ scale: 1.03 }}
//                               className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
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
//                           whileHover={{ x: 5 }}
//                           className="relative pl-8 pb-8 border-l-2 border-primary dark:border-primary last:pb-0"
//                         >
//                           <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
//                           <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20">{item.year}</Badge>
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
//                           whileHover={{ x: 5 }}
//                           className="relative pl-8 pb-8 border-l-2 border-primary dark:border-primary last:pb-0"
//                         >
//                           <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
//                           <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20">{item.year}</Badge>
//                           <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{item.position}</h4>
//                           <p className="text-primary font-medium">{item.company}</p>
//                           <p className="text-gray-600 dark:text-gray-400 mt-2">{item.description}</p>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </TabsContent>

//                   <TabsContent value="interests" className="mt-0">
//                     <div>
//                       <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
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
//                             <Badge
//                               variant="secondary"
//                               className="px-3 py-2 text-sm bg-primary/10 text-primary hover:bg-primary/20"
//                             >
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
//           className="text-center mt-12"
//         >
//           <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 p-8 rounded-xl">
//             <blockquote className="italic text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
//               "I believe that great software is built with passion, attention to detail, and a deep understanding of
//               user needs."
//             </blockquote>
//             <div className="mt-4 font-semibold text-primary">— Saharsh Kumar</div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default About

"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
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
  Heart,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Calendar,
  Sparkles,
  Award,
  Rocket,
  Brain,
  Zap,
  TrendingUp,
  Download,
  Quote,
  Hexagon,
  Triangle,
  Circle,
  Square,
  ArrowRight,
  CheckCircle,
  Clock,
  GraduationCap,
  Building,
  User,
} from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

const About = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  const personalFacts = [
    {
      icon: <Code className="w-6 h-6" />,
      text: "Proficient in C++ programming languages",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      text: "B.Tech in ECE from IIIT Dharwad",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: "Inclined towards Changes",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      text: "200+ cups of coffee consumed while coding",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
    },
  ]

  const educationTimeline = [
    {
      year: "2020 - 2024",
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "IIIT Dharwad",
      description: "Focused on core electronics principles while developing strong programming skills.",
      grade: "8.5 CGPA",
      achievements: ["Dean's List", "Programming Club Lead", "Hackathon Winner"],
      color: "from-blue-500 to-purple-600",
    },
    {
      year: "2018 - 2020",
      degree: "Higher Secondary Education",
      institution: "Gyan Bharti Senior Secondary",
      description: "Specialized in Physics, Chemistry, and Mathematics with distinction.",
      grade: "92%",
      achievements: ["Science Olympiad", "Mathematics Excellence", "Top 5% of Class"],
      color: "from-green-500 to-blue-500",
    },
  ]

  const experienceTimeline = [
    {
      year: "2023 - Present",
      position: "Freelance Full Stack Developer",
      company: "Self-employed",
      description: "Building custom web applications for clients using React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      achievements: ["10+ Projects Delivered", "100% Client Satisfaction", "5-Star Reviews"],
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2022 - 2023",
      position: "Web Development Intern",
      company: "Tech Startup",
      description: "Developed responsive web interfaces and contributed to backend API development.",
      technologies: ["JavaScript", "Express.js", "PostgreSQL", "Docker"],
      achievements: ["Performance Optimization", "API Development", "Team Collaboration"],
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const interests = [
    { name: "Competitive Programming", icon: <Code className="w-4 h-4" />, color: "from-blue-500 to-purple-600" },
    { name: "Open Source", icon: <Github className="w-4 h-4" />, color: "from-gray-600 to-gray-800" },
    { name: "Web Development", icon: <Globe className="w-4 h-4" />, color: "from-green-500 to-blue-500" },
    { name: "AI & Machine Learning", icon: <Brain className="w-4 h-4" />, color: "from-purple-500 to-pink-500" },
    { name: "Reading Tech Blogs", icon: <Book className="w-4 h-4" />, color: "from-orange-500 to-red-500" },
    { name: "Hiking", icon: <Heart className="w-4 h-4" />, color: "from-red-500 to-pink-500" },
  ]

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      text: "saharshkumar003@gmail.com",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "Dharwad, Karnataka, India",
      color: "text-green-600 dark:text-green-400",
    },
    {
      icon: <Calendar className="w-4 h-4" />,
      text: "Available from July 2024",
      color: "text-purple-600 dark:text-purple-400",
    },
  ]

  const stats = [
    {
      label: "Projects Completed",
      value: "15+",
      icon: <Rocket className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Years of Experience",
      value: "2+",
      icon: <Clock className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Technologies Mastered",
      value: "20+",
      icon: <Zap className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500",
    },
    { label: "Coffee Cups", value: "200+", icon: <Coffee className="w-5 h-5" />, color: "from-orange-500 to-red-500" },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/Slygriyrsk",
      color: "hover:bg-gray-600",
      followers: "50+",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/saharshkumar03/",
      color: "hover:bg-blue-600",
      followers: "500+",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: "https://twitter.com/repatriation_23",
      color: "hover:bg-blue-400",
      followers: "100+",
    },
  ]

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/assets/Saharsh_Resume.pdf"
    link.download = "Saharsh_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Floating Animation Component
  const FloatingElement = ({ children, delay = 0, duration = 3 }) => (
    <motion.div
      animate={{
        y: [0, -5, 0],
        rotate: [0, 0.5, -0.5, 0],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )

  // Simplified Interactive Card Component
  const InteractiveCard = ({ children, className = "", ...props }) => (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  )

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-600/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full filter blur-3xl animate-pulse delay-2000"></div>

        {/* Floating geometric shapes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 1.5,
            }}
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + i * 7}%`,
            }}
          >
            {i % 4 === 0 && <Hexagon className="w-6 h-6 text-blue-500" />}
            {i % 4 === 1 && <Triangle className="w-4 h-4 text-purple-500" />}
            {i % 4 === 2 && <Circle className="w-5 h-5 text-cyan-500" />}
            {i % 4 === 3 && <Square className="w-4 h-4 text-pink-500" />}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Beautiful Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-1 text-primary border-primary/30 dark:border-primary/50 bg-white/80 backdrop-blur-sm"
          >
            <User className="w-4 h-4 mr-2" />
            Get to Know Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
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
            Full Stack Developer passionate about creating elegant solutions and pushing the boundaries of technology
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <InteractiveCard key={index}>
              <Card className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-white/20 relative overflow-hidden">
                <CardContent className="p-6">
                  <motion.div
                    className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-white`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div
                    className="text-3xl font-bold text-gray-800 dark:text-white mb-1"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                </CardContent>
              </Card>
            </InteractiveCard>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <InteractiveCard className="h-full">
              <Card className="overflow-hidden h-full shadow-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-white/20">
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Animated gradient background */}
                    <motion.div
                      className="h-40 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      style={{
                        backgroundSize: "200% 200%",
                      }}
                    />

                    {/* Floating particles in header */}
                    <div className="absolute inset-0 overflow-hidden">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-white/30 rounded-full"
                          animate={{
                            x: [0, 100, 0],
                            y: [0, -50, 0],
                            opacity: [0.3, 0.8, 0.3],
                          }}
                          transition={{
                            duration: 4 + i,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.5,
                          }}
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + i * 10}%`,
                          }}
                        />
                      ))}
                    </div>

                    <FloatingElement delay={0.5}>
                      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
                        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                          <Avatar className="w-32 h-32 border-4 border-white dark:border-gray-800 shadow-2xl ring-4 ring-purple-500/20">
                            <AvatarImage src="/assets/images/me.jpg" alt="Saharsh Kumar" />
                            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-2xl font-bold">
                              SK
                            </AvatarFallback>
                          </Avatar>
                        </motion.div>
                      </div>
                    </FloatingElement>
                  </div>

                  <div className="pt-20 pb-8 px-6 text-center">
                    <motion.h3
                      className="text-2xl font-bold text-gray-800 dark:text-white mb-1"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Saharsh Kumar
                    </motion.h3>
                    <motion.p
                      className="text-gray-600 dark:text-gray-400 mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Full Stack Developer
                    </motion.p>

                    <div className="space-y-3 mb-6">
                      {contactInfo.map((info, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="flex items-center justify-center text-sm"
                        >
                          <span className={`mr-2 ${info.color}`}>{info.icon}</span>
                          <span className="text-gray-600 dark:text-gray-400">{info.text}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Enhanced Social Links */}
                    <div className="flex justify-center space-x-3 mb-6">
                      {socialLinks.map((social, index) => (
                        <motion.div
                          key={social.name}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        >
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className={`rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-white/20 hover:scale-110 transition-all duration-300 ${social.color} hover:text-white`}
                                  asChild
                                >
                                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                                    {social.icon}
                                    <span className="sr-only">{social.name}</span>
                                  </a>
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  {social.name} • {social.followers} followers
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </motion.div>
                      ))}
                    </div>

                    {/* Enhanced Resume Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <Button
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                        onClick={handleDownloadResume}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                        <motion.div
                          className="ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.div>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </InteractiveCard>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <InteractiveCard className="h-full">
              <Card className="h-full shadow-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid grid-cols-4 mb-6 bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm">
                      {[
                        { value: "overview", label: "Overview", icon: <User className="w-4 h-4" /> },
                        { value: "education", label: "Education", icon: <GraduationCap className="w-4 h-4" /> },
                        { value: "experience", label: "Experience", icon: <Building className="w-4 h-4" /> },
                        { value: "interests", label: "Interests", icon: <Heart className="w-4 h-4" /> },
                      ].map((tab) => (
                        <TabsTrigger
                          key={tab.value}
                          value={tab.value}
                          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all duration-300"
                        >
                          <span className="mr-2">{tab.icon}</span>
                          {tab.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    <AnimatePresence mode="wait">
                      <TabsContent value="overview" className="mt-0">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          <div className="space-y-4">
                            <motion.p
                              className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                            >
                              Hey, I'm Saharsh Kumar! I'm a Full Stack Developer with a passion for building practical,
                              high-quality web applications. My focus is always on creating clean, efficient solutions
                              that solve real problems. I love tackling challenges and pushing myself to work smarter,
                              not harder.
                            </motion.p>

                            <motion.p
                              className="text-gray-700 dark:text-gray-300 leading-relaxed"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              I first got into tech back in university, where I discovered how much I enjoyed coding.
                              Since then, I've had the chance to work on everything from small websites to large
                              enterprise systems. Each project has helped me grow, and I'm always looking for new ways
                              to improve my skills.
                            </motion.p>

                            <motion.p
                              className="text-gray-700 dark:text-gray-300 leading-relaxed"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              I'm particularly into React, Node.js, and cloud technologies. But more than that, I
                              believe in writing code that's easy to maintain and scale. I'm always learning, whether
                              it's through building side projects, reading up on new tech, or experimenting with
                              different tools.
                            </motion.p>
                          </div>

                          {/* Enhanced Quick Facts */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="pt-6"
                          >
                            <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center">
                              <Sparkles className="mr-3 h-6 w-6 text-purple-600" />
                              Quick Facts
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {personalFacts.map((fact, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                                  whileHover={{ scale: 1.05, y: -2 }}
                                  className={`relative overflow-hidden ${fact.bgColor} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20`}
                                >
                                  {/* Animated background gradient */}
                                  <motion.div
                                    className={`absolute inset-0 bg-gradient-to-r ${fact.color} opacity-10`}
                                    animate={{
                                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                    }}
                                    transition={{
                                      duration: 6,
                                      repeat: Number.POSITIVE_INFINITY,
                                      ease: "linear",
                                    }}
                                    style={{
                                      backgroundSize: "200% 200%",
                                    }}
                                  />

                                  <div className="relative z-10 flex items-center space-x-4">
                                    <motion.div
                                      className={`p-3 rounded-full bg-gradient-to-r ${fact.color} text-white shadow-lg`}
                                      whileHover={{ rotate: 360 }}
                                      transition={{ duration: 0.5 }}
                                    >
                                      {fact.icon}
                                    </motion.div>
                                    <p className="text-gray-700 dark:text-gray-300 font-medium">{fact.text}</p>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </motion.div>
                      </TabsContent>

                      <TabsContent value="education" className="mt-0">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-8"
                        >
                          {educationTimeline.map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.2 }}
                              whileHover={{ x: 5 }}
                              className="relative"
                            >
                              <InteractiveCard>
                                <div
                                  className={`p-6 rounded-xl bg-gradient-to-r ${item.color} bg-opacity-10 border border-white/20 backdrop-blur-sm`}
                                >
                                  <div className="flex items-start justify-between mb-4">
                                    <Badge
                                      className={`bg-gradient-to-r ${item.color} text-white border-none px-3 py-1`}
                                    >
                                      {item.year}
                                    </Badge>
                                    <div className="text-right">
                                      <Badge variant="outline" className="bg-white/50 dark:bg-gray-800/50">
                                        {item.grade}
                                      </Badge>
                                    </div>
                                  </div>

                                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                    {item.degree}
                                  </h4>
                                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                                    {item.institution}
                                  </p>
                                  <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>

                                  <div className="flex flex-wrap gap-2">
                                    {item.achievements.map((achievement, i) => (
                                      <Badge
                                        key={i}
                                        variant="secondary"
                                        className="bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300"
                                      >
                                        <CheckCircle className="w-3 h-3 mr-1" />
                                        {achievement}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </InteractiveCard>
                            </motion.div>
                          ))}
                        </motion.div>
                      </TabsContent>

                      <TabsContent value="experience" className="mt-0">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-8"
                        >
                          {experienceTimeline.map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.2 }}
                              whileHover={{ x: 5 }}
                              className="relative"
                            >
                              <InteractiveCard>
                                <div
                                  className={`p-6 rounded-xl bg-gradient-to-r ${item.color} bg-opacity-10 border border-white/20 backdrop-blur-sm`}
                                >
                                  <div className="flex items-start justify-between mb-4">
                                    <Badge
                                      className={`bg-gradient-to-r ${item.color} text-white border-none px-3 py-1`}
                                    >
                                      {item.year}
                                    </Badge>
                                    <Badge variant="outline" className="bg-white/50 dark:bg-gray-800/50">
                                      <Building className="w-3 h-3 mr-1" />
                                      {item.company}
                                    </Badge>
                                  </div>

                                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                    {item.position}
                                  </h4>
                                  <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>

                                  <div className="mb-4">
                                    <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                      Technologies Used:
                                    </h5>
                                    <div className="flex flex-wrap gap-2">
                                      {item.technologies.map((tech, i) => (
                                        <Badge
                                          key={i}
                                          variant="outline"
                                          className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700"
                                        >
                                          {tech}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>

                                  <div className="flex flex-wrap gap-2">
                                    {item.achievements.map((achievement, i) => (
                                      <Badge
                                        key={i}
                                        variant="secondary"
                                        className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                                      >
                                        <Award className="w-3 h-3 mr-1" />
                                        {achievement}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </InteractiveCard>
                            </motion.div>
                          ))}
                        </motion.div>
                      </TabsContent>

                      <TabsContent value="interests" className="mt-0">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.p
                            className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            Beyond coding, I have diverse interests that keep me inspired and help me approach problems
                            from different angles. These passions fuel my creativity and drive for continuous learning.
                          </motion.p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {interests.map((interest, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                              >
                                <InteractiveCard>
                                  <div
                                    className={`p-4 rounded-xl bg-gradient-to-r ${interest.color} bg-opacity-10 border border-white/20 backdrop-blur-sm text-center`}
                                  >
                                    <motion.div
                                      className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${interest.color} flex items-center justify-center text-white shadow-lg`}
                                      whileHover={{ rotate: 360 }}
                                      transition={{ duration: 0.5 }}
                                    >
                                      {interest.icon}
                                    </motion.div>
                                    <h5 className="font-medium text-gray-800 dark:text-white">{interest.name}</h5>
                                  </div>
                                </InteractiveCard>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </TabsContent>
                    </AnimatePresence>
                  </Tabs>
                </CardHeader>
              </Card>
            </InteractiveCard>
          </motion.div>
        </div>

        {/* Enhanced Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <InteractiveCard>
            <div className="relative bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 p-12 rounded-2xl backdrop-blur-sm border border-white/20 overflow-hidden">
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"
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

              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Quote className="w-12 h-12 text-purple-500 mx-auto mb-6" />
                <blockquote className="italic text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-6 leading-relaxed">
                  "I believe that great software is built with passion, attention to detail, and a deep understanding of
                  user needs. Every line of code should serve a purpose and contribute to creating meaningful
                  experiences."
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500 mr-4"></div>
                  <div className="font-semibold text-purple-600 dark:text-purple-400 text-lg">Saharsh Kumar</div>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500 ml-4"></div>
                </div>
              </motion.div>
            </div>
          </InteractiveCard>
        </motion.div>
      </div>
    </section>
  )
}

export default About