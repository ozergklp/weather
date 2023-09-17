import React, { useEffect } from 'react'
import { useState } from "react"
import { Outlet, useNavigate } from 'react-router-dom';


export default function Search() {
    const [city, setCity] = useState('')

    const navigate = useNavigate();

    const handleSearch = () => {
        if (city.length > 0) navigate(`/${city}`);
    }
    
    return (
        <>
            <header className='flex justify-center my-20'>
                <input  type="text" 
                        placeholder='Enter a City Name' 
                        onChange={(e) => setCity(e.target.value)}/>
                <button onClick={handleSearch}>Search</button>
            </header>

            <Outlet />
        </>
        
    )
}
