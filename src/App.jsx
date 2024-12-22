<<<<<<< Updated upstream
import { useState } from 'react'

import Cards from './card'
import { Hotels } from "./Hotels";
import './App.css'
=======

import "./App.css";
import Navbar from "./Components/Navbar";
import Functionbar from "./Components/Functionbar";
import CardList from "./Components/CardList";
import Registration from "./Components/Registration"
import { BrowserRouter, Route, Routes } from "react-router-dom";
>>>>>>> Stashed changes

function App() {

  return (
    <>
<<<<<<< Updated upstream
    {Hotels.map((card) => {
      return (
        <>
        <div className='card_list'>
          <Cards {...card} key={card.id} />
        </div>
        </>
      )})}
=======
      <Navbar />
      <Functionbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/Registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
>>>>>>> Stashed changes
    </>
  )
}

export default App
