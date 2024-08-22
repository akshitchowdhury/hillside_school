import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook, FaUsers, FaBrain } from 'react-icons/fa';
import ResearchHero from './ResearchHero';
import ResearchText from './ResearchText';
import ResearchBody from './ResearchBody';

const PrimaryEducation = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
    <ResearchHero/>
    <ResearchText/>
    <ResearchBody/>
    <div className="bg-blue-950 h-1/2  text-white  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-8 text-amber-400"
          {...fadeIn}
        >
          Primary Education at Bethel English High School
        </motion.h2> */}
        
        <motion.p 
          className="mt-12 my-7 text-center text-lg"
          {...fadeIn}
        >
          At Bethel English High School, we're committed to fostering a love for learning that lasts a lifetime.
        </motion.p>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
        >
          <motion.div 
            className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300"
            {...fadeIn}
          >
            <FaGraduationCap className="text-4xl text-amber-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Foundation for the Future</h3>
            <p>We believe that primary education lays the foundation for a child's future, developing essential skills, values, and attitudes.</p>
          </motion.div>

          <motion.div 
            className="bg-white
             bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300"
            {...fadeIn}
          >
            <FaBook className="text-4xl text-amber-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nurturing Curiosity</h3>
            <p>Our program is designed to nurture curiosity, creativity, and critical thinking, equipping children with knowledge and confidence.</p>
          </motion.div>

          <motion.div 
            className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300"
            {...fadeIn}
          >
            <FaUsers className="text-4xl text-amber-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Supportive Environment</h3>
            <p>We provide a stimulating and supportive environment where children explore ideas, solve problems, and interact with peers.</p>
          </motion.div>

          <motion.div 
            className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300"
            {...fadeIn}
          >
            <FaBrain className="text-4xl text-amber-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Holistic Development</h3>
            <p>Our focus on holistic development prepares students not just for academic success but also for real-world challenges.</p>
          </motion.div>
        </motion.div>

      </div>
    </div>
    </>
  );
};

export default PrimaryEducation;