const Functionbar = () => {
<<<<<<< Updated upstream
    return (
      <div className="function_bar">
        <ul className="list_link">
          <li>
            <button onClick={() => setCategory("beaches")}>Beaches</button>
          </li>
          <li>
            <button onClick={() => setCategory("lakes")}>Lakes</button>
          </li>
          <li>
            <button onClick={() => setCategory("hotels")}>Hotels</button>
          </li>
          <li>
            <button onClick={() => setCategory("camping")}>Camping</button>
          </li>
          <li>
            <button onClick={() => setCategory("forest")}>Forests</button>
          </li>
          <li>
            <button onClick={() => setCategory("Religius Places")}>
              Religius Places
            </button>
          </li>
          <li>
            <button onClick={() => setCategory("cabana")}>Cabana</button>
          </li>
          <li>
            <button onClick={() => setCategory("hotels")}>Hotels</button>
          </li>
        </ul>
      </div>
    );
=======
  return (
    <div className="function_bar">
      <ul className="list_link">
        <li>
          <a href="/beaches"><i class="fa-solid fa-umbrella-beach" /></a>
          <p>Beaches</p>
        </li>
        <li>
          <a href="/Lake_Front"><i class="fa-solid fa-water" /></a>
          <p>Lakes</p>
        </li>
        <li>
          <a href="/Hiking"><i class="fa-solid fa-person-hiking" /></a>
          <p>Hiking</p>
        </li>
        <li>
          <a href="/Camping"><i class="fa-solid fa-tents" /></a>
          <p>Camping</p>
        </li>
        <li>
          <a href="/Forests"><i class="fa-solid fa-tree" /></a>
          <p>Forests</p>
        </li>
        <li>
          <a href="/Religius"><i class="fa-solid fa-synagogue" /></a>
          <p>Religius Places</p>
        </li>
        <li>
          <a href="/Rooms"><i class="fa-solid fa-house" /></a>
          <p>Rooms</p>
        </li>
        <li>
          <a href="/Cabana"><i class="fa-solid fa-house-chimney-user" /></a>
          <p>Cabana</p>
        </li>
        <li>
          <a href="/Hotels"><i class="fa-solid fa-hotel" /></a>
          <p>Hotels</p>
        </li>
      </ul>
    </div>
  );
>>>>>>> Stashed changes
}

export default Functionbar;