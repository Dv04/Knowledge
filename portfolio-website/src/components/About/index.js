import React from 'react';
import { AboutContainer, AboutH1, AboutP } from '../styles';

const About = () => {
    return (
        <AboutContainer>
            <AboutH1>About Me</AboutH1>
            <AboutP>
                {/* Insert your about me content here */}
                Passionate AI and Blockchain Enthusiast with a drive for developing innovative solutions.
            </AboutP>
        </AboutContainer>
    );
};

export default About;
