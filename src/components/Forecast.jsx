import React from 'react'

    export default function Forecast({weather}) {
    return (
        <aside>
        {weather.length > 0 && (
            <>
                <section> 
                    <p>{weather[0].date}</p> 
                </section>
                <ul className='flex justify-center'>
                {weather.map((item, index) => {
                    return (
                        <li className='p-3 m-3 border-2 shadow-black shadow-lg flex flex-col'
                            key={index}>
                                {item.hour > 9 ? (
                                    <p> {`${item.hour}:00`} </p>
                                ) : (
                                    <p> {`0${item.hour}:00`} </p>
                                )}
                                <p> {item.degree} </p>
                            </li>
                    )
                })}
            </ul>
        </>

        )}
        </aside>
    )
}
