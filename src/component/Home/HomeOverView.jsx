import React from "react";
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
              <h2 className="text-amber-400 text-3xl text-left">OVERVIEW</h2>
              <p className="text-white py-4 text-justify">
                At Bethel English High School, students are meticulously
                prepared to take on significant roles in contributing positively
                to society through their educational journey. Since its
                founding, Bethel English High School has remained steadfast in
                its mission to develop students with a solid academic foundation
                and a commitment to excellence in their chosen fields. The
                institution offers an extensive array of courses and programs,
                all meticulously designed to deliver an outstanding educational
                experience that caters to diverse learning styles and needs.
                From the earliest stages of education through advanced studies,
                Bethel English High School has continuously introduced
                innovative programs across various disciplines, including
                science, arts, and humanities. This commitment to broadening
                educational horizons ensures that students have access to a
                wealth of opportunities, enabling them to achieve their full
                potential.
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
