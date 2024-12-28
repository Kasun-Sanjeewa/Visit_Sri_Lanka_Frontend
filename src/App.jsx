
import "./App.css";
import Navbar from "./Components/Navbar";
import Functionbar from "./Components/Functionbar";
import CardList from "./Components/CardList";
import Registration from "./Components/Registration"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import { useState } from "react";


function App() {


  const [category, setCategory] = useState('hotels');

  const handleCatogory = (data) => {
    setCategory(data);
  }



  return (
    <>
      <Navbar />
      <Functionbar handleCatogory={handleCatogory} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardList category={category} />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
