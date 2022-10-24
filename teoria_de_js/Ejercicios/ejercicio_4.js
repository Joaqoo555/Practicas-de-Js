/*

12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

*/
//ºF = ºC x 1.8 + 32
//ºC = (ºF-32) ÷ 1.8.
function grados (F, C){
    if(F){
        C = (F-32) / 1.8
        console.log(`Grados F = ${F}, Los grados C = ${C}`);

    }else if(C){
        F = C * 1.8 + 32
        console.log(`Grados F = ${F}, Los grados C = ${C}`);
    }
}


let F = 30;
let C = 50;
grados(null, C);
grados(F, null);

