import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Footer } from "../common/components/Footer/Footer";
import { NavigationBar } from "../common/components/NavigationBar/NavigationBar";
import { BookInfo } from "../features/BookInfo";
import { Books } from "../features/Books";
import { HomePage } from "../features/Homepage";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={NavigationBar}/>
      <Route path="/" exact component={HomePage} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/books/:id" component={BookInfo} />
      <Route path="/" component={Footer} />
    </BrowserRouter>
  );
};
