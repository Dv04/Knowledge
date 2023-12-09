import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import textDetectorImage from '../assets/images/text_detector.png';
import alumniManagementImage from '../assets/images/alumni_management.png';
import hospitalManagementImage from '../assets/images/hospital_management.png';
import stockPiImage from '../assets/images/stock_pi.png';
import amazonScraperImage from '../assets/images/amazon_scraper.png';
export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
    const [projects, setProjects] = useState([
        {
            id: 'text_detector',
            title: 'Text Detector',
            description: 'CNN model to recognize text from 16-segment displays, using OpenCV.',
            category: 'AI',
            image: textDetectorImage,
            demoLink: 'http://link-to-text-detector-demo.com',
            codeLink: 'https://github.com/Dv04/Text_Detector'
        },
        {
            id: 'alumni_management',
            title: 'Alumni Management System',
            description: 'Prototype for a university alumni platform to connect graduates.',
            category: 'Web Dev',
            image: alumniManagementImage,
            demoLink: 'http://link-to-alumni-management-demo.com',
            codeLink: 'https://github.com/Dv04/Alumni_Management'
        },
        {
            id: 'hospital_management',
            title: 'Hospital Management System',
            description: 'Improves adoption of HMIS software in state healthcare facilities.',
            category: 'AI',
            image: hospitalManagementImage,
            demoLink: 'http://link-to-hospital-management-demo.com',
            codeLink: 'https://github.com/Dv04/Hospital_Management_System'
        },
        {
            id: 'stock_pi',
            title: 'Stock.Pi',
            description: 'Market Sentiment Analysis Tool for Stock Market Prediction.',
            category: 'Blockchain',
            image: stockPiImage,
            demoLink: 'http://link-to-stock-pi-demo.com',
            codeLink: 'https://github.com/Dv04/Stock.pi'
        },
        {
            id: 'amazon_scraper',
            title: 'Amazon Scrapper',
            description: 'Scrapes products from Amazon for market analysis.',
            category: 'Data',
            image: amazonScraperImage,
            demoLink: 'http://link-to-amazon-scraper-demo.com',
            codeLink: 'https://github.com/Dv04/Amazon_Scrapper'
        },
        // Add more projects here
    ]);

    // Uncomment and adjust this when the backend API is ready
    // useEffect(() => {
    //     axios.get('/api/projects')
    //         .then(response => setProjects(response.data))
    //         .catch(error => console.error(error));
    // }, []);

    return (
        <ProjectsContext.Provider value={{ projects }}>
            {children}
        </ProjectsContext.Provider>
    );
};
