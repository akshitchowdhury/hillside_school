import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons/faEnvelopeOpen';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons/faMobileAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AdmissionAbout = () => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-6/12 px-4">
            <div className="bg-gray-50">
              <div className="mb-3">
                <h2 className="text-4xl text-amber-500 font-bold my-2 text-left">
                  About
                </h2>
                <h5 className="text-2xl text-left  text-zinc-950">
                  Hillside Group of Institutions
                </h5>
              </div>
              <p className="text-black text-left">
                Hillside Group of Institutions started back in 1996 by
                Bheemachandra Education Trust. Hillside Group has various
                educational institutions ranging from Kindergarten to PG
                courses in and around Bangalore City. Started with healthcare
                education, basic schools and added more and more courses in the
                field of nursing, Pharmacy College, business management and
                commerce. Hillside Group of Institutions is a distinguished
                educational institution, combining excellence with innovation.
                Hillside Group of Institutions places a high value on providing
                its students with fulfilling educational experience in their
                chosen discipline. It offers a wide range of academic courses to
                students, giving them a solid academic foundation and enabling
                them to achieve individual goals.
              </p>
            </div>
          </div>
          <div className="w-full md:w-5/12 px-4 mt-8 md:mt-0 md:ml-auto">
            <div className="bg-gray-800 p-6 rounded-none shadow-lg text-white">
              <ul className="space-y-4">
                <li className="text-3xl text-amber-500 font-semibold text-left">Contact us</li>
                <li className='text-left'># 9, Raghuvanahalli, Gubbalala Cross, Kanakapura Main Road, Bangalore-560062, Karnataka, India.</li>
                <hr className="border-gray-700" />
                <li className="text-3xl text-amber-500 text-left font-semibold">Admission</li>
                <li className='text-left'><FontAwesomeIcon className='text-amber-500' icon={faMobileAlt}/>: 098 459 56633, 097 428 03553, 099 005 42900</li>
                <li className='text-left'><FontAwesomeIcon className='text-amber-500' icon={faEnvelopeOpen}/>: <a href="mailto:admissions@hillsideacademy.in" className="text-blue-400 hover:underline">admissions@hillsideacademy.in</a></li>
                <hr className="border-gray-700" />
                <li>
                  <a
                    href="assets-admission/brochure/Hillside-Academy-Brochure.pdf"
                    target="_blank"
                    className="inline-block bg-amber-500 hover:bg-green-600 h-10 text-white font-semibold py-2 px-4 rounded-md"
                  >
                    Download Brochure
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionAbout;
