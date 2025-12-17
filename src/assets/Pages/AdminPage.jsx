import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Admin from '../Components/Admin';

const AdminPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [navigate]);

    return <Admin />;
};

export default AdminPage;
