import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Context } from './context';
import { Container } from 'reactstrap';
import { Dashboard } from './views/Dashboard';
import { Login } from './views/Login';
import { SinglePost } from './components/SinglePost';
import { Posts } from './components/Posts';
import { AddComment } from './components/AddComment';
import { Author } from './components/Author';

import './styles/App.css';

export const App = () => {
  const [state] = useContext(Context);
  const { dashboard } = state;
  return (
    <Router>
      <Container fluid={true}>
        <Switch>
          <Route exact path='/' exact component={Dashboard} />
          <Route exact path='/auth' component={Login} />
          <Route
            exact
            path='/posts'
            exact
            render={() => (dashboard ? <Posts /> : <Redirect to='/' />)}
          />
          <Route
            exact
            path='/posts/:id'
            render={() => (dashboard ? <SinglePost /> : <Redirect to='/' />)}
          />
          <Route
            exact
            path='/posts/:id/AddComment'
            render={() => (dashboard ? <AddComment /> : <Redirect to='/' />)}
          />
          <Route
            exact
            path='/author/:id'
            render={() => (dashboard ? <Author /> : <Redirect to='/' />)}
          />
        </Switch>
      </Container>
    </Router>
  );
};
