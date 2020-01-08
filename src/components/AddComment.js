import React, { useState, Fragment } from 'react';
import {
  Col,
  FormFeedback,
  Label,
  Row,
  Button,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Input
} from 'reactstrap';

import '../styles/AddComment.css';

export const AddComment = ({ postId, reciveComment }) => {
  const [modal, setModal] = useState(false);
  const [userName, setUserName] = useState(1);
  const [comment, setComment] = useState(1);
  const [checkbox, setCheckbox] = useState(1);

  const toggle = () => {
    setModal(!modal);
  };

  const cancel = () => {
    setComment(1);
    setUserName(1);
    setCheckbox(1);
    setModal(!modal);
  };

  const submit = () => {
    if (
      userName &&
      isNaN(userName) &&
      comment &&
      isNaN(comment) &&
      checkbox &&
      isNaN(checkbox)
    ) {
      //send callback to singlepost.js with username and comment
      reciveComment({ postId, userName, comment });
      setModal(!modal);
      setComment(1);
      setUserName(1);
      setCheckbox(1);
    } else {
      if (!isNaN(checkbox)) {
        setCheckbox(false);
      }
      if (!isNaN(userName)) {
        setUserName(false);
      }
      if (!isNaN(comment)) {
        setComment(false);
      }
    }
  };

  const userNameInput = e => {
    setUserName(e.target.value);
  };

  const userNameReset = () => {
    if (!isNaN(userName)) {
      setUserName(false);
    }
  };

  const commentInput = e => {
    setComment(e.target.value);
  };

  const commentReset = () => {
    if (!isNaN(comment)) {
      setComment(false);
    }
  };

  const checkboxCheck = () => {
    if (checkbox === 'true') {
      setCheckbox(1);
    } else {
      setCheckbox('true');
    }
  };

  return (
    <Fragment>
      <Button color="primary" onClick={toggle}>
        Comments
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <div className="comment-modal">
            <Row>
              <Col sm={{ size: '12' }} md={{ size: '12' }}>
                <h2>Add Comment</h2>
                <Form>
                  <FormGroup>
                    <Input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Username"
                      onChange={userNameInput}
                      onBlur={userNameReset}
                      invalid={userName ? null : true}
                    />
                    <FormFeedback invalid={'true'}>
                      Plase enter your username
                    </FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="textarea"
                      name="comment"
                      id="comment"
                      placeholder="Please write your comment here..."
                      onChange={commentInput}
                      onBlur={commentReset}
                      invalid={comment ? null : true}
                    />
                    <FormFeedback invalid={'true'}>
                      Plase enter your comment
                    </FormFeedback>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="accept"
                        onClick={checkboxCheck}
                        invalid={checkbox ? null : true}
                      />
                      I accept
                      <FormFeedback invalid={'true'}>Plase accept</FormFeedback>
                    </Label>
                  </FormGroup>
                  <Button color="primary" onClick={submit}>
                    Submit
                  </Button>
                  <Button onClick={cancel}>Cancel</Button>
                </Form>
              </Col>
            </Row>
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};
