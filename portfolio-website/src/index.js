/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
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

// Typewriter effect for dynamic text
const dynamicText = document.getElementById('dynamic-text');
const phrases = ['AI Enthusiast', 'Blockchain Developer', 'Innovator'];
let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = [];
let isDeleting = false;
let timer;

function type() {
  if (isDeleting && currentPhrase.length === 0) {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    isDeleting = false;
  }

  if (!isDeleting && currentPhrase.length === phrases[phraseIndex].length) {
    timer = setTimeout(() => {
      isDeleting = true;
    }, 2000);
  }

  currentPhrase = phrases[phraseIndex].substring(0, isDeleting ? letterIndex-- : letterIndex++);
  dynamicText.textContent = currentPhrase;

  timer = setTimeout(type, isDeleting ? 100 : 200);
}

setTimeout(type, 2000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
