import { useEffect, useState } from "react";
import fetchLocationData from "./LocationAPI";
import GiftVoucher from "./Voucher";
import ReactDOM from 'react-dom/client';

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
        window.open(locationUrl, "_blank");
      }
    } catch (err) {
      console.error("Error fetching location data:", err);
    }
  };

  console.log(location);


  const handlePrint = () => {

    // Open the Invoice component in a new tab
    const newTab = window.open("", "_blank");

    // Use `createRoot` instead of `render`
    const root = ReactDOM.createRoot(newTab.document.body);  // Create root
    root.render(
      <GiftVoucher />
    );

    // Wait for the new tab to load, then trigger the print for the invoice
    newTab.onload = () => {
      // Now, in the new tab, we only print the invoice
      newTab.print();
      // Close the new tab after printing to avoid keeping an empty tab open
      newTab.close();
    };
  }

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
          <button
            type="button"
            onClick={() => {
              window.open("https://shorturl.at/SDta9", "_blank");
            }}
          >
            Book Vehicle
          </button>
          <button type="button" onClick={fetchlocation}>
            Map
          </button>
        </div>
      </div>
      <button onClick={handlePrint}>Print Button</button>
    </section>
  );
};

export default Cards;
