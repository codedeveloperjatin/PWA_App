import axios from 'axios';
import React from 'react';


const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "5d64f03c98491372331c210e5980a100";

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}

// we used async await function ,