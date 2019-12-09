import React, { useState, Fragment } from 'react';
import {
  Col,
  Label,
  Row,
  Button,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Input
} from 'reactstrap';
import { postComment } from '../config';
import '../styles/Comments.css';

export const Comments = () => {
  const [modal, setModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [comment, setComment] = useState('');

  const toggle = () => {
    setModal(!modal);
  };

  const submit = () => {
    //Bez bazy danych
    //postComment(userName, comment);
    setModal(!modal);
  };

  const userNameInput = e => {
    setUserName(e.target.value);
  };

  const commentInput = e => {
    setComment(e.target.value);
  };

  return (
    <Fragment>
      <Button color='primary' onClick={toggle}>
        Comments
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <div className='comment-modal'>
            <Row>
              <Col sm={{ size: '12' }} md={{ size: '12' }}>
                <h2>Add Comment</h2>
                <Form>
                  <FormGroup>
                    <Input
                      type='text'
                      name='username'
                      id='username'
                      placeholder='Username'
                      onChange={userNameInput}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type='textarea'
                      name='comment'
                      id='comment'
                      placeholder='Please write your comment here...'
                      onChange={commentInput}
                    />
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type='radio' name='accept' />I accept
                    </Label>
                  </FormGroup>
                  <Button color='primary' onClick={submit}>
                    Submit
                  </Button>
                  <Button onClick={toggle}>Cancel</Button>
                </Form>
              </Col>
            </Row>
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};
