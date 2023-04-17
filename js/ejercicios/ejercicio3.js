export function ejercicio3(){
    const $form3 = document.getElementById('form3'); const $listado = document.getElementById('listado');
    let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

    const $table = document.createElement('table'); const $tbody = document.createElement('tbody'); const $thead = document.createElement('thead'); 
    const $tr = document.createElement('tr'); $tr.innerHTML = '<th>Tarea</th>';
    $table.appendChild($thead); $thead.appendChild($tr);  $table.className = 'table table-striped';

    updateUI();

    $form3.addEventListener('submit', (e)=>{
        e.preventDefault();

        let datos = new FormData(e.target);
        tareas.push({id: Math.trunc(Math.random()*10000)+ "-" + Date.now(), tarea:datos.get('tarea')})
        localStorage.setItem('tareas', JSON.stringify(tareas));

        updateUI()

    })

    
    function updateUI(){
        tareas = JSON.parse(localStorage.getItem('tareas')) || [];
        $table.innerHTML = ''; $tbody.innerHTML = ''; $thead.innerHTML = '';
        if(tareas.length > 0){
            $listado.innerHTML = '';
            tareas.forEach((e)=>{
                let $tr_d = document.createElement('tr'); let $td_i = document.createElement('td'); $td_i.textContent = e.tarea;
                let $btn = document.createElement('button'); $btn.className = 'btn btn-sm btn-secondary'; $btn.addEventListener('click', ()=>eliminar(e.id)); $btn.textContent = 'del'

                $td_i.appendChild($btn); $tr_d.appendChild($td_i);


                $tbody.appendChild($tr_d);
            })
            $table.appendChild($tbody);
            $listado.className = 'table-responsive';
            $listado.appendChild($table);
        }else{
            $listado.innerHTML = '<div class="alert alert-danger"><b>¡Sin elementos!</b></div>';
        }

        
    }


    function eliminar(id){        
        tareas = tareas.filter((e)=>e.id != id)
        localStorage.setItem('tareas', JSON.stringify(tareas));
        updateUI()
    }
    
}