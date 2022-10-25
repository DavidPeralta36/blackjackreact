import React from 'react'

const Jugador = () => {
  return (
    <div className='juegoJugador'>
          <h2 className='heading text-light pgTitle'>Jugador - <small id='puntosJugador'>0</small></h2>
          <div className='borderCard img-fluid'></div>
          <div className='cartasJugador' id='cartasJugador'>
            
            
          </div>
    </div>

  )
}

export default Jugador