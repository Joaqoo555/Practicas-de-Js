/*
// Clousures, es un patron muy utilizado, estan entro de las good parts.
//Podemos guardar funciones en variables y luego llamarlas


const saludar = function(nombre){
    return console.log("hola " + nombre)
}
saludar("joaquin");

//se pueden utilizar como el valor de una variable, A la vez podemos usar funciones dentro de funciones.
const a = "hey!";
function global(){
    const b = "¿que";
    function local(){
        const c = "tal?";
        return a + b + c;
    }
    //para hacer una llamada de doble parentesis, no se le debe de pasar el parentesis a local
    return local;
}
//se llama a global con doble parentesis para acceder a local, para no hacer este tipo de llamada, se asigna a una constante o variable la funcion global y se ejecuta esa variable como si fuera la local.
console.log(global()());
const local = global();
console.log(local());

//Un clousure es una funcion que encapsula una serie de variables y definiciones locales que unicamente seran accesibles si son devueltas con el operador return, esos nos permiten tener variables privadas.


const myContador = function(){
    //por convencion se suelen nombrar con un guion bajo para que se sepa que esa variable no va a ser accesible desde fuera
    let _contador = 0;
    function incrementar(){
        return _contador++;
    }
    return incrementar;
}

//Quiero que una funcion que sume de a 5 o de a 10, siempre use una funcion.
//de a cuantos quiero sumar ==> base
//yo puedo retornar una funcion desde sumaador, 

function sumador(base){
    let result = 0;
    function logica(){
        result += base;
        return result;
    }
    function reseet (){
        result = 0;
        return result;
    }
    return {
        logica,
        reseet
    }
}
//Son funciones que reutilizan codigo y puedo crear diferentes instancias a partir de la funcion padre.
//Cada vez que ejeuto Sumador, se crea un nuevo contexto, o una memoria, a la funcion que se retorna, osea a la instancia
//la instancia sumador5 === logica() => por ende cada vez que yo ejecuto sumador5() estoy ejecutando logica()

//Los clousures simulan las clases con sus metodos privados.
//
const sumador5 = sumador(5);
console.log(sumador5.logica());
console.log(sumador5.reseet());
console.log(sumador5.logica());
console.log(sumador5.logica());
console.log(sumador5.logica());
console.log(sumador5.logica());
console.log(sumador5.reseet());
console.log(sumador5.logica());
*/





const creaFuncion = function(){
    let arreglo = [];
    for (let i = 0; i < 3; i++) {
        arreglo.push(
            //las 3 funciones hacen uso de "i"
            //i en la ultima vuelte quedo en un valor de 3
            function(){
             console.log(i);
        })
        
    }
    //retornamos un arreglo con funciones
    return arreglo;
}
//La funcion retorna un arreglo de funciones, por lo que podemos acceder a cada indice con la siguiente sintaxis.
let arr = creaFuncion();
arr[0]() //0
arr[1]() //1
arr[2]() //2

