import React from 'react';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import { Routes, Route } from 'react-router';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};
