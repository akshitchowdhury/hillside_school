import React from 'react'
// import './About.css'
import AboutText from './AboutText'
import AboutHero from './AboutHero'
import AboutPointers from './AboutPointers'
import AboutMain from './AboutMain/AboutMain'
const About = () => {
  return (
    <>
    <div className='AboutBg'>
        
    <AboutHero/>

    <AboutText/>


    <AboutPointers/>
    <AboutMain/>
      </div>
      </>
  )
}

export default About
