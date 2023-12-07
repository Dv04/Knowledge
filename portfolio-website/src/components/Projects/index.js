import React from 'react';
import { ProjectsContainer, ProjectsH1, ProjectCard, ProjectInfo } from '../styles';

const Projects = () => {
    // This would be fetched from an API or imported from a local file in a real app
    const projectsList = [
        {
            title: 'Vision Transformer',
            description: 'A computer vision project using the ViT architecture for image regression tasks.'
        },
        {
            title: 'Text Detector',
            description: 'A CNN model to recognize text from images and video streams.'
        },
        // ...add more projects
    ];

    return (
        <ProjectsContainer>
            <ProjectsH1>Projects</ProjectsH1>
            {projectsList.map((project, index) => (
                <ProjectCard key={index}>
                    <ProjectInfo>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </ProjectInfo>
                </ProjectCard>
            ))}
        </ProjectsContainer>
    );
};

export default Projects;
