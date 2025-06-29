// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Github, Linkedin, Twitter, Heart, ArrowRight, Mail } from 'lucide-react';
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
// import { Separator } from "./ui/separator";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   const [email, setEmail] = useState("");
//   const [isSubscribing, setIsSubscribing] = useState(false);
//   const [subscribeStatus, setSubscribeStatus] = useState(null);

//   const handleSubscribe = async (e) => {
//     e.preventDefault();
//     if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
//       setSubscribeStatus("error");
//       return;
//     }

//     setIsSubscribing(true);

//     // Simulate API call
//     setTimeout(() => {
//       setIsSubscribing(false);
//       setSubscribeStatus("success");
//       setEmail("");

//       // Reset status after 3 seconds
//       setTimeout(() => {
//         setSubscribeStatus(null);
//       }, 3000);
//     }, 1500);
//   };

//   const socialLinks = [
//     {
//       name: "LinkedIn",
//       href: "https://www.linkedin.com/in/saharsh-kumar-9768a8264/",
//       icon: <Linkedin className="h-5 w-5" />,
//     },
//     {
//       name: "GitHub",
//       href: "https://github.com/Slygriyrsk",
//       icon: <Github className="h-5 w-5" />,
//     },
//     {
//       name: "Twitter",
//       href: "https://twitter.com/repatriation_23",
//       icon: <Twitter className="h-5 w-5" />,
//     },
//   ];

//   const footerLinks = [
//     {
//       title: "Navigation",
//       links: [
//         { name: "Home", href: "#" },
//         { name: "About", href: "#about" },
//         { name: "Skills", href: "#skills" },
//         { name: "Projects", href: "#projects" },
//         { name: "Contact", href: "#contact" },
//       ],
//     },
//     {
//       title: "Resources",
//       links: [
//         { name: "Resume", href: "#" },
//         { name: "Blog", href: "#" },
//         { name: "Portfolio", href: "#" },
//       ],
//     },
//   ];

//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* About */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-bold">Saharsh Kumar</h3>
//             <p className="text-gray-400">
//               Full Stack Developer passionate about creating elegant solutions to complex problems.
//             </p>
//             <div className="flex space-x-4">
//               {socialLinks.map((link, index) => (
//                 <TooltipProvider key={index}>
//                   <Tooltip>
//                     <TooltipTrigger asChild>
//                       <motion.a
//                         href={link.href}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-gray-400 hover:text-white transition-colors"
//                         whileHover={{ scale: 1.2 }}
//                         whileTap={{ scale: 0.9 }}
//                         aria-label={link.name}
//                       >
//                         {link.icon}
//                       </motion.a>
//                     </TooltipTrigger>
//                     <TooltipContent side="top">{link.name}</TooltipContent>
//                   </Tooltip>
//                 </TooltipProvider>
//               ))}
//             </div>
//           </div>

//           {/* Links */}
//           {footerLinks.map((section, index) => (
//             <div key={index} className="space-y-4">
//               <h3 className="text-lg font-semibold">{section.title}</h3>
//               <ul className="space-y-2">
//                 {section.links.map((link, linkIndex) => (
//                   <li key={linkIndex}>
//                     <a
//                       href={link.href}
//                       className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
//                     >
//                       <span>{link.name}</span>
//                       <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}

//           {/* Newsletter */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Stay Updated</h3>
//             <p className="text-gray-400">Subscribe to my newsletter for the latest updates.</p>
//             <form onSubmit={handleSubscribe} className="space-y-2">
//               <div className="flex">
//                 <Input
//                   type="email"
//                   placeholder="Your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="rounded-r-none bg-gray-800 border-gray-700 text-white"
//                 />
//                 <Button type="submit" disabled={isSubscribing} className="rounded-l-none">
//                   {isSubscribing ? "..." : <Mail className="h-4 w-4" />}
//                 </Button>
//               </div>
//               {subscribeStatus === "success" && <p className="text-green-400 text-sm">Thank you for subscribing!</p>}
//               {subscribeStatus === "error" && <p className="text-red-400 text-sm">Please enter a valid email.</p>}
//             </form>
//           </div>
//         </div>

//         <Separator className="my-8 bg-gray-800" />

//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <p className="text-gray-400 text-sm">&copy; {currentYear} Saharsh Kumar. All rights reserved.</p>
//           <motion.p
//             className="text-gray-400 text-sm mt-2 md:mt-0 flex items-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> and code
//           </motion.p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Github,
  Linkedin,
  Twitter,
  Heart,
  ArrowRight,
  Mail,
  MapPin,
  Send,
  Sparkles,
  Code,
  Coffee,
  Zap,
  Star,
  CheckCircle,
  ExternalLink,
} from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Separator } from "./ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { Badge } from "./ui/badge"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscribeStatus, setSubscribeStatus] = useState(null)
  const [hoveredSocial, setHoveredSocial] = useState(null)

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setSubscribeStatus("error")
      return
    }

    setIsSubscribing(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubscribing(false)
      setSubscribeStatus("success")
      setEmail("")
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubscribeStatus(null)
      }, 3000)
    }, 1500)
  }

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/saharsh-kumar-9768a8264/",
      icon: <Linkedin className="h-5 w-5" />,
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-500 hover:to-blue-600",
      description: "Professional Network",
    },
    {
      name: "GitHub",
      href: "https://github.com/Slygriyrsk",
      icon: <Github className="h-5 w-5" />,
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:from-gray-600 hover:to-gray-800",
      description: "Code Repository",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/repatriation_23",
      icon: <Twitter className="h-5 w-5" />,
      color: "from-sky-500 to-sky-600",
      hoverColor: "hover:from-sky-400 hover:to-sky-500",
      description: "Latest Updates",
    },
  ]

  const quickLinks = [
    { name: "Home", href: "#", icon: <Zap className="h-4 w-4" /> },
    { name: "About", href: "#about", icon: <Star className="h-4 w-4" /> },
    { name: "Skills", href: "#skills", icon: <Code className="h-4 w-4" /> },
    { name: "Projects", href: "#projects", icon: <Coffee className="h-4 w-4" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="h-4 w-4" /> },
  ]

  const resources = [
    { name: "Resume", href: "#", external: true },
    { name: "Blog", href: "#", external: true },
    { name: "Portfolio", href: "#", external: false },
  ]

  const stats = [
    { label: "Projects Completed", value: "50+" },
    { label: "Technologies Mastered", value: "25+" },
    { label: "Years of Experience", value: "3+" },
    { label: "Coffee Cups", value: "∞" },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-yellow-400" />
            <span
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Saharsh Kumar
            </span>
            <Sparkles className="h-6 w-6 text-yellow-400" />
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Crafting digital experiences with passion, precision, and a touch of magic ✨
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3
                className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                About Me
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                Full Stack Developer passionate about creating elegant solutions to complex problems. Always learning,
                always building.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>IIIT Dharwad, Karnataka</span>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Connect</h4>
              <div className="flex flex-col gap-2">
                {socialLinks.map((link, index) => (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r ${link.color} ${link.hoverColor} transition-all duration-300 group`}
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          onHoverStart={() => setHoveredSocial(index)}
                          onHoverEnd={() => setHoveredSocial(null)}
                        >
                          <motion.div
                            animate={{ rotate: hoveredSocial === index ? 360 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {link.icon}
                          </motion.div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">{link.name}</div>
                            <div className="text-xs opacity-80">{link.description}</div>
                          </div>
                          <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.a>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>Visit my {link.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Navigation
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <motion.a
                    href={link.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group py-2"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div whileHover={{ scale: 1.2, rotate: 15 }} className="text-blue-400">
                      {link.icon}
                    </motion.div>
                    <span style={{ fontFamily: "'Inter', sans-serif" }}>{link.name}</span>
                    <ArrowRight className="ml-auto h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Resources
            </h3>
            <ul className="space-y-2">
              {resources.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <motion.a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group py-2"
                    whileHover={{ x: 5 }}
                  >
                    <span style={{ fontFamily: "'Inter', sans-serif" }}>{link.name}</span>
                    {link.external && <ExternalLink className="h-3 w-3" />}
                    <ArrowRight className="ml-auto h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-4"
          >
            <div>
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Stay Updated
              </h3>
              <p className="text-gray-300 text-sm mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                Get the latest updates on my projects and tech insights.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 backdrop-blur-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>

              <Button
                type="submit"
                disabled={isSubscribing}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all duration-300 group"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {isSubscribing ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="h-4 w-4"
                  >
                    <Send className="h-4 w-4" />
                  </motion.div>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Subscribe
                  </>
                )}
              </Button>

              <AnimatePresence>
                {subscribeStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-green-400 text-sm"
                  >
                    <CheckCircle className="h-4 w-4" />
                    <span>Thank you for subscribing!</span>
                  </motion.div>
                )}
                {subscribeStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-400 text-sm"
                  >
                    Please enter a valid email address.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-4">
            <p className="text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              &copy; {currentYear} Saharsh Kumar. All rights reserved.
            </p>
            <Badge variant="outline" className="border-white/20 text-gray-300">
              Made in India 🇮🇳
            </Badge>
          </div>

          <motion.div
            className="flex items-center gap-2 text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span>Crafted with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Heart className="h-4 w-4 text-red-500" />
            </motion.div>
            <span>and lots of</span>
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Coffee className="h-4 w-4 text-amber-500" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer