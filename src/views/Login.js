import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Row,
  Col,
  FormFeedback
} from 'reactstrap';
import { getToken, getPosts } from '../config';
import '../styles/Login.css';

export const Login = () => {
  const [state, setState] = useContext(Context);
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');

  const userInput = e => {
    setUserName(e.target.value);
  };

  const passInput = e => {
    setPassword(e.target.value);
  };

  const submit = () => {
    getToken().then(({ data }) =>
      setState({ ...state, token: data.token, dashboard: true })
    );
  };

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
                onChange={userInput}
                invalid={username ? null : true}
              />
              <FormFeedback invalid={'true'}>Wrong username</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={passInput}
              />
            </FormGroup>
            {/* <Button onClick={submit}>Login</Button> */}
            <Link to={'/'} onClick={submit} className="btn btn-primary">
              Login
            </Link>
          </Form>
        </div>
      </Col>
    </Row>
  );
};
