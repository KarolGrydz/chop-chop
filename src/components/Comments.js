import React from 'react';
import { Col } from 'reactstrap';
import '../styles/Comments.css';

export const Comments = ({ singleComment }) => {
  return (
    <Col sm={{ size: '12' }} md={{ size: '12' }}>
      <div className='comment-area'>
        <span>Author: {singleComment.name}</span>
        <br />
        <p>{singleComment.comment}</p>
      </div>
    </Col>
  );
};
