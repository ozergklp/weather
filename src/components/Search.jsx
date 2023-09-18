import React, { useEffect } from 'react'
import { useState } from "react"
import { Outlet, useNavigate } from 'react-router-dom';
import { HiSearch } from "react-icons/hi";

export default function Search() {
    const [city, setCity] = useState('')

    const navigate = useNavigate();

    const handleSearch = () => {
        if (city.length > 0) navigate(`/${city}`);
    }
    
    return (
        <section className='flex flex-col items-center'>
            <header className='flex justify-center items-center mt-10 bg-slate-200 p-2 py-1 rounded-3xl'>
                <input  type="text" 
                        placeholder='Enter a City Name' 
                        onChange={(e) => setCity(e.target.value)}
                        className='focus: outline-none bg-slate-200 p-1 ml-1 text-slate-900'
                        />
                <button onClick={handleSearch}
                        className=' border-slate-600'> <HiSearch className='text-search fill-slate-900'/> </button>
            </header>

            <Outlet />
        </section>
        
    )
}
