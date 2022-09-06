import React from 'react';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Work from './Work/Work';
import { Routes, Route } from 'react-router';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
      </Route>
    </Routes>
  );
};