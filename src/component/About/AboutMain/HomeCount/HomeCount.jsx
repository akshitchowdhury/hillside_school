import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const useIntersection = (callback, options) => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [callback, options]);

  return ref;
};

const CountUpAnimation = ({ initialValue, targetValue, text }) => {
  const [count, setCount] = useState(initialValue);
  const [hasAnimated, setHasAnimated] = useState(false);
  const duration = 4000; // 4 seconds

  const startAnimation = () => {
    if (hasAnimated) return; // Do not animate again if already animated
    setHasAnimated(true); // Mark as animated
    let startValue = initialValue;
    const interval = Math.floor(duration / (targetValue - initialValue));
    
    const counter = setInterval(() => {
      startValue += 1;
      setCount(startValue);
      if (startValue >= targetValue) {
        clearInterval(counter);
      }
    }, interval);
  };

  const ref = useIntersection(() => {
    startAnimation();
  });

  return (
    <div ref={ref} className="flex flex-col items-center ">
      <span className="text-4xl md:text-6xl font-bold text-indigo-950">{count >= targetValue ? `${targetValue}+` : count}</span>
      <span className="text-lg md:text-lg text-zinc-950 mt-2">{text}</span>
    </div>
  );
};

function HomeCount() {
  return (
    <div className="count w-[90%] mx-3 my-6 lg:mx-16 md:mx-16 lg:-my-10 rounded-md py-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 ">
        <CountUpAnimation  initialValue={0} targetValue={500} text="Students Enrolled" />
        <CountUpAnimation initialValue={0} targetValue={200} text="Succesful Graduates" />
        <CountUpAnimation initialValue={0} targetValue={7} text="Years of Excellence" />
        <CountUpAnimation initialValue={0} targetValue={30} text="Experienced Faculty Members" />
      </div>
    </div>
  );
}

export default HomeCount;
