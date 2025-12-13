import React, { useState, useEffect } from 'react'
import { TbSquareRoundedLetterMFilled } from "react-icons/tb";
import { BiMenu, BiX, BiSun, BiMoon } from "react-icons/bi";
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const sections = ['home', 'about', 'skills', 'projects', 'contact'];

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
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
        setIsMenuOpen(false);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = ['home', 'about', 'skills', 'projects', 'contact'];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/20 backdrop-blur-md shadow-sm dark:shadow-none transition-colors duration-300">
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    {/* Logo */}
                    <div className='flex-shrink-0 cursor-pointer' onClick={() => handleScroll('home')}>
                         <h1 className='text-3xl font-bold text-gray-900 dark:text-white transition-colors'>
                            <TbSquareRoundedLetterMFilled />
                         </h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className='hidden md:block'>
                        <div className='ml-10 flex justify-center items-center space-x-8'>
                            {navLinks.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => handleScroll(item)}
                                    className={`capitalize px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                                        activeSection === item
                                            ? 'text-blue-600 dark:text-[#0c8cf5] scale-110'
                                            : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-[#0c8cf5] hover:bg-gray-100 dark:hover:bg-white/5'
                                    }`}
                                >
                                    {item}
                                </button>
                            ))}
                            <button 
                                onClick={toggleTheme}
                                className="py-2 px-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors focus:outline-none"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'dark' ? <BiSun size={20} /> : <BiMoon size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='flex md:hidden items-center gap-4'>
                         {/* Theme Toggle Button Mobile */}
                         <button 
                                onClick={toggleTheme}
                                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors focus:outline-none"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'dark' ? <BiSun size={20} /> : <BiMoon size={20} />}
                        </button>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-white/10 focus:outline-none transition-colors'
                        >
                            {isMenuOpen ? <BiX size={30} /> : <BiMenu size={30} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className='md:hidden absolute top-16 left-0 w-full bg-white dark:bg-black/95 backdrop-blur-xl border-t dark:border-white/10 shadow-lg transition-all duration-300'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        {navLinks.map((item) => (
                            <button
                                key={item}
                                onClick={() => handleScroll(item)}
                                className={`capitalize block w-full text-left px-3 py-4 rounded-md text-base font-medium transition-colors ${
                                    activeSection === item
                                        ? 'bg-blue-50 dark:bg-white/10 text-blue-600 dark:text-[#0c8cf5]'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-blue-500 dark:hover:text-[#0c8cf5]'
                                }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar