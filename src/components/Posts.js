import React, { useEffect } from 'react';
import { getPosts } from '../config';

export const Posts = () => {
  useEffect(() => {
    getPosts().then(data => console.log(data));
  }, []);

  return <div>Posts</div>;
};
