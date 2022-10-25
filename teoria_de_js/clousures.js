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
    decr
}

