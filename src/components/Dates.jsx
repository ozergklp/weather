import React from 'react'

export default function Dates({dates, handleWeather}) {
    return (
        <section className='flex justify-center mt-20'>
        {dates.length > 0 && (
            dates.map((item, index) => {
                return(
                    <button key={index} 
                            className='p-3 m-3 border-2 shadow-black shadow-lg'
                            onClick={() => handleWeather(item)}> 
                            {item} 
                    </button>
                )
            })
        )
        }
        </section>
    )
}
