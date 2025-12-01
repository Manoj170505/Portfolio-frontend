import React from 'react'
import TimelineCardLayout from "../Elements/TimelineCardLayout"
import pfp from '../Elements/PFP.jpeg'
import '../CSSFiles/About.css'
import { Icon } from '@iconify/react';

const About = () => {
  return (
    <div className="">
    <div className="about flex justify-center items-center min-h-screen text-white">
      <div className="flex justify-between items-center p-8">
        <div className='flex flex-col gap-8 mr-16'>
          <h2><span1>About</span1><br/><span>WEB DESIGNER</span> / <span>DEVELOPER</span></h2>
          <p className='w-3/4'>
          I'm <span>Manoj</span>, a final year BSC Computer Science student with a deep passion for <span>Full-Stack Developement</span>.
          I speacialize in bridging the gap beteween elegant user experience and robust, scalable backend architecture, driven by the satisfaction of seeing a project through from concept to deployment.<br/><br/>
        </p>
        <button className='btn1 flex items-center gap-2'>Get In Touch<Icon icon='ep:right' className='r-arrow'/></button>
        </div>
      <img src={pfp} alt=""/>
      </div>
    </div>
    <div className='about1'>
      <TimelineCardLayout/>
    </div>
    </div>
  )
}

export default About
