import React from "react";
import "./AccommodationCard.css";

export function AccommodationCard({ image, name, location, price, rating }) {

  console.log(image, name, location, price, rating);
  return (
    <div className="accommodation-container">
      <div className="accommodation-card">
        <img src="https://content.r9cdn.net/rimg/dimg/67/3c/ca2d29f3-city-5201-166598d82dd.jpg?width=1366&height=768&xhint=2387&yhint=1811&crop=true" alt={name} className="card-image" />
        <div className="card-content">
          <h3 className="location-name">{name}</h3>
          <p className="location">{location}</p>
          <div className="card-footer">
            <span className="price">{price}</span>
            <div className="rating">
              <span className="star">★</span>
              <span className="rating-number">{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
