import React from 'react';
import { FaEye, FaBullhorn, FaLightbulb, FaGlobe, FaUsers, FaStar, FaBook, FaChalkboardTeacher, FaHeart, FaSeedling } from 'react-icons/fa';
import rsrch from "../../assets/homeExtra.jpg";
import AboutPointers from './AboutPointers';
import vision from "../../assets/vision.jpg";
import mission from "../../assets/mission.jpg";

const VisionMission = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white p-4 lg:p-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={rsrch}
            alt="Research Building"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="w-full text-justify lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Quality Education at Bethel English School
          </h2>
          <p className="text-gray-700 mb-4">
            At Bethel English School, we are dedicated to providing a high-quality education that forms the cornerstone of our students' futures. With a focus on academic excellence, our curriculum is designed to foster critical thinking, creativity, and a love for learning from an early age. Our classrooms are vibrant spaces where young minds are nurtured to explore and grow.
          </p>
          <p className="text-gray-700">
            Our faculty comprises highly qualified and experienced educators who are passionate about teaching and committed to the holistic development of every child. They bring a wealth of knowledge and innovative teaching methods that inspire students to reach their full potential. At Bethel English School, we believe that the right guidance and mentorship can transform young learners into confident and responsible individuals ready to take on the challenges of tomorrow.
          </p>
        </div>
      </div>

      <AboutPointers />

      <div className="mx-auto py-12 px-4 sm:px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">

          {/* Vision Section */}
          <div className="flex flex-col-reverse md:flex-row items-center h-full">
            {/* Vision Card */}
            <div className="bg-amber-400 shadow-lg rounded-none p-6 flex-1 flex flex-col items-center transition-transform transform 
            hover:scale-105 hover:shadow-xl duration-300 w-full h-full">
              <FaEye className="text-4xl text-blue-950 mb-4" />
              <h3 className="text-4xl text-left font-semibold text-gray-950 mb-2">Our Vision</h3>
              <ul className="text-gray-950 space-y-2">
                <li className="flex items-start"><FaLightbulb className="text-blue-950 mr-2" /> Cultivate a nurturing and inspiring environment.</li>
                <li className="flex items-start"><FaGlobe className="text-blue-950 mr-2" /> Foster curiosity, creativity, and passion for learning.</li>
                <li className="flex items-start"><FaUsers className="text-blue-950 mr-2" /> Encourage exploration of unique talents and abilities.</li>
                <li className="flex items-start"><FaStar className="text-blue-950 mr-2" /> Instill a lifelong love of learning and growth.</li>
              </ul>
            </div>
            {/* Vision Image */}
            <div className="w-full h-full md:h-[300px] md:w-[700px]">
              <img src={vision} alt="Vision Image" className="object-cover object-top rounded-none w-full h-full" />
            </div>
          </div>

          {/* Mission Section */}
          <div className="flex flex-col md:flex-row items-center h-full">
            {/* Mission Image */}
            <div className="w-full h-full md:h-[300px] md:w-[500px]">
              <img src={mission} alt="Mission Image" className="object-cover rounded-none w-full h-full" />
            </div>
            {/* Mission Card */}
            <div className="bg-gray-950 shadow-lg rounded-none p-6 flex-1 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300 w-full h-full">
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
      </div>
    </>
  );
};

export default VisionMission;
