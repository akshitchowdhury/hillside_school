
import React from 'react';
import ContactBanner from './ContactBanner';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center bg-white gap-8 p-6 md:p-8 justify-center ">
          {/* Contact Info */}
          <ContactBanner/>

          {/* Contact Form */}
          <ContactForm/>
        </div>
    </>
  );
};

export default Contact;
