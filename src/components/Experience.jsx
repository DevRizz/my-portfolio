import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';

const experiences = [
  {
    organization: 'Innomatics Research Lab',
    role: 'Full Stack Developer',
    duration: 'Sep 2024 - Nov 2024',
    location: 'Hyderabad',
    description: 'Developed a full-stack e-commerce platform with features like user authentication, product management, product listings, shopping cart, order processing, and order history. Utilized React for the frontend and Node.js with Express.js for the backend, and MongoDB for the database.',
    skills: ['React', 'Node.js', 'Express.js', 'MongoDB'],
  },
  // {
  //   organization: 'Summer Internship Program',
  //   role: 'Software Development Intern',
  //   duration: 'May 2022 - Jul 2022',
  //   location: 'TechCorp, Bangalore',
  //   description: 'Developed a responsive web application for inventory management, reducing manual data entry time by 25%.',
  //   skills: ['JavaScript', 'React', 'Express.js', 'PostgreSQL'],
  // },
  // {
  //   organization: 'Hackathon Victory',
  //   role: 'Team Member',
  //   duration: 'Feb 2022',
  //   location: 'National Level Hackathon',
  //   description: 'Won 2nd place for developing an innovative IoT solution for smart water management in urban areas.',
  //   skills: ['IoT', 'Arduino', 'Python', 'Data Visualization'],
  // },
];

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className={`mb-12 flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full max-w-md transform transition duration-300 hover:shadow-xl">
        <div className="p-6">
          <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">{experience.organization}</h3>
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-2">{experience.role}</p>
          <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 mb-1">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{experience.duration}</span>
          </div>
          <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 mb-3">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{experience.location}</span>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{experience.description}</p>
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Experience & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            My journey in tech so far
          </p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-500 dark:bg-blue-700"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="relative z-10">
              <div className={`flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 dark:bg-blue-700 rounded-full`}>
                <div className="w-4 h-4 bg-white dark:bg-gray-900 rounded-full"></div>
              </div>
              <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <ExperienceCard experience={exp} index={index} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">Always eager to learn and take on new challenges!</p>
          <motion.a
            href="/assets/Saharsh-Resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center cursor-pointer"
          >
            <Award className="w-5 h-5 mr-2" />
            <span>View My Resume</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;