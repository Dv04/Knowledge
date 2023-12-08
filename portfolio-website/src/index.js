import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ProjectsProvider } from './contexts/ProjectsContext';
import GlobalStyle from './GlobalStyle';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ProjectsProvider>
      <GlobalStyle />
      <App />
    </ProjectsProvider>
  </React.StrictMode>
);
