import React, { useState } from 'react';
import { Author } from './Author';
import { Collapse, Button } from 'reactstrap';
import '../styles/Post.css';

export const Post = ({ post }) => {
  const { title, thumbnail, authorId, content, date, excerpt, id } = post;
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);
  return (
    <div className='card'>
      <div className='row no-gutters'>
        <div className='col-md-2 col-sm-2'>
          <img src={thumbnail} alt='thumbnail' />
        </div>
        <div className='col-md-7 col-sm-7'>
          <div className='card-body'>
            <div className='col-md-12'>
              <span>{date}</span>
              <h5>{title}</h5>
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
          <Author />
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
  );
};
