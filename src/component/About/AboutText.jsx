import React from 'react';

const AboutText = () => {
  return (
    <div className="container absolute -my-[50%] lg:-my-[0%] md:-my-[0%] md:labsolute md:top-0 lg:absolute lg:right-20 lg:top-[290px]">
      <div className="text-left px-4 md:mx-[30%] lg:w-[600px]">
      {/* <p className="text-sm md:text-base my-2 text-white lg:text-lg">
        Connecting the Nation
        </p> */}
        <h1 className="text-4xl text-white font-semibold mb-2 md:text-5xl lg:text-6xl">
  ABOUT <span className="animate-colorChange">US</span>
</h1>
        <p className="text-sm md:text-base my-4 text-white lg:text-lg">
        Nurturing young minds with excellence in education, and a supportive environment that inspires growth, creativity, and lifelong learning
        </p>
        <button className="w-44 h-12 max-w-xs px-4 py-2  bg-amber-400  text-zinc-950 
        hover:text-amber-500 font-bold 
         shadow-md hover:bg-gray-50 focus:outline-none 
         focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50 transition duration-300 ease-in-out">
  Contact Us
</button>
      </div>
    </div>
  );
}

export default AboutText;
