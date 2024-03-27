
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function CityDetail() {
  const [products, setProducts] = useState([]);
  const params = useParams()

  useEffect(() => {
    fetchData();
  }, [params.cityname]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://assessments.reliscore.com/api/sales/${params.cityname}`);
      const productsArray = Object.entries(response.data.data).map(([name, amount]) => ({ name, amount }));
      
      setProducts(productsArray)
    
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div>
      <h2>Products Sold in {params.cityname}</h2>
      <ul>
        {products && products.map(product => (
          <li key={product.name}>
            <Link to={`/product/${product.name}`}>
          {product.name}: {product.amount}
          </Link>
        </li>
        ))}
      </ul>
    </div>
  );

}

export default CityDetail;





