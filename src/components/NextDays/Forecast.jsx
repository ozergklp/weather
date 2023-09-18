import React from 'react'
import WeatherIconS from '../WeatherIcons/WeatherIconS'



export default function Forecast({weather}) {
    return (
        <>
        {weather.length > 0 && (
            <>
                {console.log('weather: ', weather)}
                <ul className='flex flex-wrap  justify-center text-slate-900 mx-10'>
                {weather.map((item, index) => {
                    return (
                        <li className='p-3 m-3 ml-0 border-2 flex flex-col text-center'
                            key={index}>
                                {item.hour > 9 ? (
                                    <p> {`${item.hour}:00`} </p>
                                ) : (
                                    <p> {`0${item.hour}:00`} </p>
                                )}
                                <WeatherIconS weatherCode={item.icon} />
                                <p> {item.degree} </p>
                            </li>
                    )
                })}
            </ul>
        </>

        )}
        </>
    )
}
