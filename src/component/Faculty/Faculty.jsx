import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaGraduationCap, FaBook, FaLaptopCode, FaPaintBrush, FaGlobe } from 'react-icons/fa';
import FacultyHero from './FacultyHero';
import FacultyText from './FacultyText';

const facultyData = [
  {
    name: "Dr. Sarah Johnson",
    position: "Principal",
    description: "With over 20 years of experience in education, Dr. Johnson leads our school with passion and innovation.",
    icon: <FaChalkboardTeacher className="text-amber-400" />
  },
  {
    name: "Prof. Michael Chen",
    position: "Head of Sciences",
    description: "An expert in physics and chemistry, Prof. Chen inspires students to explore the wonders of science.",
    icon: <FaGraduationCap className="text-amber-400" />
  },
  {
    name: "Ms. Emily Rodriguez",
    position: "English Department Head",
    description: "Ms. Rodriguez brings literature to life, fostering a love for reading and writing in our students and guiding them to be bright minds .",
    icon: <FaBook className="text-amber-400" />
  },
  {
    name: "Mr. James Anderson",
    position: "Computer Science Teacher",
    description: "Mr. Anderson encourages students to dive into the world of coding and technology.",
    icon: <FaLaptopCode className="text-amber-400" />
  },
  {
    name: "Ms. Laura Thompson",
    position: "Art Department Head",
    description: "Ms. Thompson inspires creativity and artistic expression in her students.",
    icon: <FaPaintBrush className="text-amber-400" />
  },
  {
    name: "Dr. Maria Garcia",
    position: "Geography Teacher",
    description: "Dr. Garcia's passion for geography and the environment ignites curiosity in her students.",
    icon: <FaGlobe className="text-amber-400" />
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const Faculty = () => {
  return (
    <>
    <FacultyHero/>
    <FacultyText/>
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center text-indigo-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Faculty at Bethel English High School
        </motion.h1>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {facultyData.map((faculty, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              variants={cardVariants}
            >
              <div className="flex flex-col items-center p-6">
                <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  {faculty.icon}
                </div>
                <h2 className="text-xl font-semibold text-indigo-900 text-justify mb-2">{faculty.name}</h2>
                <h3 className="text-lg text-amber-400 text-center mb-4">{faculty.position}</h3>
                <p className="text-gray-600 text-justify">{faculty.description}</p>
              </div>
              <div className="bg-indigo-900 p-4 mt-auto w-full">
                <button className="w-full bg-amber-400 text-white py-2 px-4 rounded-full hover:bg-amber-500 transition duration-300">
                  View Profile
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Faculty;
