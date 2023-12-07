import React, { useContext } from 'react';
import { ProjectsContext } from '../../contexts/ProjectsContext';
import { ProjectsContainer, ProjectsH1, ProjectCard } from './styles';

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

    return (
        <ProjectsContainer>
            <ProjectsH1>Projects</ProjectsH1>
            {projects.map(project => (
                <ProjectCard key={project.id}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </ProjectCard>
            ))}
        </ProjectsContainer>
    );
};

export default Projects;
