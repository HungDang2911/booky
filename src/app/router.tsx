import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { BookInfo } from '../features/BookInfo';
import { HomePage } from '../features/Homepage';

export const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={BookInfo} />
      <Route path="/books" component={HomePage} />
    </BrowserRouter>
  );
};
