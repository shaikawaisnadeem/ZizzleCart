import React from 'react';
import './ProductSearch.css';

const ProductSearch = ({ product  }) => {
  return (
    <div className="searchDropdownDiv">
      <div className="funnelDiv">
        <i className="bi bi-funnel"></i>
        <h2>Search Results</h2>
      </div>

      {product.map((product, index) => (
        <div className="productSearchResults" key={index}>
          <div className="searchLeft">
            <i className="bi bi-box"></i>
            <div>
              <h2>{product.title}</h2>
              <p>In {product.category}</p>
            </div>
          </div>
          <div className="rightHead">
            <h2>${product.price}</h2>
            <p>{product.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSearch;
