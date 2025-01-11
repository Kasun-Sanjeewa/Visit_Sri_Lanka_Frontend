import React, { useEffect, useState } from "react";
import "./DestinationCard.css";
import fetchLocationData from "./LocationAPI"; // Ensure fetchLocationData is properly imported

export function DestinationCard({
  name,
  location,
  timeToTravel,
  rating,
}) {
  const [image, setImage] = useState(""); // To store the photo URL
  const [error, setError] = useState(""); // Optional: Handle errors
  const [loading, setLoading] = useState(true); // Track loading state

  // Fetch image URL when the component mounts or the name prop changes
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const { photoUrl } = await fetchLocationData(name); // Extract photoUrl from response
        setImage(photoUrl); // Set the photo URL in state
        setLoading(false); // Set loading to false after the image is fetched
      } catch (err) {
        console.error("Error fetching location data:", err);
        setError("Failed to load image"); // Optional: Set an error message
        setLoading(false); // Set loading to false when an error occurs
      }
    };

    if (name) {
      fetchImage(); // Call the function to fetch the image
    } else {
      setLoading(false); // If name is missing, stop loading
    }
  }, [name]);

  return (
    <div className="destination-container">
      <div className="destination-card">
        {loading ? (
          <div className="placeholder-image">Loading image...</div> // Loading state
        ) : error ? (
          <div className="placeholder-image">{error}</div> // Error state
        ) : image ? (
          <img src={image} alt={name} className="card-image" /> // Display the fetched image
        ) : (
          <div className="placeholder-image">No image available</div> // If no image URL is available
        )}
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
