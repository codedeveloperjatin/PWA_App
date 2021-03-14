import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
    const [ query, setQuery ] = useState('');// emtpy string 
    // destructuring using useState Hooks.
    const [ weather, setWeather] = useState({}); // empty object 
    // setWeather will update the value which is in weather.
    const search = async (e) => {  
        if (e.key === 'Enter'){
            const data = await fetchWeather(query)
            setWeather(data);
            setQuery('');
        }
    };

    return (
        <div className="main-container">
            <input
                type="text"
                className="search"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
            />
            
            {/* weather using state hook (useState.) in this div we will update the city and temp with the weather information */}
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>

                </div>
            )}

        </div>
    )
};

export default App;