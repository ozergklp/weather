import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Forecast from './Forecast';
import Dates from './Dates';

const apiKey = "693d84ea64b8989c77bca30ea292f3fd";

export default function Weather() {
    const [dates, setDates] = useState([]);
    const [days, setDays] = useState([]);
    const [weather, setWeather] = useState([]);
    const { city } = useParams();

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    const today = new Date();

    const { isLoading: isLoadingCurrent, error: errorCurrent, data: currentWeatherData } = useQuery(
        ["currentWeather", city],
        () => axios.get(currentWeatherUrl),
        {
            refetchOnWindowFocus: false,
        }
    );

    const { isLoading: isLoadingForecast, error: errorForecast, data: forecastWeatherData } = useQuery(
        ["forecastWeather", city],
        () => axios.get(forecastWeatherUrl),
        {
            refetchOnWindowFocus: false,
        }
    );

    // Convert date string to date
    const convertDate = (string) => {
        return string.split(" ")[0];
    }

    // Create a formatted date
    const convertToday = (date) => {
        const day = date.getDate();
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Adding 1 because months are zero-indexed
        return `${year}-${month < 10 ? `0${month}` : month}-${day}`;
    }

    useEffect(() => {
        if (forecastWeatherData) {
            const newData = forecastWeatherData.data.list.map((item) => {
                const newDate = new Date(item.dt_txt);
                return {
                    day: newDate.getDay(),
                    date: newDate.getDate(),
                    year: newDate.getFullYear(),
                    month: newDate.getMonth(),
                    hour: newDate.getHours(),
                    degree: `${(item.main.temp - 273.15).toFixed(0)}°C` // Convert Kelvin to Celsius
                };
            });
            setDays(newData);
            const uniqueDates = [...new Set(newData.map((item) => item.date))];
            setDates(uniqueDates);
        }
    }, [forecastWeatherData]);

    const handleWeather = (date) => {
        if (forecastWeatherData) {
            const weatherData = days.filter(item => item.date === date);
            setWeather(weatherData);
        }
    }

    // Render loading states
    if (isLoadingCurrent || isLoadingForecast) {
        return (
            <h2 className='text-center'>Loading...</h2>
        );
    }

    if (errorCurrent || errorForecast) {
        return (
            <div className='text-center'>
                {errorCurrent && <h2>{errorCurrent.message}</h2>}
                {errorForecast && <h2>{errorForecast.message}</h2>}
            </div>
        );
    }

    return (
        <main>
            {currentWeatherData && (
                <section>
                    <section>
                        <p>{getShortDayName(today.getDay())} {today.getDate()}</p>
                        <p>Today in {currentWeatherData.data.name}, {currentWeatherData.data.sys.country}</p>
                    </section>
                    <p>{currentWeatherData.data.weather[0].main}</p>
                    <section>
                        <p>{`${(currentWeatherData.data.main.feels_like - 273.15).toFixed(0)}°C`}</p>
                        <p>Feels like {`${(currentWeatherData.data.main.temp - 273.15).toFixed(0)}°C`}</p>
                    </section>
                </section>
            )}

            <Dates dates={dates} handleWeather={handleWeather} />
            <Forecast weather={weather} />
        </main>
    );
}

function getShortDayName(day) {
    switch (day) {
        case 0:
            return "Sun";
        case 1:
            return "Mon";
        case 2:
            return "Tue";
        case 3:
            return "Wed";
        case 4:
            return "Thu";
        case 5:
            return "Fri";
        case 6:
            return "Sat";
        default:
            return "Invalid Day";
    }
}
