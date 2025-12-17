import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);
  const [skills, setSkills] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get(`${API_URL}/skill`);
        setSkills(response.data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchSkills();
  }, [API_URL]);

  useEffect(() => {
    if (skills.length === 0) return;

    const ctx = gsap.context(() => {
      // Animate each section's items
      const sections = document.querySelectorAll('.skill-section');

      sections.forEach(section => {
        const items = section.querySelectorAll('li');
        if (items.length > 0) {
          gsap.from(items, {
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
        }

        const heading = section.querySelector('h1');
        if (heading) {
          gsap.from(heading, {
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse"
            },
            x: -30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
          });
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, [skills]);

  // Helper to filter skills by category
  const getSkillsByCategory = (category) => {
    return skills.filter(skill => skill.category === category);
  };

  const frontendSkills = getSkillsByCategory('Frontend');
  const backendSkills = getSkillsByCategory('Backend');
  const softwareSkills = getSkillsByCategory('Software');

  const renderSkillSection = (title, skillsList, gradientFrom, gradientTo) => (
    <div className="text-center skill-section">
      <h1 className={`underlines text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[${gradientFrom}] to-[${gradientTo}] mb-8 tracking-wide`}>
        {title}
      </h1>
      {skillsList.length > 0 ? (
        <ul className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {skillsList.map((skill) => (
            <li key={skill.id} className="flex flex-col items-center space-y-2 group">
              <Icon
                icon={skill.icon}
                className="text-6xl md:text-7xl transition-transform duration-300 group-hover:scale-110"
                style={{ color: skill.color }}
              />
              <p className="text-lg md:text-xl text-gray-800 dark:text-white font-medium">{skill.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No skills added yet.</p>
      )}
    </div>
  );

  return (
    <div id="skills" ref={containerRef} className="min-h-screen flex flex-col justify-center items-center py-16 px-4 relative overflow-hidden z-10">
      <div className="max-w-6xl w-full space-y-16 z-10 relative">
        {/* Frontend Section */}
        {renderSkillSection('FRONTEND', frontendSkills, '#0c8cf5', '#8b5cf6')}

        {/* Backend Section */}
        {renderSkillSection('BACKEND', backendSkills, '#0c8cf5', '#8b5cf6')}

        {/* Software Section */}
        {renderSkillSection('SOFTWARE', softwareSkills, '#0c8cf5', '#8b5cf6')}
      </div>
    </div>
  );
};

export default Skills;