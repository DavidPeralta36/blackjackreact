import React from 'react'
import { useEffect, useState } from 'react'

const Bienvenida = () => {
    const [oculto2, setOculto2] = useState(false)
  return (
    <div className= {oculto2?'container-lg bienvenida off': 'container-lg bienvenida' }>
        <button className='btn btn-light' onClick={(()=>{
            setOculto2(true)
        })}></button>
    </div>
  )
}

export default Bienvenida