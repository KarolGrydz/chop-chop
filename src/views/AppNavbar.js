import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Row, Col } from 'reactstrap';

import '../styles/AppNavbar.css';

export const AppNavbar = () => {
  return (
    <Row>
      <Navbar>
        <Nav>
          <Col>
            <NavItem>
              <img alt='img'></img>
            </NavItem>
          </Col>
          <Col>
            <NavItem>
              <Link to='/'>Home</Link>
            </NavItem>
          </Col>
          <Col sm={{ size: '8' }} md={{ size: '8' }}>
            <NavItem>
              <h3>Simple Web App</h3>
            </NavItem>
          </Col>
          <Col>
            <NavItem>
              <Link to='/auth'>Logout</Link>
            </NavItem>
          </Col>
        </Nav>
      </Navbar>
    </Row>
  );
};
