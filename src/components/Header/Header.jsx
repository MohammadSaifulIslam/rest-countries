import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Rest Countries</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                       <li><Link to="/">Home</Link></li>
                       <li><Link to="/about">About</Link></li>
                       <li><Link to="/service">Service</Link></li>
                       <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;