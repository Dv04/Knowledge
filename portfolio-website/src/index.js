import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProjectsProvider } from './contexts/ProjectsContext';
// import { BlogProvider } from './contexts/BlogContext';
import GlobalStyle from './GlobalStyle';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ProjectsProvider>
      <GlobalStyle />
      <App />
    </ProjectsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// script.js
document.addEventListener('DOMContentLoaded', () => {
  const homeSection = document.querySelector('#home h1');
  homeSection.textContent = '';
  const text = "Welcome to Dev Sanghvi's Portfolio";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      homeSection.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();
});


// Dynamically load project cards
document.addEventListener('DOMContentLoaded', () => {
  const projectContainer = document.getElementById('project-container');

  // Example projects data
  const projects = [
    { title: 'Project 1', description: 'Description of Project 1' },
    { title: 'Project 2', description: 'Description of Project 2' },
    // Add more projects here
  ];

  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
          <h3>${project.title}</h3>
          <p>${project.description}</p>
      `;
    projectContainer.appendChild(projectCard);
  });
});

const phrases = ['AI Enthusiast', 'Blockchain Developer', 'Innovator'];
let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = [];
let isDeleting = false;


function type() {
  if (isDeleting && currentPhrase.length === 0) {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    isDeleting = false;
  }


  currentPhrase = phrases[phraseIndex].substring(0, isDeleting ? letterIndex-- : letterIndex++);


}

setTimeout(type, 2000);
