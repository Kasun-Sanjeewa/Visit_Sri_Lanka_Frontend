import React, { useState } from 'react';

const Navbar = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Toggle popup visibility
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">
                    Visit Sri Lanka
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
                <a
                    href="#!"
                    className="user-icon"
                    onClick={(e) => {
                        e.preventDefault();
                        togglePopup();
                    }}
                >
                    <i className="fas fa-user"></i>
                </a>

                {/* Popup content */}
                {isPopupOpen && (
                    <div className="popup">
                        <div className="popup-content">
                            <h3>User Options</h3>
                            <ul>
                                <li><a href="/Registration">Sign-up</a></li>
                                <li><a href="/settings">Log-in</a></li>
                                <li><a href="/logout">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
