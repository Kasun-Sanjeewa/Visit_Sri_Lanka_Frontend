import React from "react";
import "./DestinationCard.css";

export function DestinationCard({
  image,
  name,
  location,
  timeToTravel,
  rating,
}) {
  return (
    <div className="destination-card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h3>{name}</h3>
        <p className="location">{location}</p>
        <div className="card-footer">
          <span>{timeToTravel}</span>
          <div className="rating">
            <span className="star">★</span>
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
