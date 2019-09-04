import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Nav = props => {
const { itemsCount, pageSize, currentPage, onPageChange} = props;
console.log("current page",currentPage);



const pagesCount = Math.ceil(itemsCount / pageSize);
if (pagesCount === 1 ) return null;
console.log(pagesCount);
const pages =_.range(1, pagesCount + 1);
console.log(pages);

  return (<nav>
    <ul className="pagination">
      {pages.map(page => (  <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}><a className="page-link" onClick={() => onPageChange(page)}>{page}</a> </li>
      ))}

    </ul>
  </nav>
);

}


Nav.propTypes = {
itemsCount: PropTypes.number.isRequired,
pageSize: PropTypes.number.isRequired,
currentPage: PropTypes.number.isRequired,
onPageChange: PropTypes.func.isRequired,

}

export default Nav;
