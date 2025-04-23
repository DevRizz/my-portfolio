// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-scroll';
// import ThemeToggle from './ThemeToggle';
// import { motion } from 'framer-motion';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

//   return (
//     <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-800 shadow-md' : 'bg-transparent'}`}>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
//         <div className="flex justify-between items-center">
//           <Link to="hero" smooth={true} duration={500}>
//             <motion.div
//               className="text-2xl font-bold cursor-pointer text-gray-800 dark:text-white transition-colors duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="relative group">
//                 Saharsh.
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
//               </span>
//             </motion.div>
//           </Link>
//           <nav className="hidden md:flex space-x-6">
//             {navItems.map((item) => (
//               <Link
//                 key={item}
//                 to={item.toLowerCase()}
//                 smooth={true}
//                 duration={500}
//               >
//                 <motion.div
//                   className="relative text-gray-600 dark:text-gray-300 cursor-pointer transition-colors duration-300"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <span className="relative group">
//                     {item}
//                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
//                   </span>
//                 </motion.div>
//               </Link>
//             ))}
//           </nav>
//           <ThemeToggle />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client"

import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import ThemeToggle from "./ThemeToggle"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)

      // Find the current active section
      const sections = navItems.map((item) => item.id)
      sections.unshift("hero") // Add hero section

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const headerVariants = {
    initial: { y: -100 },
    animate: { y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  }

  const logoVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  }

  const navItemVariants = {
    hover: { y: -2 },
    tap: { y: 0 },
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

  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={headerVariants}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="hero" smooth={true} duration={500}>
            <motion.div
              className="text-2xl font-bold cursor-pointer text-gray-800 dark:text-white"
              variants={logoVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative group">
                Saharsh.
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="active"
              >
                <motion.div
                  className={`relative text-gray-600 dark:text-gray-300 cursor-pointer transition-colors duration-300 ${
                    activeSection === item.id ? "text-primary dark:text-primary font-medium" : ""
                  }`}
                  variants={navItemVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span className="relative group">
                    {item.name}
                    <motion.span
                      className={`absolute -bottom-1 left-0 h-0.5 ${
                        activeSection === item.id ? "bg-primary w-full" : "bg-primary"
                      }`}
                      initial={{ width: activeSection === item.id ? "100%" : 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    ></motion.span>
                  </span>
                </motion.div>
              </Link>
            ))}

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm" asChild>
                    <a target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }} onClick={handleDownloadResume}>
                      Resume
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>View my resume</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <ThemeToggle />
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex-1 py-4">
                    <h2 className="text-2xl font-bold mb-6">Navigation</h2>
                    <nav className="flex flex-col space-y-4">
                      {navItems.map((item) => (
                        <Link
                          key={item.id}
                          to={item.id}
                          smooth={true}
                          duration={500}
                          spy={true}
                          offset={-70}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <motion.div
                            className={`text-lg py-2 border-l-2 pl-3 ${
                              activeSection === item.id
                                ? "border-primary text-primary font-medium"
                                : "border-transparent text-gray-600 dark:text-gray-300"
                            }`}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.name}
                          </motion.div>
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <div className="py-4 border-t border-gray-200 dark:border-gray-700">
                    <Button className="w-full" asChild>
                      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        View Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header