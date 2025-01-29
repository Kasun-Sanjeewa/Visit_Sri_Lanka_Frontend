
import "./App.css";
import Navbar from "./Components/Navbar";
import Functionbar from "./Components/Functionbar.jsx";
import CardList from "./Components/CardList.jsx";
import Registration from "./Components/Registration"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import { useState } from "react";
import { TourPlannerForm } from "./Components/TourPlannerForm.jsx";
import { TouristInfo } from "./Components/TourPlaceInfo.jsx";
import GiftVoucher from "./Components/Voucher.jsx";
import Offrpage from "./Components/Offrpage.jsx";



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
          <Route path="/travelplane" element={<TourPlannerForm />} />
          <Route path="/plaseinfo" element={<TouristInfo />} />
          <Route path="/voucher" element={<Offrpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
