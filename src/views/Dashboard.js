import React, { Fragment, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { myStorage } from '../config/sessionStorage';
import { Context } from '../context';

export const Dashboard = () => {
  const [state, setState] = useContext(Context);
  const { dashboard } = state;
  const { token } = myStorage;

  useEffect(() => {
    if (token) {
      setState({ ...state, token: token, dashboard: true });
    }
    console.log(token);
  }, [dashboard]);

  return (
    <Fragment>
      {token ? <Redirect to='/posts' /> : <Redirect to='/auth' />}
    </Fragment>
  );
};
