const Functionbar = ({ handleCatogory }) => {
<<<<<<< Updated upstream
=======
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
    { name: "Hiking", icon: "fa-solid fa-person-hiking", label: "Hiking" },
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

>>>>>>> Stashed changes
  return (
    <div className="function_bar">
      <ul className="list_link">
        <li>
          <button onClick={() => handleCatogory("beaches")}>
            <i class="fa-solid fa-umbrella-beach" />
          </button>
          <p>Beaches</p>
        </li>
        <li>
          <button onClick={() => handleCatogory("lakes")}>
            {" "}
            <i class="fa-solid fa-water" />
          </button>
          <p>Lakes</p>
        </li>
        <li>
          <button onClick={() => handleCatogory("hotels")}>
            <i class="fa-solid fa-hotel" />
          </button>
          <p>Hotels</p>
        </li>
        <li>
          <button onClick={() => handleCatogory("camping")}>
            <i class="fa-solid fa-tents" />
          </button>
          <p>Camping</p>
        </li>
        <li>
          <button onClick={() => handleCatogory("forest")}>
            <i class="fa-solid fa-tree" />
          </button>
          <p>Forests</p>
        </li>
        <li>
          <button onClick={() => handleCatogory("ReligiusPlaces")}>
            <i class="fa-solid fa-synagogue" />
          </button>
          <button onClick={() => handleCatogory("ReligiusPlaces")}><i class="fa-solid fa-synagogue" /></button>
          <p>Religius Places</p>
        </li>
        <li>
          <button onClick={() => handleCatogory("cabana")}>
            <i class="fa-solid fa-house-chimney-user" />
          </button>
          <p>Cabana</p>
        </li>
        <li>
          <button onClick={() => handleCatogory("room")}>
            <i class="fa-solid fa-house" />
          </button>
          <p>Rooms</p>
        </li>
        <li>
          <button onClick={() => handleCatogory("hiking")}>
            <i class="fa-solid fa-person-hiking" />
          </button>
          <button onClick={() => handleCatogory("Hiking")}><i class="fa-solid fa-person-hiking" /></button>
          <p>Hiking</p>
        </li>
      </ul>
    </div>
  );
}

export default Functionbar;