import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" exact component={<Home />} />
        <Route path="/about" component={<About />} />
        <Route path="/projects" component={<Projects />} />
        <Route path="/contact" component={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
