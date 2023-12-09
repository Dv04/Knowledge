import React from 'react';
import { SkillsContainer, Skill, SkillName, SkillDetails } from './styles';

const skillsData = [
    { name: "Jupyter", description: "Proficient in using Jupyter notebooks for interactive data analysis and visualization." },
    { name: "Data Scraping", description: "Skilled in extracting and processing data from various online sources." },
    { name: "Supervised Learning", description: "Experienced in creating models using supervised machine learning techniques." },
    { name: "Front-End Development", description: "Adept at developing user-friendly front-end interfaces using modern web technologies." },
    { name: "Artificial Intelligence (AI)", description: "Knowledgeable in AI concepts and applications, including machine learning and neural networks." },
    { name: "Neural Networks", description: "Experienced in designing and implementing neural network architectures for various applications." },
    { name: "Web Scraping", description: "Expert in automating data extraction from web pages." },
    { name: "Mathematics", description: "Strong foundation in mathematical concepts essential for complex problem solving in tech." },
    { name: "Convolutional Neural Networks (CNN)", description: "Proficient in building CNN models for image recognition and processing." },
    { name: "React.js", description: "Experienced in building dynamic web applications using React.js." },
    { name: "Back-End Web Development", description: "Adept at server-side web application logic and integration." },
    { name: "Web Design", description: "Skilled in creating aesthetically pleasing and functional web designs." },
    { name: "Transformer Models", description: "Knowledgeable in implementing transformer models in natural language processing." },
    { name: "Go (Programming Language)", description: "Experienced in using Go for efficient software development." },
    { name: "Machine Learning", description: "Skilled in developing algorithms and statistical models to enable computers to perform tasks without explicit instructions." },
    { name: "Data Processing", description: "Efficient in processing large sets of data to extract actionable insights." },
    { name: "Deep Learning", description: "Experienced in using deep learning techniques for advanced computational models." },
    { name: "Smart Contracts", description: "Knowledgeable in developing self-executing contracts with the terms of the agreement directly written into code." },
    { name: "Solidity", description: "Skilled in Solidity for creating smart contracts on various blockchain platforms." },
    { name: "Blockchain", description: "Proficient in blockchain technology and its applications in secure and decentralized systems." }
];


const Skills = () => {
    const [selectedSkill, setSelectedSkill] = React.useState(null);

    const handleSkillClick = skill => {
        setSelectedSkill(skill === selectedSkill ? null : skill);
    };

    return (
        <SkillsContainer>
            {skillsData.map((skill, index) => (
                <Skill key={index} onClick={() => handleSkillClick(skill.name)} isSelected={skill.name === selectedSkill} style={{ transform: skill.name === selectedSkill ? 'translateY(-10px)' : 'none' }}>
                    <SkillName>{skill.name}</SkillName>
                    {skill.name === selectedSkill && <SkillDetails>{skill.description}</SkillDetails>}
                </Skill>
            ))}
        </SkillsContainer>
    );
};

export default Skills;