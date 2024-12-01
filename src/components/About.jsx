import React from 'react';
import { motion } from 'framer-motion';
import { Code, Book, Globe, Coffee } from 'lucide-react';

const About = () => {
  const facts = [
    { icon: <Code className="w-6 h-6" />, text: "Proficient in C++ programming languages" },
    { icon: <Book className="w-6 h-6" />, text: "B.Tech in ECE from IIIT Dharwad" },
    { icon: <Globe className="w-6 h-6" />, text: "Inclined towards Changes" },
    { icon: <Coffee className="w-6 h-6" />, text: "200+ cups of coffee consumed while coding" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col items-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-center"
          >
            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
            Hey, I’m Saharsh Kumar!
I’m a Full Stack Developer with a passion for building practical, high-quality web applications. My focus is always on creating clean, efficient solutions that solve real problems. I love tackling challenges and pushing myself to work smarter, not harder.

I first got into tech back in university, where I discovered how much I enjoyed coding. Since then, I’ve had the chance to work on everything from small websites to large enterprise systems. Each project has helped me grow, and I’m always looking for new ways to improve my skills.

I’m particularly into React, Node.js, and cloud technologies. But more than that, I believe in writing code that’s easy to maintain and scale. I’m always learning, whether it’s through building side projects, reading up on new tech, or experimenting with different tools.
            </p>
            <p classname="text-lg mb-4 text-gray-700 dark:text-gray-300">
            <strong>Remember:</strong> The best code is not just functional, but also tells a story. Let's write some great stories together!
            </p>
            {/* <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
              Hello! I'm Saharsh Kumar, a passionate Full Stack Developer with a knack for creating elegant solutions in the least amount of time. I specialize in building robust web applications using modern technologies and best practices.
            </p>
            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
              My journey in tech began during my university years, where I discovered my love for coding. Since then, I've worked on a diverse range of projects, from small business websites to large-scale enterprise applications.
            </p>
            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
              I'm particularly interested in React, Node.js, and cloud technologies. I believe in writing clean, maintainable code and am always eager to learn new technologies and methodologies to stay at the cutting edge of web development.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              When I'm not coding, you can find me preparing for GATE, writing tech blogs, or exploring the great outdoors. I'm always open to new opportunities and collaborations!
            </p> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-4xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">Quick Facts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {facts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md"
                >
                  <div className="text-blue-500 dark:text-blue-400">{fact.icon}</div>
                  <p className="text-gray-700 dark:text-gray-300">{fact.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;