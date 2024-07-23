import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-inherit">
      <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="text-xl">Logo</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>
        <div className={`hidden md:flex md:items-center ${isOpen ? 'block' : 'hidden'} bg-gray-800`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 h-auto md:h-[100px] items-center py-4 text-white">
            <li className="py-2 md:py-0"><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li className="py-2 md:py-0"><Link to="/about" className="hover:text-gray-400">About Us</Link></li>
            <li className="py-2 md:py-0"><Link to="/institutions" className="hover:text-gray-400">Group of Institutions</Link></li>
            <li className="py-2 md:py-0"><Link to="/research" className="hover:text-gray-400">Research</Link></li>
            <li className="py-2 md:py-0"><Link to="/alumni" className="hover:text-gray-400">Alumni Association</Link></li>
            <li className="py-2 md:py-0"><Link to="/admission" className="hover:text-gray-400">Admission 2023-24</Link></li>
            <li className="py-2 md:py-0"><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800`}>
        <ul className="flex flex-col justify-around h-auto items-center py-4 text-white">
          <li className="py-2"><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li className="py-2"><Link to="/about" className="hover:text-gray-400">About Us</Link></li>
          <li className="py-2"><Link to="/institutions" className="hover:text-gray-400">Group of Institutions</Link></li>
          <li className="py-2"><Link to="/research" className="hover:text-gray-400">Research</Link></li>
          <li className="py-2"><Link to="/alumni" className="hover:text-gray-400">Alumni Association</Link></li>
          <li className="py-2"><Link to="/admission" className="hover:text-gray-400">Admission 2023-24</Link></li>
          <li className="py-2"><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NavLinks;
