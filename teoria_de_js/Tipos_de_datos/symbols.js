//Es un tipo de dato primitivo, que fue introducido despues del ES6, Una vez creado un dato symbol, su valor se vuelve privado y para uso interno, Se suelen agregar como propiedades de objetos
//Como se puede crear un symbol de manera global?, No se utiliza el operador "new", se llama a Symbol();
//Los simbolos crean un identificador unico, de tal forma de que cuando se comparen estas dos variables, van a ser totalmente diferentes
//Un symbol crea una referencia unica
//Lo que esta dentro de los parentesis a la hora de declarar un dato sy,bol es solo una pequeña ayuda para saber a que constante perrtenece
let id = Symbol("id");
let id2 = Symbol("id2");
console.log(id === id2);
console.log(id, id2);
console.log(typeof id, typeof id2);
//Los simbolos se usan para identificar las propiedades de objetos, para evitar colisiones entre divhs propiedades, que se puedan sobreescribir.

//Como se agregan symbolos a un objeto?
// 1) se deben crear como constantes.
const NOMBRE= Symbol("nombre");
const APELLIDO = Symbol("apellido");
// 2) maneras de darle valor a un symbol dentro ed un objeto
const persona = {
    [NOMBRE]: "jhon",
    edad: 35
}
persona[APELLIDO] = "Carrera";



console.log(persona);
//al usuario le va a salir privado el valor de la propiedad NOMBRE  


persona.NOMBRE = "joaquin"
console.log(persona);
//aqui esta la demostracion de como se usa el dato Symbol dentro de un objeto para que no afecte a otras variables y solo verla yo.


// 3) Como llamamos a una propiedad de un objeto que fue declarada con un tipo de dato symbol ? 
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);
persona;

const SALUDAR = Symbol("saludar");
persona[SALUDAR] = function (){
    console.log("Hola como estas");
}
persona;
// 4) LLamar un metodo creado con un tipo symbol
persona[SALUDAR]();

//A la hora de iterar el objeto, solo itera las propiedades que no son tipos de datos symbol.
for (const key in persona) {
    console.log(persona[key]);
}

//Como listar los atributos privados de los objetos
console.log(Object.getOwnPropertySymbols(persona));