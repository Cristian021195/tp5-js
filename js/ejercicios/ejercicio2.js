export function ejercicio2(){
    const $form2 = document.getElementById('form2');  const $mensajes2=document.getElementById('mensajes2');
    const $generacion = document.getElementById('generacion');    const $esmayor = document.getElementById('esmayor');    const $verdatos = document.getElementById('verdatos');
    

    $form2.addEventListener('submit',(e)=>{
        e.preventDefault();
        let datos = new FormData($form2);

        const persona = new Persona(
            datos.get('nombre'), 
            parseInt(datos.get('edad')),
            datos.get('DNI'), 
            datos.get('sexo'), 
            parseFloat(datos.get('peso')), 
            parseFloat(datos.get('altura')), 
            parseInt(datos.get('nacimiento').split("-")[0]),
        );

        $generacion.removeAttribute('disabled');
        $esmayor.removeAttribute('disabled');
        $verdatos.removeAttribute('disabled');        

        $mensajes2.textContent = JSON.stringify(persona,null,2);

        $generacion.addEventListener('click', ()=>{
            alert(persona.mostrarGeneracion())
        })
        $esmayor.addEventListener('click', ()=>{
            alert(persona.esMayorDeEdad())
        })
        $verdatos.addEventListener('click', ()=>{
            alert(persona.mostrarDatos())
        })
        

    })

    
    


    class Persona {
        constructor(nombre, edad, DNI, sexo, peso, altura,nacimiento){
            this.nombre= nombre;
            this.edad= edad;
            this.DNI= DNI;
            this.sexo= sexo;
            this.peso= peso;
            this.altura = altura;
            this.nacimiento = nacimiento;
        }


        mostrarGeneracion(){
            if(this.nacimiento >= 1930 && this.nacimiento <= 1948){
                return 'Silent generation - Austeridad'
            }else if(this.nacimiento >= 1949 && this.nacimiento <= 1968){
                return 'Baby Boom - Ambición'
            }else if(this.nacimiento >= 1969 && this.nacimiento <= 1980){
                return 'Generacion X - Obsesión por el exito'
            }else if(this.nacimiento >= 1981 && this.nacimiento <= 1993){
                return 'Generacion Y - Frustracion'
            }else if(this.nacimiento >= 1994 && this.nacimiento <= 2010){
                return 'Generacion Z - Irreverancia'
            }
        }
        esMayorDeEdad(){
            return this.edad >= 18 ? 'Mayor de edad' : 'Menor de edad'
        }
        mostrarDatos(){
            return (JSON.stringify({

                nombre: this.nombre,
                edad: this.edad,
                DNI: this.DNI,
                sexo: this.sexo,
                peso: this.peso,
                altura: this.altura,
                nacimiento: this.nacimiento,
                
            },null,2))
        }
    }
    
}