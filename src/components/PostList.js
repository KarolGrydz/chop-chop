import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Author } from './Author';
import { Collapse, Button } from 'reactstrap';

import '../styles/PostList.css';

export const PostList = ({ post }) => {
  const { title, thumbnail, authorId, date, excerpt, id } = post;
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);
  return (
    <div className='list'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-md-2 col-sm-2'>
            <img src={thumbnail} alt='thumbnail' />
          </div>
          <div className='col-md-7 col-sm-7'>
            <div className='card-body'>
              <div className='col-md-12'>
                <span>{date}</span>
                <h5>
                  <Link to={{ pathname: `posts/${id}`, state: { ...post } }}>
                    {title}
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className='col-md-1'>
            <Button
              color='primary'
              onClick={toggleCollapse}
              style={{ marginBottom: '1rem' }}
            >
              e
            </Button>
          </div>
          <div className='col-md-1'>
            <Author authorId={authorId} />
          </div>
        </div>
        <Collapse isOpen={isOpen}>
          <p className='card-text'>{excerpt}</p>
          <Button
            color='primary'
            onClick={toggleCollapse}
            className='float-right'
          >
            Close
          </Button>
        </Collapse>
      </div>
    </div>
  );
};
