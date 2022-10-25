import React from 'react'
import Computadora from './Computadora'
import Jugador from './Jugador'

const Playground = () => {
  return (
    <div className='container playground'>
        <Jugador/>

        <Computadora/>
    </div>
  )
}

export default Playground