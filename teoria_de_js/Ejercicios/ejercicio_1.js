/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const contador = (cadena)=> {
    //Convertimos la cadena a un array, cada letra equivale a un indice
    let arrayCadena = cadena.split("");
    let total = 0;
    for (const value of arrayCadena) {
        total++;
    }
    return console.log(total);
}
contador("joaquin");
contador("joaquin y yo");
contador("joaquin y Sol");
contador("joaquin, mientras esta comiendo");
console.clear();

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
const recortar = (cadena, rec)=>{
    let arrayCadena = cadena.split("")
    let total = 0;
    for (let i = 0; i < rec; i++) {
        arrayCadena.pop()
        total++;
    }
    console.log(total)
    return arrayCadena
}

console.log(recortar("joaquin", 2));
console.log(recortar("joaquin Hola como estas", 9));
console.log(recortar("joaquin y Sol", 5));
console.log(recortar("joaquin", 6));
console.log(recortar("joaquin", 1));
console.clear();
//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function txtSeparados (string, char){
    let arrayString = string.split(char)
    return console.log(arrayString)
}
txtSeparados("hola que tal, Como estas?. Yo muy bien", " ")
txtSeparados("hola que tal, Como estas?. Yo muy bien", ",")
txtSeparados("hola que tal, Como estas?. Yo muy bien", "?")
txtSeparados("hola que tal, Como estas?. Yo muy bien", "c")

console.clear();


//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
function repetir(str, veces){
    for (let i = 0; i < veces; i++) {
        console.log(str)        
    }
}

repetir("hola como estas", 5);

console.clear();


