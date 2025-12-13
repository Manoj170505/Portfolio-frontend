import React, { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';

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

    const gridRef = useRef(null);

    useEffect(() => {
        // Animate grid items on mount
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
    }, []);

    return (
        <div className="min-h-screen py-16 px-4 md:px-8 bg-gray-50 dark:bg-[#0f0f0f] text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-12 relative">
                    <button
                        onClick={onBack}
                        className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-600 dark:text-white hover:text-[#0c8cf5] dark:hover:text-[#0c8cf5] transition-colors flex items-center gap-2 text-lg font-semibold"
                    >
                        <span className="text-2xl">←</span> <span className="hidden sm:inline">Back</span>
                    </button>
                    <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#0c8cf5] to-[#8b5cf6]">Featured Projects</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={gridRef}>
                    {projects.map((project) => (
                        <div key={project.id} className="project-card group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="h-full w-full relative overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 transition-all duration-300">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="text-[#0c8cf5] text-xs font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
                                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-gray-300 text-sm mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{project.description}</p>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-[#0c8cf5] hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 duration-300 delay-200">
                                            View Project <span>→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DProjects;