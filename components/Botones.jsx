import React from 'react'
import "./funciones"
const Botones = ({nuevoJuego, detenerse, agregarCarta, desactivado /*btnCancel*/}) => {
  return (
    <div>
      <div className='container botones'>
        <button className={!desactivado? "btn btn-light text-primary m-3" : "btn btn-light text-primary m-3 opacity-50 btnDesac" }
        onClick={(()=>{(desactivado)? console.log("desactivado"):nuevoJuego()})}>Nuevo Juego</button>
        
        <button className={desactivado? "btn btn-primary m-3" : "btn btn-primary m-3 opacity-50 btnDesac" } 
        onClick={(()=>{(!desactivado)? console.log("desactivado"):agregarCarta()})} >Pedir carta</button>

        <button className={desactivado? "btn btn-danger m-3" : "btn btn-danger m-3 opacity-50 btnDesac" } 
        onClick={(()=>{(!desactivado)? console.log("desactivado"):detenerse()})} >Detenerse</button>

        {/*
          <button className={desactivado? "btn btn-danger m-3" : "btn btn-danger m-3 opacity-50 btnDesac" }
        //onClick={(()=>{(!desactivado)? console.log("desactivado"):detenerse()})}
        onClick={(()=>{
          if(!desactivado){
            console.log("desactivado")
            console.log(btnCancel)
          }else{
            if(btnCancel === 0){
              console.log("0pts")
              console.log(btnCancel)
            }else{
              detenerse();
            }
          }
        })}
        >Detenerse</button>*/
        }

      </div>
    </div>
  )
}

export default Botones