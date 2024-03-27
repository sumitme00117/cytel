
import React from 'react';

function Counter({ citiesVisited, productsVisited }) {
  return (
    <div>
      <p>Cities Visited: {citiesVisited}</p>
      <p>Products Visited: {productsVisited}</p>
    </div>
  );
}

export default Counter;
