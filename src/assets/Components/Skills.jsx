import React, { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
// import "../CSSFiles/Skills.css" // Removed as it was empty
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Glow Animation
      gsap.to(".skills-bg-glow", {
        scale: 1.2,
        opacity: 0.8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Animate each section's items
      const sections = document.querySelectorAll('.skill-section');

      sections.forEach(section => {
        gsap.from(section.querySelectorAll('li'), {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          y: 30,
          opacity: 0,
          scale: 0.8,
          duration: 0.6,
          stagger: 0.05,
          ease: "back.out(1.5)"
        });

        gsap.from(section.querySelector('h1'), {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
          x: -30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="skills" ref={containerRef} className="min-h-screen flex flex-col justify-center items-center py-16 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="skills-bg-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-6xl w-full space-y-16 z-10 relative">
        {/* Frontend Section */}
        <div className="text-center skill-section">
          <h1 className="underlines text-4xl md:text-5xl font-bold text-white mb-8 tracking-wide">
            FRONTEND
          </h1>
          <ul className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <li className="flex flex-col items-center space-y-2 group">
              <Icon
                icon="flowbite:html-solid"
                className="text-6xl md:text-7xl text-orange-600 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-lg md:text-xl text-white font-medium">HTML</p>
            </li>
            <li className="flex flex-col items-center space-y-2 group">
              <Icon
                icon="flowbite:css-solid"
                className="text-6xl md:text-7xl text-blue-600 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-lg md:text-xl text-white font-medium">CSS</p>
            </li>
            <li className="flex flex-col items-center space-y-2 group">
              <Icon
                icon="ri:javascript-fill"
                className="text-6xl md:text-7xl text-yellow-400 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-lg md:text-xl text-white font-medium">JS</p>
            </li>
            <li className="flex flex-col items-center space-y-2 group">
              <Icon
                icon="hugeicons:react"
                className="text-6xl md:text-7xl text-cyan-400 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-lg md:text-xl text-white font-medium">REACT</p>
            </li>
            <li className="flex flex-col items-center space-y-2 group">
              <Icon
                icon="ri:bootstrap-fill"
                className="text-6xl md:text-7xl text-purple-600 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-lg md:text-xl text-white font-medium">BOOTSTRAP</p>
            </li>
            <li className="flex flex-col items-center space-y-2 group">
              <Icon
                icon="flowbite:tailwind-solid"
                className="text-6xl md:text-7xl text-cyan-500 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-lg md:text-xl text-white font-medium">TAILWIND</p>
            </li>
            <li className="flex flex-col items-center space-y-2 group">
              <div className="text-6xl md:text-7xl font-bold text-white transition-transform duration-300 group-hover:scale-110">
                style<span className="text-blue-500">X</span>
              </div>
              <p className="text-lg md:text-xl text-white font-medium">STYLEX</p>
            </li>
          </ul>
        </div>

        {/* Backend Section */}
        <div className="text-center skill-section">
          <h1 className="underlines text-4xl md:text-5xl font-bold text-white mb-8 tracking-wide">
            BACKEND
          </h1>
          <ul className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <li className="flex flex-col items-center space-y-2 group">
              <Icon
                icon="akar-icons:node-fill"
                className="text-6xl md:text-7xl text-green-600 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-lg md:text-xl text-white font-medium">NODE</p>
            </li>
            <li className="flex flex-col items-center space-y-2 group">
              <Icon
                icon="flowbite:mongo-db-solid"
                className="text-6xl md:text-7xl text-green-500 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-lg md:text-xl text-white font-medium">MONGO</p>
            </li>
            <li className="flex flex-col items-center space-y-2 group">
              <Icon
                icon="lineicons:expressjs"
                className="text-6xl md:text-7xl text-gray-600 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-lg md:text-xl text-white font-medium">EXPRESS</p>
            </li>
            <li className="flex flex-col items-center space-y-2 group">
              <Icon
                icon="lineicons:oracle"
                className="text-6xl md:text-7xl text-red-600 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-lg md:text-xl text-white font-medium">ORACLE</p>
            </li>
            <li className="flex flex-col items-center space-y-2 group">
              <Icon
                icon="lineicons:prisma"
                className="text-6xl md:text-7xl text-blue-500 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-lg md:text-xl text-white font-medium">PRISMA</p>
            </li>
          </ul>
        </div>

        {/* Software Section */}
        <div className="text-center skill-section">
          <h1 className="underlines text-4xl md:text-5xl font-bold text-white mb-8 tracking-wide">
            SOFTWARE
          </h1>
          <ul className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <li className="flex flex-col items-center space-y-2 group">
              <Icon
                icon="solar:figma-bold"
                className="text-6xl md:text-7xl text-purple-500 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-lg md:text-xl text-white font-medium">FIGMA</p>
            </li>
            <li className="flex flex-col items-center space-y-2 group">
              <Icon
                icon="devicon-plain:xd"
                className="text-6xl md:text-7xl text-pink-600 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-lg md:text-xl text-white font-medium">XD</p>
            </li>
            <li className="flex flex-col items-center space-y-2 group">
              <Icon
                icon="mage:illustrator"
                className="text-6xl md:text-7xl text-orange-500 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-lg md:text-xl text-white font-medium">ILLUSTRATOR</p>
            </li>
            <li className="flex flex-col items-center space-y-2 group">
              <Icon
                icon="file-icons:inkscape"
                className="text-6xl md:text-7xl text-yellow-500 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-lg md:text-xl text-white font-medium">INKSCAPE</p>
            </li>
            <li className="flex flex-col items-center space-y-2 group">
              <Icon
                icon="circum:penpot"
                className="text-6xl md:text-7xl text-blue-600 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-lg md:text-xl text-white font-medium">PENPOT</p>
            </li>
            <li className="flex flex-col items-center space-y-2 group">
              <Icon
                icon="lineicons:canva"
                className="text-6xl md:text-7xl text-cyan-500 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-lg md:text-xl text-white font-medium">CANVA</p>
            </li>
            <li className="flex flex-col items-center space-y-2 group">
              <Icon
                icon="streamline-logos:affinity-logo-block"
                className="text-6xl md:text-7xl text-red-500 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-lg md:text-xl text-white font-medium">AFFINITY</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;