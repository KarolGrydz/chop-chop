import React, { useState, useContext } from 'react';
import { myStorage } from '../config/sessionStorage';
import { Link } from 'react-router-dom';
import { Context } from '../context';
import { Form, FormGroup, Input, Row, Col, FormFeedback } from 'reactstrap';
import { getToken, checkLogin } from '../config';
import '../styles/Login.css';

export const Login = () => {
  const [state, setState] = useContext(Context);
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [passWrong, setPassWrong] = useState(true);
  const [nameWrong, setNameWrong] = useState(true);

  console.log(password);

  const userInput = e => {
    setUserName(e.target.value);
  };

  const passInput = e => {
    setPassword(e.target.value);
  };

  const submit = () => {
    if (username && password) {
      checkLogin(username, password).then(res => {
        setPassWrong(true);
        setNameWrong(true);
        if (res) {
          getToken(username, password).then(({ data }) => {
            setState({ ...state, token: data.token, dashboard: true });
            myStorage.setItem('token', data.token);
          });
        } else {
          setPassWrong(false);
          setNameWrong(false);
        }
      });
    } else {
      setPassWrong(false);
      setNameWrong(false);
    }
  };

  return (
    <Row className='justify-content-center'>
      <Col sm={{ size: 'auto' }} md={{ size: 'auto' }}>
        <h2>Simple Web App</h2>
        <div className='login'>
          <Form>
            <FormGroup>
              <Input
                type='text'
                name='username'
                id='username'
                placeholder='Username'
                onChange={userInput}
                invalid={nameWrong ? null : true}
              />
              <FormFeedback invalid={'true'}>Wrong username</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                onChange={passInput}
                invalid={passWrong ? null : true}
              />
              <FormFeedback invalid={'true'}>Wrong password</FormFeedback>
            </FormGroup>
            <Link
              to={passWrong && nameWrong ? '/' : null}
              onClick={submit}
              className='btn btn-primary'
            >
              Login
            </Link>
          </Form>
        </div>
      </Col>
    </Row>
  );
};
