import React, { Fragment, useContext } from 'react';
import { Context } from '../context';
import { Login } from './Login';
import { Posts } from '../components/Posts';

export const Dashboard = () => {
  const [state] = useContext(Context);
  const { dashboard } = state;
  return <Fragment>{dashboard ? <Posts /> : <Login />}</Fragment>;
};
