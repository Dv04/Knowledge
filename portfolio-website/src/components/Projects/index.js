import React, { useContext, useState } from 'react';
import { ProjectsContext } from '../../contexts/ProjectsContext';
import {
    ProjectsContainer,
    ProjectsH1,
    ProjectCard,
    FilterButtons,
} from './styles';

const Projects = () => {
    //     // This would be fetched from an API or imported from a local file in a real app
    //     const projectsList = [
    //         {
    //             title: 'Vision Transformer',
    //             description: 'A computer vision project using the ViT architecture for image regression tasks.'
    //         },
    //         {
    //             title: 'Text Detector',
    //             description: 'A CNN model to recognize text from images and video streams.'
    //         },
    //         // ...add more projects
    //     ];

    const { projects } = useContext(ProjectsContext);
    const [filter, setFilter] = useState('All');

    const filteredProjects =
        filter === 'All'
            ? projects
            : projects.filter((project) => project.category === filter);

    return (
        <ProjectsContainer>
            <ProjectsH1>Projects</ProjectsH1>
            <FilterButtons>
                <button onClick={() => setFilter('All')}>All</button>
                <button onClick={() => setFilter('AI')}>AI</button>
                <button onClick={() => setFilter('Blockchain')}>Blockchain</button>
                {/* Add more filters as needed */}
            </FilterButtons>
            {filteredProjects.map((project) => (
                <ProjectCard key={project.id}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </ProjectCard>
            ))}
        </ProjectsContainer>
    );
};

export default Projects;
