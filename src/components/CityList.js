
import React from 'react';
import { Link } from 'react-router-dom';

function CityList({ cities, setCitiesVisited }) {
  return (
    <div>
      <h2>List of Cities</h2>
      <ul>
        {cities && cities?.map(city => (
          <li key={city}>
            <Link to={`/city/${city}`} onClick={() => setCitiesVisited(prev => prev + 1)}>
              {city}
            </Link>
          </li>
        ))}
      </ul>
    </div>
   
  );
}

export default CityList;
