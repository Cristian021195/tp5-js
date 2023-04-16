export function ejercicio1(){
    const $comenzar = document.getElementById('comenzar1'); const $mensajes1 = document.getElementById('mensajes1'); const $form1 = document.getElementById('form1');
    const $submit1 = document.querySelector('#form1 input[type="submit"]');

    let aleatorio = 0;

    $comenzar.addEventListener('click', ()=>{
        aleatorio = Math.trunc(Math.random() * 10);
        $mensajes1.textContent = '¡Aleatorio generado!';
        $submit1.removeAttribute('disabled')
    })

    $form1.addEventListener('submit', (e)=>{
        e.preventDefault();

        let data = new FormData(e.target)
        let number = parseInt(data.get('numero'));

        if(number > aleatorio){
            alert('¡El numero ingresado es mayor!')
        }else if(number < aleatorio){
            alert('¡El numero ingresado es menor!')
        }else{
            alert('🎉 ¡Acertaste! 🎊')
        }
    })    

}