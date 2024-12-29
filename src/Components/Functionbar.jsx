import { useState } from "react";

const Functionbar = ({ handleCatogory }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5; // Number of items visible at a time

  const categories = [
    { name: "beaches", icon: "fa-solid fa-umbrella-beach", label: "Beaches" },
    { name: "lakes", icon: "fa-solid fa-water", label: "Lakes" },
    { name: "hotels", icon: "fa-solid fa-hotel", label: "Hotels" },
    { name: "camping", icon: "fa-solid fa-tents", label: "Camping" },
    { name: "forest", icon: "fa-solid fa-tree", label: "Forests" },
    {
      name: "ReligiusPlaces",
      icon: "fa-solid fa-synagogue",
      label: "Religious Places",
    },
    { name: "cabana", icon: "fa-solid fa-house-chimney-user", label: "Cabana" },
    { name: "room", icon: "fa-solid fa-house", label: "Rooms" },
    { name: "hiking", icon: "fa-solid fa-person-hiking", label: "Hiking" },
  ];

  const visibleCategories = categories.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNext = () => {
    if (startIndex + itemsPerPage < categories.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="function_bar">
      {startIndex > 0 && (
        <button className="prev_button" onClick={handlePrevious}>
          <i className="fa-solid fa-chevron-left" />
        </button>
      )}
      <div className="list_link_wrapper">
        <ul className="list_link">
          {visibleCategories.map((category, index) => (
            <li key={index}>
              <button onClick={() => handleCatogory(category.name)}>
                <i className={category.icon} />
              </button>
              <p>{category.label}</p>
            </li>
          ))}
        </ul>
      </div>
      {startIndex + itemsPerPage < categories.length && (
        <button className="next_button" onClick={handleNext}>
          <i className="fa-solid fa-chevron-right" />
        </button>
      )}
    </div>
  );
};

export default Functionbar;
