import React from 'react';
import './index.scss';
import { Discover } from './Discover/Discover';
import { PickedByReaders } from './PickedByReaders/PickedByReaders';
import { NavigationBar } from '../../common/components/NavigationBar/NavigationBar';
import { Intro } from './Intro/Intro';
import { StayInTouch } from './StayInTouch/StayInTouch';


interface Props {}

export const HomePage = (props: Props) => {
  return (
    <div>
      <NavigationBar />
      <Intro />
      <Discover />
      <StayInTouch />
      <PickedByReaders />
    </div>
  );
};
