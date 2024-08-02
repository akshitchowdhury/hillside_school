import React from 'react'
// import './About.css'
import aboutBg from "../../assets/aboutBg.jpg"
import AboutText from './AboutText'
const About = () => {
  return (
    <>
    <div className='AboutBg'>
        
    <div className='relative w-full h-[400px]'>
  <img src={aboutBg} className='object-cover w-full h-full mix-blend-multiply' alt="Background Image"/>
  <div className='absolute inset-0 bg-blue-400 opacity-40'></div>
</div>

        <AboutText/>
      </div>
      </>
  )
}

export default About
