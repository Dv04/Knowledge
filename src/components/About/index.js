import React from 'react';
import Timeline from '../Timeline/Timeline';
import SkillBar from '../SkillBar/SkillBar';
import Testimonial from '../Testimonials/Testimonials';
import IntroVideo from '../Introvideo/IntroVideo';
import ResumeDownload from '../ResumeDownload/ResumeDownload';
import { AboutContainer, AboutH1, AboutBio, SkillsSection } from './styles';
import Resume from "../../assets/pdf/Resume.pdf"
// Mock Data for components
const milestones = [
    { year: "2021", event: "Started my journey with AI and Blockchain." },
    // Add more milestones
];

const skills = [
    { skill: "JavaScript", level: "99%" },
    // Add more skills
];

const testimonials = [
    { quote: "Dev is an innovative problem solver.", author: "Dev Sanghvi" },
    // Add more testimonials
];

const videoSrc = "path_to_your_video.mp4";
const resumeLink = Resume;

const About = () => {
    return (
        <AboutContainer>
            <AboutH1>About Dev Sanghvi</AboutH1>
            <AboutBio>
                Passionate AI and Blockchain Enthusiast with a drive for developing innovative solutions...
            </AboutBio>
            <Timeline milestones={milestones} />
            <SkillsSection>
                {skills.map((skill, index) => (
                    <SkillBar key={index} skill={skill.skill} level={skill.level} />
                ))}
            </SkillsSection>
            {testimonials.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial} />
            ))}
            <IntroVideo videoSrc={videoSrc} />
            <ResumeDownload resumeLink={resumeLink} />
        </AboutContainer>
    );
};

export default About;
