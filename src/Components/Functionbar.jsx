const Functionbar = () => {
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
}

export default Functionbar;