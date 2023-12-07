import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
// import About from '../components/About';
// import Projects from '../components/Projects';
// import Contact from '../components/Contact';
import GlobalStyle from 'GlobalStyle.js';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} /> */}
          {/* Add more routes as needed */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
