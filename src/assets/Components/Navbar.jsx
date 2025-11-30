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
        <div className='w-3/4 flex justify-end'>
            <ul className='flex flex-row gap-6'>
                <li id='home' className={activeSection === 'home' ? 'active' : ''} onClick={()=>handleScroll('home')}>Home</li>
                <li id='about' className={activeSection === 'about' ? 'active' : ''} onClick={()=>handleScroll('about')}>About</li>
                <li id='skills' className={activeSection === 'skills' ? 'active' : ''} onClick={()=>handleScroll('skills')}>Skills</li>
                <li id='projects' className={activeSection === 'projects' ? 'active' : ''} onClick={()=>handleScroll('projects')}>Projects</li>
                <li id='contact' className={activeSection === 'contact' ? 'active' : ''} onClick={()=>handleScroll('contact')}>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar