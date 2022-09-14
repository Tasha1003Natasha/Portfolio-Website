import React from 'react';
import Layout from './Layout/Layout';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Work from '../Pages/Work';
import Skills from '../Pages/Skills';
import About from '../Pages/About';
import NotFound from 'Pages/NotFound';
import { Routes, Route } from 'react-router';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
