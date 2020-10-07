import React from "react";
import "./SearchBar.scss";

interface Props {}

export const SearchBar = (props: Props) => {
  return (
    <div className="search-bar">
      <select className="search-bar__category">
        <option>Movies</option>
        <option>TV Show</option>
        <option>Celebrity</option>
      </select>
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search for a movie, TV Show or celebrity that you are looking for"
      />
    </div>
  );
};
