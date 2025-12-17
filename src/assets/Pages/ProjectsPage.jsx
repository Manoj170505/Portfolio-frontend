import React from 'react';
import DProjects from '../Components/DProjects';
import { useNavigate } from 'react-router-dom';

const ProjectsPage = () => {
    const navigate = useNavigate();

    return <DProjects onBack={() => navigate('/')} />;
};

export default ProjectsPage;
