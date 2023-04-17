export function ejercicio6(){

    const $form6 = document.getElementById('form6'); const $temporizador = document.getElementById('temporizador');
    const $inicio = document.getElementById('tinicio');    const $reset = document.getElementById('treset');    const $pausa = document.getElementById('tpausa');
    const $thora = document.getElementById('thora'); const $tminuto = document.getElementById('tminuto'); const $tsegundo = document.getElementById('tsegundo');
    
    let intervalo = setInterval(()=>{},1000); clearInterval(intervalo);
    let timeout = setTimeout(()=>{},1000); clearTimeout(timeout);
    let tiempo_total = 0; let flag = false; let isInit = false;

    //
        

    $form6.addEventListener('submit',(e)=>{
        e.preventDefault();
    })

    $inicio.addEventListener('click', ()=>{
        if(!flag){
            tiempo_total = ((parseInt($thora.value) * 3600) + (parseInt(tminuto.value)*60) + parseInt($tsegundo.value)) * 1000;
        }
        
        intervalo = setInterval(() => {
            tiempo_total = tiempo_total - 1000;
            $temporizador.textContent = parseoDeTiempo(tiempo_total);
        }, 1000);

        timeout = setTimeout(()=>{
            
            //console.log(tiempo_total)



            clearInterval(intervalo)
            clearTimeout(timeout)
        },tiempo_total)
        
    })

    $pausa.addEventListener('click', ()=>{
        flag = true;
        clearInterval(intervalo)
        clearTimeout(timeout)
    })


    $reset.addEventListener('click', ()=>{
        clearInterval(intervalo);
        clearTimeout(timeout);
        tiempo_total = ((parseInt($thora.value) * 3600) + (parseInt(tminuto.value)*60) + parseInt($tsegundo.value)) * 1000;
        intervalo = setInterval(() => {
            tiempo_total = tiempo_total - 1000;
            $temporizador.textContent = parseoDeTiempo(tiempo_total);
        }, 1000);

        timeout = setTimeout(()=>{
            
            //console.log(tiempo_total)



            clearInterval(intervalo)
            clearTimeout(timeout)
        },tiempo_total)
        
    })


    function parseoDeTiempo(milisegundos) {
        let segundos = Math.floor(milisegundos / 1000);
        let horas = Math.floor(segundos / 3600);
        let minutos = Math.floor((segundos % 3600) / 60);
        let segundosRestantes = segundos % 60;
        
        return (horas < 10 ? "0" : "") + horas + ":" + (minutos < 10 ? "0" : "") + minutos + ":" + (segundosRestantes < 10 ? "0" : "") + segundosRestantes;
      }
        
}