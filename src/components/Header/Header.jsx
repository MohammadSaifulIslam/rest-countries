import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <div className="navbar bg-slate-200">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Rest Countries</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                       <li><ActiveLink to="/">Home</ActiveLink></li>
                       <li><ActiveLink to="/about">About</ActiveLink></li>
                       <li><ActiveLink to="/service">Service</ActiveLink></li>
                       <li><ActiveLink to="/countries">Countries</ActiveLink></li>
                       <li><ActiveLink to="/contact">Contact</ActiveLink></li>
                    </ul>
                </div>
            </div>
         
        </nav>
    );
};

export default Header;