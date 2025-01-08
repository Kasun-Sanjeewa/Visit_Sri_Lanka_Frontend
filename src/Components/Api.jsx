import React, { useState } from "react";

function Api() {
  const [location, setLocation] = useState("");
  const [days, setDays] = useState("");
  const [groupType, setGroupType] = useState("");
  const [budget, setBudget] = useState("Cheap");
  const [response, setResponse] = useState("");

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
              text: `Generate Travel Plan for Location: ${location}, for ${days} Days for ${groupType} with a ${budget} budget. 
              Give me a Hotels options list with HotelName, Hotel address, geo coordinates, rating, descriptions and suggest itinerary with placeName, placeDetails,  Geo Coordinates,  rating, time travel each of the location for ${days} days with each day plan with best time to visit in JSON format.`,
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

      const generatedText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No trip plan generated.";
      setResponse(generatedText);
    } catch (error) {
      console.error("Error:", error);
      setResponse("An error occurred while generating the trip plan.");
    }
  };

  const exportToJsonFile = () => {
    if (!response) {
      alert("No data to export.");
      return;
    }

    const blob = new Blob([response], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "trip-plan.json";
    link.click();
  };

  return (
    <div className="container">
      <h1 className="title">Plan Your Tour</h1>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            className="input"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="days">Days for trip</label>
          <input
            id="days"
            className="input"
            type="number"
            placeholder="Number of days"
            min="1"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="groupType">Group Type</label>
          <select
            id="groupType"
            className="input"
            value={groupType}
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
          <select
            id="budget"
            className="input"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="Cheap">Cheap</option>
            <option value="Moderate">Moderate</option>
            <option value="Luxury">Luxury</option>
          </select>
        </div>
      </div>

      <div className="button-container">
        <button className="button" onClick={generateTripPlan}>
          Plan Trip
        </button>
        <button className="button export-button" onClick={exportToJsonFile}>
          Export Trip Plan
        </button>
      </div>

      <div className="response-container">
        {response && (
          <div className="response">
            <h3>Generated Trip Plan (JSON):</h3>
            <pre>{response}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default Api;
