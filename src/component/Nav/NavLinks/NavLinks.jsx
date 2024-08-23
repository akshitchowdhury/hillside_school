import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import ResearchDropDown from './ResearchDropDown';
import GroupOfinstitutions from './GroupOfinstitutions';
import GroupOfInstitutionMobile from './GroupOfInstitutionMobile';
import logo from "../../../assets/logo-removebg-preview.png"
import AboutUs from './AboutDropDown';
import AboutDropDown from './AboutDropDown';
import Resources from './Resources';
const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-inherit ">
      <div className="flex justify-between items-center px-7 h-[55px] md:h-[83px] bg-gray-800 text-white">
        <div className="text-xl ">
          <img src={logo} className='h-[40px] w-[40px] md:h-[60px] md:w-[60px]'/>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>
        <div className={`hidden md:flex md:items-center ${isOpen ? 'block' : 'hidden'} bg-gray-800 md:h-[83px]`}>
        <ul className="flex text-sm flex-col md:flex-row md:space-x-8 h-auto md:h-[100px] items-center py-4 text-white">
        <li className="relative">
          <Link to="/" className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
            HOME
          </Link>
        </li>
        {/* <li className="relative">
          <Link to="/about" className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
            ABOUT US
          </Link>
        </li> */}

        <AboutDropDown/>

        <GroupOfinstitutions/>
        <li className="relative">
          <Link to="/research" className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
            RESEARCH
          </Link>
        </li>
        {/* <li className="relative">
          <Link to="/alumni" className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
            ALUMNI ASSOCIATION
          </Link>
        </li> */}
        <Resources/>
        <li className="relative">
          <Link to="/admission" className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
            ADMISSION <span className='bg-amber-400 ring-white px-2 rounded-sm font-bold '>2023-24</span> 
          </Link>
        </li>
        <li className="relative">
          <Link to="/contact" className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
            CONTACT
          </Link>
        </li>
      </ul>
</div>

      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800`}>
        <ul className="flex flex-col justify-around h-auto items-center py-4 text-white">
          <li className="py-2"><Link to="/" className="hover:text-gray-400">HOME</Link></li>
          <li className="py-2"><Link to="/about" className="hover:text-gray-400">ABOUT US</Link></li>
          <GroupOfInstitutionMobile/>
          {/* <li className="py-2"><Link to="/institutions" className="hover:text-gray-400">GROUP OF INSTITUITONS</Link></li> */}
          <li className="py-2"><Link to="/research" className="hover:text-gray-400">RESEARCH</Link></li>
          <li className="py-2"><Link to="/alumni" className="hover:text-gray-400">ALUMNI ASSOCIATION</Link></li>
          <li className="py-2"><Link to="/admission" className="hover:text-gray-400">ADMISSION 2023-24</Link></li>
          <li className="py-2"><Link to="/contact" className="hover:text-gray-400">CONTACT</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NavLinks;
