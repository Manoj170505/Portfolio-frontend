import React, { useState } from 'react';
import CardSwap, { Card } from '../Elements/Cardswap';

const Projects = () => {
    // Array of projects with title and description
    const projects = [
        {
            title: 'Feedo',
            description: 'Feedo is a feedback management platform that allows users to submit feedback and view feedback submitted by others.',
            link: 'https://feedo.com',
        },
        {
            title: 'Card 2',
            description: 'Your content here for Card 2.',
        },
        {
            title: 'Card 3',
            description: 'Your content here for Card 3.',
        },
    ];

    // State to track the selected project index
    const [selectedProject, setSelectedProject] = useState(0);

    return (
        <div>
            <div className="min-h-screen relative overflow-hidden py-16 px-4">
                <div className="relative z-10 max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-wide text-center drop-shadow-lg">
                        PROJECTS
                    </h1>
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-16 h-full">
                        {/* Left Side: Project Details */}
                        <div className="flex-1 text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">
                                {projects[selectedProject].title}
                            </h2>
                            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                                {projects[selectedProject].description}
                            </p>
                            <button onClick={() => window.open(projects[selectedProject].link, '_blank')}>
                                View Project
                            </button>
                        </div>
                        {/* Right Side: CardSwap */}
                        <div className="flex-1 flex justify-center items-center" style={{ height: '600px', position: 'relative' }}>
                            <CardSwap
                                cardDistance={60}
                                verticalDistance={70}
                                delay={5000}
                                pauseOnHover={false}
                            >
                                {projects.map((project, index) => (
                                    <Card
                                        key={index}
                                        onClick={() => setSelectedProject(index)} // Assumes Card accepts onClick; if not, modify Card component to forward it
                                        className="cursor-pointer" // For visual feedback
                                    >
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                    </Card>
                                ))}
                            </CardSwap>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
