import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
    const [projects, setProjects] = useState([
        { id: 1, title: 'AI Project', category: 'AI', description: 'Description of AI Project' },
        { id: 2, title: 'Blockchain Project', category: 'Blockchain', description: 'Description of Blockchain Project' },
        // Add more projects here
    ]);

    useEffect(() => {
        axios.get('/api/projects')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <ProjectsContext.Provider value={{ projects }}>
            {children}
        </ProjectsContext.Provider>
    );
};
