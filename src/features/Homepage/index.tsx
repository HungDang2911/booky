import React from 'react';
import { NavBar } from '../common/NavBar';
import { Trailers } from './Trailers';

interface Props {

}

export const HomePage = (props: Props) => {
  return (
    <div className="container">
      <NavBar />
      <Trailers />
    </div>
  );
}
