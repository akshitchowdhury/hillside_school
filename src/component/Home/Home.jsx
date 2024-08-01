import React from 'react';
import HomeOverView from './HomeOverView';
import NavHome from '../Nav/NavHome/NavHome';
import './Home.css'
const Home = () => {
  return (
    <>
    <div className='HomeBg'>
        {/* You can add any background or styling here */}
      </div>
    <NavHome/>
    <section className="tc-padding o-featured-courses p-24">
      <div className="container mx-auto my-3 md:my-12">
        {/* Main Heading */}
        <div className="main-heading-holder text-center mb-10">
          <div className="main-heading text-gray-600">
            <h2 className="text-3xl font-serif text-amber-400">
              Hillside Group of Institutions
            </h2>
            <span className="text-6xl">H</span>
            <span className="sperater flex justify-center items-center mt-4">
              <i className="w-4 h-4 border-t border-l border-gray-500 rotate-45"></i>
              <i className="w-4 h-4 border-t border-l border-gray-500 rotate-45 mx-2 active"></i>
              <i className="w-4 h-4 border-t border-l border-gray-500 rotate-45"></i>
            </span>
            <p className="mt-6 text-base leading-7">
              Hillside Group of Institutions started back in 1996 by Bheemachandra Education Trust. Hillside Group
              has various educational institutions ranging from Kindergarten to PG courses in and around Bangalore
              City. Started with healthcare education, basic schools and added more and more courses in the field of
              nursing, Pharmacy College, business management and commerce. Hillside Group of Institutions is a
              distinguished educational institution, combining excellence with innovation. Hillside Group of
              Institutions places a high value on providing its students with fulfilling educational experience in
              their chosen discipline. It offers a wide range of academic courses to students, giving them a solid
              academic foundation and enabling them to achieve individual goals. Hillside Group of Institutions is
              running various courses ranging from kindergarten to postgraduate courses in different streams. The
              starting of various educational programs under Hillside banner was to espouse the noble cause of
              providing quality education to all. HGI believes in creating a multicultural and varied environment for
              the students to learn and develop in. Our student body comprise of not just candidates from India but
              also from various neighboring countries.
            </p>
            <p className="mt-6 text-base leading-7">
              Hillside Academy can easily be considered as one of the best in the industry. It is well known for its
              superior education and strict follower of rules and protocols. No shortcuts and fast pacing in the
              medical division or academic area is entertained. It is well established and has been in the process of
              imparting education for more than 20 years. Hillside Academy provides you the comprehensive education
              processes to impart knowledge and skills, both for the progress and evolution of young students for the
              different levels.
            </p>
          </div>
        </div>
        
        {/* Courses Circle Slider */}
      </div>
    </section>
    
    <HomeOverView/>
    </>

  );
};

export default Home;
