import React, { useState, useEffect, useRef } from 'react';
import CardSwap, { Card } from '../Elements/Cardswap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ onViewAll }) => {
    // Array of projects with title and description
    const projects = [
        {
            title: 'Feedo',
            description: 'Feedo is a feedback management platform that allows users to submit feedback and view feedback submitted by others.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/d9/fa/1b/lost-valley.jpg?w=1200&h=-1&s=1',
        },
        {
            title: 'Project Alpha',
            description: 'A cutting-edge AI solution optimizing workflow efficiency for enterprise clients.',
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Neon Dash',
            description: 'An immersive cyberpunk-themed rhythm game with real-time multiplayer features.',
            image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
    ];

    const [selectedProject, setSelectedProject] = useState(0);
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    // Effect to automatically cycle through projects every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedProject((prevIndex) => (prevIndex + 1) % projects.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [projects.length]);

    // GSAP Animation
    useEffect(() => {
        const el = containerRef.current;
        const content = contentRef.current;

        const ctx = gsap.context(() => {
            gsap.fromTo(content,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }, el);

        return () => ctx.revert();
    }, []);

    return (
        <div id='projects' ref={containerRef} className="min-h-screen flex justify-center items-center relative overflow-hidden px-4 py-16">
            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-20">
                    {/* Left Side: Project Details */}
                    <div ref={contentRef} className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2 tracking-tight drop-shadow-2xl">
                                WORK
                            </h1>
                            <div className="h-1 w-24 bg-blue-500 rounded-full mx-auto lg:mx-0"></div>
                        </div>

                        <div className="space-y-4 max-w-lg">
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                                {projects[selectedProject].title}
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed font-light">
                                {projects[selectedProject].description}
                            </p>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button
                                className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                onClick={onViewAll}
                            >
                                View All Projects
                            </button>
                        </div>
                    </div>

                    {/* Right Side: CardSwap */}
                    <div className="flex-1 w-full flex justify-center items-center h-[500px]" style={{ perspective: '1000px' }}>
                        <CardSwap
                            cardDistance={50}
                            verticalDistance={60}
                            delay={6000}
                            pauseOnHover={false}
                        >
                            {projects.map((project, index) => (
                                <Card
                                    key={index}
                                    onClick={() => setSelectedProject(index)}
                                    className="cursor-pointer bg-cover bg-center bg-no-repeat shadow-2xl border-2 border-white/10 rounded-2xl"
                                    style={{
                                        backgroundImage: `url(${project.image || 'https://via.placeholder.com/400x300?text=No+Image'})`,
                                        width: '400px',
                                        height: '550px',
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                                        <h3 className="text-white text-2xl font-bold mb-1">
                                            {project.title}
                                        </h3>
                                        <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
                                    </div>
                                </Card>
                            ))}
                        </CardSwap>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
