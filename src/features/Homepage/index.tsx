import React from 'react';
import './index.scss';
import { Discover } from './Discover/Discover';
import { PickedByReaders } from './PickedByReaders/PickedByReaders';
import { NavigationBar } from '../../common/components/NavigationBar/NavigationBar';


interface Props {}

export const HomePage = (props: Props) => {
  return (
    <div>
      <NavigationBar />
      <Discover />
      <PickedByReaders />
    </div>
  );
};
