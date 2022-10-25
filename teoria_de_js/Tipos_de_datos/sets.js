//Una estructura que se conoce como sets, Es similar a un array, pero de datos unicos.
//Es un arreglo que solo acepta valores unicos, que no se repitan.

//Como se crea un set?
const set = new Set([1,2,3,4,5,65,6,7,8,8,9,9,0,false, false, {}, {}, "Hola", "Hola", "hola"])
console.log(set);
 
// Si quiero saber el tamaño de un set, utilizamos size
console.log(set.size);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(true);
set2.add(true);
set2.add({name: "joaquin", apell: "carrera"});
set2.add("hola");
console.log(set2);

//Como iteramos sobre sets? 
for (const iterator of set) {
    console.log(iterator);
}

set2.forEach(element => {
    console.log(element);
});
//Acceder a una posicion.
//Array.from, permite convertir un tipo de dato iterable a array
const arr = Array.from(set);
console.log(arr[0]);


//sets poseen un metodo especial que nos permiten borar valores.
set.delete("Hola");
console.log(set.size);

//el metodo has, comprueba si ese valor existe dentro de la coleccion de datos.
console.log(set.has(2));



//Si quiero limpiar un set usamos el metodo clear()
console.log(set2);
set2.clear();
console.log(set2);


//se pueden usar listas, para hacer catqalogos de generos unicos de peliculas por ejemplo.