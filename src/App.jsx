import { useState } from "react";

import Cards from "./Components/card";
import { Hotels } from "./Components/Hotels";
import "./App.css";
import Registration from "./Components/registration";
import Navbar from "./Components/Navbar";
import Functionbar from "./Components/Functionbar";

function App() {
  return (
    <>
      <Navbar />
      <Functionbar />
      <div className="card_list">
      {Hotels.map((card) => {
        return (
          
              <Cards {...card} key={card.id} />
           
        );
      })}
      </div>

      <Registration />
    </>
  );
}

export default App;
