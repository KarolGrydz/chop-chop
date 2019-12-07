import React, { useState, useEffect } from 'react';
import { getToken, getPosts } from './config';

export const Context = React.createContext();

export function ContextController({ children }) {
  let intialState = {
    dashboard: false,
    posts: [],
    currentSide: [],
    token: ''
  };

  const [state, setState] = useState(intialState);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
