import React, { useContext, useState } from 'react';
import { ProjectsContext } from '../../contexts/ProjectsContext';
import {
    ProjectsContainer,
    ProjectsH1,
    ProjectCard,
    FilterButtons,
    ProjectImage,
    ProjectInfo,
    ProjectTitle,
    ProjectDescription,
    ProjectLinks,
    ProjectLink,
    ProjectsGrid
} from './styles';

const Projects = () => {
    const { projects } = useContext(ProjectsContext);
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <ProjectsContainer>
            <ProjectsH1>Projects</ProjectsH1>
            <FilterButtons>
                <button onClick={() => setFilter('All')}>All</button>
                <button onClick={() => setFilter('AI')}>AI</button>
                <button onClick={() => setFilter('Blockchain')}>Blockchain</button>
                <button onClick={() => setFilter('Web Dev')}>Web Dev</button>
                <button onClick={() => setFilter('Data')}>Data</button>
                {/* Add more filters as needed */}
            </FilterButtons>
            <ProjectsGrid>
                {filteredProjects.map(project => (
                    <ProjectCard key={project.id}>
                        <ProjectImage src={project.image} alt={project.title} />
                        <ProjectInfo>
                            <ProjectTitle>{project.title}</ProjectTitle>
                            <ProjectDescription>{project.description}</ProjectDescription>
                            <ProjectLinks>
                                <ProjectLink href={project.codeLink} target="_blank">Code</ProjectLink>
                            </ProjectLinks>
                        </ProjectInfo>
                    </ProjectCard>
                ))}
            </ProjectsGrid>
        </ProjectsContainer>
    );
};

export default Projects;
