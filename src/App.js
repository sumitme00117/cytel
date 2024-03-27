
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import CityList from './components/CityList';
import ProductList from './components/ProductList';
import CityDetail from './components/CityDetail';
import ProductDetail from './components/ProductDetail';
import Counter from './components/Counter';
import RefreshButton from './components/RefreshButton';

function App() {
  const [cities, setCities] = useState([]);
  const [products, setProducts] = useState([]);
  const [citiesVisited, setCitiesVisited] = useState(0);
  const [productsVisited, setProductsVisited] = useState(0);

  useEffect(() => {
    fetchData();
    fetchProducts()
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://assessments.reliscore.com/api/cities/');
      
      setCities(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://assessments.reliscore.com/api/sales/all');
      const keysArray = Object.keys(response.data.data);
      setProducts(keysArray);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const refreshData = () => {
    setCitiesVisited(0);
    setProductsVisited(0);
    fetchData();
  };

  return (
    <Router>
      <div>
        <Counter citiesVisited={citiesVisited} productsVisited={productsVisited} />
        <RefreshButton onClick={refreshData} />
          <Routes>
          <Route path="/" element={
          <>
            <CityList cities={cities} setCitiesVisited={setCitiesVisited} />
            <ProductList products={products} setProductsVisited={setProductsVisited} />
          </>
        } />
          <Route path="/city/:cityname" exact element={<CityDetail/>} />
          <Route path="/product/:productname" exact element={<ProductDetail setProductsVisited={setProductsVisited}/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
