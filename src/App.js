import React from 'react';
import {
  BrowserRouter, Routes,
  Route
} from 'react-router-dom';
import Home from './Home';
import AboutPage from './About';
import ProjectsPage from './Projects';
import ContactPage from './Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
