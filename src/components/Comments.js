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
import { postComment, sendTime } from '../config';
import '../styles/Comments.css';

export const Comments = () => {
  const [modal, setModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [comment, setComment] = useState('');
  const [radio, setRadio] = useState(false);
  let [startTime] = useState();
  let [time, setTime] = useState(0);

  const toggle = () => {
    let seconds = 0;
    setModal(!modal);
    startTime = setInterval(() => {
      seconds += 10;
      setTime((time = seconds));
    }, 10);
  };

  const cancel = () => {
    setModal(!modal);
    console.log(time);
    clearInterval(startTime);
  };

  const submit = () => {
    //Bez bazy danych
    //postComment(userName, comment);
    if (userName) {
      if (comment) {
        if (radio) {
          setModal(!modal);
          console.log(time);
          clearTimeout(startTime);
        }
      }
    }
  };

  const userNameInput = e => {
    setUserName(e.target.value);
  };

  const commentInput = e => {
    setComment(e.target.value);
  };

  const radioCheck = () => {
    setRadio(!radio);
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
                      invalid={comment ? null : true}
                    />
                    <FormFeedback invalid={'true'}>
                      Plase enter your comment
                    </FormFeedback>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="accept"
                        onClick={radioCheck}
                        invalid={radio ? null : true}
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
