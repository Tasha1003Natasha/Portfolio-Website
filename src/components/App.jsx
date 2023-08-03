import React from 'react';
import Layout from './Layout/Layout';
import { Routes, Route } from 'react-router';

import { lazy, Suspense } from 'react';

const HomeLazy = lazy(() => import('../Pages/Home'));
const ContactLazy = lazy(() => import('../Pages/Contact'));
const WorkLazy = lazy(() => import('../Pages/Work'));
const SkillsLazy = lazy(() => import('../Pages/Skills'));
const AboutLazy = lazy(() => import('../Pages/About'));
const NotFoundLazy = lazy(() => import('../Pages/NotFound'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomeLazy />} />
          <Route path="/contact" element={<ContactLazy />} />
          <Route path="/work" element={<WorkLazy />} />
          <Route path="/skills" element={<SkillsLazy />} />
          <Route path="/about" element={<AboutLazy />} />
          <Route path="*" element={<NotFoundLazy />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
