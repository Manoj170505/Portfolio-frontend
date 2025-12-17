import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import pfp from '../Elements/PFP.jpeg'
import { Icon } from '@iconify/react';
import CountUp from 'react-countup';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Education from './Education';
import Experience from './Experience';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [about, setAbout] = useState(null);
  const containerRef = useRef(null);
  const handleScroll = (section) => {
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
  }, [about]); // Dependency on about so animations re-run if content changes significantly (optional)

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await axios.get(`${API_URL}/about`);
        if (response.data) {
          setAbout(response.data);
        }
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };
    fetchAbout();
  }, [API_URL]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <div id="about" className="about-section flex flex-col md:flex-row justify-center items-center min-h-screen text-gray-900 dark:text-white relative z-10 overflow-hidden px-4 md:px-8 py-16 gap-12">
          <div className='about-content flex flex-col gap-6 md:gap-8 md:w-1/2 text-center md:text-left items-center md:items-start'>
            <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0c8cf5] to-[#8b5cf6]">About</span>
                <br />
                FULL-STACK DEVELOPER
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold">
                {about ? about.skills : "MERN-STACK DEVELOPER | GRAPHIC DESIGNER | UI DESIGNER"}
            </h3>
            <p className='text-lg md:text-xl leading-relaxed md:w-3/4 opacity-90'>
              {about ? about.description : (
                <>
                I'm <span className="font-bold text-[#0c8cf5]">Manoj</span>, a final year BSC Computer Science student with a deep passion for <span className="font-bold text-[#0c8cf5]">Full-Stack Development</span>.
                I specialize in bridging the gap between elegant user experience and robust, scalable backend architecture, driven by the satisfaction of seeing a project through from concept to deployment.
                </>
              )}
            </p>
            <button 
                className='flex items-center gap-2 px-8 py-3 rounded-full text-lg font-semibold bg-gray-900 text-white dark:bg-white dark:text-black hover:bg-gradient-to-r hover:from-[#0c8cf5] hover:to-[#8b5cf6] hover:text-white dark:hover:text-white hover:shadow-[0_0_15px_rgba(12,140,245,0.6)] transition-all duration-300' 
                onClick={() => handleScroll('contact')}
            >
                Get In Touch <Icon icon='ep:right' className='r-arrow text-xl' />
            </button>
          </div>
          <img 
            className="about-image w-full max-w-[300px] md:max-w-md rounded-2xl object-cover object-top border-4 border-white/50 dark:border-white/20 shadow-2xl" 
            src={about && about.image ? about.image : pfp} 
            alt="Profile" 
          />
      </div>
      <Education />
      <Experience />
    </div>
  )
}


export default About
