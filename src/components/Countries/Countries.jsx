import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';

const Countries = () => {
    const countries = useLoaderData();
    return (
        <div>
            <h2 className='text-3xl text-center font-bold mt-5 text-blue-500'>Total countries: {countries.length}</h2>
            <div className='grid grid-cols-3 gap-5 mt-10'>
                {
                    countries.map(country => <Country 
                    key={country.cca3}
                    country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;