import React from 'react';

const Navbar = () => {
    return (

        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">
                    Visit Sri Lankal
                </a>
            </div>
            <div className="navbar-center">
                <ul className="nav-links">
                    <li>
                        <a href="/products">Places</a>
                    </li>
                    <li>
                        <a href="/about">About Us</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <a href="/Registration" className="user-icon">
                    <i className="fas fa-user"></i>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;