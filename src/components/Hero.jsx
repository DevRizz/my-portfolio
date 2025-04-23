// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-scroll';
// import { ArrowDown, FileText, Mail } from 'lucide-react';

// const Hero = () => {
//   return (
//     <section id="hero" className="min-h-screen flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row items-center">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="md:w-1/2 mb-8 md:mb-0"
//           >
//             <h1 className="text-4xl md:text-6xl font-bold mb-4">
//               Hi, I'm <span className="text-yellow-300">Saharsh Kumar</span>
//             </h1>
//             <p className="text-xl md:text-2xl mb-6">
//               A passionate Full Stack Developer building amazing web experiences.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <Link
//                 to="contact"
//                 smooth={true}
//                 duration={500}
//                 className="flex items-center bg-white text-blue-600 hover:bg-blue-100 hover:text-blue-800 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
//               >
//                 <Mail className="w-5 h-5 mr-2" />
//                 Get in Touch
//               </Link>
//               <a
//                 href="assets/Saharsh-Resume.pdf"
//                 download
//                 className="flex items-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
//               >
//                 <FileText className="w-5 h-5 mr-2" />
//                 Download CV
//               </a>
//             </div>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="md:w-1/2 relative"
//           >
//             <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative z-10">
//               <img
//                 src="/assets/images/me.jpg"
//                 alt="Your Name"
//                 className="rounded-full w-full h-full object-cover shadow-lg"
//               />
//             </div>
//             <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
//               <div className="w-64 h-64 md:w-80 md:h-80 bg-yellow-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
//             </div>
//           </motion.div>
//         </div>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 1 }}
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//         >
//           <Link to="about" smooth={true} duration={500} className="cursor-pointer">
//             <ArrowDown className="w-8 h-8 animate-bounce text-white" />
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-scroll";
// import { ArrowDown, FileText, Mail, Github, Linkedin, Twitter } from 'lucide-react';
// import { Button } from "./ui/button";
// import { Badge } from "./ui/badge";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

// const Hero = () => {
//   const canvasRef = useRef(null);

//   // Particle animation
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let animationFrameId;
//     let particles = [];

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       initParticles();
//     };

//     const initParticles = () => {
//       particles = [];
//       const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);
      
//       for (let i = 0; i < particleCount; i++) {
//         particles.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           radius: Math.random() * 2 + 1,
//           speedX: Math.random() * 1 - 0.5,
//           speedY: Math.random() * 1 - 0.5,
//           opacity: Math.random() * 0.5 + 0.2
//         });
//       }
//     };

//     const drawParticles = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       particles.forEach(particle => {
//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
//         ctx.fill();
        
//         // Update position
//         particle.x += particle.speedX;
//         particle.y += particle.speedY;
        
//         // Wrap around edges
//         if (particle.x < 0) particle.x = canvas.width;
//         if (particle.x > canvas.width) particle.x = 0;
//         if (particle.y < 0) particle.y = canvas.height;
//         if (particle.y > canvas.height) particle.y = 0;
//       });
      
//       // Draw connections between nearby particles
//       particles.forEach((particle, i) => {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particle.x - particles[j].x;
//           const dy = particle.y - particles[j].y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
          
//           if (distance < 100) {
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
//             ctx.lineWidth = 0.5;
//             ctx.moveTo(particle.x, particle.y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.stroke();
//           }
//         }
//       });
      
//       animationFrameId = requestAnimationFrame(drawParticles);
//     };

//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);
//     drawParticles();

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   const socialLinks = [
//     { icon: <Github className="w-5 h-5" />, href: "https://github.com/Slygriyrsk", label: "GitHub" },
//     { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/saharsh-kumar-9768a8264/", label: "LinkedIn" },
//     { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/repatriation_23", label: "Twitter" }
//   ];

//   // Text animation variants
//   const textVariants = {
//     hidden: { opacity: 0 },
//     visible: (i) => ({
//       opacity: 1,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.8
//       }
//     })
//   };

//   return (
//     <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
//       {/* Particle background */}
//       <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
//       {/* Gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 z-0"></div>
      
//       {/* Content */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="flex flex-col md:flex-row items-center">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="md:w-1/2 mb-8 md:mb-0"
//           >
//             <Badge className="mb-4 px-3 py-1 bg-white/20 text-white border-none backdrop-blur-sm">
//               Full Stack Developer
//             </Badge>
            
//             <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
//               <motion.span 
//                 custom={0}
//                 initial="hidden"
//                 animate="visible"
//                 variants={textVariants}
//                 className="block"
//               >
//                 Hi, I'm
//               </motion.span>
//               <motion.span 
//                 custom={1}
//                 initial="hidden"
//                 animate="visible"
//                 variants={textVariants}
//                 className="text-yellow-300 block mt-2"
//               >
//                 Saharsh Kumar
//               </motion.span>
//             </h1>
            
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.8 }}
//             >
//               <p className="text-xl md:text-2xl mb-6 text-white/90 max-w-lg">
//                 A passionate Full Stack Developer crafting elegant solutions and building amazing web experiences.
//               </p>
              
//               <div className="flex flex-wrap gap-4 mb-8">
//                 <Button 
//                   asChild
//                   size="lg"
//                   className="bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
//                 >
//                   <Link to="contact" smooth={true} duration={500}>
//                     <Mail className="w-5 h-5 mr-2" />
//                     Get in Touch
//                   </Link>
//                 </Button>
                
//                 <Button 
//                   asChild
//                   variant="outline"
//                   size="lg"
//                   className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
//                 >
//                   <a href="/Saharsh_Resume.pdf" download>
//                     <FileText className="w-5 h-5 mr-2" />
//                     Download CV
//                   </a>
//                 </Button>
//               </div>
              
//               <div className="flex items-center space-x-4">
//                 <span className="text-white/80">Connect with me:</span>
//                 <div className="flex space-x-3">
//                   {socialLinks.map((link, index) => (
//                     <TooltipProvider key={index}>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <motion.a
//                             href={link.href}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-all duration-300 backdrop-blur-sm"
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.95 }}
//                           >
//                             {link.icon}
//                             <span className="sr-only">{link.label}</span>
//                           </motion.a>
//                         </TooltipTrigger>
//                         <TooltipContent side="bottom">
//                           <p>{link.label}</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="md:w-1/2 relative"
//           >
//             <div className="relative">
//               {/* Decorative elements */}
//               <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-300/20 rounded-full filter blur-xl animate-pulse"></div>
//               <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-blue-300/20 rounded-full filter blur-xl animate-pulse"></div>
              
//               {/* Profile image with frame */}
//               <motion.div 
//                 className="w-64 h-64 md:w-80 md:h-80 mx-auto relative z-10 rounded-full p-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 shadow-xl"
//                 animate={{ rotate: [0, 2, 0, -2, 0] }}
//                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
//               >
//                 <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
//                   <img
//                     src="/assets/images/me.jpg"
//                     alt="Saharsh Kumar"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </motion.div>
              
//               {/* Floating badges */}
//               <motion.div
//                 className="absolute top-5 right-10 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full shadow-lg backdrop-blur-sm"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6, duration: 0.5 }}
//               >
//                 <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">React</span>
//               </motion.div>
              
//               <motion.div
//                 className="absolute bottom-10 left-5 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full shadow-lg backdrop-blur-sm"
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.8, duration: 0.5 }}
//               >
//                 <span className="text-green-600 dark:text-green-400 font-medium text-sm">Node.js</span>
//               </motion.div>
              
//               <motion.div
//                 className="absolute bottom-20 right-0 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full shadow-lg backdrop-blur-sm"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1, duration: 0.5 }}
//               >
//                 <span className="text-yellow-600 dark:text-yellow-400 font-medium text-sm">JavaScript</span>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
        
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 1.2 }}
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//         >
//           <Link to="about" smooth={true} duration={500} className="cursor-pointer">
//             <motion.div
//               animate={{ y: [0, 10, 0] }}
//               transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
//               className="bg-white/20 p-3 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
//             >
//               <ArrowDown className="w-6 h-6 text-white" />
//             </motion.div>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Link } from "react-scroll"
import { ArrowDown, FileText, Mail, Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

const Hero = () => {
  const canvasRef = useRef(null)

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId
    let particles = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        })
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
      })

      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x
          const dy = particle.y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      })

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    drawParticles()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/Slygriyrsk", label: "GitHub" },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/saharshkumar03/",
      label: "LinkedIn",
    },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/repatriation_23", label: "Twitter" },
  ]

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
      },
    }),
  }

  // Badge animation variants
  const badgeVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1 + 0.5,
        duration: 0.5,
      },
    }),
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  }

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

  // Additional tech badges
  const techBadges = [
    { name: "React", color: "text-blue-600", position: "top-5 right-10" },
    { name: "Node.js", color: "text-green-600", position: "bottom-10 left-5" },
    { name: "JavaScript", color: "text-yellow-600", position: "bottom-20 right-0" },
    { name: "TypeScript", color: "text-blue-700", position: "top-20 left-5" },
    { name: "MongoDB", color: "text-green-700", position: "bottom-40 right-20" },
    { name: "Next.js", color: "text-gray-800 dark:text-gray-200", position: "top-40 right-5" },
    { name: "Tailwind CSS", color: "text-cyan-500", position: "bottom-5 right-40" },
    { name: "GraphQL", color: "text-pink-600", position: "top-10 left-20" },
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Particle background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <Badge className="mb-4 px-3 py-1 bg-white/20 text-white border-none backdrop-blur-sm">
              Full Stack Developer
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              <motion.span custom={0} initial="hidden" animate="visible" variants={textVariants} className="block">
                Hi, I'm
              </motion.span>
              <motion.span
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-yellow-300 block mt-2"
              >
                Saharsh Kumar
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p className="text-xl md:text-2xl mb-6 text-white/90 max-w-lg">
                A passionate Full Stack Developer crafting elegant solutions and building amazing web experiences.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link to="contact" smooth={true} duration={500}>
                    <Mail className="w-5 h-5 mr-2" />
                    Get in Touch
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <button onClick={handleDownloadResume}>
                    <FileText className="w-5 h-5 mr-2" />
                    Download CV
                  </button>
                </Button>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-white/80">Connect with me:</span>
                <div className="flex space-x-3">
                  {socialLinks.map((link, index) => (
                    <TooltipProvider key={index}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <motion.a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-all duration-300 backdrop-blur-sm"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {link.icon}
                            <span className="sr-only">{link.label}</span>
                          </motion.a>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                          <p>{link.label}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 relative"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-300/20 rounded-full filter blur-xl animate-pulse"></div>
              <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-blue-300/20 rounded-full filter blur-xl animate-pulse"></div>

              {/* Profile image with frame */}
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 mx-auto relative z-10 rounded-full p-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 shadow-xl"
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
              >
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
                  <img src="/assets/images/me.jpg" alt="Saharsh Kumar" className="w-full h-full object-cover" />
                </div>
              </motion.div>

              {/* Floating tech badges */}
              {techBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={badgeVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className={`absolute ${badge.position} bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full shadow-lg backdrop-blur-sm`}
                >
                  <span className={`${badge.color} font-medium text-sm`}>{badge.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
              className="bg-white/20 p-3 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
            >
              <ArrowDown className="w-6 h-6 text-white" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero