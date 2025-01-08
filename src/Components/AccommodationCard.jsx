import React from "react";
import "./AccommodationCard.css";

export function AccommodationCard({ image, name, location, price, rating }) {

  console.log(image, name, location, price, rating);
  return (
    <div className="accommodation-card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h3>{name}</h3>
        <p className="location">{location}</p>
        <div className="card-footer">
          <span className="price">{price}</span>
          <div className="rating">
            <span className="star">★</span>
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
