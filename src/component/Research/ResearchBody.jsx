import React from 'react';
import rsrch from "../../assets/researchPic.webp"
const ResearchBody = () => {
  return (
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
      <div className="w-full lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
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
  );
};

export default ResearchBody;
