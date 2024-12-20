import { useState } from 'react'

import Cards from './card'
import { Hotels } from "./Hotels";
import './App.css'

function App() {

  return (
    <>
    {Hotels.map((card) => {
      return (
        <>
        <div className='card_list'>
          <Cards {...card} key={card.id} />
        </div>
        </>
      )})}
    </>
  )
}

export default App
