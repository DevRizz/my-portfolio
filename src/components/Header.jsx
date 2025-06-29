// "use client"

// import { useState, useEffect } from "react"
// import { Link } from "react-scroll"
// import { motion } from "framer-motion"
// import { Menu } from "lucide-react"
// import { Button } from "./ui/button"
// import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
// import ThemeToggle from "./ThemeToggle"

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [activeSection, setActiveSection] = useState("hero")
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   const navItems = [
//     { name: "About", id: "about" },
//     { name: "Skills", id: "skills" },
//     { name: "Experience", id: "experience" },
//     { name: "Projects", id: "projects" },
//     { name: "Contact", id: "contact" },
//   ]

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0)

//       // Find the current active section
//       const sections = navItems.map((item) => item.id)
//       sections.unshift("hero") // Add hero section

//       for (let i = sections.length - 1; i >= 0; i--) {
//         const section = document.getElementById(sections[i])
//         if (section) {
//           const rect = section.getBoundingClientRect()
//           if (rect.top <= 100) {
//             setActiveSection(sections[i])
//             break
//           }
//         }
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

//   const headerVariants = {
//     initial: { y: -100 },
//     animate: { y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
//   }

//   const logoVariants = {
//     hover: { scale: 1.05 },
//     tap: { scale: 0.95 },
//   }

//   const navItemVariants = {
//     hover: { y: -2 },
//     tap: { y: 0 },
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

//   return (
//     <motion.header
//       initial="initial"
//       animate="animate"
//       variants={headerVariants}
//       className={`sticky top-0 z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
//         <div className="flex justify-between items-center">
//           <Link to="hero" smooth={true} duration={500}>
//             <motion.div
//               className="text-2xl font-bold cursor-pointer text-gray-800 dark:text-white"
//               variants={logoVariants}
//               whileHover="hover"
//               whileTap="tap"
//             >
//               <span className="relative group">
//                 Saharsh.
//                 <motion.span
//                   className="absolute -bottom-1 left-0 h-0.5 bg-primary"
//                   initial={{ width: 0 }}
//                   whileHover={{ width: "100%" }}
//                   transition={{ duration: 0.3 }}
//                 ></motion.span>
//               </span>
//             </motion.div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-6">
//             {navItems.map((item) => (
//               <Link
//                 key={item.id}
//                 to={item.id}
//                 smooth={true}
//                 duration={500}
//                 spy={true}
//                 offset={-70}
//                 activeClass="active"
//               >
//                 <motion.div
//                   className={`relative text-gray-600 dark:text-gray-300 cursor-pointer transition-colors duration-300 ${
//                     activeSection === item.id ? "text-primary dark:text-primary font-medium" : ""
//                   }`}
//                   variants={navItemVariants}
//                   whileHover="hover"
//                   whileTap="tap"
//                 >
//                   <span className="relative group">
//                     {item.name}
//                     <motion.span
//                       className={`absolute -bottom-1 left-0 h-0.5 ${
//                         activeSection === item.id ? "bg-primary w-full" : "bg-primary"
//                       }`}
//                       initial={{ width: activeSection === item.id ? "100%" : 0 }}
//                       whileHover={{ width: "100%" }}
//                       transition={{ duration: 0.3 }}
//                     ></motion.span>
//                   </span>
//                 </motion.div>
//               </Link>
//             ))}

//             <TooltipProvider>
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Button variant="outline" size="sm" asChild>
//                     <a target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }} onClick={handleDownloadResume}>
//                       Resume
//                     </a>
//                   </Button>
//                 </TooltipTrigger>
//                 <TooltipContent>View my resume</TooltipContent>
//               </Tooltip>
//             </TooltipProvider>

//             <ThemeToggle />
//           </nav>

//           {/* Mobile Navigation */}
//           <div className="flex items-center md:hidden">
//             <ThemeToggle />
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon" className="ml-2">
//                   <Menu className="h-6 w-6" />
//                   <span className="sr-only">Toggle menu</span>
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="w-[300px] sm:w-[400px]">
//                 <div className="flex flex-col h-full">
//                   <div className="flex-1 py-4">
//                     <h2 className="text-2xl font-bold mb-6">Navigation</h2>
//                     <nav className="flex flex-col space-y-4">
//                       {navItems.map((item) => (
//                         <Link
//                           key={item.id}
//                           to={item.id}
//                           smooth={true}
//                           duration={500}
//                           spy={true}
//                           offset={-70}
//                           onClick={() => setIsMobileMenuOpen(false)}
//                         >
//                           <motion.div
//                             className={`text-lg py-2 border-l-2 pl-3 ${
//                               activeSection === item.id
//                                 ? "border-primary text-primary font-medium"
//                                 : "border-transparent text-gray-600 dark:text-gray-300"
//                             }`}
//                             whileHover={{ x: 5 }}
//                             transition={{ duration: 0.2 }}
//                           >
//                             {item.name}
//                           </motion.div>
//                         </Link>
//                       ))}
//                     </nav>
//                   </div>
//                   <div className="py-4 border-t border-gray-200 dark:border-gray-700">
//                     <Button className="w-full" asChild>
//                       <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
//                         View Resume
//                       </a>
//                     </Button>
//                   </div>
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </motion.header>
//   )
// }

// export default Header

"use client"

import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import ThemeToggle from "./ThemeToggle"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.id)
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
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/assets/Saharsh_Resume.pdf"
    link.download = "Saharsh_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl shadow-2xl border-b border-gray-200/10 dark:border-gray-700/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="hero" smooth={true} duration={500}>
              <motion.div className="cursor-pointer group" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <motion.h1
                  className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
                  style={{
                    fontFamily: "'Playfair Display', 'Georgia', serif",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Saharsh
                </motion.h1>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <Link key={item.id} to={item.id} smooth={true} duration={500} spy={true} offset={-80}>
                  <motion.div
                    className="relative px-6 py-3 cursor-pointer group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <span
                      className={`relative z-10 font-medium transition-all duration-300 ${
                        activeSection === item.id
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                      }`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.name}
                    </span>

                    <AnimatePresence>
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </AnimatePresence>

                    <motion.div
                      className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ zIndex: activeSection === item.id ? -1 : 1 }}
                    />
                  </motion.div>
                </Link>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="hidden md:block"
              >
                <Button
                  onClick={handleDownloadResume}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
              >
                <ThemeToggle />
              </motion.div>

              <div className="lg:hidden">
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="relative w-10 h-10 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                    >
                      <AnimatePresence mode="wait">
                        {isMobileMenuOpen ? (
                          <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <X className="h-5 w-5" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="menu"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Menu className="h-5 w-5" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border-l border-gray-200/20 dark:border-gray-700/20"
                  >
                    <div className="flex flex-col h-full pt-8">
                      <div className="mb-8">
                        <h2
                          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          Saharsh
                        </h2>
                        <p
                          className="text-sm text-gray-600 dark:text-gray-400 mt-1"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Full Stack Developer
                        </p>
                      </div>

                      <nav className="flex-1 space-y-2">
                        {navItems.map((item, index) => (
                          <Link
                            key={item.id}
                            to={item.id}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <motion.div
                              className={`flex items-center justify-between px-4 py-4 rounded-xl cursor-pointer transition-all duration-300 ${
                                activeSection === item.id
                                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-l-4 border-blue-500"
                                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                              }`}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ x: 4 }}
                            >
                              <span className="font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                                {item.name}
                              </span>
                              {activeSection === item.id && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-2 h-2 bg-blue-500 rounded-full"
                                />
                              )}
                            </motion.div>
                          </Link>
                        ))}
                      </nav>

                      <div className="pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                        <Button
                          onClick={() => {
                            handleDownloadResume()
                            setIsMobileMenuOpen(false)
                          }}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-xl shadow-lg"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Resume
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600"
          style={{
            width: `${Math.min(
              100,
              (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
            )}%`,
          }}
          initial={{ width: 0 }}
        />
      </motion.header>

      <div className="h-20" />
    </>
  )
}

export default Header
