import React from "react";
import { SearchBar } from "./SearchBar/SearchBar";

interface Props {}

export const NavBar = (props: Props) => {
  return (
    <div className="container">
      <SearchBar />
    </div>
  );
};
