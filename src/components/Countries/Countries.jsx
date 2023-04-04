import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Countries = () => {
    const countries = useLoaderData();
    console.log(countries)
    return (
        <div>
            <h2>This is countries page</h2>
        </div>
    );
};

export default Countries;