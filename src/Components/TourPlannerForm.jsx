import React, { useState } from "react";
import "./TourPlannerForm.css";
import { DestinationCard } from "./DestinationCard";
import { AccommodationCard } from "./AccommodationCard";

export function TourPlannerForm() {
  const [location, setLocation] = useState("");
  const [days, setDays] = useState("");
  const [groupType, setGroupType] = useState("");
  const [budget, setBudget] = useState("Cheap");
  const [hotels, setHotels] = useState([]); // For accommodations
  const [itinerary, setItinerary] = useState([]); // For destinations


  const generateTripPlan = async () => {
    if (!location || !days || !groupType) {
      alert("Please fill all fields.");
      return;
    }

    const apiKey = "AIzaSyBfQhJmsbtmlIYbCx7eeYlMI-q9WtLTEH8";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: `Generate a Travel Plan for Location: ${location}, for ${days} Days, for a ${groupType} with a ${budget} budget. 
              Return JSON format only with two arrays:
              1. destinations: [{name, location, timeToTravel, rating}]
              2. accommodations: [{name, location, price, rating}]`,
            },
          ],
        },
      ],
    };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await res.json();
      const generatedContent =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || null;

      if (!generatedContent) {
        console.error("No content generated.");
        return;
      }

      try {
        const jsonStartIndex = generatedContent.indexOf("{");
        const jsonEndIndex = generatedContent.lastIndexOf("}") + 1;
        const jsonString = generatedContent.slice(jsonStartIndex, jsonEndIndex);

        const parsedData = JSON.parse(jsonString);

        // Update state with parsed data
        setItinerary(parsedData.destinations || []); // Update destinations
        setHotels(parsedData.accommodations || []); // Update accommodations
      } catch (jsonParseError) {
        console.error("Failed to parse generated JSON:", jsonParseError);
        console.error("Generated content:", generatedContent);
      }
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }

  };




  return (
    <>
      <h1 className="plan-text">Plan Your Tour</h1>
      <div className="tour-planner-form">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
            />
          </div>

          <div className="form-group">
            <label htmlFor="days">Days for trip</label>
            <input
              id="days"
              type="number"
              placeholder="Number of days"
              min="1"
              onChange={(e) => setDays(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="groupType">Group Type</label>
            <select
              id="groupType"
              onChange={(e) => setGroupType(e.target.value)}
            >
              <option value="">Select type</option>
              <option value="family">Family</option>
              <option value="friends">Friends</option>
              <option value="couple">Couple</option>
              <option value="solo">Solo</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="budget">Budget</label>
            <select id="budget" onChange={(e) => setBudget(e.target.value)}>
              <option value="">Budget type</option>
              <option value="budget">Cheap</option>
              <option value="moderate">Moderate</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>
        </div>

        <div className="form-submit">
          <button type="button" onClick={generateTripPlan}>
            Plan Trip
          </button>
        </div>
      </div>
      <h2 className="destination-title">Destinations</h2>
      <div className="destination-section">
        {itinerary.map((destination, index) => (
          <DestinationCard
            key={index}
            name={destination.name}
            location={destination.location}
            timeToTravel={destination.timeToTravel}
            rating={destination.rating}
          />
        ))}
      </div>
      <h2 className="accommodation-title">Accommodations</h2>
      <div className="accommodation-section">
        {hotels.map((hotel, index) => (
          <AccommodationCard
            key={index}
            name={hotel.name}
            location={hotel.location}
            price={hotel.price}
            rating={hotel.rating}
          />
        ))}
      </div>
    </>
  );
}
