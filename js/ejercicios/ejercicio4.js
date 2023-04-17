export function ejercicio4(){

    function updateClock() {
        const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
        const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

        let now = new Date(); 
        let date = now.toLocaleDateString();
        let time = now.toLocaleTimeString();

        document.getElementById('date').innerHTML =  dias[now.getDay()] + ' ' + date.split('/')[0] + ' de ' + meses[date.split('/')[1]] + ' de ' + date.split('/')[2];

        let hora = (parseInt(time.split(':')[0]) > 12 && time.split(':')[0] - 12);
        let minuto = time.split(':')[1];
        let segundo = time.split(':')[2];


        document.getElementById('time').innerHTML = `${hora < 10 && '0'+hora}:${minuto}:${segundo} ${parseInt(time.split(':')[0]) > 12 ? 'pm' : 'am'}`;
    }

    updateClock(); // Actualizar inmediatamente
    setInterval(updateClock, 1000);
    
}