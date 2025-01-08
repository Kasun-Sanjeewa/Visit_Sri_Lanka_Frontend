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
    <div className="destination-container">
      <div className="destination-card">
        <img src="https://tripjive.com/wp-content/uploads/2024/09/best-places-to-visit-in-Nuwara-Eliya-1024x585.jpg" alt={name} className="card-image" />
        <div className="card-content">
          <h3>{name}</h3>
          <p className="d-location">{location}</p>
          <div className="d-card-footer">
            <span>{timeToTravel}</span>
            <div className="d-rating">
              <span className="d-star">★</span>
              <span>{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
