import { useState } from 'react'

import Cards from './card'
import { Hotels } from "./Hotels";
import './App.css'
import Registration from './Components/registration';
import Navbar from './Components/Navbar';


function App() {

  return (
    <>
      <Navbar />
      {Hotels.map((card) => {
        return (
          <>
            <div className='card_list'>
              <Cards {...card} key={card.id} />
            </div>
          </>
        )
      })}

      <Registration />
    </>
  )
}

export default App
