import React, { useEffect, useRef, useState } from 'react'
import pfp from '../Elements/PFP.jpeg'
import '../CSSFiles/About.css'
import { Icon } from '@iconify/react';
import CountUp from 'react-countup';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Education from './Education';
import Experience from './Experience';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState('about');

  const handleScroll = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Bio Section
      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 70%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(".about-image", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 70%",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out"
      });

      // Animate Education Cards
      gsap.from(".edcard", {
        scrollTrigger: {
          trigger: ".about1",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.5)"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="">
      <div id="about" className="about about-section flex justify-center items-center min-h-screen text-white">
        <div className="flex justify-between items-center p-8">
          <div className='about-content flex flex-col gap-8 mr-16'>
            <h2><span1>About</span1><br />FULL-STACK DEVELOPER</h2>
            <h3>MERN-STACK DEVELOPER <span>|</span> GRAPHIC DESIGNER <span>|</span> UI DESIGNER </h3>
            <p className='w-3/4'>
              I'm <span>Manoj</span>, a final year BSC Computer Science student with a deep passion for <span>Full-Stack Developement</span>.
              I speacialize in bridging the gap beteween elegant user experience and robust, scalable backend architecture, driven by the satisfaction of seeing a project through from concept to deployment.<br /><br />
            </p>
            <button className='btn1 flex items-center gap-2' onClick={() => handleScroll('contact')}>Get In Touch<Icon icon='ep:right' className='r-arrow' /></button>
          </div>
          <img className="about-image" src={pfp} alt="" />
        </div>
      </div>
      <Education />
      <Experience />
    </div>
  )
}

export default About
