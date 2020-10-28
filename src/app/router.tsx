import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { HomePage } from '../features/Homepage';

export const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
    </BrowserRouter>
  );
};
