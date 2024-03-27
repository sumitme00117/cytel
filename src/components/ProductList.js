
import React from 'react';
import { Link } from 'react-router-dom';

function ProductList({products, setProductsVisited}) {
  return (
    <div>
      <h2>List of Products</h2>
      <ul>
        {products && products?.map(products => (
          <li key={products}>
            <Link to={`/product/${products}`} onClick={() => setProductsVisited(prev => prev + 1)}>
              {products}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
