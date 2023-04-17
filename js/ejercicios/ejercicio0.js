export function ejercicio0(){
    const $generar = document.getElementById('generar'); const $form0 = document.getElementById('form0');
    const $resultado = document.getElementById('resultado0'); const $enviar = document.getElementById('enviar0');
    const opciones = ['👊🏻','✋🏻','✌🏻'];
    let resultado = null;

    $generar.addEventListener('click', ()=>{
        resultado = opciones[Math.trunc(Math.random() * 3)];
        alert("Computadora: Piedras, Papel, o Tijeras, Listo!");
        $enviar.removeAttribute('disabled');
        $resultado.textContent = ''
    })

    $form0.addEventListener('submit', (e)=>{
        e.preventDefault();
        let data = new FormData(e.target);

        if(data.get('respuesta0') == resultado){
            $resultado.textContent = '¡Empate!'
        }else if(data.get('respuesta0') == '👊🏻' && resultado == '✌🏻'){
            $resultado.textContent = '¡Ganaste!'
        }else if(data.get('respuesta0') == '✋🏻' && resultado == '👊🏻'){
            $resultado.textContent = '¡Ganaste!'
        }else if(data.get('respuesta0') == '✌🏻' && resultado == '✋🏻'){
            $resultado.textContent = '¡Ganaste!'
        }else{
            $resultado.textContent = '¡Perdiste!'
        }

        resultado = null;
        $enviar.setAttribute('disabled','');
    })
}