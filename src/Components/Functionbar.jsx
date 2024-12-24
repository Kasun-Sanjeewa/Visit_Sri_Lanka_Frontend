const Functionbar = () => {
    return (
      <div className="function_bar">
        <ul className="list_link">
          <li>
            <button onClick={() => setCategory("beaches")}><i class="fa-solid fa-umbrella-beach" /></button>
          <p>Beaches</p>
          </li>
          <li>
            <button onClick={() => setCategory("lakes")}> <i class="fa-solid fa-water" /></button>
          <p>Lakes</p>
          </li>
          <li>
            <button onClick={() => setCategory("hotels")}><i class="fa-solid fa-hotel" /></button>
          <p>Hotels</p>
          </li>
          <li>
            <button onClick={() => setCategory("camping")}><i class="fa-solid fa-tents" /></button>
          <p>Camping</p>
          </li>
          <li>
            <button onClick={() => setCategory("forest")}><i class="fa-solid fa-tree" /></button>
          <p>Forests</p>
          </li>
          <li>
            <button onClick={() => setCategory("Religius Places")}><i class="fa-solid fa-synagogue" /></button>
          <p>Religius Places</p>
          </li>
          <li>
            <button onClick={() => setCategory("cabana")}><i class="fa-solid fa-house-chimney-user" /></button>
          <p>Cabana</p>
          </li>
          <li>
            <button onClick={() => setCategory("hotels")}><i class="fa-solid fa-house" /></button>
          <p>Rooms</p>
          </li>
          <li>
            <button><i class="fa-solid fa-person-hiking" /></button>
          <p>Hiking</p>
          </li>
        </ul>
      </div>
    );

export default Functionbar;