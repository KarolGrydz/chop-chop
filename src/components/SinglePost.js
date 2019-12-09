import React, { Fragment } from 'react';
import { Author } from './Author';
import { Comments } from './Comments';
import { Button, Col, Row } from 'reactstrap';
import { AppNavbar } from '../views/AppNavbar';
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
              <Comments />
            </Row>
          </Col>
        </Row>
      </main>
    </Fragment>
  );
};
