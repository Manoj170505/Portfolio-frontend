import React, { useState, useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import '../CSSFiles/DProjects.css';

const DProjects = ({ onBack }) => {
    const projects = useMemo(() => [
        {
            id: 1,
            title: 'Feedo',
            category: 'Web App',
            description: 'A comprehensive feedback management platform enabling users to submit and view feedback seamlessly.',
            image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            link: 'https://feedo.com'
        },
        {
            id: 2,
            title: 'CryptoTracker',
            category: 'App',
            description: 'Real-time cryptocurrency tracking dashboard with live price updates and portfolio management.',
            image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            link: '#'
        },
        {
            id: 3,
            title: 'AI Image Gen',
            category: 'AI',
            description: 'Generative AI tool that creates unique artwork based on text prompts using stable diffusion.',
            image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            link: '#'
        },
        {
            id: 4,
            title: 'TaskMaster',
            category: 'Web App',
            description: 'Productivity application for teams to collaborate, assign tasks, and track project progress.',
            image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            link: '#'
        },
        {
            id: 5,
            title: 'FitPulse',
            category: 'App',
            description: 'Fitness tracking mobile application with workout plans, diet logs, and progress visualization.',
            image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            link: '#'
        },
        {
            id: 6,
            title: 'Smart Home',
            category: 'IoT',
            description: 'IoT dashboard to control smart home devices including lights, thermostat, and security cameras.',
            image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            link: '#'
        },
    ], []);

    const [activeCategory, setActiveCategory] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const gridRef = useRef(null);

    const categories = ['All', 'Web App', 'App', 'AI', 'IoT'];

    useEffect(() => {
        if (activeCategory === 'All') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.category === activeCategory));
        }
    }, [activeCategory, projects]);

    useEffect(() => {
        // Animate grid items when they change
        const ctx = gsap.context(() => {
            gsap.fromTo('.project-card',
                {
                    y: 50,
                    opacity: 0,
                    scale: 0.9
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power3.out'
                }
            );
        }, gridRef);

        return () => ctx.revert();
    }, [filteredProjects]);

    return (
        <div className="d-projects-container">
            <div className="d-projects-header relative">
                <button
                    onClick={onBack}
                    className="absolute top-0 left-0 text-white hover:text-blue-400 transition-colors flex items-center gap-2 text-lg font-semibold"
                >
                    <span className="text-2xl">←</span> Back
                </button>
                <h1 className="d-projects-title">Featured Projects</h1>
                <div className="d-projects-filter">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="d-projects-grid" ref={gridRef}>
                {filteredProjects.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="card-image-container">
                            <img src={project.image} alt={project.title} className="card-image" />
                            <div className="card-overlay">
                                <div className="card-content">
                                    <span className="card-category">{project.category}</span>
                                    <h3 className="card-title">{project.title}</h3>
                                    <p className="card-description">{project.description}</p>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-btn">
                                        View Project <span style={{ fontSize: '1.2em' }}>→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DProjects;