//this, hace referencia al objeto global, en el caso del navegador, devuelve el objeto windows, en la terminal nos devuelve el objeto Global.
//Se puede decir que this === windows
this.nombre = "contexto global";
console.log(this.nombre);
//Nosotros creamos una funcion para imprimir este nombre, que esta en el contexto global.
function imprimirGlobal(){
     console.log(this.nombre);
}
imprimirGlobal()

//crearemos un objeto que va a poseer una propiedad con un contexto totalmente nuevo, ya no sera el de windows.
const obj = {
    //propiedad
    nombre: "contexto Objeto 1",
    //metodo
    imprimirLocal: function(){
        console.log(this.nombre);
    }
}

obj.imprimirLocal()


const obj2 = {
    nombre: "contexto Objeto 2",
    //esta va a ser referencia al imprimir con scope global, Si el nombre de la propiedad y el nombre de la variable es el mismo, se puede escribir de la siguiente manera.
    imprimirGlobal
}

obj2.imprimirGlobal()



//Una arrow function lo que hace es mantener un enlace del contexto del contexto de donde a sido creado el objeto de donde aparece.
//La arrow function no maneja su propio scope. nos imprime el contexto global
const obj3 = {
    //propiedad
    nombre: "contexto de Objeto 3",
    //metodo
    imprimirLocal: ()=>{
        console.log(this.nombre);
    }
}
obj3.imprimirLocal()


function Persona(nombre){
    //este this hace referencia a esta funcion
    this.nombre = nombre;

    //Lo que se hacia antes era guardar el contexto this, para llamarlo en clousures dentro de la funcion padre, ej
    const that = this;
    that.nombre = nombre


    // return console.log(this.nombre);
    //Esta nueva funcion crea un nuevo contexto, por lo que vuelve al this del contexto global.
    // return function(){
    //     console.log(this.nombre);
    // }

    // return ()=>{
    //     console.log(this.nombre);
    // }
    //Entonces aca se podia usar una funcion normal sin nombre
         return function(){
         console.log(that.nombre);
     }
}
/*
const persona1 = new Persona("joaquin")
console.log(persona1.nombre); // joaquin
*/
const persona2 = new Persona("Sol")
persona2(); //imprime el contexto lgobal, ya que Cada funcion crea un contexto nuevo, si no posee el contexto de la funcion padre, vuelve al this del contexto global.
//para arreglar esto se escribe de la siguiente manera

