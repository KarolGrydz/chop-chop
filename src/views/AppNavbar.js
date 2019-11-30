import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Login } from './Login';
import { Dashboard } from './Dashboard';

export const AppNavbar = props => {
  return (
    <Router>
      <div>
        <Navbar expand="md">
          <Nav>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <h3>Simple Web App</h3>
            </NavItem>
            <NavItem>
              <Link to="/Login">Logout</Link>
            </NavItem>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Login">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
