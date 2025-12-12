import React from 'react';
import '../CSSFiles/Footer.css';
import { Icon } from '@iconify/react';
import { TbSquareRoundedLetterMFilled } from "react-icons/tb";

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-brand">
                    <h1 className='text-3xl font-bold text-white mb-4 flex items-center gap-2'>
                        <TbSquareRoundedLetterMFilled /> <span>Manoj</span>
                    </h1>
                    <p>
                        Building digital experiences that blend design and technology.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Work</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h3>Connect</h3>
                    <div className="social-icons-footer">
                        <a href="#" className="social-icon"><Icon icon="mdi:github" /></a>
                        <a href="#" className="social-icon"><Icon icon="mdi:linkedin" /></a>
                        <a href="#" className="social-icon"><Icon icon="mdi:twitter" /></a>
                        <a href="#" className="social-icon"><Icon icon="mdi:instagram" /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Manoj. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
