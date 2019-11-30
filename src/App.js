import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Login } from './views/Login';
import { Dashboard } from './views/Dashboard';
import './styles/App.css';

export const App = () => {
  return (
    <Container fluid={true}>
      <Row className='justify-content-center'>
        <Col sm={{ size: 'auto' }} md={{ size: 'auto' }}>
          {/* <Login /> */}
          <Dashboard />
        </Col>
      </Row>
    </Container>
  );
};
