import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { routes } from './router/routes';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>{routes()}</Routes>
    </BrowserRouter>
  );
};
