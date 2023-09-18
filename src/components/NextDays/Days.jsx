import React from 'react'
import ShortDay from '../ShortDay'

export default function Days({daysAndDates,handleWeather}) {
    return (
        <section className='flex flex-wrap  justify-center' >
        {daysAndDates.length > 0 && (
            daysAndDates.map((item, index) => {
                return(
                    <button key={index} 
                            className='p-3 sm:w-40 m-1 border-2 focus:border-slate-300 rounded-md text-slate-900 w-1/4'
                            onClick={() => handleWeather(item.date)}> 
                            {ShortDay(item.day)}
                            {` ${item.date}`} 
                    </button>
                )
            })
        )
        }
        </section>
    )
}
