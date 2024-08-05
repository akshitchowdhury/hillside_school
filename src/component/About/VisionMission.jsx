import React from 'react';
import { FaEye, FaBullhorn, FaLightbulb, FaGlobe, FaUsers, FaStar, FaBook, FaChalkboardTeacher, FaHeart, FaSeedling } from 'react-icons/fa';

const VisionMission = () => {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vision Card */}
        <div className="bg-amber-400 shadow-lg rounded-md p-6 h-auto 
        flex flex-col py-12 items-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
          <FaEye className="text-4xl text-blue-950 mb-4" />
          <h3 className="text-4xl text-left font-semibold text-gray-950 mb-2">Our Vision</h3>
          <ul className="text-gray-950 space-y-2">
            <li className="flex items-start"><FaLightbulb className="text-blue-950 mr-2" /> Cultivate a nurturing and inspiring environment.</li>
            <li className="flex items-start"><FaGlobe className="text-blue-950 mr-2" /> Foster curiosity, creativity, and passion for learning.</li>
            <li className="flex items-start"><FaUsers className="text-blue-950 mr-2" /> Encourage exploration of unique talents and abilities.</li>
            <li className="flex items-start"><FaStar className="text-blue-950 mr-2" /> Instill a lifelong love of learning and growth.</li>
          </ul>
        </div>

        {/* Mission Card */}
        <div className="bg-gray-950 shadow-lg 
        py-12 rounded-md p-6 h-auto flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
          <FaBullhorn className="text-4xl text-green-500 mb-4" />
          <h3 className="text-4xl text-left font-semibold text-gray-100 mb-2">Our Mission</h3>
          <ul className="text-gray-100 space-y-2">
            <li className="flex items-start"><FaBook className="text-green-500 mr-2" /> Provide high-quality education and learning experiences.</li>
            <li className="flex items-start"><FaChalkboardTeacher className="text-green-500 mr-2" /> Empower students to excel academically and socially.</li>
            <li className="flex items-start"><FaHeart className="text-green-500 mr-2" /> Promote holistic development and well-being.</li>
            <li className="flex items-start"><FaSeedling className="text-green-500 mr-2" /> Nurture compassion, responsibility, and resilience.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
