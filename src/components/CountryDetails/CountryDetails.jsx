import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const CountryDetails = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(- 1)
    }
    const countryDetails = useLoaderData();
    const { name, capital, region, population, flags, maps } = countryDetails[0];
    console.log(maps.googleMaps)
    return (
        <div className="card w-full bg-base-100 shadow-2xl mt-10 p-5">
            <figure><img className='w-full md:w-2/4 rounded-xl' src={flags.png} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Country Name: {name.common}</h2>
                <p>Capital: {capital}</p>
                <p>Region: {region}</p>
                <p>Population: {population}</p>
                <div className="card-actions mt-5">
                    <button onClick={handleGoBack} className="btn btn-primary">Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default CountryDetails;