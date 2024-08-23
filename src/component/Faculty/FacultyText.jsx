import React from 'react';

const FacultyText = () => {
  return (
    <div className="container absolute -my-[50%] lg:-my-[0%] md:-my-[0%] md:labsolute md:top-0
     lg:absolute lg:right-30 lg:top-[290px]">
      <div className="text-left px-4 md:mx-[30%] lg:w-[600px]">
    
    
        <h1 className="text-4xl text-white font-semibold mb-2 md:text-5xl lg:text-6xl">
  OUR <span className="text-amber-400">FACULTY</span>
</h1>
        
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

export default FacultyText;
