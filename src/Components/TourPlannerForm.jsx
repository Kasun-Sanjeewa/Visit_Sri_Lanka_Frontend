import React, { useState } from "react";
import "./TourPlannerForm.css";
import { DestinationCard } from "./DestinationCard";
import { AccommodationCard } from "./AccommodationCard";

export function TourPlannerForm() {
  const [location, setLocation] = useState("");
  const [days, setDays] = useState("");
  const [groupType, setGroupType] = useState("");
  const [budget, setBudget] = useState("Cheap");
  const [hotels, setHotels] = useState([]);
  const [itinerary, setItinerary] = useState({});

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
              1. destinations: [{image, name, location, timeToTravel, rating}]
              2. accommodations: [{image, name, location, price, rating}]`,
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

      // Extract JSON object only
      try {
        const jsonStartIndex = generatedContent.indexOf("{");
        const jsonEndIndex = generatedContent.lastIndexOf("}") + 1;
        const jsonString = generatedContent.slice(jsonStartIndex, jsonEndIndex);

        const parsedData = JSON.parse(jsonString);

        // Update state with parsed data
        setDestinations(parsedData.destinations || []);
        setAccommodations(parsedData.accommodations || []);
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
      <h1>Plan Your Tour</h1>
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

      <div className="destination-section">
        <h2>Itinerary</h2>
        {Object.entries(itinerary).map(([day, { plan }]) =>
          plan.map((place, index) => (
            <DestinationCard
              key={`${day}-${index}`}
              image={place.placeImageUrl}
              name={place.placeName}
              location={place.placeDetails}
              timeToTravel={place.timeTravel}
              rating={place.rating}
            />
          ))
        )}
      </div>

      <div className="accommodation-section">
        <h2>Accommodations</h2>
        {hotels.map((hotel, index) => (
          <AccommodationCard
            key={index}
            image={hotel.hotelImageUrl}
            name={hotel.hotelName}
            location={hotel.hotelAddress}
            price={hotel.price}
            rating={hotel.rating}
          />
        ))}
      </div>
    </>
  );
}
