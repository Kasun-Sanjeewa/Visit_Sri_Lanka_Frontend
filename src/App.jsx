import { useState } from 'react'

import Cards from './card'
import { Hotels } from "./Hotels";
import './App.css'
import Registration from './Components/registration';


function App() {

  return (
    <>
      <nav className='nav-bar'>
        <ul>
          <li> <button className='register-btn'>Register</button></li>
        </ul>
      </nav>
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
