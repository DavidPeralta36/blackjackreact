import React, { useEffect } from 'react'

const Mensaje = ({oculto, ganador}) => {

    
    
  return (
    <div className= {oculto?'container-lg mensaje off': 'container-lg mensaje' }>
        <h1 className='heading text-light'>Ganador:</h1>
        <img className='img-fluid gif' src={!ganador?'../asstes/winner-conor-mcgregor.gif':"../asstes/losers-randy-marsh.gif"} />
        <h3 className='heading text-light'>{!ganador? "Jugador":"Computadora"}</h3>
        <button className='btn btn-light text-primary'  onClick={(()=>{alert("no funciona, clikee NUEVO JUEGO")})}>Aceptar</button>
    </div>
  )
}

export default Mensaje