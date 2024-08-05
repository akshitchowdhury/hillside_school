import React from 'react';
import { FaEye, FaBullhorn } from 'react-icons/fa';

const VisionMission = () => {
  return (
    <div className="container  mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vision Card */}
        <div className="bg-amber-400 shadow-lg rounded-md p-6 
       h-[300px] flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
          <FaEye className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h3>
          <p className="text-gray-600 text-center">
            To create a nurturing environment where every child can reach their full potential and become lifelong learners.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-gray-950 shadow-lg rounded-md p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
          <FaBullhorn className="text-4xl text-green-500 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h3>
          <p className="text-gray-600 text-center">
            To provide high-quality education and holistic development opportunities, empowering students to excel academically and socially.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
