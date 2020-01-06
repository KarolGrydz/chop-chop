import React, { useState, Fragment } from 'react';
import uuid from 'react-uuid';
import { Author } from './Author';
import { Comments } from './Comments';
import { Col, Row } from 'reactstrap';
import { AppNavbar } from '../views/AppNavbar';
import { postComment, sendTime } from '../config';
import '../styles/SinglePost.css';

export const SinglePost = props => {
  const {
    title,
    thumbnail,
    authorId,
    content,
    date,
    id
  } = props.location.state;

  let [startTime] = useState();
  let [time, setTime] = useState(0);

  const toggle = () => {
    const postId = uuid();
    let seconds = 0;
    startTime = setInterval(() => {
      seconds += 10;
      //Bez bazy danych
      // setTime((time = seconds));
      sendTime(postId, time);
    }, 10);
  };

  return (
    <Fragment>
      <AppNavbar />
      <main className='single-post'>
        <Row>
          <Col
            sm={{ size: '10', offset: '1' }}
            md={{ size: '10', offset: '1' }}
          >
            <h2 className='text-center'>{title}</h2>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <img src={thumbnail} alt='img' />
        </Row>
        <Row>
          <Col sm={{ size: '6', offset: '3' }} md={{ size: '6', offset: '3' }}>
            <Row>
              <Col sm={{ size: '10' }} md={{ size: '10' }}>
                <span>{date}</span>
              </Col>
              <Col
                sm={{ size: '1', offset: '1' }}
                md={{ size: '1', offset: '1' }}
              >
                <Author authorId={authorId} />
              </Col>
            </Row>
            <Row>
              <p>{content}</p>
            </Row>
            <Row className='justify-content-center'>
              <Comments postId={id} />
            </Row>
          </Col>
        </Row>
      </main>
    </Fragment>
  );
};
