

# Trabajo Practico N°4 Objetos y Clases

1. Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:
- objeto.encender();
- objeto.apadar()
- auto encendido
- El auto se apagó


2. Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
- Una propiedad titular con el valor "Alex".
- Una propiedad saldo, teniendo como valor inicial 0.
- Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
- Un método extraer() que permita retirar la cantidad pasada como parámetro.
- Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.


3. Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

4. Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.


5. Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

| GENERACION      | MARCO TEMPORAL EN ESP. | POBLACIÓN DE LAS GENERACIONES | CIRCUSNTANCIA HISTORICA | RASGO CARACTERISTICO |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Z | 1994 - 2010 | 7800000 | expansion masiva internet       | irreverencia      |
| Y | 1981 - 1993 | 7200000 | inicio digitalizacion | frustracion      |
| X | 1969 - 1980 | 9300000  | crisis del 73       | obsecion por el exito      |
| BABY BOOM | 1949 - 1968 | 12200000 | paz y explosion demografica       | ambicion      |
| SILENT | 1930 - 1948 | 6300000 | conflictos belicos       | austeridad      |

- esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
- mostrarDatos: devuelve toda la información del objeto.
- generaDNI(): genera un número aleatorio de 8 cifras.


6. Crear una clase Libro que contenga al menos las siguientes propiedades:
 - ISBN
 - Título
 - Autor
 - Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.


7. Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).
Los métodos de la agenda serán los siguientes:

 - aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
 - existeContacto(Contacto): indica si el contacto pasado existe o no.
 - listarContactos(): Lista toda la agenda
 - buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
 - eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
 - agendaLlena(): indica si la agenda está llena.
 - huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.

