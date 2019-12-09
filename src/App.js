import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Dashboard } from './views/Dashboard';
import { Login } from './views/Login';
import { SinglePost } from './components/SinglePost';
import { Posts } from './components/Posts';

import { ContextController } from './context';

import './styles/App.css';

export const App = () => {
  return (
    <ContextController>
      <Router>
        <Container fluid={true}>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/auth' component={Login} />
            <Route exact path='/posts' component={Posts} />
            <Route exact path='/posts/:id' component={SinglePost} />
          </Switch>
        </Container>
      </Router>
    </ContextController>
  );
};
