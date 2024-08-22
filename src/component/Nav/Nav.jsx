import { faMobileAlt, faEnvelope, faBook, faBookOpen, faScroll, faSchoolFlag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import NavHome from './NavHome/NavHome';
import NavLinks from './NavLinks/NavLinks';

const Nav = () => {
  return (
    <>
      <div className="bg-amber-400 py-2 h-20 md:h-full">
        <div className="container mx-auto flex flex-row md:flex-wrap items-center justify-between ">
          {/* Topbar Left */}
          <div className="topbar-left">
            <ul className="flex items-center text-white text-sm">
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
          <div className="topbar-right mt-2 text-sm sm:mt-0 text-left">
            <ul className="flex md:items-center text-white">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faMobileAlt} className='px-4'/>
                <p> FOR ADMISSION? +91-98459 56633, +91-97428 03553</p>
              </li>
            </ul>
          </div>
          {/* Topbar Right */}
        </div>
      </div>

{/* 
      <div className='navTabs bg-inherit '>
        <ul className="flex justify-around h-[100px] items-center py-4 bg-gray-800 text-white">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-400">About Us</Link></li>
          <li><Link to="/institutions" className="hover:text-gray-400">Group of Institutions</Link></li>
          <li><Link to="/research" className="hover:text-gray-400">Research</Link></li>
          <li><Link to="/alumni" className="hover:text-gray-400">Alumni Association</Link></li>
          <li><Link to="/admission" className="hover:text-gray-400">Admission 2023-24</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>      */}

<NavLinks/>
      

    </>
  );
};

export default Nav;
