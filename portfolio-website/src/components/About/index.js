import React from 'react';
import { AboutContainer, AboutH1, AboutBio, SkillsSection, Skill } from './styles';

const About = () => {
    return (
        <AboutContainer>
            <AboutH1>About Dev Sanghvi</AboutH1>
            <AboutBio>
                {/* Insert a more detailed biography here */}
                Passionate AI and Blockchain Enthusiast with a drive for developing innovative solutions...
            </AboutBio>
            <SkillsSection>
                <Skill>Artificial Intelligence</Skill>
                <Skill>Blockchain Technology</Skill>
                <Skill>Full Stack Development</Skill>
                {/* Add more skills */}
            </SkillsSection>
        </AboutContainer>
    );
};

export default About;
