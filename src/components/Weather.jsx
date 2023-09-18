import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DailyWeather from './DailyWeather';
import Days from './NextDays/Days';
import Forecast from './NextDays/Forecast';

const apiKey = "693d84ea64b8989c77bca30ea292f3fd";

export default function Weather() {
    const [dates, setDates] = useState([]);
    const [days, setDays] = useState([]);
    const [weather, setWeather] = useState([]);
    const { city } = useParams();

    const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;




    const { isLoading: isLoadingForecast, error: errorForecast, data: forecastWeatherData } = useQuery(
        ["forecastWeather", city],
        () => axios.get(forecastWeatherUrl),
        {
            refetchOnWindowFocus: false,
        }
    );


    useEffect(() => {
        if (forecastWeatherData) {
            setWeather([]);
            const newData = forecastWeatherData.data.list.map((item) => {
                const newDate = new Date(item.dt_txt);
                return {
                    day: newDate.getDay(),
                    date: newDate.getDate(),
                    year: newDate.getFullYear(),
                    month: newDate.getMonth(),
                    hour: newDate.getHours(),
                    degree: `${(item.main.temp - 273.15).toFixed(0)}°C`, // Convert Kelvin to Celsius
                    icon : item.weather[0].icon,
                };
            });
            setDays(newData);
            //const uniqueDates = [...new Set(newData.map((item) => item.date))];
            const uniqueDates = new Set(newData.map((item) => JSON.stringify({ date: item.date, day: item.day })));
            const uniqueDateObjects = Array.from(uniqueDates).map((str) => JSON.parse(str));
            console.log("string: ",uniqueDates)
            console.log("object: ", uniqueDateObjects)
            setDates(uniqueDateObjects);
        }
    }, [forecastWeatherData]);

    const handleWeather = (date) => {
        if (forecastWeatherData) {
            const weatherData = days.filter(item => item.date === date);
            setWeather(weatherData);
        }
    }

    // Render loading states
    if ( isLoadingForecast) {
        return (
            <h2 className='text-center'>Loading...</h2>
        );
    }

    if ( errorForecast) {
        return (
            <h2 className='text-center'>
                {errorForecast && <h2>{errorForecast.message}</h2>}
            </h2>
        );
    }

    return (
        <main className='mt-7 '>
                <DailyWeather city={city} />
                <Days daysAndDates={dates}  handleWeather={handleWeather} />
                <Forecast weather={weather} />
        </main>
    );
}
