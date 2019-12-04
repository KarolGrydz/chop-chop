import React, { useEffect, useState } from 'react';
import { Row, Col, DropdownItem } from 'reactstrap';
import { Post } from './Post';
import { MyDropdown } from './MyDropdown';
import { getPosts } from '../config';

export const Posts = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    getPosts().then(data => setPost(data.data.data));
  }, []);

  return (
    <Col
      sm={{ size: '10', offset: '1' }}
      md={{ size: '10', offset: '1' }}
      className='justify-content-center'
    >
      <Row className='justify-content-center'>
        <Col sm={{ size: '2' }} md={{ size: '2' }}>
          <MyDropdown title='Sort by A-z'>
            <DropdownItem>Sort by A-Z</DropdownItem>
          </MyDropdown>
        </Col>
        <Col sm={{ size: '2' }} md={{ size: '2' }}>
          <MyDropdown title='Sort by date'>
            <DropdownItem>Sort by date</DropdownItem>
          </MyDropdown>
        </Col>
        <Col
          className='float-left'
          sm={{ size: '1', offset: '5' }}
          md={{ size: '1', offset: '5' }}
        >
          <MyDropdown title='Options'>
            <DropdownItem>Grid</DropdownItem>
            <DropdownItem>List</DropdownItem>
          </MyDropdown>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col sm={{ size: '10' }} md={{ size: '10' }}>
          {posts.slice(0, posts.length).map(post => (
            <Post key={post.id} post={post} />
          ))}
        </Col>
      </Row>
    </Col>
  );
};
