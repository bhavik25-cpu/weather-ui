import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherData } from '../redux/weatherSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const SearchBar = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(fetchWeatherData({ city, units: 'C' }));
    };

    return (
        <div className="search-bar">
      <div className="input-container">
        <span className="search-icon" onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </span>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search for places..."
          className="search-input"
        />
      </div>
    </div>
      
    );
};

export default SearchBar;
