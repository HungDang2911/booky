import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BookInfo } from "../features/BookInfo";
import { HomePage } from "../features/Homepage";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route exact path="/books/:id" component={BookInfo} />
    </BrowserRouter>
  );
};
