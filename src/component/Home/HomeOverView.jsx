import React from 'react';
import ov1 from "../../assets/overView1.webp";
import ov2 from "../../assets/overView2.webp";
import ov3 from "../../assets/overView3.webp";
import ov4 from "../../assets/overView4.jpg";

const HomeOverView = () => {
  return (
    <section className="Lecturers style-2 bg-indigo-900">
      <div className="flex flex-wrap lg:flex-nowrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="lectures-detail p-4">
            <div className="mx-auto">
              <h2 className='text-amber-400 text-3xl text-left'>OVERVIEW</h2>
              <p className='text-white py-4 text-left'>
                The students are prepared to play a vital role in serving humanity through the medical field. Since the
                establishment, the goal of this institution has been to develop students with a strong academic
                background and excellence in the field chosen. The Academy offers numerous courses and programs all
                being designed to educate exceptionally well and in a student-friendly pattern. Since its inception,
                the college has been introducing courses in the various field of medicine, and other sciences to
                provide more opportunities to the students and enhance the academics of the institution. The excellent
                education process of Hillside Academy produces brilliant professionals with vast knowledge and
                generous and caring human beings.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 grid grid-cols-2 ">
          <div className="lectures-column">
            <img src={ov1} alt="Hillside Academy Overview 1" />
          </div>
          <div className="lectures-column">
            <img src={ov2} alt="Hillside Academy Overview 2" />
          </div>
          <div className="lectures-column">
            <img src={ov3} alt="Hillside Academy Overview 3" />
          </div>
          <div className="lectures-column">
            <img src={ov4} alt="Hillside Academy Overview 4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOverView;
