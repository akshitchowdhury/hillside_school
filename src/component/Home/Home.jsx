import React from "react";
import HomeOverView from "./HomeOverView";
import NavHome from "../Nav/NavHome/NavHome";
import "./Home.css";
import VisionMission from "../About/VisionMission";
import AboutMain from "../About/AboutMain/AboutMain";
import AboutPointers from "../About/AboutPointers";
import HomeAbout from "./HomeAbout";
import eca from "../../assets/homeEca.jpg";
import sports from "../../assets/homeSports.webp";

const Home = () => {
  return (
    <>
      <div className="HomeBg">
        {/* You can add any background or styling here */}
      </div>
      <NavHome />
      <section className="tc-padding o-featured-courses p-7 lg:p-24">
        <div className="container mx-auto my-3 md:my-24">
          {/* Main Heading */}
          <div className="main-heading-holder text-center mb-10">
            <div className="main-heading text-gray-600">
              <h2 className="text-3xl lg:text-5xl font-serif text-amber-400">
                Bethel English High School
              </h2>
              <span className="text-6xl">B</span>
              <span className="sperater flex justify-center items-center mt-4">
                <i className="w-4 h-4 border-t border-l border-gray-500 rotate-45"></i>
                <i className="w-4 h-4 border-t border-l border-gray-500 rotate-45 mx-2 active"></i>
                <i className="w-4 h-4 border-t border-l border-gray-500 rotate-45"></i>
              </span>

              {/* First Paragraph */}
              <p className="mt-6 text-left text-base leading-7">
                <span className="text-3xl font-semibold text-amber-400">
                  Bethel English High School
                </span>{" "}
                was established with the mission of providing high-quality
                education to the students of our community. Over the years,
                Bethel has grown into a well-respected institution known for its
                commitment to academic excellence, holistic development, and
                fostering a nurturing environment.
              </p>

              {/* Second Paragraph with Image on the Left */}
              <div className="flex flex-col md:flex-row  space-x-3 items-center mt-6 text-base leading-7">
                <div className="w-full md:w-[700px] mb-4 md:mb-0 md:mr-6">
                  <img
                    src={eca}
                    alt="Bethel School Campus"
                    className="rounded-lg shadow-lg w-full object-cover"
                  />
                </div>
                <p className="w-full md:w-3/4 text-justify">
                  Bethel English High School emphasizes a <span className="text-lg font-semibold text-amber-400"> strong foundation in
                  both academic and extracurricular activities </span>. Our curriculum
                  is designed to cater to the overall development of each
                  student, ensuring that they are well-prepared for future
                  challenges. With a dedicated team of experienced educators,
                  Bethel creates a learning environment that encourages critical
                  thinking, creativity, and a passion for lifelong learning. We
                  believe that education goes beyond textbooks, and our approach
                  integrates practical knowledge with theoretical understanding.
                  Through personalized attention and innovative teaching
                  methods, we aim to ignite curiosity and inspire students to
                  explore their potential. <span className="text-lg font-semibold text-amber-400"> Our state-of-the-art facilities and
                  diverse programs </span>provide students with the tools they need to
                  excel in their chosen fields , whether in the sciences, arts,
                  or humanities. Additionally, our focus on moral and ethical
                  values ensures that students not only achieve academic success
                  but also grow into responsible and compassionate individuals.
                  At Bethel, we are committed to fostering a community where
                  every student feels valued and supported, ready to face the
                  world with confidence and integrity
                </p>
              </div>

              {/* Third Paragraph with Image on the Right */}
              <div className="flex flex-col md:flex-row-reverse items-center mt-6 text-base leading-7">
                <div className="w-full md:w-[400px] mb-4 md:mb-0 md:ml-6">
                  <img
                    src={sports}
                    alt="Bethel School Activities"
                    className="rounded-lg shadow-lg w-full object-cover"
                  />
                </div>
                <p className="w-full md:w-2/3 text-justify">
                  Our students not only excel in academics but also<span className="text-lg font-semibold text-amber-400"> actively
                  participate in various sports, arts, and cultural programs</span>. We
                  believe in nurturing the unique talents of every child and
                  providing them with the opportunities to shine. Bethel English
                  High School is proud of its rich heritage and continues to
                  strive towards being a beacon of excellence in education. Our
                  commitment to holistic development is reflected in our wide
                  range of extracurricular activities, which are designed to
                  cultivate leadership, teamwork, and creative expression. From
                  inter-school competitions to community service projects, our
                  students are encouraged to explore their interests and
                  contribute meaningfully to society. With a strong emphasis on
                  values and ethics, Bethel instills a sense of responsibility
                  and respect in every student, preparing them to become
                  well-rounded individuals who can make a positive impact in the
                  world. As we look to the future, we remain dedicated to
                  maintaining our tradition of excellence while embracing
                  innovation in teaching and learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeAbout />
      <AboutPointers />
      <HomeOverView />
    </>
  );
};

export default Home;
