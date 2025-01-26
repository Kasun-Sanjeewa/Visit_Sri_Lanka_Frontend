import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isUserRegistered, setIsUserRegistered] = useState(false); // Registration status
  const [userInfo, setUserInfo] = useState();
  //{
  //     name: 'John Doe',
  //     email: 'john.doe@example.com'
  // } // Example user info for demonstration

  // Toggle popup visibility
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  // useEffect(() => {
  //     if (!userInfo) {
  //         setIsPopupOpen(!isPopupOpen);
  //     } else {
  //         setIsUserRegistered(true);
  //     }
  // }, [userInfo])  

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          Visit Sri Lanka
        </a>
      </div>
      <div className="navbar-center">
        <form id="search-header">
          <input placeholder="Type Here"></input>
          <button>
            <i class="fa-solid fa-magnifying-glass" id="serchbtn" />
          </button>
        </form>
      </div>
      <div className="navbar-right">
        <a href="/travelplane" className="travel-plan-btn">
          Make Your Plane
        </a>
        <a href="/plaseinfo" className="travel-plan-btn">
          Place Details
        </a>
        <a href="/voucher" className="travel-plan-btn" target="_blank">
          Voucher
        </a>
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
              {isUserRegistered ? (
                // Display user info if registered
                <div>
                  <h3>Welcome, {userInfo.name}</h3>
                  <p className="email">Email: {userInfo.email}</p>
                  <ul>
                    <li>
                      <a href="/logout">Logout</a>
                    </li>
                  </ul>
                </div>
              ) : (
                <div>
                  <h3>User Options</h3>
                  <ul>
                    <li>
                      <a href="/Registration">Sign-up</a>
                    </li>
                    <li>
                      <a href="/Login">Log-in</a>
                    </li>
                    <li>
                      <a href="/logout">Logout</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
