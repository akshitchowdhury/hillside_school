import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutmain from "../../../assets/homeExtra.jpg";
import AboutCount from "../AboutMain/AboutCount/AboutCount";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const AnimatedSection = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} animate={controls} initial="hidden" variants={fadeUpVariants}>
      {children}
    </motion.div>
  );
};

const AboutMain = () => {
  return (
    <>
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-start gap-8">
          <AnimatedSection>
            <div className="lg:w-2/3 w-full">
              <h3 className="text-amber-400 text-lg text-left mb-4">
                How it started for us
              </h3>
              <h2 className="text-4xl lg:text-6xl md:text-5xl font-normal text-left text-gray-800 mb-4">
                Hillside School for Children
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="lg:w-1/2 w-full">
              <img
                src={aboutmain}
                alt="Hillside School"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <AnimatedSection>
            <div className="lg:w-1/2 w-full">
              <p className="text-lg text-left text-gray-600">
                <span className="text-4xl text-amber-400 font-semibold">
                  Hillside Group of Institutions
                </span>{" "}
                started back in 1996 by Bheemachandra Education Trust. Hillside
                Group has various educational institutions ranging from
                Kindergarten to PG courses in and around Bangalore City. Started
                with healthcare education, basic schools, and added more and
                more courses in the field of nursing, Pharmacy College, business
                management, and commerce. Hillside Group of Institutions is a
                distinguished educational institution, combining excellence
                with innovation.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="lg:w-1/2 w-full">
              <AboutCount />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
};

export default AboutMain;
