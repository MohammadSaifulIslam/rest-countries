import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({ country }) => {
    const { name, capital, region, population, flags,cca3 } = country;
    return (
        <>
            <div className="card  card-compact bg-base-100 shadow-2xl p-5">
                <figure><img className='rounded-lg w-full' src={flags.png} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Country Name:{name.common}</h2>
                    <p>Capital: {capital}</p>
                    <p>Region: {region}</p>
                    <p>Population: {population}</p>
                    <div className="card-actions mt-2">
                        <Link to={`/country/${cca3}`} className="btn btn-primary">Details</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Country;