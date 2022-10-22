//Errores

//Tiene una sintaxis como if else, Es una estructura que nos va a permitir evaluar ciertas fracciones de codigo, si llega a ocurrir un error en el codigo, se va a capturar en el catch. Posee la siguiente sintaxis

//Cuando catch captura un error en try, corta el proceso de lectura en el punto donde esta el error y no deja que siga corriendo el programa, es como un return,
/*
try {
//Codigo que vamos a estar evaluando, Se agrega el codigo a evaluar. Si aqui adentro hay un error, el que captura el error va a ser parte del catch    
console.log('Hola como estas');
noExiste //esto es un error
console.log('Segundo mensaje en el try ');
} catch (error) {
    //Catch captura cualquier error surgido o lanzado en el try
console.log('Capturamos un error');
console.log(error);

}finally{
  //El bloque finally, se ejecutara siempre al final de un bloque try/catch
console.log('Ejecuta todo lo de try');
}

//Errores personalizados.
try{
  let numero = "hola";
  if(isNaN(numero)){
    throw new Error(`${numero} no es un Numero`)
  }
  console.log(numero * numero);
}catch(error){
  console.log(`Se produjo el siguiente error ${error}`);
}

//en al programacion del lado del servidor, siempre lo primero que passan es evaluar si hay un objeto de error, y si no, se lanza y sigue con la ejecucion del codigo

//Con esta estructura podriamos tener mejor programada nuestra app
*/

//Destructuracion

/*Nuevas características a nivel de estructura por ES6:
Practica de Js -> Destructuracion es una nueva forma de asignar valores a arreglos y a objetos.



//ej:
//Sin destructuracion.
const numeros = [1,2,3];
let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];
console.log(uno, dos, tres);


//Con destructuracion
let [one,two,trhee] = numeros;
console.log(one, two, trhee);

//Otro ejemplo
//Para que la desestructuracion que hago en los objetos, la variable que voy a declarar se tiene que llamar igual que la propiedad que estoy llamando. No se debe de respetar si o si el orden de las variables que declaro a la hora de desestructurar un objeto, ya que el programa busca dentro del objeto la variabe que creamos por su nobre, no por su posicion.
const persona = {
    nombre: "joaquin",
    apellido: "carrera",
    edad: 21
}

//Con destructuracion:

let {nombre, apellido, age} = persona;
console.log('nombre, apellido, age :>> ', nombre, apellido, age);

*/

//Objetos literales ==================================================================================================

/*
try{
//metodos viejos:
let nombre = "Kenay",
edad = 7;

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function(){
        console.log('waw, waw!!');
    }
}

console.log(perro);
console.log(perro.ladrar());

//metodos Nuevos:

const perroNuevo = {
    nombre,
    edad,
    ladrar(){
        console.log('waw, waw Waw!!');
    }
}

console.log(perroNuevo);
console.log(perroNuevo.ladrar());
}catch(error){
    console.log(error);
}
*/

/*
//Rest y Operador Spread   ==================================================================================================


//Si nos metemos en el mundo de los frameworks, El parametro rest o el propagador de operacion, son cosas que se utilizan el dia a dia

//Parametro rest, Es una forma de ir agregando parametros infinitos ya se a una funcion o dentro de una variable.
//Para definir los parametros rest se difinen con los "..."

function suma (a,b, ...c){
    let resultado =  a + b;


    c.forEach(element => {
            resultado += element;
        });
        return resultado;
}

console.log('suma(2,3) :>> ', suma(2, 3));
console.log('suma(2,3) :>> ', suma(2, 3, 4));
console.log('suma(2,3) :>> ', suma(2, 3, 4, 5));
console.log('suma(2,3) :>> ', suma(2, 3, 4, 5, 6));

//Con el parametro rest, podemos pasar infinitos parametros a una funcion, estos se van guardando en un arreglo, donde dentro de la duncion los podemos ir utilizando.

//Spread operator:

const arreglo1 = [1,2,3,4,5];
const arreglo2 = [6,7,8,9,0];

console.log(arreglo1, arreglo2); //  [ 1, 2, 3, 4, 5 ] [ 6, 7, 8, 9, 0 ] 

//quiero crear un arreglo 3 a partir de estos 2 arreglos

const arreglo3 = [arreglo1,arreglo2];   //[ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 0 ] ] 

const arreglo4 = [...arreglo1,...arreglo2];   //[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

console.log(arreglo1, arreglo2, arreglo3, arreglo4);    //

//Cuando se actualiza el estado en React, y tiene 10 propiedades, y quiero afectar a una. 

*/

//  Prototipos, Objetos y Clases ==================================================================================================
/*
const animal = {
    nombre: "sarah",
    sonar(){
        console.log('Hago sonidos porque estoy vivo');
    }
}

const animal2 = {
    nombre: "lola Bonny",
    sonar(){
        console.log('Hago sonidos porque estoy vivo');
    }
}

console.log(animal);
console.log(animal2);


//Funcion constructora Donde se asignan los metodos al prototipo, No a la funcion como tal:
function Animales (nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
}
//Para crear metodos a partir de como se construia antes, es de la siguiente forma
//Metodos
//Dentro del prototipo Animales, colgamos los metodos sonar y saludar, para que no se asignen a cada objeto creado por medio de la funcion constructora, ellos ya los tienen implementados en prototipos.
Animales.prototype.sonar = function(){
    console.log('Hago sonidos porque estoy vivo');
}
Animales.prototype.saluda = function(){
    console.log(`Hola me llamo ${this.nombre}`);
}

let snoopy = new Animales("snoopy", "macho"), 
lolaBoony = new Animales("lola", "hembra");
console.log('snoopy, LolaBonny :>> ', snoopy, lolaBoony);
snoopy.sonar();
snoopy.saluda();
lolaBoony.sonar();
lolaBoony.saluda();
*/
//Un problema a todo esto es que todos nuestros objetos que estan creados a partir de la Funcion Animales, lo que van a heredar va a se rla funcion "sonar", esto es muy pesado para una aplicacion si es que llegamos a tener miles de objetos que varian de esta funcion, por ende Una mejora a esto es sacar el metodo "sonar" de la funcion constructora Animal.

//Los metodos no deberian ir en la funcion constructora, se deberian crear en el prototipo



/*
//Herencia ====================

function Animales(nombre, genero) {
  this.nombre = nombre;
  this.genero = genero;
}
Animales.prototype.sonar = function () {
  console.log("Hago sonidos porque estoy vivo");
};
Animales.prototype.saluda = function () {
  console.log(`Hola me llamo ${this.nombre}`);
};

//Funcion constructora Perro();
//Recibe los mismos parametros que Animales();
function Perro(nombre, genero, tamanio) {
  //Su elemento padre va a ser animal
  //El metodo super manda a llamar al constructor del padre de esta clase o funcion en este caso
  this.super = Animales;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}
//Perro esta heredando de Animales
Perro.prototype = new Animales();
Perro.prototype.constructor = Perro;
//Cuando una clase hija en POO hereda de una clase padre, en los prototipos pasa exactamente lo mismo.

//Sobreescribimos el metodo sonar de la clase padre Animales y lo adoptamos a el perro
Perro.prototype.sonar = function(){
  console.log('Soy un perro y mi sonido es un ladrido');
}
//Agregamos un nuevo metodo ladrar
Perro.prototype.ladrar = function(){
  console.log('waww waww!');
}

let snoopy = new Perro("snoopy", "macho", "mediano"), 
lolaBoony = new Animales("lola", "hembra");
console.log('snoopy, LolaBonny :>> ', snoopy, lolaBoony);
snoopy.sonar();
snoopy.saluda();
snoopy.ladrar();
lolaBoony.sonar();
lolaBoony.saluda();
*/



//Clases y Herncias ES6 ===========================================================================
/*
class Animal {
  //Es un metodo especial de una clase
  constructor(nombre, genero, tipo){
    this.nombre = nombre;
    this.genero = genero;
  }
  //Metodos
  //Los metodos se colocan en el prototipo solos.
  sonar(){
    console.log('Hago un sonido');
  }
   saludo(){
     console.log('Hola!');
  }
}

const mimi = new Animal("mimi", "hembra");
const scooby = new Animal("scooby", "macho");

console.log('mimi, scooby :>> ', mimi, scooby);
mimi.saludo();
mimi.sonar();

class Perro extends Animal{
  //No necesito declarar mi constructor ya que lo hereda de la clase padre Animal()
  constructor(nombre,genero, raza){
    //Super manda a llamar al constructor de la clase padre
    super(nombre, genero);
    this.raza = raza;
  }
  sonar(){
    console.log('Soy un perro y eito un sonido');
  }
  ladrar(){
    console.log('waw waw');
  }
}
let perro1 = new Perro("alberto", "macho", "labrador");
console.log(perro1.nombre);
console.log(perro1.genero);
console.log(perro1.raza);
perro1.sonar();
perro1.ladrar();
*/




/*
//Clases Metodos => Estaticos, getters, setters===========================================================================

class Animal {
  constructor(nombre, genero){
    this.nombre = nombre;
    this.genero = genero;
  }
  sonar(){
    console.log('Hago un sonido');
  }
   saludo(){
     console.log('Hola!');
  }
}

//Extendemos la clase animal
class Perro extends Animal{
  constructor(nombre,genero, tamaño, raza){
    super(nombre, genero);
    this.tamaño = tamaño;
    this.raza = null;
  }
  sonar(){
    console.log('Soy un perro y eito un sonido');
  }
  ladrar(){
    console.log('waw waw');
  }
  static queEres(){
    console.log('Somos el mejor amigo del hombre');
  }
  //metodo set, para cambiar el valor de una propiedad de un objeto instanciado a partir de una clase.
  set setRaza(raza){
    this.raza = raza
  }
  //Ibtiene el valor de una de las propiedades de la clase, cuando se instancia este metodo se transforma a propiedad y no funciona como una funcion.
  get getRaza(){
    return this.raza;
  }

}

const perro1 = new Perro();
//static:
//al ser un metodo estatico, puedo usarlo sin haber instanciado algun objeto de la clase.
Perro.queEres();

//setters:
//No se trabajan como metodos, se trabaja como si fuera una propiedad
// perro1.setRaza("labrador") //Asi no!!!!
perro1.setRaza = "labrador";

//getters:
//No se trabajan como metodos, se trabaja como si fuera una propiedad
console.log(perro1.getRaza);
*/







/*

//Objeto Math    ================================================
//Nos ayuda a algunas operaciones matematicas especiales, es un objeto estatico.
console.log(Math.PI);
console.log(Math.abs(-7.8));//Me devuelve el valor absoluto;
console.log(Math.ceil(7.8));// Numero inmediato entero mayor ->8
console.log(Math.floor(7.8));// Numero inmediato entero menor -> 7
console.log(Math.round(7.8));// Redondea al mas cercano -> 8
console.log(Math.random());// Genera un numero random
console.log(Math.pow(2,2)); //Elevado al cuadrado
console.clear()



*/

/*
//Operador de cortocircuito    ================================================
//Se utilizan los operadores AND (&&) u OR (||)


//Cortocircuito OR ||->  significa que cuando el valor de la izquierda en la expresion siempre pueda validar a true es el valor que se cargara por defecto.

console.log("cadena" || "valor de la derecha");
console.log("2" || "valor de la derecha");
console.log(2 || "valor de la derecha");
console.log(-2 || "valor de la derecha");
console.log({} || "valor de la derecha");
console.log([] || "valor de la derecha");
console.log(0 || "valor de la derecha");
console.log(null || "valor de la derecha");
console.log(undefined || "valor de la derecha");
console.log("" || "valor de la derecha");
console.log(false || "valor de la derecha");
console.log(true || "valor de la derecha");


//Cortocircuito AND && -> Cuando el valor de la  izquierda en la expresion pueda validar a false es el valor que se cargara por defecto

console.log("cadena" && "valor de la derecha");
console.log("2" && "valor de la derecha");
console.log(2 && "valor de la derecha");
console.log(-2 && "valor de la derecha");
console.log({} && "valor de la derecha");
console.log([] && "valor de la derecha");
console.log(0 && "valor de la derecha");
console.log(null && "valor de la derecha");
console.log(undefined && "valor de la derecha");
console.log("" && "valor de la derecha");
console.log(false && "valor de la derecha");
console.log(true && "valor de la derecha");

console.clear();
*/

//Expresiones regulares ============================================================================
//Son una secuencia de caracteres que forma un patron de busqueda, principalmente utilziada para la busqueda de patrones de cadenas de caracteres.
/*
let cadena = "lorem hola ksfhn sfolashf asfiohsoaf asfkjhasfk ,asdsa safklsaf. asfdsaf"
let expReg = new RegExp("lorem", "g"); //El segundo parametro son las banderas

let expReg2 = /lorem/ 

*/

/*

//Funciones Anonimas Autoejecutables ================================================================================
//Patron para js puro.
//Se llaman annonimas autoejecutables, porque la definimos y se ejecutan automaticamente, esta protejido de efectos secundarios.
//Como funciona el cuerpo de una funcion anonima autoejecutable? => Funcion con nombre es Funcion Nombrada.
(function(){
  //Empiezo a escribir el codigo que se ejecuta automaticamente
  console.log("Mi primer IFE");
})(); //Hay que pone ; obligatoriamente
(function(d,w,c){
  console.log("mi segunda IFE");
  c.log(d);
  c.log(w);
  c.log(c);
  c.log("hola")
})(document, window, console);
//Diferentes formas de escribirlas
(function(){
  console.log("Forma Clasica");
})();

((function(){
  console.log("primera Crockford");
})());

+function(){
  console.log("version unaria");
}();

!function(){
  console.log("version facebook");
}();


*/




//Import y Export ================================================================================0
//Modulos en Javascript
//Ordenamiento de codigo
/*
1- Importacion de archivos o modulos
2- Declaracion de variables
3- Declaracion de funciones
4- Ejecucion de codigo
*/

//el export default solo exporta una sola cosa en el mofulo, se puede usar solo una vez, solo deja mandar funciones declaradas, osea funciones que se crean y no estan siendo mandadas a una variable

//Asi se exporta una variable o funciones que estan guadadass dentro de variables
/*
 export let saludo = "hola";
 export default saludo;
*/
//No se puede hacer esto

// export default const saluda = ()=> console.log("hola como estas");

//se hace de esta manera
// export default saluda;

//Se puede hacer de esta manera en una funcion declarada.
//export default function saludo (){console.log("hola como estas");}

//o
/*
function saludo (){console.log("hola como estas");}

export default saludo
*/


//Sino exportar sin default tambien es de la siguiente manera:
/*
export let nombre = "joaquin";
export const deciMiNombre = ()=> console.log("Me llamo joaquin");

export const exportandoUnObjeto = {
  nombre,
  deciMiNombre
}
//El export default se realiza una vez declarado y asignado los valores, debajo de lo que queremos exportar
export default exportandoUnObjeto;
*/