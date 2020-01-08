import React from 'react';

export const Comments = ({ singleComment }) => {
  console.log(singleComment);
  return (
    <div className='comment-area'>
      <span>{singleCommnet.name}</span>
      <br />
      <p>{singleComment.comment}</p>
    </div>
  );
};
