import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Nav.css'
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons/faBookOpen';
import { faScroll } from '@fortawesome/free-solid-svg-icons/faScroll';
import { faSchoolFlag } from '@fortawesome/free-solid-svg-icons/faSchoolFlag';
import NavHome from './NavHome/NavHome';

const Nav = () => {
  return (
    <>
    <div className="bg-amber-400 py-2">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        {/* Topbar Left */}
        <div className="topbar-left">
          <ul className="flex items-center text-white">
            <li className="flex items-center ">
              <FontAwesomeIcon icon={faEnvelope} className='px-4'/>
              <a href="mailto:admissions@hillsideacademy.in" className="hover:text-gray-400">
                admissions@hillsideacademy.in
              </a>
            </li>
          </ul>
        </div>
        {/* Topbar Left */}

        {/* Topbar Right */}
        <div className="topbar-right mt-2 sm:mt-0">
          <ul className="flex md:items-center text-white">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faMobileAlt} className='px-4'/>
              <span>&nbsp; FOR ADMISSION? +91-98459 56633, +91-97428 03553</span>
            </li>
          </ul>
        </div>
        {/* Topbar Right */}
      </div>
    </div>
    <div className='navBg'>
    

    </div>
    {/* <div className="container mx-auto px-6 py-8 absolute bottom-[-200px]">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full sm:w-1/3 px-4 mb-8">
          <div className="bg-indigo-900 p-6 rounded-lg shadow-lg text-center h-[300px]">
            <span className="block mb-4">
              <FontAwesomeIcon icon={faBookOpen} className='text-5xl text-amber-400'/>
            </span>
            <h3 className="text-xl text-white font-semibold mb-4">VISION AND MISSION</h3>
            <p className="text-white text-sm mb-4 text-left h-20">
              The mission of Hillside Group of Institutions is to help see the students their career prospective and act to get their ultimate goal. Hillside Academy is one of its kind...
            </p>
            <a className="bg-amber-400 text-white text-2xl rounded-full w-12 h-12 flex items-center justify-center 
            mx-auto shadow" href="aboutus.html#abthistory">+</a>
          </div>
        </div>
        <div className="w-full sm:w-1/3 px-4 mb-8">
          <div className="bg-indigo-900 p-6 rounded-lg shadow-lg h-[300px] text-center">
            <span className="block mb-4">
            <FontAwesomeIcon icon={faScroll} className='text-5xl text-amber-400'/>
            </span>
            <h3 className="text-xl text-white font-semibold mb-4">HISTORY</h3>
            <p className="text-white text-sm h-20 mb-4 text-left">
              Hillside Academy started back in 1996 by Bheemachandra Education Trust. Hillside Group has various educational institutions ranging from Kindergarten...
            </p>
            <a className="bg-amber-400 text-white text-2xl rounded-full w-12 h-12 flex items-center justify-center 
            mx-auto shadow" href="aboutus.html#abthistory">+</a>
          </div>
        </div>
        <div className="w-full sm:w-1/3 px-4 mb-8">
          <div className="bg-indigo-900 p-6 rounded-lg h-[300px] shadow-lg text-center">
            <span className="block mb-4">
            <FontAwesomeIcon icon={faSchoolFlag} className='text-5xl text-amber-400'/>
            </span>
            <h3 className="text-xl text-white font-semibold mb-4">ADMINISTRATION</h3>
            <p className="text-white text-sm mb-4 text-left h-20">
              The infrastructure and facilities of Hillside Academy consists of spread-out campus alongside various amenities in the form of library, computer center...
            </p>
            <a className="bg-amber-400 text-white text-2xl rounded-full w-12 h-12 flex items-center justify-center 
            mx-auto shadow" href="aboutus.html#abthistory">+</a>
          </div>
        </div>
      </div>
    </div> */}
        <NavHome/>
</>
  );
};

export default Nav;
