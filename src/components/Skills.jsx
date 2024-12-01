import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const skillsData = [
  { name: 'JavaScript', level: 90, color: 'bg-yellow-400', icon: '🟨' },
  { name: 'React', level: 85, color: 'bg-blue-400', icon: '⚛️' },
  { name: 'Node.js', level: 80, color: 'bg-green-400', icon: '🟩' },
  { name: 'Python', level: 75, color: 'bg-blue-600', icon: '🐍' },
  { name: 'MongoDB', level: 70, color: 'bg-green-600', icon: '🍃' },
  { name: 'TypeScript', level: 82, color: 'bg-blue-700', icon: '🔷' },
  { name: 'Java', level: 40, color: 'bg-red-500', icon: '☕' },
  { name: 'C++', level: 80, color: 'bg-purple-500', icon: '🔠' },
  { name: 'SQL', level: 72, color: 'bg-orange-500', icon: '🗃️' },
];

const SkillCard = ({ name, level, color, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition duration-300 hover:shadow-xl"
  >
    <div className="flex items-center mb-4">
      <span className="text-3xl mr-3">{icon}</span>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{name}</h3>
    </div>
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 dark:bg-blue-800 dark:text-blue-200">
            Proficiency
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-blue-600 dark:text-blue-200">
            {level}%
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${color}`}
        />
      </div>
    </div>
    <motion.div
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="w-4 h-4 rounded-full bg-blue-500 mx-auto mt-4"
    />
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Constantly learning and improving
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.name} {...skill} index={index} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">Always expanding my skillset!</p>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center cursor-pointer"
            >
              <span className="mr-2">🚀</span>
              <span>Explore My Projects</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;