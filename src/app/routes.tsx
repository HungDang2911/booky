import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { BookInfo } from '../features/BookInfo';
import { HomePage } from '../features/Homepage';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={BookInfo} />
      <Route path="/books" exact component={HomePage} />
    </BrowserRouter>
  );
};
