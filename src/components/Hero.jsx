// "use client"

// import { useEffect, useRef } from "react"
// import { motion } from "framer-motion"
// import { Link } from "react-scroll"
// import { ArrowDown, FileText, Mail, Github, Linkedin, Twitter } from 'lucide-react'
// import { Button } from "./ui/button"
// import { Badge } from "./ui/badge"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

// const Hero = () => {
//   const canvasRef = useRef(null)

//   // Particle animation
//   useEffect(() => {
//     const canvas = canvasRef.current
//     const ctx = canvas.getContext("2d")
//     let animationFrameId
//     let particles = []

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight
//       initParticles()
//     }

//     const initParticles = () => {
//       particles = []
//       const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100)

//       for (let i = 0; i < particleCount; i++) {
//         particles.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           radius: Math.random() * 2 + 1,
//           speedX: Math.random() * 1 - 0.5,
//           speedY: Math.random() * 1 - 0.5,
//           opacity: Math.random() * 0.5 + 0.2,
//         })
//       }
//     }

//     const drawParticles = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height)

//       particles.forEach((particle) => {
//         ctx.beginPath()
//         ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
//         ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
//         ctx.fill()

//         // Update position
//         particle.x += particle.speedX
//         particle.y += particle.speedY

//         // Wrap around edges
//         if (particle.x < 0) particle.x = canvas.width
//         if (particle.x > canvas.width) particle.x = 0
//         if (particle.y < 0) particle.y = canvas.height
//         if (particle.y > canvas.height) particle.y = 0
//       })

//       // Draw connections between nearby particles
//       particles.forEach((particle, i) => {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particle.x - particles[j].x
//           const dy = particle.y - particles[j].y
//           const distance = Math.sqrt(dx * dx + dy * dy)

//           if (distance < 100) {
//             ctx.beginPath()
//             ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`
//             ctx.lineWidth = 0.5
//             ctx.moveTo(particle.x, particle.y)
//             ctx.lineTo(particles[j].x, particles[j].y)
//             ctx.stroke()
//           }
//         }
//       })

//       animationFrameId = requestAnimationFrame(drawParticles)
//     }

//     resizeCanvas()
//     window.addEventListener("resize", resizeCanvas)
//     drawParticles()

//     return () => {
//       window.removeEventListener("resize", resizeCanvas)
//       cancelAnimationFrame(animationFrameId)
//     }
//   }, [])

//   const socialLinks = [
//     { icon: <Github className="w-5 h-5" />, href: "https://github.com/Slygriyrsk", label: "GitHub" },
//     {
//       icon: <Linkedin className="w-5 h-5" />,
//       href: "https://www.linkedin.com/in/saharshkumar03/",
//       label: "LinkedIn",
//     },
//     { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/repatriation_23", label: "Twitter" },
//   ]

//   // Text animation variants
//   const textVariants = {
//     hidden: { opacity: 0 },
//     visible: (i) => ({
//       opacity: 1,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.8,
//       },
//     }),
//   }

//   // Badge animation variants
//   const badgeVariants = {
//     initial: { opacity: 0, scale: 0.8 },
//     animate: (i) => ({
//       opacity: 1,
//       scale: 1,
//       transition: {
//         delay: i * 0.1 + 0.5,
//         duration: 0.5,
//       },
//     }),
//     hover: {
//       scale: 1.05,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   }

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

//   // Additional tech badges
//   const techBadges = [
//     { name: "React", color: "text-blue-600", position: "top-5 right-10" },
//     { name: "Node.js", color: "text-green-600", position: "bottom-10 left-5" },
//     { name: "JavaScript", color: "text-yellow-600", position: "bottom-20 right-0" },
//     { name: "TypeScript", color: "text-blue-700", position: "top-20 left-5" },
//     { name: "MongoDB", color: "text-green-700", position: "bottom-40 right-20" },
//     { name: "Next.js", color: "text-gray-800 dark:text-gray-200", position: "top-40 right-5" },
//     { name: "Tailwind CSS", color: "text-cyan-500", position: "bottom-5 right-40" },
//     { name: "GraphQL", color: "text-pink-600", position: "top-10 left-20" },
//   ]

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
//               <motion.span custom={0} initial="hidden" animate="visible" variants={textVariants} className="block">
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
//                   <button onClick={handleDownloadResume}>
//                     <FileText className="w-5 h-5 mr-2" />
//                     Download CV
//                   </button>
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
//                 transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
//               >
//                 <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
//                   <img src="/assets/images/me.jpg" alt="Saharsh Kumar" className="w-full h-full object-cover" />
//                 </div>
//               </motion.div>

//               {/* Floating tech badges */}
//               {techBadges.map((badge, index) => (
//                 <motion.div
//                   key={index}
//                   custom={index}
//                   variants={badgeVariants}
//                   initial="initial"
//                   animate="animate"
//                   whileHover="hover"
//                   className={`absolute ${badge.position} bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full shadow-lg backdrop-blur-sm`}
//                 >
//                   <span className={`${badge.color} font-medium text-sm`}>{badge.name}</span>
//                 </motion.div>
//               ))}
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
//               transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
//               className="bg-white/20 p-3 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
//             >
//               <ArrowDown className="w-6 h-6 text-white" />
//             </motion.div>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Hero

"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Link } from "react-scroll"
import { ArrowDown, Mail, Github, Linkedin, Twitter, Rocket, Star } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

const Hero = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
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

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/assets/Saharsh_Resume.pdf"
    link.download = "Saharsh_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const floatingSkills = [
    { name: "React", color: "from-blue-400 to-blue-600", position: { x: -120, y: -80 }, delay: 0 },
    { name: "Node.js", color: "from-green-400 to-green-600", position: { x: 140, y: -60 }, delay: 0.5 },
    { name: "TypeScript", color: "from-blue-500 to-indigo-600", position: { x: -140, y: 40 }, delay: 1 },
    { name: "Next.js", color: "from-gray-600 to-gray-800", position: { x: 120, y: 80 }, delay: 1.5 },
    { name: "MongoDB", color: "from-green-500 to-green-700", position: { x: -80, y: 120 }, delay: 2 },
    { name: "TailwindCSS", color: "from-cyan-400 to-cyan-600", position: { x: 80, y: -120 }, delay: 2.5 },
  ]

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)",
      }}
    >
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Elegant Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 100%)",
            filter: "blur(40px)",
          }}
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
            scale: [1, 1.1, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 50, damping: 30 },
            y: { type: "spring", stiffness: 50, damping: 30 },
            scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)",
            filter: "blur(40px)",
          }}
          animate={{
            x: mousePosition.x * -15,
            y: mousePosition.y * -15,
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            x: { type: "spring", stiffness: 50, damping: 30 },
            y: { type: "spring", stiffness: 50, damping: 30 },
            scale: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        />

        {/* Floating Stars */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Star className="w-1 h-1 text-white/40" fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Status Badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Badge className="px-6 py-3 bg-white/5 text-white/90 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 rounded-full">
                <motion.div
                  className="w-2 h-2 bg-emerald-400 rounded-full mr-3"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 500 }}>
                  Available for opportunities
                </span>
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white/70 text-lg lg:text-xl tracking-wide"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
              >
                Hello, I'm
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1 }}
                className="text-6xl lg:text-8xl font-bold text-white leading-none"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                }}
              >
                Saharsh
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex items-center justify-center lg:justify-start space-x-4"
              >
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-400" />
                <span
                  className="text-xl lg:text-2xl text-blue-200/90 tracking-wide"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  Full Stack Developer
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400" />
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, lineHeight: 1.7 }}
            >
              Crafting exceptional digital experiences with precision and creativity. I transform complex problems into
              elegant, scalable solutions.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="group bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-white/10 transition-all duration-500 border-0"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <Link to="contact" smooth={true} duration={500}>
                  <Mail className="w-5 h-5 mr-3" />
                  Let's Connect
                  <motion.div
                    className="ml-3"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Rocket className="w-5 h-5" />
                  </motion.div>
                </Link>
              </Button>

              <Button
                onClick={handleDownloadResume}
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white/20 text-white hover:bg-white/5 hover:border-white/40 font-semibold px-8 py-4 rounded-2xl backdrop-blur-xl transition-all duration-500"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <ArrowDown className="w-5 h-5 mr-3" />
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex items-center justify-center lg:justify-start space-x-8"
            >
              <span className="text-white/50 font-medium tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
                Connect
              </span>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-2xl flex items-center justify-center text-white/70 hover:text-white transition-all duration-500 backdrop-blur-xl border border-white/10 hover:border-white/20"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.7 + index * 0.1 }}
                        >
                          {link.icon}
                        </motion.a>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>{link.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile with Floating Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Profile Image */}
              <motion.div
                className="relative w-80 h-80 lg:w-96 lg:h-96"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                {/* Elegant Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20 p-1 backdrop-blur-sm">
                  <div className="w-full h-full rounded-full bg-gray-900/50 backdrop-blur-xl p-2 border border-white/10">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img src="/assets/images/me.jpg" alt="Saharsh Kumar" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-500/10 blur-2xl -z-10" />
              </motion.div>

              {/* Floating Skill Badges */}
              {floatingSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={`absolute px-4 py-2 bg-gradient-to-r ${skill.color} rounded-xl text-white font-medium shadow-2xl backdrop-blur-xl border border-white/20`}
                  style={{
                    left: `calc(50% + ${skill.position.x}px)`,
                    top: `calc(50% + ${skill.position.y}px)`,
                    transform: "translate(-50%, -50%)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                  }}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    opacity: { delay: 2 + skill.delay, duration: 0.8 },
                    scale: { delay: 2 + skill.delay, duration: 0.8 },
                    y: {
                      duration: 3 + index * 0.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: skill.delay,
                    },
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5, ease: "easeInOut" }}
              className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              <ArrowDown className="w-5 h-5 text-white/70" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
