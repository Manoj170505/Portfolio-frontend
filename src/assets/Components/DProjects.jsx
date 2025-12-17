import React, { useState, useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL

const DProjects = ({ onBack }) => {
    const [projectsdata, setprojectsdata] = useState([])

    const getProjects = async () => {
        try {
            const response = await axios.get(`${API_URL}/project`)
            console.log(response.data)
            setprojectsdata(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProjects()
    }, [])

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
                    {projectsdata.map((project) => (
                        <div key={project.id} className="project-card group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="h-full w-full relative overflow-hidden">
                                <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 transition-all duration-300">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                                        <p className="text-gray-300 text-sm mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{project.description}</p>
                                        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200">
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-[#0c8cf5] hover:text-white transition-colors">
                                                View Project <span>→</span>
                                            </a>
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-800 text-white text-sm font-bold hover:bg-[#8b5cf6] transition-colors">
                                                    GitHub <span>→</span>
                                                </a>
                                            )}
                                        </div>
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