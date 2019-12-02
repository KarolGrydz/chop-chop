import React, { useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { getPosts } from '../config';

export const Posts = () => {
  useEffect(() => {
    getPosts().then(({ data }) => console.log(data));
  }, []);

  return (
    <Col sm={{ size: '10' }} md={{ size: '10' }}>
      <Row>
        <Col sm={{ size: '2' }} md={{ size: '2' }}>
          <h6>Sort A-Z</h6>
        </Col>

        <Col sm={{ size: '2' }} md={{ size: '2' }}>
          <h6>Sort By data</h6>
        </Col>

        <Col sm={{ size: '2' }} md={{ size: '2' }}>
          <h6>Last</h6>
        </Col>
      </Row>
      <Row>
        <Col sm={{ size: '10' }} md={{ size: '10' }}>
          Post x 10
        </Col>
      </Row>
    </Col>
  );
};
