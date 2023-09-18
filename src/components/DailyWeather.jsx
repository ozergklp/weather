import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import WeatherIconL from './WeatherIcons/WeatherIconL';
import ShortDay from './ShortDay';

import React from 'react';



const apiKey = "693d84ea64b8989c77bca30ea292f3fd";

export default function DailyWeather({city}) {

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const today = new Date();

    const { isLoading: isLoadingCurrent, error: errorCurrent, data: currentWeatherData } = useQuery(
        ["currentWeather", city],
        () => axios.get(currentWeatherUrl),
        {
            refetchOnWindowFocus: false,
        }
    );

    if (isLoadingCurrent) {
        return (
            <h2 className='text-center'>Loading...</h2>
        );
    }

    if (errorCurrent ) {
        return (
            <h2 className='text-center'>
                {errorCurrent && <h2>{errorCurrent.message}</h2>}
            </h2>
        );
    }


    return (
        <>
            {currentWeatherData && (
                <section className='flex flex-col sm:flex-row items-center justify-center mb-3 sm:mb-0 text-center text-slate-900 flex-1'>
                    <section>
                        <p>{ShortDay(today.getDay())} {today.getDate()}</p>
                        <p>Today in {currentWeatherData.data.name}, {currentWeatherData.data.sys.country}</p>
                        <p>{currentWeatherData.data.weather[0].description}</p>
                    </section>
                    <section>
                        <WeatherIconL weatherCode={currentWeatherData.data.weather[0].icon} />
                        
                    </section>
                    <section>
                        <p>{`${(currentWeatherData.data.main.feels_like - 273.15).toFixed(0)}°C`}</p>
                        <p>Feels like {`${(currentWeatherData.data.main.temp - 273.15).toFixed(0)}°C`}</p>
                    </section>
                </section>
            )}

        </>
    )
}

