export function ejercicio5(){

    const $cronometro = document.getElementById('cronometro');
    const $inicio = document.getElementById('inicio');    const $reset = document.getElementById('reset');    const $pausa = document.getElementById('pausa');
    let contador = 0;


    let cronometro = setInterval(()=>{
        $cronometro.textContent += 'a';
    },1000)

    clearInterval(cronometro);


    $pausa.addEventListener('click', ()=>{
        clearInterval(cronometro);

        $pausa.setAttribute('disabled','')
        $inicio.removeAttribute('disabled')
        $reset.removeAttribute('disabled')
    })

    $inicio.addEventListener('click',()=>{
        clearInterval(cronometro);
        cronometro = setInterval(()=>{
            contador++;
            $cronometro.textContent = parsearTiempo(contador)
        },1000)



        $inicio.setAttribute('disabled','')
        $reset.removeAttribute('disabled')
        $pausa.removeAttribute('disabled')
    })




    $reset.addEventListener('click', ()=>{
        contador = 0;

        clearInterval(cronometro);
        $cronometro.textContent = '00:00:00';
        cronometro = setInterval(()=>{
            contador++;
            $cronometro.textContent = parsearTiempo(contador)
        },1000)



        $reset.setAttribute('disabled','')
        $inicio.removeAttribute('disabled')
        $pausa.removeAttribute('disabled')

    })



    function parsearTiempo(contador){
        let horas = Math.trunc(contador / 3600) % 60; let minutos = Math.trunc(contador / 60) % 60; let segundos = contador % 60;
        let hor_txt = ''; let min_txt = ''; let seg_txt = '';
        

        seg_txt = segundos < 10 ? '0'+segundos : segundos+'';
        min_txt = minutos < 10 ? '0'+minutos : minutos+'';
        hor_txt = horas < 10 ? '0'+horas : horas+'';
        return (`${hor_txt}:${min_txt}:${seg_txt}`)
    }
    
}