import { Hotels } from "./Hotels";
import { useState } from "react";

const Cards = (props) => {
  const { image, title } = props;
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % image.length); // Loop forward
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? image.length - 1 : prevIndex - 1
    ); // Loop backward
  };

  return (
    <section className="card">
      <div className="img_container">
        <button type="button" onClick={handlePrev} className="l_btn">
          {"<"}
        </button>
        <img src={image[index]} alt={title} />
        <button type="button" onClick={handleNext} className="R_btn">
          {">"}
        </button>
      </div>
      <div className="card_details">
        <h2>{title}</h2>
        <button type="button">Book Vehicle</button>
        <button type="button">Map</button>
      </div>
    </section>
  );
};

export default Cards;
