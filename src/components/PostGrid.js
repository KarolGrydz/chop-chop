import React from 'react';
import '../styles/PostGrid.css';

export const PostGrid = ({ post }) => {
  const { title, thumbnail } = post;
  return (
    <div className='grid'>
      <div className='card'>
        <div className='card-title'>
          <h6>{title}</h6>
        </div>
        <div className='card-body'>
          <div className='col-md-12'>
            <img src={thumbnail} alt='thumbnail' />
          </div>
        </div>
      </div>
    </div>
  );
};
