import React, { useState } from 'react';

export const Context = React.createContext();

export function ContextController({ children }) {
  let intialState = {
    dashboard: false,
    posts: [],
    token: '',
    currentPage: 1,
    totalPages: { totalPages: 10 }
  };

  const [state, setState] = useState(intialState);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
