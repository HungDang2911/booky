import React from 'react';
import './index.scss';
import { Discover } from './Discover/Discover';
import { PickedByReaders } from './PickedByReaders/PickedByReaders';
import { NavigationBar } from '../../common/components/NavigationBar/NavigationBar';
import { Intro } from './Intro/Intro';
import { StayInTouch } from './StayInTouch/StayInTouch';
import { BestNNew } from './BestNNew/BestNNew';

interface Props {}

export const HomePage = (props: Props) => {
  return (
    <div>
      <Intro />
      <Discover />
      <StayInTouch />
      <PickedByReaders />
      <BestNNew />
    </div>
  );
};
