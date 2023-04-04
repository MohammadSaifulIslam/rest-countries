import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error)
    return (
        <div className='text-center flex justify-center items-center h-screen '>
            <div>
            <h1 className='font-bold text-4xl mb-5'>Oops!</h1>
            <p  className='font-semibold text-xl mb-2'>Sorry, an unexpected error has occurred.</p>
            <p  className='font-medium text-lg'>
                <i>404 {error.statusText || error.message}</i>
            </p>
            </div>
        </div>
    );
};

export default ErrorPage;