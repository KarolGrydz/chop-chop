import React from 'react';
import { Container } from 'reactstrap';
import { Login } from './views/Login';
import { Dashboard } from './views/Dashboard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './styles/App.css';

export const App = () => {
  return (
    <Router>
      <Container fluid={true}>
        {/* <Login /> */}
        <Dashboard />
        <Switch>
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Dashboard' component={Dashboard} />
        </Switch>
      </Container>
    </Router>
  );
};
