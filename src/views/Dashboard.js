import React, { Fragment } from 'react';
import { AppNavbar } from './AppNavbar';
import { Posts } from '../components/Posts';

export const Dashboard = () => {
  return (
    <Fragment>
      <AppNavbar />
      <Posts />
    </Fragment>
  );
};
