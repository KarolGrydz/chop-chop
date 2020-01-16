import React, { Fragment, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { myStorage } from '../config/sessionStorage';
import { Context } from '../context';

export const Dashboard = () => {
  const [state, setState] = useContext(Context);
  const { token } = myStorage;

  useEffect(() => {
    if (token) {
      setState({ ...state, token: token, dashboard: true });
    }
  }, []);

  return (
    <Fragment>
      {token ? <Redirect to="/posts" /> : <Redirect to="/auth" />}
    </Fragment>
  );
};
