import React, { useContext } from 'react';
import { Context } from '../context';
import { Link } from 'react-router-dom';
import '../styles/Pagination.css';

export const Pagination = () => {
  const [state, setState] = useContext(Context);
  const { currentPage, totalPages } = state;
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const changePage = e => {
    setState({ ...state, currentPage: e.target.text });
  };

  return pageNumbers ? (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number =>
          currentPage == number ? (
            <li key={number} className='page-item active'>
              <Link
                onClick={changePage}
                to={`posts?page=:${number}`}
                className='page-link'
              >
                {number}
              </Link>
            </li>
          ) : (
            <li key={number} className='page-item'>
              <Link
                onClick={changePage}
                to={`posts?page=:${number}`}
                className='page-link'
              >
                {number}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  ) : null;
};
