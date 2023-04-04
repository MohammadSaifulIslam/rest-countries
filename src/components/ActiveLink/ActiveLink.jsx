import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    const active = 'text-blue-500'
    return (
        <NavLink
            to={to}
            className={({ isActive}) =>
                isActive ? "text-white bg-blue-500" : "" }
        >
           {children}
        </NavLink>
    );
};

export default ActiveLink;