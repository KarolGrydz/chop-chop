import React, { useState, Fragment, useEffect } from 'react';
import uuid from 'react-uuid';
import { Author } from './Author';
import { Comments } from './Comments';
import { AddComment } from './AddComment';
import { Col, Row } from 'reactstrap';
import { AppNavbar } from '../views/AppNavbar';
import { sendTime, getComments } from '../config';
import '../styles/SinglePost.css';

export const SinglePost = props => {
  const {
    title,
    thumbnail,
    authorId,
    content,
    date,
    id,
    token
  } = props.location.state;

  const [commentsList, setCommentsList] = useState([]);

  const postId = uuid();
  let [startTime] = useState();
  let [time, setTime] = useState(0);

  const reciveComment = data => {
    setCommentsList([...commentsList, data]);
  };

  useEffect(() => {
    getComments(token, id).then(data => {
      if (data.lenght) {
        setCommentsList([...commentsList, data]);
      }
    });
    console.log('start liczenia');
    let seconds = 0;
    startTime = setInterval(() => {
      seconds += 10;
      setTime(id, (time = seconds), token);
    }, 10);
    return () => {
      console.log(
        'stop licznika, czas na stronie ' + Math.floor(time / 1000) + ' sekund'
      );
      sendTime(id, time);
      clearInterval(startTime);
    };
  }, []);

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
              {commentsList.map(singleComment => (
                <Comments
                  key={singleComment.id}
                  singleComment={singleComment}
                />
              ))}
            </Row>
            <Row className='justify-content-center'>
              <AddComment postId={postId} reciveComment={reciveComment} />
            </Row>
          </Col>
        </Row>
      </main>
    </Fragment>
  );
};
