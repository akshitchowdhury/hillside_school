import { faFileAlt, faFileArchive, faMapMarker, faMobile, faMobileAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
  return (
    <div className="footer bg-gray-800 py-8">
      {/* Newslatter and Columns */}
      <div className="container mx-auto px-4">
        {/* Footer Columns */}
        <div className="footer-columns">
          <div className="flex flex-wrap">
            {/* Column */}
            <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
              <div className="footer-c-widget logo-widget text-white">
                <img src="images/footer-logo.png" alt="Footer Logo" className="mb-4" />
                <p>Hillside Academy started back in 1996 by Bheemachandra Education Trust. Hillside Group has various educational institutions ranging from Kindergarten to PG courses in and around Bangalore City.</p>
                <div className="social-icons mt-4">
                  <ul className="flex space-x-3">
                    <li><a className="fa fa-facebook text-white" href="javascript:void(0);"></a></li>
                    <li><a className="fa fa-instagram text-white" href="javascript:void(0);"></a></li>
                    <li><a className="fa fa-google-plus text-white" href="javascript:void(0);"></a></li>
                    <li><a className="fa fa-twitter text-white" href="javascript:void(0);"></a></li>
                  </ul>
                </div>
                <br />
                <div className="address-list mt-4">
                  <ul>
                    <li className="flex items-center"><i className="fa fa-envelope-o mr-2"></i> <a href="mailto:admissions@hillsideacademy.in" className="text-white">admissions@hillsideacademy.in</a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Column */}
            {/* Column */}
            <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
              <div className="footer-c-widget h-white list-widget text-white">
                <h3 className="text-lg font-semibold mb-4">ADMISSIONS</h3>
                <ul>
                  <li><a href="http://www.hillsideayurvedamedicalcollege.edu.in/" target="_blank" className="block mb-2">Ayurveda Medical College and Hospital</a></li>
                  <li><a href="http://hillsidepharmacycollege.edu.in/" target="_blank" className="block mb-2">Pharmacy College</a></li>
                  <li><a href="http://www.hillsidenursingcollege.edu.in/" target="_blank" className="block mb-2">Nursing College</a></li>
                  <li><a href="http://hillsidebusinessschool.edu.in/" target="_blank" className="block mb-2">Business School</a></li>
                  <li><a href="Bheemchandra-Paramedical-Institute.html" className="block mb-2">Bheemchandra Paramedical Institute</a></li>
                  <li><a href="http://hillsidecollegeofphysiotherapy.edu.in/" target="_blank" className="block mb-2">College of Physiotherapy</a></li>
                  <li><a href="javascript:void(0);" className="block mb-2">Pre-university colleges (PUC)</a></li>
                  <li><a href="javascript:void(0);" className="block mb-2">Vocational diploma Courses</a></li>
                  <li><a href="javascript:void(0);" className="block mb-2">Hillside Public School</a></li>
                </ul>
              </div>
            </div>
            {/* Column */}
            {/* Column */}
            <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
              <div className="footer-c-widget h-white address-list text-white">
                <h3 className="text-lg font-semibold mb-4">Contact us</h3>
                <ul>
                  <li className="flex items-center mb-4"><FontAwesomeIcon icon={faMapMarker} className='text-amber-400'/># 9, Raghuvanahalli, Gubbalala Cross, Kanakapura Main Road, Bangalore-560062, Karnataka, India.</li>
                  <hr className="border-gray-700 mb-4" />
                  <h5 className="text-md font-semibold mb-2">ADMISSION</h5>
                  <li className="flex items-center mb-4"><FontAwesomeIcon icon={faMobileAlt} className='text-amber-400'/> 080 655 87775, 080 655 87776, 098 459 56633, 097 428 03553, 099 005 42900</li>
                  <hr className="border-gray-700 mb-4" />
                  <li className="flex items-center mb-4"><FontAwesomeIcon icon={faFileAlt} className='text-amber-400'/> <a href="brochure/Hillside-Academy-Brochure.pdf" target="_blank" className="text-white">Download Brochure</a></li>
                  <hr className="border-gray-700 mb-4" />
                  <li className="flex items-center"><FontAwesomeIcon icon={faFileArchive} className='text-amber-400'/> <a href="privacy-policy.html" className="text-white">Privacy Policy</a></li>
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
        <p>© Copyright 2023. Hillside Academy - All Rights Reserved.</p>
      </div>
      {/* Sub Footer */}
    </div>
  );
};

export default Footer;
