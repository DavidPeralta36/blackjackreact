const numeros = [2, 3, 4, 5, 6, 7 ,8, 9 ,10];
    const letras = ['J','Q','K','A'];
    const palo = ['C', 'D', 'H', 'S'];
    var carta = "10c";
    let totalPuntosJugador = 0;
    let totalPuntosComputadora = 0;
  
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
      //carta = baraja.shift();
      //console.log(carta)
      carta = baraja.shift();
    }
    function valor(carta){
      let valorCarta = carta.substring(0, carta.length - 1);
      
      if(letras.includes(valorCarta)){
          return valorCarta === 'A' ? 11 : 10;
      } else {
          return parseInt (valorCarta);
      }
    }
  
    const nuevoJuego = () =>{
      $('#cartaBTN').removeAttr('disabled')
      $('#detenerseBTN').removeAttr('disabled');
      setBaraja([])
      console.clear()
      crearBaraja();
      console.log("nuevo juego")
      $('#cartasJugador').html('');
      $('#cartasComputadora').html('');
      totalPuntosJugador = 0;
      totalPuntosComputadora = 0;
      $('#puntosJugador').text(totalPuntosJugador);
      $('#puntosComputadora').text(totalPuntosComputadora);
    }
  
    const detenerse = () => {
      console.log("detenido")
    }
    
    const agregarCarta = () => {
      carta = baraja.shift();
      console.log(carta)
      console.log("agregada")
  
      $('#cartasJugador').html($('#cartasJugador').html() + `<img className="carta img-fluid" src='../cartas/${carta}.png' />`); 
      totalPuntosJugador += valor(carta);
      $('#puntosJugador').text(totalPuntosJugador);
      console.log(totalPuntosJugador)
    }