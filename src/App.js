import React from 'react';
import { Container } from 'reactstrap';
import { Login } from './views/Login';
import { Dashboard } from './views/Dashboard';
import './styles/App.css';

export const App = () => {
  return (
    <Container fluid={true}>
      {/* <Login /> */}
      <Dashboard />
    </Container>
  );
};
