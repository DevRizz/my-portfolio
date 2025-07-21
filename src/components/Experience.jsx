"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import {
  Calendar,
  MapPin,
  Award,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Star,
  Sparkles,
  Download,
  ArrowRight,
  GraduationCap,
  Code,
  Building,
  Users,
  Target,
  TrendingUp,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"

const experiences = [
  {
    organization: "Innomatics Research Lab",
    role: "Full Stack Developer",
    duration: "Sep 2024 - Nov 2024",
    location: "Hyderabad",
    description:
      "Developed a comprehensive e-commerce platform with advanced features including user authentication, product management, intelligent search, shopping cart, secure payment processing, and detailed order tracking. Built with modern technologies ensuring scalability and performance.",
    skills: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe API"],
    achievements: [
      "Implemented responsive design that improved mobile user engagement by 40% using advanced indexing",
      "Reduced page load time by 30% through code optimization and lazy loading",
      "Integrated secure payment gateway with 89.9% transaction success rate",
      "Built real-time inventory management system reducing stock discrepancies by 60%",
    ],
    link: "https://github.com/DevRizz",
    type: "Internship",
    featured: true,
  },
  {
    organization: "Grocliq",
    role: "Front End Developer",
    duration: "April 2025 - May 2025",
    location: "Gurgaon",
    description:
      "Designed and developed a dynamic website for the project and also contributed in their official website development",
    skills: ["Next JS", "Redux", "UI/UX", "Data Analysis"],
    type: "freelance",
    featured: true,
  },
  {
    organization: "IIIT Dharwad",
    role: "B.Tech in Electronics and Communication",
    duration: "2022 - 2026",
    location: "Dharwad",
    description:
      "Pursued Bachelor of Technology in Electronics and Communication Engineering with specialization in digital systems, signal processing, and quantum communication. Actively participated in technical clubs, hackathons, and research projects.",
    skills: ["C++", "Digital Electronics", "Signal Processing", "Embedded Systems", "Quantum Communication", "MATLAB"],
    achievements: [
      "Maintained a CGPA of 9.14/10 throughout the program",
      "Led the college's Tech club organizing 10+ workshops and hackathons",
      "Completed capstone project on IoT-based smart car driving automation",
    ],
    link: "https://iiitdwd.ac.in",
    type: "education",
    featured: true,
  },
]

const ExperienceCard = ({ experience, index, isLeft = false }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: false, amount: 0.3 })

  const getTypeConfig = (type) => {
    const configs = {
      work: {
        icon: <Briefcase className="w-5 h-5" />,
        gradient: "from-blue-500 to-indigo-600",
        bgGradient: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
        borderColor: "border-blue-500/30",
        textColor: "text-blue-600 dark:text-blue-400",
        badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
      },
      education: {
        icon: <GraduationCap className="w-5 h-5" />,
        gradient: "from-emerald-500 to-green-600",
        bgGradient: "from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20",
        borderColor: "border-emerald-500/30",
        textColor: "text-emerald-600 dark:text-emerald-400",
        badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300",
      },
      research: {
        icon: <Sparkles className="w-5 h-5" />,
        gradient: "from-purple-500 to-violet-600",
        bgGradient: "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
        borderColor: "border-purple-500/30",
        textColor: "text-purple-600 dark:text-purple-400",
        badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300",
      },
      "open-source": {
        icon: <Code className="w-5 h-5" />,
        gradient: "from-orange-500 to-red-500",
        bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
        borderColor: "border-orange-500/30",
        textColor: "text-orange-600 dark:text-orange-400",
        badgeColor: "bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300",
      },
    }
    return configs[type] || configs.work
  }

  const config = getTypeConfig(experience.type)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: isLeft ? -100 : 100, y: 50 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: isLeft ? -100 : 100, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      className="relative group"
    >
      {/* Floating Background Effect */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${config.gradient} opacity-0 group-hover:opacity-5 rounded-3xl blur-xl transition-all duration-500`}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <Card
        className={`relative overflow-hidden bg-gradient-to-br ${config.bgGradient} backdrop-blur-sm border ${config.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2`}
      >
        {/* Featured Badge */}
        {experience.featured && (
          <motion.div
            className="absolute top-4 right-4 z-10"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-none px-3 py-1 shadow-lg">
              <Star className="w-3 h-3 mr-1" fill="currentColor" />
              Featured
            </Badge>
          </motion.div>
        )}

        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <motion.div
                className="flex items-center space-x-3 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className={`p-3 rounded-2xl bg-gradient-to-r ${config.gradient} text-white shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {config.icon}
                </motion.div>
                <div>
                  <CardTitle
                    className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {experience.organization}
                  </CardTitle>
                  <CardDescription
                    className={`font-semibold text-lg ${config.textColor}`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {experience.role}
                  </CardDescription>
                </div>
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className={`w-4 h-4 mr-2 ${config.textColor}`} />
                  <span style={{ fontFamily: "'Inter', sans-serif" }}>{experience.duration}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className={`w-4 h-4 mr-2 ${config.textColor}`} />
                  <span style={{ fontFamily: "'Inter', sans-serif" }}>{experience.location}</span>
                </div>
              </motion.div>
            </div>

            <Badge
              className={`${config.badgeColor} px-3 py-1 capitalize`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {experience.type.replace("-", " ")}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <motion.p
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {experience.description}
          </motion.p>

          {/* Skills */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {experience.skills.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + skillIndex * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Badge
                  variant="secondary"
                  className="bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-700/50 transition-all duration-300 border border-gray-200/50 dark:border-gray-600/50"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Expandable Achievements */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="space-y-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50"
              >
                <h4
                  className="font-semibold text-gray-800 dark:text-gray-200 flex items-center"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <Award className={`w-4 h-4 mr-2 ${config.textColor}`} />
                  Key Achievements
                </h4>
                <div className="space-y-3">
                  {experience.achievements?.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start space-x-3 p-3 bg-white/30 dark:bg-gray-800/30 rounded-xl backdrop-blur-sm"
                    >
                      <motion.div
                        className={`p-1 rounded-full bg-gradient-to-r ${config.gradient} text-white mt-1`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <TrendingUp className="w-3 h-3" />
                      </motion.div>
                      <span
                        className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {achievement}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {experience.link && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className={`bg-gradient-to-r ${config.gradient} text-white border-none hover:shadow-lg transition-all duration-300 hover:scale-105`}
                            asChild
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            <a href={experience.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Project
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Open in new tab</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>

        <CardFooter className="pt-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-full justify-center ${config.textColor} hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4 mr-2" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-2" />
                Show More
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

  const tabConfig = {
    all: { gradient: "from-blue-600 to-purple-600", icon: <Target className="w-4 h-4" /> },
    work: { gradient: "from-blue-500 to-indigo-600", icon: <Briefcase className="w-4 h-4" /> },
    education: { gradient: "from-emerald-500 to-green-600", icon: <GraduationCap className="w-4 h-4" /> },
    research: { gradient: "from-purple-500 to-violet-600", icon: <Sparkles className="w-4 h-4" /> },
    "open-source": { gradient: "from-orange-500 to-red-500", icon: <Code className="w-4 h-4" /> },
  }

  return (
    <section
      id="experience"
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #94a3b8 75%, #64748b 100%)",
      }}
    >
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        {/* Subtle Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.2) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)`,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-6 px-6 py-2 text-primary border-primary/30 dark:border-primary/50 bg-white/80 backdrop-blur-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <Building className="w-4 h-4 mr-2" />
            Professional Journey
          </Badge>

          <h2
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Experience & Achievements
          </h2>

          <div className="flex items-center justify-center mb-8">
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

          <p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            A comprehensive timeline showcasing my professional growth, key milestones, and impactful contributions
            across various domains.
          </p>
        </motion.div>

        {/* Enhanced Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-5 w-full max-w-4xl mx-auto bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 p-2 rounded-2xl">
              {Object.entries(tabConfig).map(([key, config]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className={`data-[state=active]:bg-gradient-to-r data-[state=active]:${config.gradient} data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 rounded-xl font-medium capitalize`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <span className="mr-2">{config.icon}</span>
                  {key === "open-source" ? "Open Source" : key}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Central Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isTimelineInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full hidden lg:block"
            style={{ top: "2rem", bottom: "2rem" }}
          />

          {/* Timeline Nodes */}
          <div className="hidden lg:block">
            {filteredExperiences.map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={isTimelineInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ delay: index * 0.3, type: "spring", stiffness: 200 }}
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-xl border-4 border-white dark:border-gray-900 z-10"
                style={{ top: `${2 + index * 25}rem` }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Experience Cards */}
          <div className="space-y-16 lg:space-y-24">
            {filteredExperiences.map((exp, index) => (
              <div
                key={index}
                className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                  index % 2 === 0 ? "" : "lg:grid-flow-col-dense"
                }`}
              >
                <div className={`${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8 lg:col-start-2"}`}>
                  <ExperienceCard experience={exp} index={index} isLeft={index % 2 === 0} />
                </div>
                <div className={`hidden lg:block ${index % 2 === 0 ? "lg:pl-8" : "lg:pr-8 lg:col-start-1"}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                    className="text-center"
                  >
                    <div className="text-6xl font-bold text-gray-200 dark:text-gray-700 mb-2">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {exp.type.replace("-", " ")}
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="relative bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 p-12 rounded-3xl max-w-4xl mx-auto backdrop-blur-sm border border-white/20">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl"
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

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                className="mb-6"
              >
                <Users className="w-16 h-16 text-purple-500 mx-auto" />
              </motion.div>

              <h3
                className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Ready to Create Something Amazing?
              </h3>

              <p
                className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                I'm always excited to take on new challenges and collaborate on innovative projects. Let's connect and
                build the future together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <a href="/assets/Saharsh_Resume.pdf" download>
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-2 border-purple-200 dark:border-purple-700 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  asChild
                >
                  <a href="#contact">
                    <Users className="w-5 h-5 mr-2" />
                    Let's Connect
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience