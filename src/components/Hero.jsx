import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowDown, FileText, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-yellow-300">Saharsh Kumar</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              A passionate Full Stack Developer building amazing web experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="flex items-center bg-white text-blue-600 hover:bg-blue-100 hover:text-blue-800 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </Link>
              <a
                href="assets/Saharsh-Resume.pdf"
                download
                className="flex items-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              >
                <FileText className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative z-10">
              <img
                src="/assets/images/me.jpg"
                alt="Your Name"
                className="rounded-full w-full h-full object-cover shadow-lg"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-yellow-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">
            <ArrowDown className="w-8 h-8 animate-bounce text-white" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;