import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO at TechCorp',
    content: 'Working with [Your Name] was an absolute pleasure. Their technical skills and attention to detail are unmatched.',
    image: '/assets/images/testimonial1.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Project Manager at WebSolutions',
    content: '[Your Name] consistently delivered high-quality work and was always ready to go the extra mile. A true asset to any team.',
    image: '/assets/images/testimonial2.jpg',
  },
  {
    name: 'Mike Johnson',
    role: 'Lead Developer at InnovateTech',
    content: 'I was impressed by [Your Name]\'s ability to quickly grasp complex concepts and turn them into elegant solutions. Highly recommended!',
    image: '/assets/images/testimonial3.jpg',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          What People Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;