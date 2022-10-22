/*

5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

*/

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".


function reversaString (string){
    let newArray = string.split("");
    let reverseArray = newArray.reverse();
    let toStringMyArray = reverseArray.join("");
    return toStringMyArray;
}
console.log(reversaString("hola como estas?"));
console.clear();


//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.


const contarPalabras = (string, palabra)=>{
    let toArray = string.split(" ");
    let sol = toArray.filter(element => element === palabra);
    return sol.length
}
console.log(contarPalabras("joaquin joaquin sol joaquin joaquin sol sol", "joaquin"));
console.clear();
//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

function reversaString (string){
    let newArray = string.split("");
    let reverseArray = newArray.reverse();
    let toStringMyArray = reverseArray.join("");

    if(string === toStringMyArray){
        return `${string} Es un palíndromo`;
    }else{
        return `${string} No es un palíndromo`;
    }
}
console.log(reversaString("neuquen"));



//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

function borrarParametros (string = "", parametro = ""){
    if(!string){
        console.log("no ingresaste ningun texto");
    }else if(!parametro){
        console.log("no ingresaste ningun parametro");
    }else{
        console.log(string.replace(new RegExp(parametro, "ig"),""));
    }
}

borrarParametros("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")