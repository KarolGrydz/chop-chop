import React from 'react';
import { Container } from 'reactstrap';
import { Dashboard } from './views/Dashboard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './styles/App.css';

import { ContextController } from './context';

export const App = () => {
  return (
    <ContextController>
      <Router>
        <Container fluid={true}>
          <Dashboard />
          <Switch>
            {/* <Route exact path="/Login" component={Login} />
            <Route exact path="/Dashboard" component={Dashboard} /> */}
          </Switch>
        </Container>
      </Router>
    </ContextController>
  );
};
