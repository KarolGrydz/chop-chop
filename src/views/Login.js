import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import '../styles/Login.css';

export const Login = props => {
  return (
    <div className='login'>
      <Form>
        <FormGroup>
          <Input
            type='text'
            name='username'
            id='username'
            placeholder='Username'
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
          />
        </FormGroup>
        <Button>Login</Button>
      </Form>
    </div>
  );
};
