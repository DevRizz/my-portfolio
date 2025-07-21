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
                  Learner & Developer
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
              I am always passionate about learning new things out there and donot hesitate to explore each domain. I also do DEV + DSA solving complex problems across different platforms.
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


// "use client"
// import { useEffect, useRef, useState } from "react"
// import { motion, useScroll, useTransform } from "framer-motion"
// import { Link } from "react-scroll"
// import { ArrowDown, Github, Linkedin, Twitter, Rocket, Terminal } from "lucide-react"
// import { Button } from "./ui/button"
// import { Badge } from "./ui/badge"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

// const Hero = () => {
//   const containerRef = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"],
//   })
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const [terminalText, setTerminalText] = useState("")
//   const [showCursor, setShowCursor] = useState(true)

//   const fullTerminalText =
//     "I am always passionate about learning new things out there and do not hesitate to explore each domain. I also do DEV + DSA solving complex problems across different platforms."

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 2 - 1,
//         y: (e.clientY / window.innerHeight) * 2 - 1,
//       })
//     }
//     window.addEventListener("mousemove", handleMouseMove)
//     return () => window.removeEventListener("mousemove", handleMouseMove)
//   }, [])

//   // Terminal typing effect
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       let i = 0
//       const typingInterval = setInterval(() => {
//         if (i < fullTerminalText.length) {
//           setTerminalText(fullTerminalText.slice(0, i + 1))
//           i++
//         } else {
//           clearInterval(typingInterval)
//         }
//       }, 50)
//       return () => clearInterval(typingInterval)
//     }, 2000)

//     return () => clearTimeout(timer)
//   }, [])

//   // Cursor blinking effect
//   useEffect(() => {
//     const cursorInterval = setInterval(() => {
//       setShowCursor((prev) => !prev)
//     }, 500)
//     return () => clearInterval(cursorInterval)
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

//   const binaryNumbers = ["01001000", "01100101", "01101100", "01101100", "01101111"]
//   const techStack = [
//     { name: "React", icon: "⚛️" },
//     { name: "Node.js", icon: "🟢" },
//     { name: "TypeScript", icon: "🔷" },
//     { name: "Next.js", icon: "▲" },
//     { name: "MongoDB", icon: "🍃" },
//     { name: "Python", icon: "🐍" },
//   ]

//   const handleDownloadResume = () => {
//     const link = document.createElement("a")
//     link.href = "/assets/Saharsh_Resume.pdf"
//     link.download = "Saharsh_Resume.pdf"
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
//   }

//   return (
//     <section
//       ref={containerRef}
//       id="hero"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
//       style={{
//         background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f1419 75%, #000000 100%)",
//       }}
//     >
//       {/* Matrix-style Background */}
//       <div className="absolute inset-0">
//         {/* Binary Rain Effect */}
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute text-green-400/20 font-mono text-xs"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `-10%`,
//             }}
//             animate={{
//               y: ["0vh", "110vh"],
//             }}
//             transition={{
//               duration: 8 + Math.random() * 4,
//               repeat: Number.POSITIVE_INFINITY,
//               delay: Math.random() * 5,
//               ease: "linear",
//             }}
//           >
//             {binaryNumbers[Math.floor(Math.random() * binaryNumbers.length)]}
//           </motion.div>
//         ))}

//         {/* Glitch Grid */}
//         <div
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(0,255,0,0.1) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(0,255,0,0.1) 1px, transparent 1px)
//             `,
//             backgroundSize: "30px 30px",
//           }}
//         />

//         {/* Ambient Orbs */}
//         <motion.div
//           className="absolute top-1/3 left-1/5 w-96 h-96 rounded-full opacity-10"
//           style={{
//             background: "radial-gradient(circle, rgba(0, 255, 0, 0.3) 0%, transparent 70%)",
//             filter: "blur(60px)",
//           }}
//           animate={{
//             x: mousePosition.x * 30,
//             y: mousePosition.y * 30,
//             scale: [1, 1.2, 1],
//           }}
//           transition={{
//             x: { type: "spring", stiffness: 50, damping: 30 },
//             y: { type: "spring", stiffness: 50, damping: 30 },
//             scale: { duration: 6, repeat: Number.POSITIVE_INFINITY },
//           }}
//         />

//         <motion.div
//           className="absolute bottom-1/3 right-1/5 w-80 h-80 rounded-full opacity-10"
//           style={{
//             background: "radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, transparent 70%)",
//             filter: "blur(60px)",
//           }}
//           animate={{
//             x: mousePosition.x * -20,
//             y: mousePosition.y * -20,
//             scale: [1.1, 1, 1.1],
//           }}
//           transition={{
//             x: { type: "spring", stiffness: 50, damping: 30 },
//             y: { type: "spring", stiffness: 50, damping: 30 },
//             scale: { duration: 8, repeat: Number.POSITIVE_INFINITY },
//           }}
//         />
//       </div>

//       {/* Main Content */}
//       <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="text-center space-y-12">
//           {/* Terminal Header */}
//           <motion.div
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="flex items-center justify-center space-x-4 mb-8"
//           >
//             <div className="flex space-x-2">
//               <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//               <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//               <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//             </div>
//             <div className="text-green-400 font-mono text-sm">~/saharsh-portfolio</div>
//           </motion.div>

//           {/* Status Badge */}
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
//             <Badge className="px-6 py-3 bg-green-400/10 text-green-400 border border-green-400/20 backdrop-blur-xl hover:bg-green-400/20 transition-all duration-500 rounded-lg font-mono">
//               <motion.div
//                 className="w-2 h-2 bg-green-400 rounded-full mr-3"
//                 animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
//                 transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//               />
//               <Terminal className="w-4 h-4 mr-2" />
//               <span>{"> status: available_for_opportunities"}</span>
//             </Badge>
//           </motion.div>

//           {/* Main Content Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
//             {/* Left - Binary Art */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1, delay: 0.5 }}
//               className="hidden lg:flex flex-col space-y-4"
//             >
//               {[...Array(8)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   className="font-mono text-green-400/30 text-xs"
//                   animate={{ opacity: [0.3, 0.7, 0.3] }}
//                   transition={{ duration: 2, delay: i * 0.2, repeat: Number.POSITIVE_INFINITY }}
//                 >
//                   {Array.from({ length: 16 }, () => Math.round(Math.random())).join("")}
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* Center - Main Content */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1, delay: 0.7 }}
//               className="space-y-8"
//             >
//               {/* Profile Image with Holographic Effect */}
//               <div className="relative mx-auto w-48 h-48 lg:w-56 lg:h-56">
//                 <motion.div
//                   className="absolute inset-0 rounded-full"
//                   style={{
//                     background: "conic-gradient(from 0deg, #00ff00, #00ffff, #0080ff, #00ff00)",
//                   }}
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
//                 >
//                   <div className="absolute inset-1 rounded-full bg-black/90 backdrop-blur-xl border border-green-400/20">
//                     <div className="w-full h-full rounded-full overflow-hidden p-2">
//                       <img
//                         src="/placeholder.svg?height=300&width=300"
//                         alt="Saharsh Kumar"
//                         className="w-full h-full object-cover rounded-full filter brightness-110 contrast-110"
//                       />
//                     </div>
//                   </div>
//                 </motion.div>

//                 {/* Scanning Lines */}
//                 <motion.div
//                   className="absolute inset-0 rounded-full"
//                   style={{
//                     background: "linear-gradient(90deg, transparent 0%, rgba(0,255,0,0.1) 50%, transparent 100%)",
//                   }}
//                   animate={{ rotate: [0, 360] }}
//                   transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
//                 />

//                 {/* Corner Brackets */}
//                 <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-green-400"></div>
//                 <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-green-400"></div>
//                 <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-green-400"></div>
//                 <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-green-400"></div>
//               </div>

//               {/* Name and Title */}
//               <div className="space-y-4">
//                 <motion.h1
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 1 }}
//                   className="text-5xl lg:text-7xl font-bold text-white leading-none"
//                   style={{
//                     fontFamily: "'Orbitron', monospace",
//                     textShadow: "0 0 20px rgba(0,255,0,0.3)",
//                   }}
//                 >
//                   SAHARSH
//                 </motion.h1>

//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 1.2 }}
//                   className="text-green-400 font-mono text-lg"
//                 >
//                   {'> role: "Full-Stack Developer"'}
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* Right - Tech Stack */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1, delay: 0.5 }}
//               className="hidden lg:flex flex-col space-y-3"
//             >
//               {techStack.map((tech, i) => (
//                 <motion.div
//                   key={tech.name}
//                   className="flex items-center space-x-3 text-green-400/70 font-mono text-sm"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 1.5 + i * 0.1 }}
//                   whileHover={{ x: 10, color: "#00ff00" }}
//                 >
//                   <span>{tech.icon}</span>
//                   <span>{tech.name}</span>
//                   <div className="flex-1 border-b border-dotted border-green-400/30"></div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Terminal Description */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.8 }}
//             className="max-w-4xl mx-auto"
//           >
//             <div className="bg-black/40 border border-green-400/20 rounded-lg p-6 backdrop-blur-xl">
//               <div className="flex items-center space-x-2 mb-4">
//                 <span className="text-green-400 font-mono">saharsh@portfolio:~$</span>
//                 <span className="text-green-400 font-mono">cat about.txt</span>
//               </div>
//               <div className="text-green-300 font-mono text-sm lg:text-base leading-relaxed">
//                 {terminalText}
//                 {showCursor && <span className="bg-green-400 text-black px-1">|</span>}
//               </div>
//             </div>
//           </motion.div>

//           {/* Action Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 2.5 }}
//             className="flex flex-col sm:flex-row gap-6 justify-center items-center"
//           >
//             <Button
//               asChild
//               size="lg"
//               className="group bg-green-400 text-black hover:bg-green-300 font-mono font-bold px-8 py-4 rounded-lg shadow-2xl hover:shadow-green-400/20 transition-all duration-500"
//             >
//               <Link to="contact" smooth={true} duration={500}>
//                 <Terminal className="w-5 h-5 mr-3" />
//                 ./connect.sh
//                 <motion.div
//                   className="ml-3"
//                   animate={{ x: [0, 5, 0] }}
//                   transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//                 >
//                   <Rocket className="w-5 h-5" />
//                 </motion.div>
//               </Link>
//             </Button>

//             <Button
//               onClick={handleDownloadResume}
//               variant="outline"
//               size="lg"
//               className="bg-transparent border-2 border-green-400/40 text-green-400 hover:bg-green-400/10 hover:border-green-400 font-mono font-bold px-8 py-4 rounded-lg backdrop-blur-xl transition-all duration-500"
//             >
//               <ArrowDown className="w-5 h-5 mr-3" />
//               download resume.pdf
//             </Button>
//           </motion.div>

//           {/* Social Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 2.7 }}
//             className="flex items-center justify-center space-x-8"
//           >
//             <span className="text-green-400/70 font-mono text-sm">{"> social_links:"}</span>
//             <div className="flex space-x-4">
//               {socialLinks.map((link, index) => (
//                 <TooltipProvider key={index}>
//                   <Tooltip>
//                     <TooltipTrigger asChild>
//                       <motion.a
//                         href={link.href}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="w-12 h-12 bg-green-400/10 hover:bg-green-400/20 rounded-lg flex items-center justify-center text-green-400/70 hover:text-green-400 transition-all duration-500 backdrop-blur-xl border border-green-400/20 hover:border-green-400/40"
//                         whileHover={{ scale: 1.1, y: -2 }}
//                         whileTap={{ scale: 0.95 }}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 2.9 + index * 0.1 }}
//                       >
//                         {link.icon}
//                       </motion.a>
//                     </TooltipTrigger>
//                     <TooltipContent side="bottom" className="bg-black border-green-400/20 text-green-400">
//                       <p className="font-mono">{link.label}</p>
//                     </TooltipContent>
//                   </Tooltip>
//                 </TooltipProvider>
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 3 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         >
//           <Link to="about" smooth={true} duration={500} className="cursor-pointer">
//             <motion.div
//               animate={{ y: [0, 8, 0] }}
//               transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5, ease: "easeInOut" }}
//               className="w-12 h-12 bg-green-400/10 hover:bg-green-400/20 rounded-lg flex items-center justify-center backdrop-blur-xl border border-green-400/20 hover:border-green-400/40 transition-all duration-500"
//             >
//               <ArrowDown className="w-5 h-5 text-green-400/70" />
//             </motion.div>
//           </Link>
//         </motion.div>
//       </motion.div>
//     </section>
//   )
// }

// export default Hero