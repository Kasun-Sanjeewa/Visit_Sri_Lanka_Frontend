import { useState } from "react";

const Cards = (props) => {
  const { image, title } = props;
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => Math.min(prevIndex + 1, image.length - 1));
  };

  const handlePrev = () => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

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
          <button type="button">Map</button>
        </div>//remove the button
      </div>
    </section>
  );
};

export default Cards;
