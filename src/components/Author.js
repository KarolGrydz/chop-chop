import React, { useState, useContext } from 'react';
import { Context } from '../context';
import { Button, Modal, ModalBody, Row, Col } from 'reactstrap';
import { getAuthor } from '../config';

export const Author = ({ authorId }) => {
  const [state] = useContext(Context);
  const { token } = state;

  const [modal, setModal] = useState(false);
  const [author, setAuthor] = useState([]);

  const toggle = () => {
    setModal(!modal);
    getAuthor(authorId, token).then(({ data }) => setAuthor(data));
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        i
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <Row>
            <Col sm={{ size: '6' }} md={{ size: '6' }}>
              <h2>{author.name}</h2>
            </Col>
            <Col sm={{ size: '6' }} md={{ size: '6' }}>
              <img src={author.avatar} alt="avatar" />
            </Col>
          </Row>
          <Col sm={{ size: '12' }} md={{ size: '12' }}>
            <p>{author.description}</p>
          </Col>
          <Button color="secondary" onClick={toggle} className="float-right">
            Cancel
          </Button>
        </ModalBody>
      </Modal>
    </div>
  );
};
