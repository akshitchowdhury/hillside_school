import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faEnvelopeOpen, faMobile, faMobileAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center bg-white gap-8 p-6 md:p-8 justify-center ">
          {/* Contact Info */}
          <div className="contact-info bg-blue-950 h-[460px]  text-gray-50 p-4 ">
            <h3 className="text-2xl text-left font-semibold mb-2 my-4 ">CONTACT INFO</h3>
            <h5 className="text-base text-amber-500 font-medium ">HILLSIDE CAMPUS & ADMISSION</h5>
            <p className="text-sm  mb-4 text-left py-6">
              # 9, Raghuvanahalli, Gubbalala Cross, <br />
              Kanakapura Main Road, <br />
              Bangalore-560062, <br />
              Karnataka, India.
            </p>
            <ul className="address-list text-sm text-left space-y-3">
              <li>
                <FontAwesomeIcon className='text-amber-500' icon={faPhoneAlt}/> <i className="fa fa-phone "></i>080-65587775, 080-6558 7776, <br />
                098459 56633, 097428 03553
              </li>
              <li>
                <hr />
                <h5 className="text-base text-amber-500 font-medium">ADMISSION</h5>
              </li>
              <li>
              <FontAwesomeIcon className='text-amber-500' icon={faMobileAlt}/> (+91) 984 595 6633
              </li>
              <li>
              <FontAwesomeIcon className='text-amber-500' icon={faEnvelopeOpen}/> admissions@hillsideacademy.in
              </li>
              <li>
                <hr />
              </li>
            </ul>
            <ul className="social-icon-2 flex space-x-4 mt-4 mx-20">
              <li>
                <FontAwesomeIcon icon={faInstagram} className='text-white'/>
              </li>
              <li>
              <FontAwesomeIcon icon={faFacebook} className='text-white'/>
              </li>
              <li>
              <FontAwesomeIcon icon={faLinkedinIn} className='text-white'/>
              </li>
              <li>
              <FontAwesomeIcon icon={faGoogle} className='text-white'/>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="contact-form max-w-md">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Leave a Message</h3>
            <p className="text-sm md:text-base text-gray-600 mb-6">Please don't hesitate to contact us for more information.</p>
            <form
              action="http://techlinqs.com/html/aristotle/process.php"
              id="contact-form"
              role="form"
              method="post"
              className="leave-reply-form space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group relative">
                  <input
                    type="email"
                    className="form-control w-full p-3 border border-gray-300 rounded focus:outline-none"
                    id="form-email"
                    name="form-email"
                    placeholder="Email Address"
                    required
                  />
                  <i className="fa fa-envelope absolute top-3 right-3 text-gray-500"></i>
                </div>
                <div className="form-group relative">
                  <input
                    type="text"
                    className="form-control w-full p-3 border border-gray-300 rounded focus:outline-none"
                    id="form-fname"
                    name="form-fname"
                    placeholder="Your Name"
                    required
                  />
                  <i className="fa fa-user absolute top-3 right-3 text-gray-500"></i>
                </div>
              </div>
              <div className="form-group relative">
                <input
                  type="text"
                  className="form-control w-full p-3 border border-gray-300 rounded focus:outline-none"
                  id="form-subject"
                  name="form-subject"
                  placeholder="Subject"
                  required
                />
                <i className="fa fa-pencil-square-o absolute top-3 right-3 text-gray-500"></i>
              </div>
              <div className="form-group relative">
                <textarea
                  className="form-control w-full p-3 border border-gray-300 rounded focus:outline-none"
                  rows="2"
                  id="form-message"
                  name="form-message"
                  placeholder="Please write your message"
                  required
                ></textarea>
                <i className="fa fa-comments absolute top-3 right-3 text-gray-500"></i>
              </div>
              <div className="form-group m-0">
                <button type="submit" className="btn form-btn bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                  send message
                </button>
              </div>
            </form>
          </div>
        </div>
    </>
  );
};

export default Contact;
