import React, { useState } from 'react'
import '../CSSFiles/Navbar.css'
import { TbSquareRoundedLetterMFilled } from "react-icons/tb";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const handleScroll = (section) => {
        setActiveSection(section);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="Nav flex flex-row justify-between items-center">
            <div className='w-1/4'>
                <h1 className='text-3xl font-bold'><TbSquareRoundedLetterMFilled /></h1>
            </div>
            <div className='w-3/4 flex gap-8 justify-end'>
                <li className={activeSection === 'home' ? 'active' : ''} onClick={() => handleScroll('home')}>Home</li>
                <li className={activeSection === 'about' ? 'active' : ''} onClick={() => handleScroll('about')}>About</li>
                <li className={activeSection === 'skills' ? 'active' : ''} onClick={() => handleScroll('skills')}>Skills</li>
                <li className={activeSection === 'projects' ? 'active' : ''} onClick={() => handleScroll('projects')}>Projects</li>
                <li className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleScroll('contact')}>Contact</li>
            </div>
        </div>
    )
}

export default Navbar