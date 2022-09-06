import React from 'react';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Work from './Work/Work';
import Skills from './Skills/Skills';
import About from './About/About';
import { Routes, Route } from 'react-router';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};
