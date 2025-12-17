import React, { useState, useEffect } from 'react';
import '../CSSFiles/Footer.css';
import { Icon } from '@iconify/react';
import { TbSquareRoundedLetterMFilled } from "react-icons/tb";
import axios from 'axios';

const Footer = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const [social, setSocial] = useState(null);

    useEffect(() => {
        const fetchSocial = async () => {
            try {
                const response = await axios.get(`${API_URL}/social`);
                if (response.data) {
                    setSocial(response.data);
                }
            } catch (error) {
                console.error("Error fetching social data:", error);
            }
        };
        fetchSocial();
    }, [API_URL]);
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
                        <a href={social ? social.github : "#"} target="_blank" rel="noopener noreferrer" className="social-icon"><Icon icon="mdi:github" /></a>
                        <a href={social ? social.linkedin : "#"} target="_blank" rel="noopener noreferrer" className="social-icon"><Icon icon="mdi:linkedin" /></a>
                        <a href={social ? social.pinterest : "#"} target="_blank" rel="noopener noreferrer" className="social-icon"><Icon icon="mdi:pinterest" /></a>
                        <a href={social ? social.instagram : "#"} target="_blank" rel="noopener noreferrer" className="social-icon"><Icon icon="mdi:instagram" /></a>
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
