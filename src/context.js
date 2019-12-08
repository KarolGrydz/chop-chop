import React, { useState, useEffect } from 'react';
import { getToken, getPosts } from './config';

export const Context = React.createContext();

export function ContextController({ children }) {
  let intialState = {
    dashboard: false,
    posts: [],
    token: '',
    currentPage: 1,
    totalPages: 10
  };

  const [state, setState] = useState(intialState);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
