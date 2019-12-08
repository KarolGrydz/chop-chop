import React, { useContext } from 'react';
import { Context } from '../context';
import '../styles/Pagination.css';

export const Pagination = () => {
  const [state, setState] = useContext(Context);
  const { currentPage, totalPages } = state;
  console.log(totalPages);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
    console.log(pageNumbers);
  }

  const changePage = e => {
    console.log(e.target.text);
    setState({ ...state, currentPage: e.target.text });
  };

  return pageNumbers ? (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number =>
          currentPage === number ? (
            <li key={number} className='page-item active'>
              <a onClick={changePage} href='#' className='page-link'>
                {number}
              </a>
            </li>
          ) : (
            <li key={number} className='page-item'>
              <a onClick={changePage} href='#' className='page-link'>
                {number}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  ) : null;
};
