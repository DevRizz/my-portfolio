import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-sm">
              &copy; {currentYear} Saharsh Kumar. All rights reserved.
            </p>
            <p className="text-xs mt-1 text-gray-400">
              Designed and developed with passion and expertise.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/saharsh-kumar-9768a8264/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a
              href="https://github.com/Slygriyrsk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a
              href="https://twitter.com/repatriation_23"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors duration-300"
              aria-label="Twitter Profile"
            >
              <Twitter className="w-6 h-6 md:w-8 md:h-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;