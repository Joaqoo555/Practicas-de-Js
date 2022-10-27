//Listas enlazadas, se toman como si fuera un array de elementos pero del cual solo conozco el primero
//Una lista enlazada es como un tren
/*
function Node (data){
    this.data = data;
    this.next = null;
}
function List (){
    this._length = 0;
    this.head = null;
}

//El bagon va a tener un contenido, y va a tener un gancho que puede conectar otro bagon, se puede tener un Nodo que pueda tener otro nodo en ese next o que no tenga otro Nodo, la List seria lo que recubre esos bagones

//ej: 
//creo una instancia de List, y quiero enlazarla con los nodos.

const list = new List();
//creo un metodo para list, el cual enlaza a el head una nueva instancia de Node.
List.prototype.add = function (value){
    this.head = new Node(value)
}
list.add(24)

// console.log(list.head.data) // => 24, estamos enlazando las dos clases, por medio de un metodo, el cual asigna a una de las propiedades una nueva instancia de otra clase, por lo que esa propiedad hereda todos sus metodos y propiedades.

//las listas enlazadas consisten en una secuencia de nodos, en los que se van a guardar los datos, y a su vez van a tener un puntero que van al siguiente nodo.

//Ejemplo del tren: 
//Primero => Tenemos la locomotora (El inicio), este no va a llegar la carga, se va a encargar de que se enlacen todos los demas bagones

//Segund => En el siguiente bagon tenemos la carga, pero tambien debe tener un enganche al otro bagon y asi sucesivamente.

//Tendremos un objeto que sera como la locomotora, y luego tendremos los bagones, los cuales tendran una propiedad que van a llevar la carga, y otra prpiedad que servira para enganchar el proximo objeto, A su vez el siguiente objeto ser similar, tendra un enganche y un dato.

/*
let locomotora ={
    gancho: null, //tenemos la cabeza, osea el inicio de la locomotora
}
//Quiero enganchar estos bagones a la locomotora
let bagon = {
    carga: "Bagon 1",
    nuevoGancho: null
}
let bagon2 = {
    carga: "Bagon 2",
    nuevoGancho: null
}
let bagon3 = {
    carga: "Bagon 3",
    nuevoGancho: null
}
console.log(locomotora.gancho = bagon);
console.log(locomotora.gancho.nuevoGancho = bagon2);
console.log(locomotora.gancho.nuevoGancho.nuevoGancho = bagon3);
console.log(locomotora);

//como esto es muy largo de hacer, se utiliza las funciones constructoras.

*/

function List() {
  this.head = null; //esta seria la cabeza o la locomotora
}
function Node(value) {
  //Los nodos son los vagones del tren, el value, sera el valor que nosotros queremos ingresar en estos nodos
  this.value = value;
  this.next = null; //Nuevo gancho para enganchar otros objetos
}

let list = new List();
let nodo1 = new Node(23);
let nodo2 = new Node("Estoy en el nodo 2");

//Para enlazarlas puedo usar un metodo que sea proveniente de Lista, para poder enlazar los diferentes nodos.
List.prototype.add = function (value) {
  const newNode = new Node(value);
  this.head = newNode;
};
list.add(23); //le agrego a la cabeza un nodo, el cual va a poseer un valor.
console.log(list.head); //list.head va a ser = a un nuevo nodo osea {value: 23, next: null}

//si quiero acceder a ese next y agregarle un nuevo nodo, deberia de hacer lo siguiente.
list.head.next = new Node(30); // asigno un nuevo vagon a ese next, y poseo una lista enlazada, pero sige sin ser eficiente el codigo, por lo que podemos modificar el metodo add.
console.log(list.head.next);

console.log(list);

console.clear();

function List() {
  this.head = null;
}
function Node(value) {
  this.value = value;
  this.next = null;
}
//Cuando nosotros llamamos a este metodo, lo que va a hacer es primero identifica si 
//this.head de List tiene algo, osea si posee un vagon, si no lo posee, se lo asigna con el primero valor que mandamos nosotros.
List.prototype.add = function (value) {
  const newNode = new Node(value);
  if(this.head === null) this.head = newNode; //el head ahora va a ser una vagon, que va a ser "vagon 1"
  else{//Como en this.head, ya esta ocupado, osea ya tiene un objeto adentro, metete en el next de ese objeto
    this.head.next = newNode; 
    //si aca yo le asigno varios valores a ese next, siempre se va a esta pisando y asignando nuevos valores, y no va a llegar mas alla de ese mismo next, por lo que este codigo esta mal

  }
};

list.add("vagon 1"); //va a añadir al head el vagon 1 osea head = {value: "vagon 1", next: null}
list.add("vagon 2");//como el head ya esta con el vagon uno, va a entrar en el vagon1 y va a buscar la propiedad next de ese vagon y le va a asignar un nuevo vagon. => 
/*head = {
  value: "vagon 1", 
  next: {
    value: "vagon 2", 
    next: null
  }
}*/

list.add("vagon 3"); //Si yo le asigno este valor, no se va a meter al next del segundo vagon, lo que va a hacer va a tener el mismo funcionamiento que arriba, por lo que va a pisar ese vagon y lo va a reescribir.


console.clear();
//===============================================================================

function List() {
  this.head = null;
}
function Node(value) {
  this.value = value;
  this.next = null;
}

/*
List.prototype.add = function (value) {
  const newNode = new Node(value);
  if(!this.head) this.head = newNode; 
    else{
      let current = this.head; 
      while(current.next){//si this.head.next no es null(posee un objeto en next el head), courrent no es mas this.head, sino que va a ser this.next del this.head. osea this.head.next
      current = current.next
      }//si this.head.next = null => this.head.next = current
      //por lo que aca accede a this.head.next.next y le asigna un nuevo nodo
      current.next = newNode
  }
};
*/



List.prototype.add = function (value) {
  const newNode = new Node(value);
  if(!this.head) this.head = newNode; //si head no es null, se va a meter un objeto dentro de  head = {value:"primero" ,next: null}
    else{ //si head = {value:"primero" ,next: null}
      let current = this.head; //current = {value:"primero", next: null}
      while(current.next){ //si next es igual a otro objeto, se inicia el bucle.
      current = current.next //reasignamos current y decimos current = {}
      }
      current.next = newNode //se mete al next del current que le asigno en el bucle y le asigna un nuevo Node
      //aca vamos a quedarnos con el next igaul a otro objeto con otro valor, y con otro next que va a ser null, y volvemos a hacer el bucle al llamar devuelta al metodo.
  }
};
let list2 = new List()
list2.add(20)
list2.add(30)
list2.add(40)
list2.add(50)
list2.add(60)
console.log(list2.head);

console.clear();

//==============================================================================================================================
//Listas dobles enlazadas, se pueden recorrer hacia un lado y hacia el otro lado 

function List() {
  this.head = null;
}
function Node(value) {
  this.value = value;
  this.next = null;
  this.previous = null;
}

List.prototype.add = function (value) {
      const newNode = new Node(value);
      let cont = 0;
  if(!this.head) {
    this.head = newNode;
  } //en el caso del head, no va a existir nunca un previus
      else{ 
      let current = this.head;  
      while(current.next){ 
      cont++
      current = current.next 
      }//pero en el caso de que creemos ya un objeto dentro de otro, ya podemos acceder al anterior
      newNode.previous = current;
      current.next = newNode 
      return cont
  }
};
let list3 = new List()
console.log(list3.add("primero"));
console.log(list3.add("segundo"));
console.log(list3.add("tercero"));
console.log(list3.add("cuarto"));


