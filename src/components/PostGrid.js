import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PostGrid.css';

export const PostGrid = ({ post }) => {
  const { title, thumbnail, id } = post;
  return (
    <div className='grid'>
      <div className='card'>
        <div className='card-title'>
          <h6>
            <Link to={{ pathname: `posts/${id}`, state: { ...post } }}>
              {title}
            </Link>
          </h6>
        </div>
        <div className='card-body'>
          <div className='col-md-12'>
            <Link to={{ pathname: `posts/${id}`, state: { ...post } }}>
              <img src={thumbnail} alt='thumbnail' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
