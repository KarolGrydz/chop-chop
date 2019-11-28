import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Login } from './views/Login';
import './styles/App.css';

export const App = () => {
  return (
    <Container fluid={true}>
      <Row className='justify-content-center'>
        <Col sm={{ size: 'auto' }} md={{ size: 'auto' }}>
          <h2>Simple Web App</h2>
          <Login />
        </Col>
      </Row>
    </Container>
  );
};
