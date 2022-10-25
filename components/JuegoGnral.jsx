import { useEffect, useState } from 'react'
import * as ReactDOM from 'react-dom/client';
import $ from 'jquery'; 
import Botones from './Botones.jsx';
import Playground from './Playground.jsx';
import Mensaje from './Mensaje.jsx';
import Bienvenida from './Bienvenida.jsx';

const JuegoGnral = () => {
    const [baraja, setBaraja] = useState([])
    //estilo de los botones desactivados
    const [desactivado, setDesactivado] = useState(false)
    const [oculto, setOculto] = useState(true)
    
    const [ganador, setGanador] = useState()
    const [btnCancel, setBtnCancel] = useState(0)
    const numeros = [2, 3, 4, 5, 6, 7 ,8, 9 ,10];
    const letras = ['J','Q','K','A'];
    const palo = ['C', 'D', 'H', 'S'];
    var carta = "10c";
    //no use el useState en los puntos por que por alguna razon se me genera un desface en los puntos cada que se agrega una carta
    let totalPuntosJugador = 0;
    let totalPuntosComputadora = 0;
    var ganaJugador = true;

  
    const crearBaraja = () =>{
      for (const n of numeros) {
        for(const p of palo){
            baraja.push(n + p);
            setBaraja(baraja);
        }
      }
      
      letras.forEach((l)=> {
        palo.forEach((p)=> {
            baraja.push(l + p);
            setBaraja(baraja);
        })
      })
      setBaraja( baraja.sort(()=>Math.random()-0.5))
      console.log(baraja);

    }
    //toma el valor de la carta
    function valor(carta){
      let valorCarta = carta.substring(0, carta.length - 1);
      
      if(letras.includes(valorCarta)){
          return valorCarta === 'A' ? 11 : 10;
      } else {
          return parseInt (valorCarta);
      }
    }
   const nuevoJuego = () =>{
      setBtnCancel(0)
      setGanador(true)
      setOculto(true)
      setDesactivado(true)
      setBaraja([])
      console.clear()
      crearBaraja();
      console.log("nuevo juego")
      $('#cartasJugador').html('');
      $('#cartasComputadora').html('');
      totalPuntosJugador=0;
      totalPuntosComputadora = 0;
      $('#puntosJugador').text(totalPuntosJugador);
      $('#puntosPc').text(totalPuntosComputadora);

    }
  
    const detenerse = () => {
      console.log(totalPuntosJugador + " desde funcion")
      console.log("detenido")
      turnoPC()
      setDesactivado(false)
    }
    
    const agregarCarta = () => {
      carta = baraja.shift();
      console.log(carta)
      console.log("agregada")
      totalPuntosJugador += valor(carta);
      //
      $('#cartasJugador').html($('#cartasJugador').html() + `<img className="carta img-fluid" src='../cartas/${carta}.png' />`); 
      $('#puntosJugador').text(totalPuntosJugador);
      console.log(totalPuntosJugador);
      console.log(btnCancel + " btnCancel");
      if(totalPuntosJugador>21){
        setDesactivado(false)
        turnoPC()
      }
      //setBtnCancel(totalPuntosJugador + valor(carta))
    }
    function turnoPC(){
        do {
            carta = baraja.shift();
            $('#cartasComputadora').html($('#cartasComputadora').html() + `<img src='./cartas/${carta}.png'>`); 
    
            totalPuntosComputadora += valor(carta);
            $('#puntosPc').text(totalPuntosComputadora);
            //sleep(200);
            if(totalPuntosJugador > 21){
                setGanador(false)
                ganaJugador = false;
                setOculto(false)
                break;
            }
            setGanador(false)
            setOculto(false)
        } while (totalPuntosComputadora <= 21 && totalPuntosComputadora < totalPuntosJugador) ;
    
        if(totalPuntosComputadora <= 21 && totalPuntosComputadora >= totalPuntosJugador){
            setGanador(false)
            ganaJugador = false;
            setOculto(false)
        }
        //
        console.log(ganaJugador + " jugadir")
        console.log(ganador + " jugadir2")
    }
    useEffect(()=>{
      setGanador(ganaJugador)
    })
  return (
    <div>

      <div className='header bg-dark text-light'>
        <h2 className='heading title'>BlackJack con Reac Js</h2>
      </div>
      <Botones btnCancel={btnCancel} crearBaraja={crearBaraja} valor={valor} nuevoJuego={nuevoJuego} detenerse={detenerse} agregarCarta={agregarCarta} desactivado={desactivado} />
      <Playground />
      <Mensaje oculto={oculto} ganador={ganaJugador}/>
      <Bienvenida />
    </div>
  )
}

export default JuegoGnral