import React from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { init } from '@emailjs/browser';

init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </MainLayout>
  );
}

export default App;