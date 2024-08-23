import React from "react";
import aboutmain from "../../../assets/homeExtra.jpg";
import AboutCount from "../AboutMain/AboutCount/AboutCount";

const AboutMain = () => {
  return (
    <>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-start">
          {/* Left side: Title and Paragraph */}
          <div className="lg:w-2/3 w-full lg:pr-3 ">
            <h3 className="text-amber-400 text-lg text-left my-10">
              How it started for us
            </h3>
            <h2 className="text-4xl lg:text-8xl md:text-7xl font-normal text-left text-gray-800 mb-4">
              Hillside School for Children
            </h2>
            {/* <p className="text-sm text-left text-gray-600">
            Hillside School for Children is dedicated to nurturing young minds with excellence in education, state-of-the-art facilities, and a supportive environment.
          </p> */}
          </div>
          {/* Right side: Image */}
          <div className="lg:w-1/2 w-full">
            <img
              src={aboutmain}
              alt="Hillside School"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* part 2 */}
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-start">
          {/* Left side: Title and Paragraph */}
          <div className="lg:w-1/2 w-full lg:pr-3 ">
            <p className="text-lg text-left text-gray-600">
            <span className = "text-4xl text-amber-400 font-semibold">Hillside Group of Institutions </span>started back in 1996 by
              Bheemachandra Education Trust. Hillside Group has various
              educational institutions ranging from Kindergarten to PG courses
              in and around Bangalore City. Started with healthcare education,
              basic schools and added more and more courses in the field of
              nursing, Pharmacy College, business management and commerce.
              Hillside Group of Institutions is a distinguished educational
              institution, combining excellence with innovation.
            </p>
          </div>
          {/* Right side: Image */}
          <div className="lg:w-1/2 w-full">
            <AboutCount />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMain;
