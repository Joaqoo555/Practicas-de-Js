// Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
// un par clave-valor en forma de matriz.
//Ejemplo:
/*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
/*
const objeto = {
    D: 1,
    B: 2,
    C: 3
}*/
/*
let recorrer = objeto.map((values)=> values)
console.log(recorrer)
*/ /*
//Podemos transformar un objeto en array por medio del metodo Object.entries()
let array = Object.entries(objeto);
console.log(array)
*/

//const { LinkedList } = require("../FT-M1/05-EstructuraDeDatos-II/homework/homework");

//const { Queue } = require("../FT-M1/04-EstructuraDeDatos-I/homework/homework");

//La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
//en formato par clave-valor.
//Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
//Escribe tu código aquí

//split para transformar en array y separar cada letra
//join para volver a transformar en string

/*
let string = "joaQUIN";
const arr = string.split("")
let nuevoArraMayus = arr.filter(value => {
    if(value === value.toUpperCase()){
        return value
    }
})
let nuevoArraminus = arr.filter(value => {
    if(value === value.toLocaleLowerCase()){
        return value
    }
})

let stringMayus = nuevoArraMayus.join("");
let stringMinus = nuevoArraminus.join("");

let stringArreglada = stringMayus.concat(stringMinus)

console.log(stringArreglada)
*/

//La función recibe una frase.
//Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
//pero con cada una de sus palabras invertidas, como si fuera un espejo.
//Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
//Escribe tu código aquí
/*
  let str = "Hola que tal Me llamo Joaquin"
  let strSeparada = str.split(" ")
  console.log(strSeparada)
let valuesArr = []
for (const values of strSeparada) {
    valuesArr.push(values.split(""))
}
let reversa = valuesArr.map(values => values.reverse())
let reversaValues = []
for (const values of reversa) {
    reversaValues.push(values.join(""))
}
let strinArreglada = reversaValues.join(" ")
console.log(strinArreglada)
*/
/*
let strings = ["javascript", "css", "hola que hace", "asjlasf"]
let cadaUna = []
for(let i = 0; i < strings.length; i++){
    cadaUna.push(strings[i].length)
}
let max = Math.max(...cadaUna)
for (const value of strings) {
    if(value.length === max){
        console.log(value);
    }
}*/
/*
let num = 12711;

let string = num.toString()
let stringToArray = string.split("")
let stringReverseArray = stringToArray.reverse()
let stringReverse = stringReverseArray.join("")

if(string == stringReverse){
    console.log("es reverso :V")
}else{
    console.log("xd no lo es")
}


const objeto = {
    name: "joaquin carrera",
    id: 0,
}
*/
// let pedirComida = [
//   { nombre: "Harry", dieta: "standard" },
//   { nombre: "Luna", dieta: "vegan" },
//   { nombre: "Goyle", dieta: "standard" },
// ];
// let dietasTipo;
// let contStandard = 0;
// let contVegan = 0;
// pedirComida.forEach(element => {
//     dietasTipo = element.dieta;
//     if(dietasTipo === "standard"){
//         contStandard++
//     }else if(dietasTipo === "vegan"){
//         contVegan++
//     }
// });
// let personas ={
//     standard: contStandard,
//     vegan: contVegan
// }
// console.log(personas);

// const contadorRegresivo = (a) =>{
//   if(a < 20) return
//   console.log(a);
//     return contadorRegresivo(a + 1)
// }
// contadorRegresivo(10)

/*
function nFactorial(n) {
 if(n === 0){
  return 1
 }else{
  total = n * nFactorial(n - 1)
  return total
 }
}
console.log(nFactorial(5));
*/

/*
function LinkedList() {
    this.head = null;
  }
  
  function Node(value) {
    this.value = value;
    this.next = null;
    this.previous = null
  }
  
  LinkedList.prototype.add = function(value){
    const newNode = new Node(value)
    if(!this.head) this.head = newNode;
    else{
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      newNode.previous = current
      current.next = newNode;
    }
  }
  LinkedList.prototype.remove = function(){
    let current = this.head.next;

}
  LinkedList.prototype.search = function(value){
    if(typeof value == "function"){
      if(this.head.value === value) return true;
      return false
    }else{
      if(this.head.value === value) return true;
      return false;
    }
  
  }
  
  const list1 = new LinkedList()
  list1.add("valor numero 1")
  list1.add("valor numero 2")
  console.log(list1);
  list1.remove()
  list1.remove()
  list1.remove()
  console.log(list1, "removi el utimmo?");
 */
  function LinkedList() {
    this._length = 0;
    this.head = null;
  }
  
  function Node(value) {
    this.value = value;
    this.next = null;
  }
  //ademas de añadir los nodos, tambien te retorna cada valor del nodo individual
  LinkedList.prototype.add = function(value){
// {    const newNode = new Node(value)
//     if(!this.head) {
//       this._length++
//       this.head = newNode;
//       return newNode;
//     }
//     else{
//       let current = this.head;
//       while(current.next){
//         current = current.next;
//       }
//       this._length++
//       current.next = newNode;
//       return newNode;
//     }}
    let node = new Node(value);
    let current = this.head;
    if(!current){
      this.head = node
      this._length++
      return node
    }
    while(current.next){
      current = current.next;
    }
    current.next = node;
    this._length++
    return node
  }


LinkedList.prototype.remove = function(){
// {
//   if(!this.head){
//     this._length = 0;
//     return this.head
//   }else{
//     let current = this.head; 
//     while(current.next !== null){
//     current = current.next
//     }
//     this._length--
//     let currentR = current
//     return currentR;
//   }}
  let current = this.head;
  if(!current) {return null;}
  if(!current.next){
    let previus = current.value;
    this.head = null
    return previus
  }
  let vuelta = null;
  while(current.next){
    if(current.next.next === null){
      vuelta = current.next.value;
      current.next = null;
      break
    }
    current = current.next;
  }return vuelta;
}























  // LinkedList.prototype.search = function(value){
  //   if(typeof value === "function"){
  //     if(this.head.value === value) return value();
  //     let current = this.head;
  //     while(current.next !== null){
  //       if(current.next.value === value) return value;
  //       current = current.next
  //     }
  //     return null
  //   }else{
  //     if(this.head.value === value) return value;
  //     let current = this.head;
  //     while(current.next !== null){
  //       if(current.next.value === value) return value;
  //       current = current.next
  //     }
  //     return null
  //   }
  // }


const newList = new LinkedList();
newList.add("primero")
newList.add("primero")

newList.remove()

console.log(newList);