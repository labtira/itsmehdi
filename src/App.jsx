import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="">
        <Helmet>
          <title>MEHDI, Software Engineer, Graphic Designer</title>
          <meta name="description" content="Mehdi is a software engineer and graphic designer with a passion for creating beautiful and functional websites and applications." />
        </Helmet>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
