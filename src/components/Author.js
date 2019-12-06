import React, { useState } from 'react';
import { Button, Modal, ModalBody, Row, Col } from 'reactstrap';

export const Author = ({ author }) => {
  const { id, name, avatar, description } = author;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Button color='primary' onClick={toggle}>
        i
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <Row>
            <Col sm={{ size: '6' }} md={{ size: '6' }}>
              <h2>{name}</h2>
            </Col>
            <Col sm={{ size: '6' }} md={{ size: '6' }}>
              <img src={avatar} alt='avatar' />
            </Col>
          </Row>
          <Col sm={{ size: '12' }} md={{ size: '12' }}>
            <p>{description}</p>
          </Col>
          <Button color='secondary' onClick={toggle} className='float-right'>
            Cancel
          </Button>
        </ModalBody>
      </Modal>
    </div>
  );
};
