
import React from 'react';
import { FaBook, FaRunning, FaLaptop, FaChild } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FaBook className="text-4xl mb-4" />,
    title: 'Comprehensive Curriculum',
    description: 'Offering a well-rounded education that emphasizes both academic excellence and creative development.'
  },
  {
    icon: <FaRunning className="text-4xl mb-4" />,
    title: 'State-of-the-Art Sports Facilities',
    description: 'Equipped with modern sports areas and dedicated coaches to foster physical fitness and teamwork.'
  },
  {
    icon: <FaLaptop className="text-4xl mb-4" />,
    title: 'Innovative Learning Environment',
    description: 'Utilizing the latest technology and teaching methods to create an engaging and interactive classroom experience.'
  },
  {
    icon: <FaChild className="text-4xl mb-4" />,
    title: 'Holistic Development Programs',
    description: 'Focused on nurturing emotional, social, and intellectual growth through extracurricular activities and personalized support.'
  },
];

const AboutPointers = () => {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 1 }}
            className={`p-6 shadow-lg rounded-lg hover:scale-105 transition ease-in-out duration-300 ${
              index % 2 === 0 ? 'bg-white text-gray-800 border-2 border-indigo-950' : ' bg-indigo-900 text-white'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div className={index % 2 === 0 ? 'text-indigo-500' : 'text-yellow-500'}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="mt-2 text-sm text-left">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutPointers;