import React from 'react';
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects onViewAll={() => navigate('/projects')} />
            <Contact />
            <Footer />
        </>
    );
};

export default HomePage;
