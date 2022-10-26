import React from 'react'
import { useEffect, useState } from 'react'

const Bienvenida = () => {
    const [oculto2, setOculto2] = useState(false)
  return (
    <div className= {oculto2?'container-lg bienvenida off': 'container-lg bienvenida' }>
      <h1 className='heading text-light'>Reglas:</h1>
      <div className='container cuerpoBnvnida'>
        <div className='container textR'>
          <p>
            El objetivo principal es ganarle croupier ¿Como?
          </p>
          <p>
            Pues teniendo una mano el numero de cartas mas cercano a 21 sin que este
            y teniedo un numero mas alto que el del croupier
          </p>
          <p>
            El valet, la Quina y el Rey valen 10
          </p>
        </div>
        <div className='container textR'>
          <p>
            El A's puede tomar dos valores de lo que mejor se te acomode:
          </p>
          <p>
            Ya sea 11 o 1
          </p>
          <p>
            Se empieza con 2 cartas
          </p>
          <p>
            El BlackJack se produce cuando en las 2 primeras cartas con un 10 o Un A's mas cualquier figura
          </p>
        </div>
      </div>

      <button className='btn btn-light m-2' onClick={(()=>{
          setOculto2(true)
      })}>Aceptar</button>

      <button className='btn btn-warning m-2'>
        <a href="https://trileniumcasino.com.ar/wp-content/uploads/2016/08/reglas-black-jack.pdf"
        > Ir a las reglas</a></button>
    </div>
  )
}

export default Bienvenida