import React from 'react';
import { Button, Form, FormGroup, Input, Row, Col } from 'reactstrap';
import '../styles/Login.css';

export const Login = props => {
  return (
    <Row className="justify-content-center">
      <Col sm={{ size: 'auto' }} md={{ size: 'auto' }}>
        <h2>Simple Web App</h2>
        <div className="login">
          <Form>
            <FormGroup>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </FormGroup>
            <Button>Login</Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};
