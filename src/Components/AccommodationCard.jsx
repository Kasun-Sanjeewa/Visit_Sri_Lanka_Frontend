import React, { useEffect, useState } from "react";
import "./AccommodationCard.css";
import fetchLocationData from "./LocationAPI";

export function AccommodationCard({ name, location, price, rating }) {
  const [image, setImage] = useState(""); // To store the photo URL
  const [error, setError] = useState(""); // Optional: Handle errors

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const { photoUrl } = await fetchLocationData(name); // Extract photoUrl from response
        setImage(photoUrl); // Set the photo URL in state
      } catch (err) {
        console.error("Error fetching location data:", err);
        setError("Failed to load image"); // Optional: Set an error message
      }
    };

    if (name) {
      fetchImage(); // Call the function to fetch the image
    }
  }, [name]);

  return (
    <div className="accommodation-container">
      <div className="accommodation-card">
        {image ? (
          <img src={image} alt={name} className="card-image" />
        ) : (
          <div className="placeholder-image">
            {error || "Loading image..."} {/* Show error or loading message */}
          </div>
        )}
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
