import React from 'react'
// import './About.css'
import AboutText from './AboutText'
import AboutHero from './AboutHero'
import AboutPointers from './AboutPointers'
import AboutMain from './AboutMain/AboutMain'
import VisionMission from './VisionMission'
const About = () => {
  return (
    <>
    <div className='AboutBg'>
    </div>
    <AboutHero/>

    <AboutText/>


    <AboutMain/>
    
    <AboutPointers/>

    <VisionMission/>
      
      </>
  )
}

export default About
