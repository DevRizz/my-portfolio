// import React from 'react';
// import { Github, Linkedin, Twitter } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-4 md:mb-0 text-center md:text-left">
//             <p className="text-sm">
//               &copy; {currentYear} Saharsh Kumar. All rights reserved.
//             </p>
//             <p className="text-xs mt-1 text-gray-400">
//               Designed and developed with passion and expertise.
//             </p>
//           </div>
//           <div className="flex space-x-6">
//             <a
//               href="https://www.linkedin.com/in/saharsh-kumar-9768a8264/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-blue-400 transition-colors duration-300"
//               aria-label="LinkedIn Profile"
//             >
//               <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
//             </a>
//             <a
//               href="https://github.com/Slygriyrsk"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-gray-400 transition-colors duration-300"
//               aria-label="GitHub Profile"
//             >
//               <Github className="w-6 h-6 md:w-8 md:h-8" />
//             </a>
//             <a
//               href="https://twitter.com/repatriation_23"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-blue-300 transition-colors duration-300"
//               aria-label="Twitter Profile"
//             >
//               <Twitter className="w-6 h-6 md:w-8 md:h-8" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart, ArrowRight, Mail } from 'lucide-react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setSubscribeStatus("error");
      return;
    }

    setIsSubscribing(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribing(false);
      setSubscribeStatus("success");
      setEmail("");

      // Reset status after 3 seconds
      setTimeout(() => {
        setSubscribeStatus(null);
      }, 3000);
    }, 1500);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/saharsh-kumar-9768a8264/",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "GitHub",
      href: "https://github.com/Slygriyrsk",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/repatriation_23",
      icon: <Twitter className="h-5 w-5" />,
    },
  ];

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Resume", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Portfolio", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Saharsh Kumar</h3>
            <p className="text-gray-400">
              Full Stack Developer passionate about creating elegant solutions to complex problems.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={link.name}
                      >
                        {link.icon}
                      </motion.a>
                    </TooltipTrigger>
                    <TooltipContent side="top">{link.name}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-gray-400">Subscribe to my newsletter for the latest updates.</p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-r-none bg-gray-800 border-gray-700 text-white"
                />
                <Button type="submit" disabled={isSubscribing} className="rounded-l-none">
                  {isSubscribing ? "..." : <Mail className="h-4 w-4" />}
                </Button>
              </div>
              {subscribeStatus === "success" && <p className="text-green-400 text-sm">Thank you for subscribing!</p>}
              {subscribeStatus === "error" && <p className="text-red-400 text-sm">Please enter a valid email.</p>}
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} Saharsh Kumar. All rights reserved.</p>
          <motion.p
            className="text-gray-400 text-sm mt-2 md:mt-0 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> and code
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;