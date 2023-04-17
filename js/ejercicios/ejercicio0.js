//export function ejercicio0(){
    //const opciones = ['👊🏻','✌🏻','✋🏻'];
    //console.log(opciones[Math.trunc(Math.random() * 2)])
//}

function parseoDeTiempo(milisegundos) {
    let segundos = Math.floor(milisegundos / 1000);
    let horas = Math.floor(segundos / 3600);
    let minutos = Math.floor((segundos % 3600) / 60);
    let segundosRestantes = segundos % 60;
    
    return horas + ":" + (minutos < 10 ? "0" : "") + minutos + ":" + (segundosRestantes < 10 ? "0" : "") + segundosRestantes;
  }