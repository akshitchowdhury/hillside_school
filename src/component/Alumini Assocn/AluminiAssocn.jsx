import React from 'react';
import alumniImg from "../../assets/aboutBg.jpg"
const AlumniAssocn = () => {
  return (
    <div className="container mx-auto px-4 py-12 lg:flex lg:items-center">
      {/* Content Section */}
      <div className="lg:w-1/2">
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Alumni Association
            <span className="text-indigo-600 ml-2">A</span>
          </h2>
          <div className="flex justify-center lg:justify-start items-center mb-6">
            <span className="block w-4 h-1 bg-gray-300"></span>
            <span className="block w-6 h-1 bg-indigo-600 mx-2"></span>
            <span className="block w-4 h-1 bg-gray-300"></span>
          </div>
          <p className="text-gray-700 mb-4">
            The Hillside School Alumni Association is dedicated to fostering lifelong connections among graduates and strengthening their bond with the school. Our alumni are a vital part of our community, and through various events, mentorship programs, and networking opportunities, we aim to keep the spirit of Hillside alive in all who have walked through its doors.
          </p>
          <p className="text-gray-700 mb-4">
            Whether you are a recent graduate or an experienced professional, the Alumni Association provides a platform for continued growth and support. We celebrate the achievements of our alumni and encourage them to contribute to the ongoing success of our school and its current students.
          </p>
          <p className="text-gray-700">
            Join us in reconnecting with old friends, sharing experiences, and giving back to the community that shaped who we are today. Together, we can continue to build on the legacy of excellence that Hillside School is known for.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 lg:ml-8 flex justify-center lg:justify-end">
        <img 
          src={alumniImg}
          alt="Alumni Association" 
          className="rounded-lg shadow-lg max-w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default AlumniAssocn;
