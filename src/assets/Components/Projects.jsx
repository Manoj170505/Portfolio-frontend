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

    return (
        <div id='projects' className="min-h-screen flex justify-center items-center relative overflow-hidden px-4 py-16 z-10">
            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-20">
                    {/* Left Side: Project Details */}
                    <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0c8cf5] to-[#8b5cf6] mb-2 drop-shadow-2xl">
                                WORK
                            </h1>
                        </div>

                        <div className="space-y-4 max-w-lg">
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light transition-colors">
                                As the sole MERN Stack developer, I managed the entire development process, from conceptualizing the architecture to deploying the app. I focused on building a responsive, user-friendly interface and ensuring secure data handling for multi-user environments.
                            </p>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button
                                className="px-8 py-3 rounded-full bg-gray-900 text-white dark:bg-white dark:text-black font-bold hover:bg-gradient-to-r hover:from-[#0c8cf5] hover:to-[#8b5cf6] dark:hover:bg-gray-200 transition-all transform shadow-lg dark:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                onClick={onViewAll}
                            >
                                View All Projects
                            </button>
                        </div>
                    </div>

                    {/* Mobile View: Standard Cards */}
                    <div className="flex lg:hidden flex-col gap-8 w-full mt-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800">
                                <div className="h-48 overflow-hidden">
                                     <img src={project.image || 'https://via.placeholder.com/400x300'} alt={project.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>
                                    <div className="w-12 h-1 bg-gradient-to-r from-[#0c8cf5] to-[#8b5cf6] rounded-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop View: CardSwap */}
                    <div className="hidden lg:flex flex-1 w-full justify-center items-center h-[600px] relative" style={{ perspective: '1000px' }}>
                        <CardSwap
                            width={400}
                            height={550}
                            cardDistance={50}
                            verticalDistance={60}
                            delay={6000}
                            pauseOnHover={false}
                        >
                            {projects.map((project, index) => (
                                <Card
                                    key={index}
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
