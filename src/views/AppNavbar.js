import React, { useContext } from 'react';
import { myStorage } from '../config/sessionStorage';
import { Context } from '../context';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Row, Col } from 'reactstrap';

import '../styles/AppNavbar.css';

export const AppNavbar = () => {
  const [state, setState] = useContext(Context);
  const initialState = {
    dashboard: false,
    posts: [],
    token: '',
    currentPage: 1,
    totalPages: { totalPages: 10 }
  };

  const resetContext = () => {
    setState(initialState);
    myStorage.setItem('token', '');
  };

  return (
    <Row>
      <Navbar>
        <Nav>
          <Col>
            <NavItem>
              <img alt="img"></img>
            </NavItem>
          </Col>
          <Col>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
          </Col>
          <Col sm={{ size: '8' }} md={{ size: '8' }}>
            <NavItem>
              <h3>Simple Web App</h3>
            </NavItem>
          </Col>
          <Col>
            <NavItem>
              <Link onClick={resetContext} to="/">
                Logout
              </Link>
            </NavItem>
          </Col>
        </Nav>
      </Navbar>
    </Row>
  );
};
