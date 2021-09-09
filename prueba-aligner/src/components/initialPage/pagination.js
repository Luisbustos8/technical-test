import React from 'react';
import './pagination.css'


const Pagination = ({ dataPerPage, totalData, paginate }) => {

  const pagesNumber = [];

  for (let i = 1; i<= Math.ceil(totalData / dataPerPage); i++) {
    pagesNumber.push(i);
  } 

  return (
    <nav className='pagination'>
      <ul className='pagination-list'>
        {pagesNumber.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number) } href='!#' className='page-lin'>{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}


export default Pagination;