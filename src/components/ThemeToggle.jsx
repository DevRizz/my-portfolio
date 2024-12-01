import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-all duration-300 transform hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-6 h-6 text-yellow-400 transition-transform duration-300 transform rotate-0 hover:rotate-12" />
      ) : (
        <Moon className="w-6 h-6 text-gray-800 transition-transform duration-300 transform rotate-0 hover:-rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;