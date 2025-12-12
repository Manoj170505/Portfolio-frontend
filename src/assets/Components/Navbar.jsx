import React, { useState, useEffect } from 'react'
import '../CSSFiles/Navbar.css'
import { TbSquareRoundedLetterMFilled } from "react-icons/tb";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = ['home', 'about', 'skills', 'projects', 'contact'];

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3 // Trigger when 30% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    const handleScroll = (section) => {
        setActiveSection(section);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="Nav flex flex-row justify-between items-center fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm p-4">
            <div className='w-1/4'>
                <h1 className='text-3xl font-bold text-white'><TbSquareRoundedLetterMFilled /></h1>
            </div>
            <div className='w-3/4 flex gap-8 justify-end'>
                <li className={`cursor-pointer text-white list-none font-semibold hover:text-[#0c8cf5] transition-colors ${activeSection === 'home' ? 'text-[#0c8cf5]' : ''}`} onClick={() => handleScroll('home')}>Home</li>
                <li className={`cursor-pointer text-white list-none font-semibold hover:text-[#0c8cf5] transition-colors ${activeSection === 'about' ? 'text-[#0c8cf5]' : ''}`} onClick={() => handleScroll('about')}>About</li>
                <li className={`cursor-pointer text-white list-none font-semibold hover:text-[#0c8cf5] transition-colors ${activeSection === 'skills' ? 'text-[#0c8cf5]' : ''}`} onClick={() => handleScroll('skills')}>Skills</li>
                <li className={`cursor-pointer text-white list-none font-semibold hover:text-[#0c8cf5] transition-colors ${activeSection === 'projects' ? 'text-[#0c8cf5]' : ''}`} onClick={() => handleScroll('projects')}>Projects</li>
                <li className={`cursor-pointer text-white list-none font-semibold hover:text-[#0c8cf5] transition-colors ${activeSection === 'contact' ? 'text-[#0c8cf5]' : ''}`} onClick={() => handleScroll('contact')}>Contact</li>
            </div>
        </div>
    )
}

export default Navbar