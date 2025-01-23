import { useEffect, useState } from "react";
import fetchLocationData from "./LocationAPI";

const Cards = (props) => {
  const { image, title } = props;
  const [index, setIndex] = useState(0);
  const [location, setLocation] = useState("");

  const handleNext = () => {
    setIndex((prevIndex) => Math.min(prevIndex + 1, image.length - 1));
  };

  const handlePrev = () => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const fetchlocation = async () => {
      try {
        const { locationUrl } = await fetchLocationData(title); // Extract photoUrl from response
        setLocation(locationUrl); // Set the photo URL in state
        if (locationUrl) {
        window.open(locationUrl, "_blank");}
      } catch (err) {
        console.error("Error fetching location data:", err);
      }
    };
  

  console.log(location);

  return (
    <section className="card">
      <div className="img_container">
        <button
          type="button"
          onClick={handlePrev}
          className={`l_btn ${index === 0 ? "hidden" : ""}`}
        >
          {"<"}
        </button>
        <img src={image[index]} alt={title} />
        <button
          type="button"
          onClick={handleNext}
          className={`R_btn ${index === image.length - 1 ? "hidden" : ""}`}
        >
          {">"}
        </button>
      </div>
      <div className="card_details">
        <h>{title}</h>
        <div className="Content_btn">
          <button type="button">Book Vehicle</button>
          <button type="button" onClick={fetchlocation}>Map</button>
        </div>
      </div>
    </section>
  );
};

export default Cards;
