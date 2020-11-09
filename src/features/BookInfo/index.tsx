import React from 'react';
import './index.scss';
import { NavigationBar } from '../../common/components/NavigationBar/NavigationBar';
import { Details } from './Details/Details';

interface Props {}

export const BookInfo = (props: Props) => {
  return (
    <div>
      <NavigationBar />
      <Details />
    </div>
  );
};
