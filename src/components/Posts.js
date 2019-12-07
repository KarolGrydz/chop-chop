import React, { useEffect, useState, useContext, Fragment } from 'react';
import { Context } from '../context';
import { Row, Col, DropdownItem } from 'reactstrap';
import { PostList } from './PostList';
import { PostGrid } from './PostGrid';
import { MyDropdown } from './MyDropdown';
import { AppNavbar } from '../views/AppNavbar';
import { getPosts } from '../config';

export const Posts = () => {
  const [state] = useContext(Context);
  const { token } = state;

  const [posts, setPost] = useState([]);
  const [pagination, setPagination] = useState({});
  const [viewOptions, setViewOptions] = useState(true);

  useEffect(() => {
    getPosts(token).then(
      data => (setPost(data.data), setPagination(data.pagination))
    );
  }, []);

  const toggleViewOptions = () => setViewOptions(!viewOptions);

  return (
    <Fragment>
      <AppNavbar />
      <Col
        sm={{ size: '10', offset: '1' }}
        md={{ size: '10', offset: '1' }}
        className="justify-content-center"
      >
        <Row className="justify-content-center">
          <Col sm={{ size: '2' }} md={{ size: '2' }}>
            <MyDropdown title="Sort by A-z">
              <DropdownItem>Sort by A-Z</DropdownItem>
            </MyDropdown>
          </Col>
          <Col sm={{ size: '2' }} md={{ size: '2' }}>
            <MyDropdown title="Sort by date">
              <DropdownItem>Sort by date</DropdownItem>
            </MyDropdown>
          </Col>
          <Col
            className="float-left"
            sm={{ size: '1', offset: '5' }}
            md={{ size: '1', offset: '5' }}
          >
            <MyDropdown title="Options">
              <DropdownItem onClick={toggleViewOptions}>Grid</DropdownItem>
              <DropdownItem onClick={toggleViewOptions}>List</DropdownItem>
            </MyDropdown>
          </Col>
        </Row>
        {viewOptions ? (
          <Row className="justify-content-center">
            <Col sm={{ size: '10' }} md={{ size: '10' }}>
              {posts.map(post => (
                <PostList key={post.id} post={post} token={token} />
              ))}
            </Col>
          </Row>
        ) : (
          <Row>
            {posts.map(post => (
              <Col sm={{ size: '3' }} md={{ size: '3' }}>
                <PostGrid key={post.id} post={post} />
              </Col>
            ))}
          </Row>
        )}
      </Col>
    </Fragment>
  );
};
