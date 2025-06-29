// "use client"

// import { Badge } from "@/components/ui/badge"

// import { useState, useRef } from "react"
// import { motion } from "framer-motion"
// import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
// import { Input } from "./ui/input"
// import { Textarea } from "./ui/textarea"
// import { Button } from "./ui/button"
// import { Label } from "./ui/label"
// import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
// import emailjs from "@emailjs/browser"

// const contactMethods = [
//   {
//     icon: <Mail className="h-6 w-6" />,
//     title: "Email",
//     value: "slygrin005@gmail.com",
//     href: "mailto:slygrin005@gmail.com",
//   },
//   {
//     icon: <Phone className="h-6 w-6" />,
//     title: "Phone",
//     value: "+91 6287279304",
//     href: "tel:+916287279304",
//   },
//   {
//     icon: <MapPin className="h-6 w-6" />,
//     title: "Location",
//     value: "IIIT Dharwad, Karnataka, India",
//     href: "https://maps.google.com/?q=IIIT+Dharwad+Karnataka+India",
//   },
// ]

// const socialLinks = [
//   {
//     name: "GitHub",
//     url: "https://github.com/Slygriyrsk",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="h-5 w-5"
//       >
//         <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
//       </svg>
//     ),
//   },
//   {
//     name: "LinkedIn",
//     url: "https://www.linkedin.com/in/saharshkumar03/",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="h-5 w-5"
//       >
//         <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//         <rect x="2" y="9" width="4" height="12"></rect>
//         <circle cx="4" cy="4" r="2"></circle>
//       </svg>
//     ),
//   },
//   {
//     name: "Twitter",
//     url: "https://twitter.com/repatriation_23",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="h-5 w-5"
//       >
//         <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
//       </svg>
//     ),
//   },
// ]

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitStatus, setSubmitStatus] = useState(null)
//   const [errors, setErrors] = useState({})
//   const form = useRef()

//   const validateForm = () => {
//     const newErrors = {}

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required"
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required"
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       newErrors.email = "Email is invalid"
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData({ ...formData, [name]: value })

//     // Clear error when user types
//     if (errors[name]) {
//       setErrors({ ...errors, [name]: null })
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (!validateForm()) {
//       return
//     }

//     setIsSubmitting(true)
//     setSubmitStatus(null)

//     const templateParams = {
//       from_name: formData.name,
//       from_email: formData.email,
//       subject: formData.subject,
//       message: formData.message,
//     }

//     try {
//       // Replace with your EmailJS service ID, template ID, and public key
//       const result = await emailjs.send(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//         templateParams,
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
//       )

//       setSubmitStatus("success")
//       setFormData({ name: "", email: "", subject: "", message: "" })
//     } catch (error) {
//       console.error("Error sending email:", error)
//       setSubmitStatus("error")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/10 rounded-full filter blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400/10 dark:bg-purple-600/10 rounded-full filter blur-3xl"></div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
//           >
//             <Badge
//               variant="outline"
//               className="mb-4 px-4 py-1 text-blue-600 dark:text-blue-400 border-blue-300 dark:border-blue-700"
//             >
//               Let's Connect
//             </Badge>
//           </motion.div>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Get in Touch</h2>
//           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Have a question or want to work together? Feel free to reach out!
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="lg:col-span-1"
//           >
//             <Card className="h-full border-t-4 border-blue-500 dark:border-blue-400 shadow-lg hover:shadow-xl transition-all duration-300">
//               <CardHeader>
//                 <CardTitle>Contact Information</CardTitle>
//                 <CardDescription>Feel free to reach out through any of these channels</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 {contactMethods.map((method, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
//                     className="flex items-start"
//                   >
//                     <div className="mr-4 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
//                       {method.icon}
//                     </div>
//                     <div>
//                       <h3 className="font-medium text-gray-800 dark:text-white">{method.title}</h3>
//                       <a
//                         href={method.href}
//                         target={method.title === "Location" ? "_blank" : undefined}
//                         rel="noopener noreferrer"
//                         className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                       >
//                         {method.value}
//                       </a>
//                     </div>
//                   </motion.div>
//                 ))}

//                 <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
//                   <h3 className="font-medium text-gray-800 dark:text-white mb-4">Connect with me</h3>
//                   <div className="flex space-x-4">
//                     {socialLinks.map((link, index) => (
//                       <TooltipProvider key={index}>
//                         <Tooltip>
//                           <TooltipTrigger asChild>
//                             <motion.a
//                               href={link.url}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//                               whileHover={{ scale: 1.1 }}
//                               whileTap={{ scale: 0.95 }}
//                             >
//                               {link.icon}
//                               <span className="sr-only">{link.name}</span>
//                             </motion.a>
//                           </TooltipTrigger>
//                           <TooltipContent>{link.name}</TooltipContent>
//                         </Tooltip>
//                       </TooltipProvider>
//                     ))}
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="lg:col-span-2"
//           >
//             <Card className="border-t-4 border-blue-500 dark:border-blue-400 shadow-lg hover:shadow-xl transition-all duration-300">
//               <CardHeader>
//                 <CardTitle>Send Me a Message</CardTitle>
//                 <CardDescription>I'll get back to you as soon as possible</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="name">Name</Label>
//                       <Input
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Your name"
//                         className={errors.name ? "border-red-500" : ""}
//                       />
//                       {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="email">Email</Label>
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Your email"
//                         className={errors.email ? "border-red-500" : ""}
//                       />
//                       {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="subject">Subject (Optional)</Label>
//                     <Input
//                       id="subject"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       placeholder="What is this regarding?"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="message">Message</Label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder="Your message"
//                       rows={5}
//                       className={errors.message ? "border-red-500" : ""}
//                     />
//                     {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
//                   </div>
//                   <Button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         <Send className="mr-2 h-4 w-4" />
//                         Send Message
//                       </>
//                     )}
//                   </Button>
//                 </form>

//                 {submitStatus === "success" && (
//                   <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
//                     <Alert
//                       variant="default"
//                       className="bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-300 border-green-200 dark:border-green-900/50"
//                     >
//                       <CheckCircle className="h-4 w-4" />
//                       <AlertTitle>Success!</AlertTitle>
//                       <AlertDescription>Thank you for your message! I'll get back to you soon.</AlertDescription>
//                     </Alert>
//                   </motion.div>
//                 )}

//                 {submitStatus === "error" && (
//                   <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
//                     <Alert variant="destructive">
//                       <AlertCircle className="h-4 w-4" />
//                       <AlertTitle>Error</AlertTitle>
//                       <AlertDescription>Oops! Something went wrong. Please try again later.</AlertDescription>
//                     </Alert>
//                   </motion.div>
//                 )}
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//           className="mt-12"
//         >
//           <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
//             <CardContent className="p-0">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.6978753380066!2d74.92433937582183!3d15.517197253726464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf3385f5fa1c3d%3A0x8d58d21cba93b5d4!2sIndian%20Institute%20of%20Information%20Technology%20Dharwad!5e0!3m2!1sen!2sin!4v1712795200000!5m2!1sen!2sin"
//                 width="100%"
//                 height="400"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="IIIT Dharwad Location"
//                 className="rounded-lg"
//               ></iframe>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Contact

"use client"

import { Badge } from "@/components/ui/badge"
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Globe,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import emailjs from "@emailjs/browser"

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    value: "slygrin005@gmail.com",
    href: "mailto:slygrin005@gmail.com",
    description: "Drop me a line anytime",
    color: "from-blue-500 to-cyan-500",
    available: "24/7",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone",
    value: "+91 6287279304",
    href: "tel:+916287279304",
    description: "Let's have a conversation",
    color: "from-green-500 to-emerald-500",
    available: "9 AM - 9 PM IST",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Location",
    value: "IIIT Dharwad, Karnataka, India",
    href: "https://maps.google.com/?q=IIIT+Dharwad+Karnataka+India",
    description: "Come say hello",
    color: "from-purple-500 to-pink-500",
    available: "Open to meet",
  },
]

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Slygriyrsk",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
    color: "hover:bg-gray-900 hover:text-white",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/saharshkumar03/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
    color: "hover:bg-blue-600 hover:text-white",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/repatriation_23",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
      </svg>
    ),
    color: "hover:bg-sky-500 hover:text-white",
  },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})
  const [copiedEmail, setCopiedEmail] = useState(false)
  const form = useRef()

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: null })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    }

    try {
      // Replace with your EmailJS service ID, template ID, and public key
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("slygrin005@gmail.com")
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-400/20 to-blue-600/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          >
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Sparkles className="h-6 w-6 text-yellow-500" />
            <Badge
              variant="outline"
              className="px-6 py-2 text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Let's Connect
            </Badge>
            <Sparkles className="h-6 w-6 text-yellow-500" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Get in Touch
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center mb-6"
          >
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <MessageSquare className="mx-4 text-blue-600 h-8 w-8" />
            <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></div>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Have a question, project idea, or just want to say hello?
            <br />
            <span className="text-blue-600 dark:text-blue-400 font-semibold">I'd love to hear from you!</span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Enhanced Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="text-center lg:text-left mb-8">
              <h3
                className="text-2xl font-bold text-gray-800 dark:text-white mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                Choose your preferred way to reach out
              </p>
            </div>

            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="group"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
                  <div className={`h-1 bg-gradient-to-r ${method.color}`}></div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`p-3 rounded-xl bg-gradient-to-r ${method.color} text-white shadow-lg`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {method.icon}
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4
                            className="font-semibold text-gray-800 dark:text-white"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {method.title}
                          </h4>
                          <Badge variant="secondary" className="text-xs">
                            {method.available}
                          </Badge>
                        </div>
                        <p
                          className="text-sm text-gray-600 dark:text-gray-400 mb-2"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {method.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <a
                            href={method.href}
                            target={method.title === "Location" ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium group-hover:underline"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {method.value}
                          </a>
                          {method.title === "Email" && (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={copyEmail}
                                    className="h-6 w-6 p-0 hover:bg-blue-100 dark:hover:bg-blue-900/30"
                                  >
                                    {copiedEmail ? (
                                      <Check className="h-3 w-3 text-green-600" />
                                    ) : (
                                      <Copy className="h-3 w-3 text-gray-500" />
                                    )}
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>{copiedEmail ? "Copied!" : "Copy email"}</TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"></div>
                <CardContent className="p-6">
                  <h4
                    className="font-semibold mb-4 flex items-center gap-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <Globe className="h-5 w-5" />
                    Connect on Social
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {socialLinks.map((link, index) => (
                      <TooltipProvider key={index}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <motion.a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center justify-center p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 ${link.color} group`}
                              whileHover={{ scale: 1.05, rotate: 5 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.3 }}>
                                {link.icon}
                              </motion.div>
                              <span className="sr-only">{link.name}</span>
                            </motion.a>
                          </TooltipTrigger>
                          <TooltipContent>{link.name}</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="border-0 shadow-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                    className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white"
                  >
                    <Send className="h-6 w-6" />
                  </motion.div>
                  <div>
                    <CardTitle
                      className="text-2xl font-bold text-gray-800 dark:text-white"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Send Me a Message
                    </CardTitle>
                    <CardDescription className="text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                      I'll get back to you within 24 hours
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`transition-all duration-300 ${errors.name ? "border-red-500 focus:border-red-500" : "focus:border-blue-500"} bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm`}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                      <AnimatePresence>
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-sm text-red-500 flex items-center gap-1"
                          >
                            <AlertCircle className="h-3 w-3" />
                            {errors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`transition-all duration-300 ${errors.email ? "border-red-500 focus:border-red-500" : "focus:border-blue-500"} bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm`}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                      <AnimatePresence>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-sm text-red-500 flex items-center gap-1"
                          >
                            <AlertCircle className="h-3 w-3" />
                            {errors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>

                  <motion.div className="space-y-2" whileFocus={{ scale: 1.01 }}>
                    <Label
                      htmlFor="subject"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What would you like to discuss?"
                      className="focus:border-blue-500 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm transition-all duration-300"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </motion.div>

                  <motion.div className="space-y-2" whileFocus={{ scale: 1.01 }}>
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, idea, or just say hello..."
                      rows={6}
                      className={`transition-all duration-300 resize-none ${errors.message ? "border-red-500 focus:border-red-500" : "focus:border-blue-500"} bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                    <AnimatePresence>
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-sm text-red-500 flex items-center gap-1"
                        >
                          <AlertCircle className="h-3 w-3" />
                          {errors.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="flex items-center gap-2"
                        >
                          <Loader2 className="h-5 w-5" />
                          <span>Sending your message...</span>
                        </motion.div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          <span>Send Message</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>

                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -20 }}
                      className="mt-6"
                    >
                      <Alert className="bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-300 border-green-200 dark:border-green-900/50">
                        <CheckCircle className="h-5 w-5" />
                        <AlertTitle className="font-semibold">Message Sent Successfully! 🎉</AlertTitle>
                        <AlertDescription>
                          Thank you for reaching out! I'll get back to you within 24 hours.
                        </AlertDescription>
                      </Alert>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -20 }}
                      className="mt-6"
                    >
                      <Alert variant="destructive">
                        <AlertCircle className="h-5 w-5" />
                        <AlertTitle className="font-semibold">Oops! Something went wrong</AlertTitle>
                        <AlertDescription>Please try again later or reach out directly via email.</AlertDescription>
                      </Alert>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Enhanced Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <div className="text-center mb-8">
            <h3
              className="text-2xl font-bold text-gray-800 dark:text-white mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Find Me Here
            </h3>
            <p className="text-gray-600 dark:text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
              Located at the beautiful campus of IIIT Dharwad
            </p>
          </div>

          <Card className="shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border-0">
            <div className="h-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>
            <CardContent className="p-0">
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.6978753380066!2d74.92433937582183!3d15.517197253726464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf3385f5fa1c3d%3A0x8d58d21cba93b5d4!2sIndian%20Institute%20of%20Information%20Technology%20Dharwad!5e0!3m2!1sen!2sin!4v1712795200000!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IIIT Dharwad Location"
                  className="transition-all duration-300 hover:contrast-110"
                ></iframe>
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-red-500" />
                    <div>
                      <div className="font-semibold text-sm text-gray-800 dark:text-white">IIIT Dharwad</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Karnataka, India</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact