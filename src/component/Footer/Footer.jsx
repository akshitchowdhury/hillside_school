import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen, faFileAlt, faFileArchive, faMapMarkedAlt, faMapMarker, faMobile, faMobileAlt} from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/footerLogo.png"

const Footer = () => {
  return (
    <div className="footer bg-gray-800 py-8">
      {/* Newslatter and Columns */}
      <div className="container mx-auto px-4">
        {/* Footer Columns */}
        <div className="footer-columns p-10">
          <div className="flex flex-wrap">
            {/* Column */}
            <div className="w-full sm:w-1/3 mb-8 sm:mb-0 text-left">
              <div className="footer-c-widget logo-widget text-white">
              <img src={logo} className='h-[70px] w-full'/>
                <p>Hillside Academy started back in 1996 by Bheemachandra Education Trust. Hillside Group has various educational institutions ranging from Kindergarten to PG courses in and around Bangalore City.</p>
                <div className="social-icons mt-4">
                  <ul className="flex space-x-3">
                    <li><FontAwesomeIcon  icon={faFacebook} className='text-white text-3xl
                    hover:text-amber-400 transition ease-in-out duration-300'/></li>
                    <li><FontAwesomeIcon icon={faInstagram} className='text-white text-3xl
                    hover:text-amber-400 transition ease-in-out duration-300'/></li>
                    <li><FontAwesomeIcon icon={faTwitter} className='text-white text-3xl
                    hover:text-amber-400 transition ease-in-out duration-300'/></li>
                    <li><FontAwesomeIcon icon={faWhatsapp} className='text-white text-3xl
                    hover:text-amber-400 transition ease-in-out duration-300'/></li>
                  </ul>
                </div>
                <br />
                <div className="address-list mt-4">
                  <ul className='text-left'>
                    <li className="flex items-center "><FontAwesomeIcon icon={faEnvelopeOpen} className='text-amber-400 
                   text-xl p-4'/> 
                    <a href="mailto:admissions@hillsideacademy.in" className="text-white">admissions@hillsideacademy.in</a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Column */}
            {/* Column */}
            <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
              <div className="footer-c-widget h-white list-widget text-white">
                <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
                <ul className="text-left px-20">
  <li className="relative"><Link to="/" className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">Home</Link></li>
  <li className="relative"><Link to="/about" className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">About Us</Link></li>
  <li className="relative"><a href="https://hillsidepharmacycollege.edu.in/research-activities.html" target='_blank' className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">Research</a></li>
  <li className="relative"><a href="https://hillsidepharmacycollege.edu.in/research-activities.html" target='_blank' className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">Group of Institutions</a></li>
  <li className="relative"><Link to="/alumni" className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">Alumni Association</Link></li>
  
  <li className="relative"><Link to="/admission" className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">Admission 2023-24</Link></li>
  <li className="relative"><Link to="/contact" className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">Contact</Link></li>
</ul>



              </div>
            </div>
            {/* Column */}
            {/* Column */}
            <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
              <div className="footer-c-widget h-white address-list text-white">
                <h3 className="text-lg md:text-left  font-semibold mb-4">CONTACT US</h3>
                <ul className='text-left'>
                  <li className="flex items-start mb-4"><FontAwesomeIcon icon={faMapMarkerAlt} className='text-amber-400 text-xl px-4'/># 9, Raghuvanahalli, Gubbalala Cross, Kanakapura Main Road, Bangalore-560062, Karnataka, India.</li>
                  <hr className="border-gray-700 mb-4" />
                  <h5 className="text-md text-center md:text-left font-semibold mb-2">ADMISSION</h5>
                  <li className="flex items-start mb-4"><FontAwesomeIcon icon={faMobileAlt} className='text-amber-400 text-xl px-4'/> 080 655 87775, 080 655 87776, 098 459 56633, 097 428 03553, 099 005 42900</li>
                  <hr className="border-gray-700 mb-4" />
                  <li className="flex items-start mb-4"><FontAwesomeIcon icon={faFileAlt} className='text-amber-400 text-xl px-4 '/> <a href="brochure/Hillside-Academy-Brochure.pdf" target="_blank" className="text-white text-center">Download Brochure</a></li>
                  <hr className="border-gray-700 mb-4" />
                  <li className="flex items-start"><FontAwesomeIcon icon={faFileArchive} className='text-amber-400 text-xl px-4'/> <a href="privacy-policy.html" className="text-white text-center">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            {/* Column */}
          </div>
        </div>
        {/* Footer Columns */}
      </div>
      {/* Newslatter and Columns */}

      {/* Sub Footer */}
      <div className="sub-footer bg-gray-900 text-white text-center py-4">
        <p className='text-sm'>© Copyright 2023.</p>
      </div>
      {/* Sub Footer */}
    </div>
  );
};

export default Footer;
