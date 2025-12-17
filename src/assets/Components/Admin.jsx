import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const [activeTab, setActiveTab] = useState('skills');

    // Skills State
    const [skills, setSkills] = useState([]);
    const [skillForm, setSkillForm] = useState({ name: '', icon: '', color: '', category: 'Frontend' });

    // Projects State
    const [projects, setProjects] = useState([]);
    const [projectForm, setProjectForm] = useState({
        name: '',
        description: '',
        image: '',
        link: '',
        github: ''
    });

    // Experience State
    const [experiences, setExperiences] = useState([]);
    const [experienceForm, setExperienceForm] = useState({
        title: '',
        company: '',
        description: '',
        startDate: '',
        endDate: ''
    });

    const [notification, setNotification] = useState({ show: false, message: '', type: '' });

    // Fetch Data
    useEffect(() => {
        fetchSkills();
        fetchProjects();
        fetchExperiences();
    }, []);

    const fetchSkills = async () => {
        try {
            const response = await axios.get(`${API_URL}/skill`);
            setSkills(response.data);
        } catch (error) {
            console.error('Error fetching skills:', error);
        }
    };

    const fetchProjects = async () => {
        try {
            const response = await axios.get(`${API_URL}/project`);
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    const fetchExperiences = async () => {
        try {
            const response = await axios.get(`${API_URL}/experience`);
            setExperiences(response.data);
        } catch (error) {
            console.error('Error fetching experiences:', error);
        }
    };

    // Show Notification
    const showNotification = (message, type) => {
        setNotification({ show: true, message, type });
        setTimeout(() => setNotification({ show: false, message: '', type: '' }), 3000);
    };

    // Skills Handlers
    const handleSkillSubmit = async (e) => {
        e.preventDefault();
        if (!skillForm.name || !skillForm.icon || !skillForm.color || !skillForm.category) {
            showNotification('Please fill all fields', 'error');
            return;
        }
        try {
            await axios.post(`${API_URL}/skill`, skillForm);
            showNotification('Skill added successfully!', 'success');
            setSkillForm({ name: '', icon: '', color: '', category: 'Frontend' });
            fetchSkills();
        } catch (error) {
            showNotification('Error adding skill', 'error');
            console.error('Error:', error);
        }
    };

    const handleDeleteSkill = async (id) => {
        try {
            await axios.delete(`${API_URL}/skill/${id}`);
            showNotification('Skill deleted successfully!', 'success');
            fetchSkills();
        } catch (error) {
            showNotification('Error deleting skill', 'error');
            console.error('Error:', error);
        }
    };

    // Projects Handlers
    const handleProjectSubmit = async (e) => {
        e.preventDefault();
        if (!projectForm.name || !projectForm.description || !projectForm.image || !projectForm.link) {
            showNotification('Please fill all required fields', 'error');
            return;
        }
        try {
            await axios.post(`${API_URL}/project`, projectForm);
            showNotification('Project added successfully!', 'success');
            setProjectForm({ name: '', description: '', image: '', link: '', github: '' });
            fetchProjects();
        } catch (error) {
            showNotification('Error adding project', 'error');
            console.error('Error:', error);
        }
    };

    const handleDeleteProject = async (id) => {
        try {
            await axios.delete(`${API_URL}/project/${id}`);
            showNotification('Project deleted successfully!', 'success');
            fetchProjects();
        } catch (error) {
            showNotification('Error deleting project', 'error');
            console.error('Error:', error);
        }
    };

    // Experience Handlers
    const handleExperienceSubmit = async (e) => {
        e.preventDefault();
        if (!experienceForm.title || !experienceForm.company || !experienceForm.description || !experienceForm.startDate || !experienceForm.endDate) {
            showNotification('Please fill all fields', 'error');
            return;
        }
        try {
            await axios.post(`${API_URL}/experience`, experienceForm);
            showNotification('Experience added successfully!', 'success');
            setExperienceForm({ title: '', company: '', description: '', startDate: '', endDate: '' });
            fetchExperiences();
        } catch (error) {
            showNotification('Error adding experience', 'error');
            console.error('Error:', error);
        }
    };

    const handleDeleteExperience = async (id) => {
        try {
            await axios.delete(`${API_URL}/experience/${id}`);
            showNotification('Experience deleted successfully!', 'success');
            fetchExperiences();
        } catch (error) {
            showNotification('Error deleting experience', 'error');
            console.error('Error:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0f0f0f] text-gray-900 dark:text-white py-16 px-4 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0c8cf5] to-[#8b5cf6]">
                            Admin Dashboard
                        </span>
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">Manage your portfolio content</p>
                </div>

                {/* Notification */}
                {notification.show && (
                    <div className={`fixed top-8 right-8 px-6 py-4 rounded-xl shadow-2xl z-50 backdrop-blur-sm border ${notification.type === 'success'
                        ? 'bg-green-500/90 border-green-400 text-white'
                        : 'bg-red-500/90 border-red-400 text-white'
                        } animate-slide-in`}>
                        {notification.message}
                    </div>
                )}

                {/* Tabs */}
                <div className="flex flex-wrap gap-4 mb-8 justify-center">
                    {['skills', 'projects', 'experience'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 ${activeTab === tab
                                ? 'bg-gradient-to-r from-[#0c8cf5] to-[#8b5cf6] text-white shadow-lg scale-105'
                                : 'bg-white/50 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-white/10'
                                }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Skills Tab */}
                {activeTab === 'skills' && (
                    <div className="space-y-8">
                        {/* Add Skill Form */}
                        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl">
                            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0c8cf5] to-[#8b5cf6]">
                                Add New Skill
                            </h2>
                            <form onSubmit={handleSkillSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Skill Name</label>
                                    <input
                                        type="text"
                                        value={skillForm.name}
                                        onChange={(e) => setSkillForm({ ...skillForm, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-[#0c8cf5] focus:outline-none transition-colors"
                                        placeholder="e.g., React"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Icon (Emoji or URL)</label>
                                    <input
                                        type="text"
                                        value={skillForm.icon}
                                        onChange={(e) => setSkillForm({ ...skillForm, icon: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-[#0c8cf5] focus:outline-none transition-colors"
                                        placeholder="⚛️ or URL"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Category</label>
                                    <select
                                        value={skillForm.category}
                                        onChange={(e) => setSkillForm({ ...skillForm, category: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-[#0c8cf5] focus:outline-none transition-colors"
                                    >
                                        <option value="Frontend">Frontend</option>
                                        <option value="Backend">Backend</option>
                                        <option value="Software">Software</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Color</label>
                                    <input
                                        type="text"
                                        value={skillForm.color}
                                        onChange={(e) => setSkillForm({ ...skillForm, color: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-[#0c8cf5] focus:outline-none transition-colors"
                                        placeholder="#61DAFB"
                                    />
                                </div>
                                <div className="md:col-span-3">
                                    <button
                                        type="submit"
                                        className="w-full px-6 py-3 bg-gradient-to-r from-[#0c8cf5] to-[#8b5cf6] text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                    >
                                        Add Skill
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Skills List */}
                        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl">
                            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0c8cf5] to-[#8b5cf6]">
                                Existing Skills ({skills.length})
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {skills.map((skill) => (
                                    <div
                                        key={skill.id}
                                        className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-3xl">{skill.icon}</span>
                                            <div>
                                                <p className="font-bold">{skill.name}</p>
                                                <p className="text-xs text-gray-500 uppercase">{skill.category}</p>
                                                <p className="text-sm text-gray-500" style={{ color: skill.color }}>{skill.color}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleDeleteSkill(skill.id)}
                                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-bold"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
                }

                {/* Projects Tab */}
                {
                    activeTab === 'projects' && (
                        <div className="space-y-8">
                            {/* Add Project Form */}
                            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl">
                                <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0c8cf5] to-[#8b5cf6]">
                                    Add New Project
                                </h2>
                                <form onSubmit={handleProjectSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Project Name *</label>
                                            <input
                                                type="text"
                                                value={projectForm.name}
                                                onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-[#0c8cf5] focus:outline-none transition-colors"
                                                placeholder="My Awesome Project"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Image URL *</label>
                                            <input
                                                type="text"
                                                value={projectForm.image}
                                                onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-[#0c8cf5] focus:outline-none transition-colors"
                                                placeholder="https://..."
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Description *</label>
                                        <textarea
                                            value={projectForm.description}
                                            onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-[#0c8cf5] focus:outline-none transition-colors"
                                            rows="4"
                                            placeholder="Project description..."
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Project Link *</label>
                                            <input
                                                type="text"
                                                value={projectForm.link}
                                                onChange={(e) => setProjectForm({ ...projectForm, link: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-[#0c8cf5] focus:outline-none transition-colors"
                                                placeholder="https://project-demo.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">GitHub URL (Optional)</label>
                                            <input
                                                type="text"
                                                value={projectForm.github}
                                                onChange={(e) => setProjectForm({ ...projectForm, github: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-[#0c8cf5] focus:outline-none transition-colors"
                                                placeholder="https://github.com/..."
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full px-6 py-3 bg-gradient-to-r from-[#0c8cf5] to-[#8b5cf6] text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                    >
                                        Add Project
                                    </button>
                                </form>
                            </div>

                            {/* Projects List */}
                            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl">
                                <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0c8cf5] to-[#8b5cf6]">
                                    Existing Projects ({projects.length})
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {projects.map((project) => (
                                        <div
                                            key={project.id}
                                            className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all"
                                        >
                                            <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                                            <div className="p-4">
                                                <h3 className="font-bold text-lg mb-2">{project.name}</h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                                                <button
                                                    onClick={() => handleDeleteProject(project.id)}
                                                    className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-bold"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                }

                {/* Experience Tab */}
                {
                    activeTab === 'experience' && (
                        <div className="space-y-8">
                            {/* Add Experience Form */}
                            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl">
                                <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0c8cf5] to-[#8b5cf6]">
                                    Add New Experience
                                </h2>
                                <form onSubmit={handleExperienceSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Job Title</label>
                                            <input
                                                type="text"
                                                value={experienceForm.title}
                                                onChange={(e) => setExperienceForm({ ...experienceForm, title: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-[#0c8cf5] focus:outline-none transition-colors"
                                                placeholder="Senior Developer"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Company</label>
                                            <input
                                                type="text"
                                                value={experienceForm.company}
                                                onChange={(e) => setExperienceForm({ ...experienceForm, company: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-[#0c8cf5] focus:outline-none transition-colors"
                                                placeholder="Tech Company Inc."
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Description</label>
                                        <textarea
                                            value={experienceForm.description}
                                            onChange={(e) => setExperienceForm({ ...experienceForm, description: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-[#0c8cf5] focus:outline-none transition-colors"
                                            rows="4"
                                            placeholder="Job responsibilities and achievements..."
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Start Date</label>
                                            <input
                                                type="text"
                                                value={experienceForm.startDate}
                                                onChange={(e) => setExperienceForm({ ...experienceForm, startDate: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-[#0c8cf5] focus:outline-none transition-colors"
                                                placeholder="Jan 2020"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">End Date</label>
                                            <input
                                                type="text"
                                                value={experienceForm.endDate}
                                                onChange={(e) => setExperienceForm({ ...experienceForm, endDate: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-[#0c8cf5] focus:outline-none transition-colors"
                                                placeholder="Present"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full px-6 py-3 bg-gradient-to-r from-[#0c8cf5] to-[#8b5cf6] text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                    >
                                        Add Experience
                                    </button>
                                </form>
                            </div>

                            {/* Experience List */}
                            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl">
                                <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0c8cf5] to-[#8b5cf6]">
                                    Existing Experiences ({experiences.length})
                                </h2>
                                <div className="space-y-4">
                                    {experiences.map((exp) => (
                                        <div
                                            key={exp.id}
                                            className="flex items-start justify-between p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
                                        >
                                            <div className="flex-1">
                                                <h3 className="font-bold text-xl mb-1">{exp.title}</h3>
                                                <p className="text-[#0c8cf5] font-semibold mb-2">{exp.company}</p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{exp.startDate} - {exp.endDate}</p>
                                                <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                                            </div>
                                            <button
                                                onClick={() => handleDeleteExperience(exp.id)}
                                                className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-bold"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div >
        </div >
    );
};

export default Admin;
