//=======================================================================================================================================================================================================================================================================================================================================

//Realizar un programa que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario informar el producto y la división del primero respecto al segundo.
/*

let numero1 = parseInt(prompt("Escriba el primer numero"));
let numero2 = parseInt(prompt("Escriba el segundo numero"));
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;


if (numero1 > numero2) {
    document.write(`la suma de estos dos numeros sera: ${suma} y su resta sera: ${resta}`)
} else {
    document.write(`la multiplicacion de estos dos numeros sera: ${multiplicacion} y su division sera: ${division}`)
}

*/

//=======================================================================================================================================================================================================================================================================================================================================
/*Se ingresan tres notas de un alumno, si el promedio es mayor o igual a 4 mostrar un mensaje 'regular', sino 'reprobado'.
let nota1 = parseInt(prompt("Primera nota"));
let nota2 = parseInt(prompt("Segunda nota"));
let nota3 = parseInt(prompt("Tercera nota"));

let prom = (nota1 + nota2 + nota3) / 3;
if(prom >= 4){
    document.write(`El promedio de las dos notas es de ${prom} queda Regular`)
}else{
    document.write(`El promedio de las dos notas es de ${prom} queda Reprobado`)
}

*/

//=======================================================================================================================================================================================================================================================================================================================================

//Se ingresa por teclado un número positivo de uno o dos dígitos (1..99) mostrar un mensaje indicando si el número tiene uno o dos dígitos (recordar de convertir a entero con parseInt para preguntar posteriormente por una variable entera). Tener en cuenta qué condición debe cumplirse para tener dos dígitos un número entero.
/*
let numeroPosit = parseInt(prompt("Ingrsar un numero"));

if(numeroPosit >= 10 && numeroPosit <= 99){
    document.write(`${numeroPosit} es un numero de 2 digitos`)
}if(numeroPosit >= 0 && numeroPosit <= 9){
    document.write(`${numeroPosit} es un numero de 1 digito`)
}else if(numeroPosit < 0){
    document.write(`${numeroPosit} es un numero negativo`)
}else if(numeroPosit > 99){
    document.write(`${numeroPosit} es un numero de 3 o mas digitos`)
}

*/
//=======================================================================================================================================================================================================================================================================================================================================
// Se cargan por teclado tres números distintos. Mostrar por pantalla el mayor de ellos.
/*
let numero1 = parseInt(prompt("Escribir el primer numero"));
let numero2 = parseInt(prompt("Escribir el Segundo numero"));
let numero3 = parseInt(prompt("Escribir el Tercer numero"));


if(numero1 > numero2 && numero1 > numero3){
    document.write(`El primer numero es el mas grande = "${numero1}"`)
}else if(numero2 > numero1 && numero2 > numero3){
    document.write(`El segundo numero es el mas grande = "${numero2}"`)
}else{
    document.write(`El tercer numero es el mas grande = "${numero3}"`)
}
*/

//=======================================================================================================================================================================================================================================================================================================================================
//Se ingresa por teclado un valor entero, mostrar una leyenda que indique si el número es positivo, cero o negativo.
/*
let numero = parseInt(prompt("Escribir un numero Entero"));

if(numero === 0){
    document.write(`${numero} es 0`)

}else if(numero > 0){
    document.write(`${numero} es Positivo`)
}else if(numero < 0){
    document.write(`${numero} es Negativo`)
}
*/
//=======================================================================================================================================================================================================================================================================================================================================
//Confeccionar un programa que permita cargar un número entero positivo de hasta tres cifras y muestre un mensaje indicando si tiene 1, 2, o 3 cifras.
/*alert("En el proximo ejercicio se debara de colocar un numero, una vez colocado el programa dira si tiene 1, 2 o 3 cifras y si es positivo")

let numero = parseInt(prompt("Escribir un numero Entero"));


if(numero < 0){
    document.write(`El numero debe ser ¡Positivo!`)
}else if(numero > 0 && numero < 10){
    document.write(`${numero} Tiene 1 cifra`)
}else if(numero >= 10 && numero < 100){
    document.write(`${numero} Tiene 2 cifras`)
}else if(numero >= 100 && numero < 1000){
    document.write(`${numero} Tiene 3 cifras`)
}else if(numero >= 1000){
    document.write(`${numero} Tiene 4 o mas cifras`)
}else{
    document.write(`El numero Debe de ser entero y/o estar definido`)

}
*/
//=======================================================================================================================================================================================================================================================================================================================================


/*
De un postulante a un empleo, que realizó un test de capacitación, se obtuvo la siguiente información: nombre del postulante, cantidad total de preguntas que 
se le realizaron y cantidad de preguntas que contestó correctamente. Se pide confeccionar un programa que lea los datos del postulante e informe el nivel del mismo 
según el porcentaje de respuestas correctas que ha obtenido, y sabiendo que:

Nivel superior: Porcentaje>=90%.
Nivel medio: Porcentaje>=75% y <90%.
Nivel regular: Porcentaje>=50% y <75%.
Fuera de nivel: Porcentaje<50%.


let nommbre = prompt("Escribi tu nombre");

const totalPreg = 100;

let pregContest = prompt("Preguntas contestadas correctamente");

let porcentaje = (pregContest * totalPreg) / 100;

if(porcentaje >= 90){
    document.write(`${nommbre} Esta en el nivel Superior`)
}else if(porcentaje >= 75 && porcentaje < 90){
    document.write(`${nommbre} Esta en el nivel Medio`)
}else if(porcentaje >= 50 && porcentaje < 75){
    document.write(`${nommbre} Esta en el nivel Regular`)
}else{
    document.write(`${nommbre} Esta fuera de nivel`)
}

*/
//=======================================================================================================================================================================================================================================================================================================================================
//Solicitar el ingreso alguna de estas palabras (casa, mesa, perro, gato) luego mostrar la palabra traducida en inglés. Es decir, si se ingresa 'casa' debemos mostrar el texto 'house' en la página.
/*
let cosas = prompt("Ingrse una de las siguientes palabras y se traduciran al ingles = Casa, Mesa, Perro, Gato");
switch (cosas) {
    case "casa":
    case "Casa":
        document.write("Home");
        break;
    case "mesa":
    case "Mesa":
        document.write("Table");
        break;
    case "Perro":
    case "perro":
        document.write("Dog");
        break;
    case "gato":
    case "Gato":
        document.write("Cat");
        break;
    default: document.write("Debes ingresar una de las palabras solicitadas")

}
*/
//========================================================================   while     ===============================================================================================================================================================================================================================================================
    /*
    Realizar un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44, etc. (No se ingresan valores por teclado).

let x = 11
while (x <= (11 * 25)){
    document.write(x + "<br>");
    x = x + 11;
}
*/
/*
let serie = 11;
let x = 1;
while (x <= 25) {
    document.write(serie + "<br>");
    x++;
    serie = serie + 11;
} // X se puede tomar como un contador
*/

//===================================================================   while   ====================================================================================================================================================================================================================================================================
/*
    Mostrar los múltiplos de 8 hasta el valor 500. Debe aparecer en pantalla 8 -16 -24, etc.

let i = 8;
while(i <= 500){
    document.write(i + "<br>");
    i = i + 8;
}
*/

//==========================================================================   while   =============================================================================================================================================================================================================================================================

/*
    Escribir un programa que lea 10 notas de alumnos y nos informe cuántos tienen notas mayores o iguales a 7 y cuántos menores.


let x = 0;
let cantMayores7 = 0;
let cantMenores7 = 0;
while(x < 10){
    let notas = parseInt(prompt(`Ingrse la nota numero ${x}`))
    if(notas >= 7){
        cantMayores7++
    }else{
        cantMenores7++
    }
    x++
}
document.write(`Esta es la cantidad de alumnos con la nota mayor e igual a 7 = ${cantMayores7}`)
document.write("<br>")
document.write(`Esta es la cantidad de alumnos con la nota menor a 7 = ${cantMenores7}`)
*/
//================================================================   while   =======================================================================================================================================================================================================================================================================
/*
    Se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas.

    let x = 0;
    let suma = 0;
    while(x < 5){
        let alturas = parseInt(prompt(`Ingresa la altura de la persona numero ${x}`))
        suma = suma + alturas
        x++
    }

    let promedio = suma / 5;
    document.write(`La altura promedio de las personas es ${promedio}`)

*/



//================================================================   while   =======================================================================================================================================================================================================================================================================
/*
    En una empresa trabajan 5 empleados cuyos sueldos oscilan entre $100 y $500, realizar un programa que lea los sueldos que 
    cobra cada empleado e informe cuántos empleados cobran entre $100 y $300 y cuántos cobran más de $300. Además el programa 
    deberá informar el importe que gasta la empresa en sueldos al personal.



    let x = 0
    let emplConSuelMenA300 = 0;
    let emplConSuelMayA300 = 0;
    let suma = 0;
    while(x < 5){
    let sueldos = parseInt(prompt(`Sueldo del empleado numero ${x}`))
        if(sueldos >= 100 && sueldos <= 300){
            emplConSuelMenA300++
        }else if(sueldos > 300){
            emplConSuelMayA300++
        }else{
            document.write(`No existen empleados con salario de $ ${sueldos}`)
        }
        suma = sueldos + suma;
        x++
    }



    document.write(`Los empleados con un sueldo mayor a $300 son una cantidad de = ${emplConSuelMayA300}`)
    document.write("<br>")
    document.write(`Los empleados con un sueldo menor a $300 son una cantidad de = ${emplConSuelMenA300}`)
    document.write("<br>") 
    document.write(`El importe que gasta en total la empresa por los empleados es de ${suma}`)

*/


//=================================================================   while   ======================================================================================================================================================================================================================================================================
/*
    Realizar un programa que imprima 20 términos de la serie 5 - 10 - 15 - 20, etc. (No se ingresan valores por teclado)


    let x = 5
    while(x <= (20 * 5)){
        document.write(x + "<br>")
        
        x = x + 5
}
*/





//===================================================================   while   ====================================================================================================================================================================================================================================================================
   /*
Mostrar los múltiplos de 10 hasta el valor 1500.
    Debe aparecer en pantalla 10 - 20 -30 etc.



    let x = 10;

    while(x <= 1500){
        document.write(x + "<br>")
        x = x + 10;
    }

*/


//===================================================================   while   ====================================================================================================================================================================================================================================================================
/*   
Realizar un programa que permita cargar dos listas de 3 valores cada una. Informar con un mensaje cual de las dos 
    listas tiene un valor acumulado mayor (mensajes 'Lista 1 mayor', 'Lista 2 mayor', 'Listas iguales')
    Tener en cuenta que puede haber dos o más estructuras repetitivas en un algoritmo.


let x = 0;
let suma1 = 0;
let suma2 = 0;
let suma3 = 0;



while(x < 3){
    let lista1 = parseInt(prompt(`valor ${x} de la lista 1`));
    suma1 = lista1 + suma1;

    let lista2 = parseInt(prompt(`valor ${x} de la lista 2`));
    suma2 = lista2 + suma2;

    let lista3 = parseInt(prompt(`valor ${x} de la lista 3`));

    suma3 = lista3 + suma3;

    x++
}
if(suma1 > suma2 && suma1 > suma3){
    document.write("La lista 1 tiene el mayor valor" + "<br>")
}else if(suma2 > suma1 && suma2 > suma3){
document.write("La lista 2 tiene el mayor valor" + "<br>")
}else if(suma3 > suma1 && suma3 > suma2){
document.write("La lista 3 tiene el mayor valor" + "<br>")
}else{
    document.write("Las lsitas son iguales" + "<br>")
}

document.write(`el valor total de la lista 1 sera de ${suma1}`)
document.write("<br>")

document.write(`el valor total de la lista 2 sera de ${suma2}`)
document.write("<br>")

document.write(`el valor total de la lista 3 sera de ${suma3}`)

*/

//======================================================================        while         =================================================================================================================================================================================================================================================================

/*
    Desarrollar un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.
    Emplear el operador "%" en la condición de la estructura condicional.

    	if (valor%2==0)

    El operador "%" retorna el resto de la división valor / 2. Por ejemplo: 12 % 2, retorna 0; 13 % 2, retorna 1, porque el resto de dividir 13 en 2 es 1.


let x = 0;
let pares = 0;
let impares = 0;

while(x < 4){
    let enteros = parseInt(prompt(`Ingresar el numero que va a estar en la posicion ${x}`))
    if(enteros % 2 === 0){
        pares++
    }else{
        impares++
    }x++
}
document.write(`la cantidad de numeros pares fue de ${pares}`);
document.write("<br>")
document.write(`la cantidad de numeros impares fue de ${impares}`);
*/

//=======================================================================     Do while      ================================================================================================================================================================================================================================================================

/*
Realizar un programa que acumule (sume) valores ingresados por teclado hasta ingresa el 9999 
(no sumar dicho valor, solamente indica que ha finalizado la carga). Imprimir el valor acumulado e 
informar si dicho valor es cero, mayor a cero o menor a cero.


let valorIngres;
let suma = 0;

do{
valorIngres = parseInt(prompt("Ingresar valor a sumar hasta llegar a 9999"))
if(valorIngres != 999){
    suma = suma + valorIngres;
}
}while(valorIngres != 9999);
if(valorIngres === 0){
    document.write(`La suma de los valores que ingresaste es igual a ${suma}`);
}else if(valorIngres > 0){
    document.write(`La suma de los valores que ingresaste es igual a ${suma}, este es mayor que 0`);
}else if(valorIngres < 0){
    document.write(`La suma de los valores que ingresaste es igual a ${suma}, este es menor que 0`);
}

let valor;
let suma = 0;
do {
    valor = parseInt(prompt('Ingrese un valor (9999 para finalizar)'));
    if (valor != 9999) {
        suma = suma + valor;
    }
} while (valor != 9999);
document.write('Valor acumulado total:' + suma);
document.write('<br>');
if (suma > 0) {
    document.write('El valor acumulado es mayor a cero');
} else {
    if (suma == 0) {
        document.write('El valor acumulado es cero');
    } else {
        document.write('El valor acumulado es menor a cero');
    }
}
*/
//========================================================================     Do while      ===============================================================================================================================================================================================================================================================


/*
En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta corriente se conoce: número de 
cuenta, nombre del cliente y saldo actual. El ingreso de datos debe finalizar al ingresar un valor negativo en el número de cuenta.
Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:
a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta según su saldo, sabiendo que:

Estado de la cuenta	'Acreedor' si el saldo es >0.
			'Deudor' si el saldo es <0.
			'Nulo' si el saldo es =0.

b) La suma total de los saldos acreedores.


let numeroDeCuenta;
let nombreDelCliente;
let saldoActual = 0;
let suma = 0;
do{
    numeroDeCuenta = parseInt(prompt("Ingresar el numero de cuenta"))
        if(numeroDeCuenta >= 0) {
            nombreDelCliente = prompt("Ingrese Su Nombre");
            saldoActual = parseFloat(prompt("Ingrese su Saldo Actual"));
            if(saldoActual > 0){
                suma = suma + saldoActual;
                document.write(`${nombreDelCliente}, Le informamos que Su cuenta: ${numeroDeCuenta}, esta en estado de Acreedor con un saldo de: ${saldoActual}`)
            }else if(saldoActual < 0){
                document.write(`${nombreDelCliente}, Le informamos que Su cuenta: ${numeroDeCuenta}, esta en estado de Deuda con un saldo de: ${saldoActual}`)
            }else{
                document.write(`${nombreDelCliente}, Le informamos que Su cuenta: ${numeroDeCuenta}, esta en estado de Deuda con un saldo de: ${saldoActual}`)
            }
            document.write("<br>")
        }



}while(numeroDeCuenta >= 0);
document.write(`La suma total de los acreedores es de ${suma}`)


*/



//========================================================================     Do while      ===============================================================================================================================================================================================================================================================

/*
Se realizó un censo provincial y se desea procesar la información obtenida en dicho censo. De cada una de las personas censadas se tiene la siguiente 
información: número de documento, edad y sexo ('femenino' o 'masculino')
Se pide confeccionar un programa que lea los datos de cada persona censada (para finalizar ingresar el valor cero en el número de documento) e informar:


a)	Cantidad total de personas censadas.
b)	Cantidad de varones.
c)	Cantidad de mujeres.
d)	Cantidad de varones cuya edad varía entre 16 y 65 años.



let numDoc;
let edad;
let sexo;

let sumPers = 0;
let sumH = 0;
let sumM = 0;
let sumH16y65 = 0;

do{
    numDoc = parseFloat(prompt("Ingrese Su numero de Documento:"));

    if(numDoc > 0){
        sumPers++;
        edad = parseInt(prompt("Ingresar Su edad"));
        sexo = prompt("Ingresar su Sexo (Masculino o femenino)");

        if(sexo === "masculino" || sexo === "Masculino"){
            sumH++
            if(edad >= 16 && edad <= 65){
                sumH16y65++
            }

        }else if(sexo === "femenino" || sexo === "Femenino"){
            sumM++
        }
    }


}while(numDoc !== 0);

document.write(`El total de personas Sensadas es de: ${sumPers}`);
document.write("<br>")

document.write(`El total de Mujeres sensadas es de: ${sumM}`);
document.write("<br>")

document.write(`El total de Hombres sensados es de: ${sumH}`);
document.write("<br>")

document.write(`El total de Hombres sensados de edad entre 16  y 65 años es de: ${sumH16y65}`);
document.write("<br>")
*/


//==============================================================        For    =========================================================================================================================================================================================================================================================================

/*
Confeccionar un programa que lea 3 pares de datos, cada par de datos corresponde a la medida de la base y la altura de un triángulo. El programa deberá informar:
a) De cada triángulo la medida de su base, su altura y su superficie.
b) La cantidad de triángulos cuya superficie es mayor a 12.


let base;
let altura;
let area;
let cont = 0;


for(let i = 1; i < 4; i++){
    base = parseFloat(prompt(`Ingrese el valor de la base del triangulo numero ${i}`));
    altura = parseFloat(prompt(`Ingrese el valor de la Altura del triangulo numero ${i}`));
    area = base * altura;
    if(area > 12){
        cont++;
    }
    document.write(`Para el triangulo numero ${i}, El valor de la altura sera de ${altura}, la base sera de ${base}, y su Area = ${area}`);
    document.write("<br>")
}
document.write(`Son ${cont} la cantidad de triangulos con un area mayor a 12`);

*/

//=========================================================================          For          ==============================================================================================================================================================================================================================================================
/*Desarrollar un programa que solicite la carga de 10 números e imprima la suma de lo últimos 5 valores ingresados.


let suma = 0;
let valorIngr;

for (let i = 1; i <= 10; i++) {
    valorIngr = parseFloat(prompt("Ingrese un valor"))
    if(i > 5){
        suma = suma + valorIngr;
    }
}
document.write(`La suma de los ultimos 5 numeros ingresados sera de ${suma}`)

*/

//=========================================================================          For          ==============================================================================================================================================================================================================================================================
/*Desarrollar un programa que muestre la tabla de multiplicar del 5 (del 5 al 50). 


for (let i = 1; i <= 10; i++) {
    document.write(i * 5 + "<br>")
}
*/

//=========================================================================          For  Creador de tablas de multiplicar         ==============================================================================================================================================================================================================================================================
/*Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la tabla de multiplicar del mismo (los primeros 12 términos)
Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el 36.

let num = parseInt(prompt("ingresa un numero"))
let cont = 0;
for (let i = 1; i <= 10; i++) {
    mult = i * num;
    document.write(`${i} = ${mult}`);
    document.write("<br>");
}
document.write("<br>");

document.write(`Tabla del ${num}`);
*/


//=========================================================================          For          ==============================================================================================================================================================================================================================================================
/*
Realizar un programa que lea los lados de 4 triángulos, e informar:
a) De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados iguales), isósceles (dos lados iguales), o escaleno (ningún lado igual)
b) Cantidad de triángulos de cada tipo.
c) Tipo de triángulo del que hay menor cantidad.


let lado1;
let lado2;
let lado3;

let cont = 0;

let cant1 = 0;
let cant2 = 0;
let cant3 = 0;

let tipDeTria;



for (let i = 0; i < 4; i++) {
    lado1 = parseInt(prompt(`Ingresar el Primer lado del triangulo ${i}`));
    lado2 = parseInt(prompt(`Ingresar el Segundo lado del triangulo ${i}`));
    lado3 = parseInt(prompt(`Ingresar el Tercer lado del triangulo ${i}`));

    cont = cont + i;
    if(lado1 === lado3 && lado3 === lado2){
        tipDeTria = "Sus lados son iguales es Equilatero";
        cant1++;
    }else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
        tipDeTria = "Tiene dos lados iguales es Isósceles";
        cant2++;
    }else{
        tipDeTria = "Tiene Todos sus lados diferentes es Escaleno";
        cant3++;
    }
    

    document.write(`El triangulo numero 1 va a poseer los siguientes valores => 
    ${"<br>"} Primer lado = ${lado1}, Segundo lado = ${lado2}, Tercer lado = ${lado3}, ${tipDeTria}
    ${"<br>"}`);

}

document.write(`Hay un cantidad de ${cant1} Triangulos Equilateros, ${cant2} Triangulos Isósceles y ${cant3} Triangulos Escalenos${"<br>"}`);

if(cant1 < cant2 && cant1 < cant3){
    document.write(`Hay menos Equilateros`);
}else if(cant2 < cant1 && cant2 < cant3){
    document.write(`Hay menos Isoceles`);
}else if(cant3 < cant1 && cant3 < cant2){
    document.write(`Hay menos Escalenos`);
}else if(cant1 === cant2 || cant2 === cant3 || cant1 === cant3){
    document.write(`Hay Dos tipos de triangulos que son del mismo valor su cantidad minima`);
}
*/
//=========================================================================          For          ==============================================================================================================================================================================================================================================================

/*Escribir un programa que pida ingresar coordenadas (x,y) que representan puntos en el plano. Informar cuántos puntos se 
han ingresado en el primer, segundo, tercer y cuarto cuadrante. Al comenzar el programa se pide que se ingrese la cantidad de puntos a procesar. 



let x;
let y;

let cont = 0;
for (let i = 0; i < 4; i++) {
    x = parseFloat(prompt(`Ingresar Coordenada 'X' Perteneciente al cuadrante ${i}`));
    y = parseFloat(prompt(`Ingresar Coordenada 'Y' Perteneciente al cuadrante ${i}`));
    document.write(`En el cuadrante ${cont} se encuentran las coordendads X = ${x} e Y = ${y}${"<br>"}`);
    cont++
}
*/

//=========================================================================          For          ==============================================================================================================================================================================================================================================================

/*
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
a) La cantidad de valores negativos ingresados.
b) La cantidad de valores positivos ingresados.
c) La cantidad de múltiplos de 15.
d) El valor acumulado de los números ingresados que son pares.


let valores;
let valNeg = 0;
let valPos = 0;
let multDe15 = 0;
let pares = 0;

for (let i = 0; i < 10; i++) {
    valores = parseFloat(prompt("Escribir Valores a Evaluar ="));

    if(valores < 0){
        valNeg++
    }else if(valores >= 0){
        valPos++
        if((valores % 15) === 0){
            multDe15++
        }
    }    if(valores % 2 === 0){
        pares++
    }

}
document.write(`La cantidad de valores Positivos ingresados es de = ${valPos} 
${"<br>"} La cantidad de valores negativos ingresados es de = ${valNeg}
${"<br>"} La cantidad de valores que son multiplos de 15 es de ${multDe15}
${"<br>"} La cantidad de valores Pares es de  ${pares}`);


*/




//=========================================================================          For          ==============================================================================================================================================================================================================================================================
/*Se cuenta con la siguiente información:
Las edades de 5 estudiantes del turno mañana.
Las edades de 6 estudiantes del turno tarde.
Las edades de 11 estudiantes del turno noche.
Las edades de cada estudiante deben ingresarse por teclado.
a) Obtener el promedio de las edades de cada turno (tres promedios).
b) Imprimir dichos promedios (promedio de cada turno).
c) Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un promedio de edades mayor.

*/

//=========================================================================          Funciones          ==============================================================================================================================================================================================================================================================
/*Confeccionar una función que solicite la carga de dos enteros (primero el menor y luego el mayor) y nos muestre desde el menor hasta el mayor de uno en uno.
Por ejemplo si ingresamos los valores 4 y 10 luego se debe mostrar por pantalla:

4 5 6 7 8 9 10

function contarValor(){
    
    let inicio = parseInt(prompt("ingrsar un valor de inicio"));
    let fin = parseInt(prompt("ingrsar un valor de Fin"))
    for(let i = inicio; i <= fin; i++){
        document.write(i + "<br>")
    }
}


contarValor()*/

//=========================================================================          Funciones  Con Argumentos        ==============================================================================================================================================================================================================================================================
/* Confeccionar una función a la cual le envíe tres enteros y retorne el mayor de ellos. 
function numMayor(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }else if(num2 > num3 && num2 > num1){
        return num2
    }else{
        return num3
    }

}

let num1 = parseFloat(prompt("Ingrese el primer numero"));
let num2 = parseFloat(prompt("Ingrese el Segundo numero"));
let num3 = parseFloat(prompt("Ingrese el Tercer numero"));
let numMayorV = numMayor(num1,num2,num3);
document.write(numMayorV);

*/
//=========================================================================          Funciones  Con Argumentos        ==============================================================================================================================================================================================================================================================

/*
 Elaborar una función a la cual le envíe el valor del lado de un cuadrado y me retorne su perímetro. 
 

 function perimetro(lado){
    let perimetro = lado * 4;
    return perimetro;
 }
let lado = parseInt(prompt("Escribe el ancho"));

let perimetroVari = perimetro(lado);
document.write(perimetroVari);
*/
//=========================================================================          Funciones  Con Argumentos        ==============================================================================================================================================================================================================================================================

/*Desarrollar una función que retorne la cantidad de dígitos que tiene una variable entera positiva de hasta 5 dígitos.



function cantDigitos (variable){

    if(variable >= 0 && variable < 10){
        return "posee un digito";
    }else if(variable >= 10 && variable < 100){
        return "posee 2 digitos";
    }else if(variable >= 100 && variable < 1000){
        return "Posee 3 digitos";
    }else if(variable >= 1000 && variable < 10000){
        return "Posee 4 digitos";
    }else if(variable >= 10000 && variable < 100000){
        return "Posee 5 digitos";
    }else{
        return "posee mas de 5 digitos";
    }
}
let valor = parseInt(prompt("Ingrese su variable para verificar si posee 1, 2, 3, 4 o 5 digitos"));
let contarDigitos = cantDigitos(valor);
document.write(contarDigitos);*/

//=========================================================================          Funciones  Con Argumentos        ==============================================================================================================================================================================================================================================================
/*
Elaborar una función que reciba tres enteros y retorne el promedio. 


function promedio (valor1, valor2, valor3){
    
    let promedio = (valor1 + valor2 + valor3) / 3;
    return promedio;
}
let num1 = parseFloat(prompt("Ingrese un numero"));
let num2 = parseFloat(prompt("Ingrese un numero"));
let num3 = parseFloat(prompt("Ingrese un numero"));


document.write(promedio(num1, num2,num3));

*/

//=========================================================================          Funciones  Con Argumentos        ==============================================================================================================================================================================================================================================================

/* Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su suma. 


function funcSuma(valor1, valor2, valor3, valor4, valor5){
    let suma = valor1 + valor2 + valor3 + valor4 + valor5;
    return suma;
}
let num1 = parseFloat(prompt("Ingrese un numero"));
let num2 = parseFloat(prompt("Ingrese un numero"));
let num3 = parseFloat(prompt("Ingrese un numero"));
let num4 = parseFloat(prompt("Ingrese un numero"));
let num5 = parseFloat(prompt("Ingrese un numero"));

document.write(funcSuma(num1, num2, num3, num4, num5));
*/

//=========================================================================          Clases        ==============================================================================================================================================================================================================================================================
/*Confeccionar un programa que muestre en que cuatrimestre del año nos encontramos. Para esto obtener el mes.




let fecha;
fecha = new Date();
let mes;
mes = (fecha.getMonth() + 1);

if(mes < 4){
document.write("Estamos en el primer cuatrimestre del año."); 
}else if (mes >= 4 && mes < 7){
    document.write("Estamos en el Segundo cuatrimestre del año."); 

}else if(mes >= 7 && mes < 9){
    document.write("Estamos en el Tercer cuatrimestre del año."); 

}else{
    document.write("Estamos en el Cuarto cuatrimestre del año."); 

}
*/
/*switch (mes){
    case 0:
    case 1:
    case 2:
        return document.write("Estamos en el primer cuatrimestre del año.");
    case 3:
    case 4:
    case 5:
        return document.write("Estamos en el Segundo cuatrimestre del año.");
    case 6:
    case 7:
    case 8:
        return document.write("Estamos en el Tercer cuatrimestre del año.");    
    case 9:
    case 10:
    case 11:
        return document.write("Estamos en el Cuarto cuatrimestre del año.");
    default: document.write("Ingresa un valor entre el 0 y 11")
}

*/







//=========================================================================          Clases        ==============================================================================================================================================================================================================================================================

/*Confeccionar una función que nos retorne un string con el siguiente formato:

Hoy es Lunes 9 de Agosto de 2021

Para poder recuperar el día de la semana debemos llamar al método:

let diaSemana=fecha.getDay();

El método getDay() devuelve el día de la semana de la fecha especificada, siendo 0 (Domingo) el primer día.

let fecha = new Date()
let diaSemana = fecha.getDay();
let diaMes = fecha.getMonth() + 1;
function stringDias(diaSemana) {
    switch (diaSemana){
        case 0: return "domingo"
        case 1: return "Lunes"; 
        case 2: return "Martes";
        case 3: return "miercoles";
        case 4: return "jueves";
        case 5: return "Viernes";
        case 6: return "Sabado";
    }
}
function stringMes(diaMes){
    switch (diaMes){
        case 1: return "Enero"
        case 2: return "Febrero"; 
        case 3: return "Marzo";
        case 4: return "Abril";
        case 5: return "Mayo";
        case 6: return "Junio";
        case 7: return "Julio";
        case 8: return "Agosto";
        case 9: return "Septiembre";
        case 10: return "Octubre";
        case 11: return "Noviembre";
        case 12: return "Diciembre";
    }
}

document.write(`Hoy es ${stringDias(diaSemana)} ${diaSemana} de ${stringMes(diaMes)}, del ${fecha.getFullYear()}`);

*/
//=========================================================================          Clases        ==============================================================================================================================================================================================================================================================

/*Desarrollar un programa que permita ingresar un vector de 8 elementos, e informe:
El valor acumulado de todos los elementos del vector.
El valor acumulado de los elementos del vector que sean mayores a 36.
Cantidad de valores mayores a 50.


function ingresar(val){
    for(let i = 0; i < val.length; i++){
        let v = parseFloat(prompt("Ingresar 8 valores"));
        val[i] = v;
        document.write(`Ingresaste los siguientes valores = ${val[i]} ${"<br>"}`)
    }
}
function sumar(val){
    let acumulador = 0;
    for(let i = 0; i < val.length; i++){
        acumulador = val[i] + acumulador;
    }
    return document.write(`la suma de los valores ingresados es de = ${acumulador}${"<br>"}`);
}
function sumarMayor36(val){
    let acumulador = 0;
    for(let i =  0; i < val.length; i++){
        if(val[i] > 36){
            acumulador = acumulador + val[i];
        }
    } return document.write(`Los valores ingresados mayores  36 dan una suma de = ${acumulador}${"<br>"}`);
}
function contarMayor50(val){
    let cont = 0;
    for(let i = 0; i < val.length; i++){
        if(val[i] > 50){
            cont++
        }
    }return document.write(`La cantidad de valores ingresados mayores a 50 son de = ${cont}`);
}



let num;
num = new Array(8);
ingresar(num);
sumar(num);
sumarMayor36(num);
contarMayor50(num);

*/
//=========================================================================          Clases        ==============================================================================================================================================================================================================================================================

/*
Realizar un programa que pida la carga de dos vectores numéricos. (Listo)
Obtener la suma de los dos vectores, 
dicho resultado guardarlo en un tercer vector del mismo tamaño. 
Sumar componente a componente.
El tamaño del vector es a elección. 
*/



/*
function carga (vec1, vec2){
    for(let i = 0; i < vec1.length; i++){
        let num = parseFloat(prompt(`Ingresar numeros del Primer vector`));
        vec1[i] = num;
        document.write(`[${vec1[i]}]`)
    }document.write(`${"<br>"}`);
    for(let i = 0; i < vec2.length; i++){
        let num = parseFloat(prompt(`Ingresar numeros del Segundo vector`));
        vec2[i] = num;
        document.write(`[${vec2[i]}]`)
    }document.write(`${"<br>"}`);
}
function suma (vec1, vec2, vecSuma){
    for(i = 0; i < vecSuma.length; i++){
        vecSuma[i] = vec1[i] + vec2[i];
    }document.write(`[${vecSuma}]`);
    document.write(`${"<br>"}`);
}




let vec1 = new Array(3);
let vec2 = new Array(3);
let vecSuma = new Array(3)
carga(vec1, vec2);
suma(vec1, vec2, vecSuma);

/*

function cargarVectores(vec1, vec2) {

    for (let f = 0; f < vec1.length; f++) {
        let valor = prompt('Ingrese componente del primer vector:', '');
        vec1[f] = parseInt(valor);
    }
    for (let f = 0; f < vec2.length; f++) {
        let valor = prompt('Ingrese componente del segundo vector:', '');
        vec2[f] = parseInt(valor);
    }
}

function sumarVectores(vec1, vec2, vecsuma) {
    for (let f = 0; f < vecsuma.length; f++) {
        vecsuma[f] = vec1[f] + vec2[f];
    }
}

function imprimirVector(vecsuma) {
    for (let f = 0; f < vecsuma.length; f++) {
        document.write(vecsuma[f] + ' ');
    }
}

let vec1 = new Array(5);
let vec2 = new Array(5);
let vecsuma = new Array(5);
cargarVectores(vec1, vec2);
sumarVectores(vec1, vec2, vecsuma);
imprimirVector(vecsuma);

*/

//=========================================================================          Clases Math       ==============================================================================================================================================================================================================================================================
/*
Confeccionar un programa que solicite el ingreso de un número y nos muestre dicho valor elevado a la tercera potencia.

function potencia3De (num){
    let cubo = Math.pow(num, 3);
    return document.write(`${num} elevado al cubo = ${cubo}`)
}

let num = parseInt(prompt("Ingresar cualquier numero"));
potencia3De(num);

*/


/*
Ingresar por teclado un valor y luego mostrar la raiz cuadrada de dicho valor.


function potencia3De (num){
    let raizCuad = Math.sqrt(num);
    return document.write(`Raiz cuadrada de ${num} es = ${raizCuad}`)
}

let num = parseInt(prompt("Ingresar cualquier numero"));
potencia3De(num);
*/

//=========================================================================          Clases Strings       ==============================================================================================================================================================================================================================================================
/*Ingresar una serie de nombres por teclado hasta que se cargue la palabra Fin, y mostrar cuántos nombres se ingresaron. 

function fin(string){
    
    let cont = 0;
    do{
        let x = prompt("Ingrsa palabras")
        string = x;
        cont++
        document.write(`${string}${"<br>"}`)
    }while(string != "Fin");
    cont--                                          //Para descontar la palabra Fin;
     return document.write("Se obtuvo un numero de " + cont + " Palabras.");
}

let string;
string = new Array();
fin(string)
*/

//=========================================================================          Clases Strings       ==============================================================================================================================================================================================================================================================

/*Igual al anterior, pero que termine la aplicación sin contemplar mayúsculas ni minúsculas. Es decir que para salir se pueda teclear fin, Fin o FIN. 



//se transforman todas las palabras ingresadas a mayusculas y el while se detiene cuando lee una palabra FIN. al ser todas las palabras ingresadas en mayusculas, nunca va a tomar minusculas.


let nombre;
let cont = 0;
do{
    x = prompt("Ingrese un nombre (Con 'FIN' para el conteo)").toUpperCase();
    nombre = x;
    cont++
    document.write(`${nombre}${"<br>"}`)

}while(nombre != "FIN");
cont--
document.write("Se obtuvo un numero de " + cont + " Palabras.");
*/

//=========================================================================          Clases Strings       ==============================================================================================================================================================================================================================================================

/*Realizar la búsqueda de un string clave en un string fuente. Se deberá ingresar una frase o texto 
(fuente) y luego la clave a buscar. En caso de encontrarla, imprimir la posición, de lo contrario una leyenda que indique que no está.
*/


/*
let fuente = prompt("Ingresar una frase de mas de dos palabras.");
let clave = prompt("Ingrse la palabra que quiera buscar dentro de ese texto.");
let frase = fuente.indexOf(clave);
if(frase != -1){
    document.write(`La palabra "${clave}" se encuentra en el texto "${fuente}" ${"<br>"}`);
}else{
    document.write(`No se encontro la Palabra "${clave}" dentro del texto "${fuente}"`)
}*/

//=========================================================================          Clases Strings       ==============================================================================================================================================================================================================================================================
/*Ingresar una palabra o texto por teclado y 
determinar si es o no una palabra palíndromo. (Palabra que se lee de igual manera de 
    adelante hacia atrás, que de atrás hacia delante) */





//=========================================================================          Clases Strings   email    ==============================================================================================================================================================================================================================================================

    /*Realizar un programa que permita cargar una dirección de mail e implementar una función que verifique si el String tiene cargado el carácter @. 

    function arroba (email){
            let buscar = email.indexOf("@")
            if (buscar != -1){
                return document.write("Se ingreso el arroba")
            }else{
                return document.write("Ingrese el valor @")
            }
    }

let email = prompt("Ingresar email.")
arroba(email);
*/
//=========================================================================          Clases Strings   email    ==============================================================================================================================================================================================================================================================

/*
Cargar un String por teclado e implementar las siguientes funciones:
a) Imprimir la primera mitad de los caracteres de la cadena.                        Listo   
b) Imprimir el último carácter.                                                     Listo 
c) Imprimirlo en forma inversa.                                                     Listo
d) Imprimir cada carácter del String separado con un guión.                         Listo
e) Imprimir la cantidad de vocales almacenadas.                                     Listo
*/
/*

function primerMitad(string){
    let mitad = string.substring(0, (string.length/2))
    return document.write(`La mitad de los caracteres es = ${mitad}`)
}


//Encontrar el ultimo caracter del string.
function ultCaract (string){
    let ultimo = string.at(-1);
    return document.write(`El ultimo caracter es = ${ultimo}${"<br>"}`);
}

//invertir string
function invertir (string){
// Paso 1. Usar el método split() para devolver un nuevo arreglo
    let convArr = string.split("");
    // ["h", "o", "l", "a"]
//paso 2. invertir valores del array, invirtiendo todas las letras.
    let invertArr = convArr.reverse();
//paso 3. Convertir array a string devuelta
    let convertString = invertArr.join("");
//Paso 4. retornar array invertido
    return document.write(`Aqui esta el texto invertido = (${convertString})${"<br>"}`);
}

//Funcion, Ingresar guiones
function guion (string){
    let convertArray = string.split("");
    let ingresaGuion = convertArray.join("-");
    return document.write(ingresaGuion + "<br>");
}


function vocales (string){
    let strArray = string.split("");
    let cont = 0;
    for(let i = 0; i < strArray.length; i++){
        if(strArray[i] === "a" || strArray[i] === "e" || strArray[i] === "i" || strArray[i] === "o" || strArray[i] === "u"){
            cont++;
        }
    }return document.write(`La cantidad de vocales almacenadas es de = ${cont}${"<br>"}`);
}

let string = prompt("ingresar palabra");
ultCaract(string);
invertir(string);
guion(string);
vocales(string);
primerMitad(string);



*/
//=========================================================================          Clases Strings   email    ==============================================================================================================================================================================================================================================================
/*Codifique un programa que permita cargar una oración por teclado, luego mostrar cada palabra ingresada en una línea distinta.

Por ejemplo si cargo:
	La mañana está fría.
Debe aparecer:
La
mañana
está
fría
*/


/*
function dividirFrase(arg){
    let arr = arg.split(" ");
    let str = arr.join("<br>");
    return document.write(str);
}


let frase = prompt("")
dividirFrase(frase);
*/

//=========================================================================     Formuñarios y Eventos    ==============================================================================================================================================================================================================================================================
/*Crear un formulario con tres botones con las leyendas "1", "2" y "3". Mostrar un mensaje indicando qué botón se presionó. 
function click1(){
    alert("Se eligio el boton 1")

}
function click2(){
    alert("Se eligio el boton 2")

}
function click3(){
    alert("Se eligio el boton 3")
}
*/
//=========================================================================    FORM, BUTTON y TEXT.   ==============================================================================================================================================================================================================================================================
/*
    Crear un programa que permita cargar un entero en un text y al presionar un botón nos muestre 
    dicho valor elevado al cubo (emplear la función alert).


function calcularCubo(){
    let valor = document.getElementById("num").value;
    v = parseInt(valor)
    cubo = v * v * v;
    alert("El valor es = " + cubo);
}
*/
//=========================================================================    FORM, BUTTON y TEXT.   ==============================================================================================================================================================================================================================================================
/*
    Cargar dos números en objetos de tipo text y al presionar un botón, mostrar el mayor.

function mayor(){
    let x = document.getElementById("text1").value;
    let y = document.getElementById("text2").value;
    let num1 = parseInt(x);
    let num2 = parseInt(y);

    if(num1 > num2){
        alert(`${num1} Es mayor que ${num2}`);
    }else if(num1 < num2){
        alert(`${num1} Es menor que ${num2}`);
    }else{
        alert(`${num1} Es igual que ${num2}`);
    }
}

*/
//=========================================================================    FORM, BUTTON y TEXT.   ==============================================================================================================================================================================================================================================================
/*
    Cargar un nombre y un apellido en sendos text. Al presionar un botón, concatenarlos y mostrarlos 
    en un tercer text (Tener en cuenta que podemos modificar la propiedad value de un objeto 
        TEXT cuando ocurre un evento)
function concat(){
    let nombre =  document.getElementById("texto1").value;
    let apellido = document.getElementById("texto2").value;
    document.getElementById("texto3").value = nombre.concat(" " +apellido);
 
}
*/

//=========================================================================    FORM, BUTTON y TEXT.   ==============================================================================================================================================================================================================================================================


// function puzzle (n){
//     //planteo las variables a,b,c y d = 1
//     let a = 1;
//     let b = 1;
//     let c = 1;
//     let d = 1;
//     for(let i = 0; i < n; i++){
//         let x = d + (2 * c) + (3 * b) + (4 * a);
//         a = b
//         b = c
//         c = d
//         d = x
//     }
//     let f = (d % 10000000000);
//     return document.write(f)
// }

// puzzle(100)

//4315102208   
// let n = 4315102208
// let porDiez = n * 10;
// document.write(n * 10);
// //43151022080 
// let elevado100 = Math.pow(porDiez, 100)

//=========================================================================    Password   ==============================================================================================================================================================================================================================================================
/*Disponer dos campos de texto tipo password. Cuando se presione un botón mostrar si las dos claves ingresadas son iguales o no (es muy común solicitar al operador el ingreso de dos veces de su clave para validar si las escribió correctamente, esto se hace cuando se crea una password para el ingreso a un sitio o para el cambio de una existente).
Tener en cuenta que podemos emplear el operador == para ver si dos string son iguales.
function validar(){
    let clave1 = document.getElementById("clave1").value;
    let clave2 = document.getElementById("clave2").value;

    if(clave1 === clave2){
        return alert("Claves Validadas");
    }else if(clave1 !== clave2){
        return alert("Claves Incorrectas")
    }
}*/

//=========================================================================   DOM select   ==============================================================================================================================================================================================================================================================
/*Confeccionar una página que muestre un objeto SELECT con distintos tipos de pizzas 
(Jamón y Queso, Muzzarella, Morrones). 
Al seleccionar una, mostrar en un objeto de tipo TEXT el precio de la misma. 

function selected(){
    let select = document.getElementById("pizzas");
    document.getElementById("text").value = select.options[select.selectedIndex].value;
}



<form action="#">
    <select name="Pizzas" id="pizzas" onchange="selected()">
        <option value="Pizzas" selected hidden>Seleccionar Pizzas</option>
        <option value="180">Jamón y Queso</option>
        <option value="200">Muzzarella</option>
        <option value="400">Morrones</option>

        <input type="text" name="text" id="text" placeholder="Precios" readonly>
    </select>
</form>
*/
//=========================================================================   DOM select   ==============================================================================================================================================================================================================================================================


/*
Generar un presupuesto de un equipo de computación a partir de tres 
objetos de tipo SELECT que nos permiten seleccionar:
Procesador (Intel I3 - $400, Intel I5 $600, Intel I7 $800).
Monitor (Samsung 20' - $250, Samsung 22' - $350, Samsung 26' - $550)
Disco Duro(500 Gb - $300, 1 Tb - $440, 3 Tb - $500)
Para cada característica indicamos string a mostrar (Ej. Intel I3) y el valor 
asociado a dicho string (Ej. 400).
Al presionar un botón "Calcular" mostrar el presupuesto en un objeto de tipo TEXT. 

function total(){
    let elem1 = document.getElementById("procesador");
    let precio1 = elem1.options[elem1.selectedIndex].value;
    let elem2 = document.getElementById("monitor");
    let precio2 = elem2.options[elem2.selectedIndex].value;
    let elem3 = document.getElementById("discoduro");
    let precio3 = elem3.options[elem3.selectedIndex].value;
    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);
    let suma = precio1 + precio2 + precio3;
    document.getElementById("total").value = suma;
}
<form>
    <select id="procesador">
        <option value="300">Intel I3</option>
        <option value="200">Intel I7</option>
        <option value="500">Intel I5</option>
    </select>
    <select id="monitor">
        <option value="300">Samsung 22'</option>
        <option value="200">Samsung 21'</option>
        <option value="500">Samsung 26'</option>
    </select>
    <select id="discoduro">
        <option value="300">1 Tb</option>
        <option value="200">3 Tb</option>
        <option value="500">5 Tb</option>
    </select>
<br>
    <a href="#" onclick="total()">Calcular costos</a>
<p>Total:</p>
    <input type="text" id="total">
</form>
*/

//=========================================================================   DOM select   ==============================================================================================================================================================================================================================================================

/*
1function elegir(){
    let pizza = document.getElementById("pizzas");
    
    let precioQueso = pizza.options[pizza.selectedIndex].value;
    let precioJamon = pizza.options[pizza.selectedIndex].value;
    let precioEsp = pizza.options[pizza.selectedIndex].value;

    let cant1 = document.getElementById("stock1").value;
    let cant2 = document.getElementById("stock2").value;
    let cant3 = document.getElementById("stock3").value;
    
    precioQueso = parseInt(precioQueso)
    precioJamon = parseInt(precioJamon)
    precioEsp = parseInt(precioEsp)
    
    let result1 = (precioQueso * cant1) + (precioJamon * cant2) + (precioEsp * cant3);

    document.getElementById("total").value = result1
}
<form>
    <select id="pizzas">
        <option value="4">Pizza de Queso</option>

        <option value="6">Pizza de Jamon y Queso</option>

        <option value="10">Pizza Especial</option>
    </select>

    <input type="number" id="stock1" value="0">
    <input type="number" id="stock2" value="0">
    <input type="number" id="stock3" value="0">

    <a href="#" id="costos" onclick="elegir()">Costos totales</a>
    <p><input type="number" id="total"></p>
</form>
*/

//=========================================================================   DOM select   ==============================================================================================================================================================================================================================================================
/*Confeccionar una página que permita tomar un examen múltiple choice. 
Se debe mostrar una pregunta y seguidamente un objeto SELECT con las respuestas posibles. 
Al presionar un botón mostrar la cantidad de respuestas correctas e incorrectas 7
(Disponer 4 preguntas y sus respectivos controles SELECT) 

function respuetas(){
    let correctas = 0;
    let incorrectas = 0;
    let preg1 = document.getElementById("preg1");
    let preg2 = document.getElementById("preg2");
    let preg3 = document.getElementById("preg3");


    if(preg1.options[preg1.selectedIndex].value == 4){
        correctas++
    }
    if(preg2.options[preg2.selectedIndex].value == 2){
        correctas++
    }
    if(preg3.options[preg3.selectedIndex].value == 1){
        correctas++
    }
    alert("Respuestas Correctas = " + correctas)

    if(preg1.options[preg1.selectedIndex].value != 4){
        incorrectas++
    }
    if(preg2.options[preg2.selectedIndex].value != 2){
        incorrectas++
    }
    if(preg3.options[preg3.selectedIndex].value != 1){
        incorrectas++
    }
    alert("Respuestas Incorrectas = " + incorrectas)
}

<form>
    <p>¿El cielo de que color es?</p>
    <select id="preg1">
        <option value="1">Color naranja</option>
        <option value="2">Color Rojo</option>
        <option value="3">Color verde</option>
        <option value="4">Color azul</option>
    </select>
    <p>Como se llamaba mi perro?</p>
    <select id="preg2">
        <option value="1">Noviembre</option>
        <option value="2">Lucho</option>
        <option value="3">Fernando</option>
        <option value="4">Rogelio</option>
    </select>
    <p>Cuantos años tengo?</p>
    <select id="preg3">
        <option value="1">21</option>
        <option value="2">20</option>
        <option value="3">22</option>
        <option value="4">19</option>
    </select>
    <br><br>
    <a href="#" onclick="respuetas()">Enviar respuestas</a>

</form>
*/
//=========================================================================   DOM checkbox   ==============================================================================================================================================================================================================================================================

/*Confeccionar una página que muestre tres checkbox que permitan seleccionar 
los deportes que practica el usuario 
(Fútbol, Básket, Tenis) Mostrar al presionar un botón los deportes que eligió.
function deportes(){
    let futbol = document.getElementById("item1").checked; //checked es "true"
    let bascket = document.getElementById("item2").checked;
    let tenis = document.getElementById("item3").checked;

    if(futbol){
        alert("Se eligio Futbol");
    }
    if(bascket){
        alert("Se eligio bascket")
    }
    if(tenis){
        alert("Se eligio tenis")
    }
}

    <form>
        <label for="item1">Fútbol</label>
        <input type="checkbox" id="item1">
        <label for="item1">Básket</label>
        <input type="checkbox" id="item2">
        <label for="item1">Tenis</label>
        <input type="checkbox" id="item3">
        
        <a href="#" onclick="deportes()">Enviar</a>
    </form>
*/
//=========================================================================   DOM checkbox   ==============================================================================================================================================================================================================================================================
/*
function validar(){
    let mayor = document.getElementById("si").checked;
    if(mayor){
        alert("Muchas gracias por confirmar su edad, Bienvenido")
    }else{
        alert("Eres menor de edad")
    }
}

<form>
<p>Eres mayor de 18 años?</p>
<label for="si">Si soy mayor de 18 años</label>
<input type="radio" name="edad" id="si">
<br>
<label for="no">No, no soy mayor de 18 años</label>
<input type="radio" name="edad" id="no">
<br>
<br>
<a href="#" onclick="validar()">Enviar Formulario</a>

</form>
*/

//=========================================================================   DOM textArea   ==============================================================================================================================================================================================================================================================
/*Confeccionar una página de visitas a un sitio, solicitar ingresar el 
nombre de una persona, su mail y los comentarios 
(TEXTAREA). Mostrar luego llamando a la función alert los datos ingresados.

function enviar(){
    let nombre = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let descr = document.getElementById("textarea").value;
    
    alert(`El nombre es = ${nombre}, Su email es = ${email}, Los comentarios son = ${descr}`)
}


<form>
    <input type="text" name="nombre" id="name" placeholder="Ingrese nombre">

    <input type="email" name="email" id="email" placeholder="Ingrese email">
<br>
    <textarea name="" id="textarea" cols="30" rows="10" placeholder="Ingresar una breve reseña"></textarea>
<br>
    <a href="#" onclick="enviar()">Enviar</a>
</form>

*/

//=========================================================================   DOM onFocus y onBlur   ==============================================================================================================================================================================================================================================================
/*Solicitar que se ingrese el nombre y la clave de un usuario. 
Mostrar una ventana de alerta si en la clave se 
ingresan menos de 7 caracteres o más de 20 (capturar el evento onBlur)  

function verificar(control){
    if(control.value.length < 7){
        alert("Le falta completar")
    }
    else if(control.value.length > 20){
        alert("Se exedio de caracteres")
    }
}

<form>
<input type="text" id="nombre" onblur="verificar(this)" value="nombre"><br>
<input type="text" id="edad" onblur="verificar(this)" value="mail">
<br>
<input type="button" value="Confirmar">

</form>
*/

//=========================================================================   DOM onFocus y onBlur   ==============================================================================================================================================================================================================================================================


/*Implementar un formulario que solicite la carga del nombre y la edad de una persona. Cuando el control tome foco borrar el contenido actual. Mostrar en las propiedades value de los controles text los mensajes "nombre" y "mail" respectivamente.
<form>
<input type="text" id="nombre" onFocus="vaciar(this)" value="nombre"><br>
<input type="text" id="edad" onFocus="vaciar(this)" value="mail">
<br>
<input type="button" value="Confirmar">

<script>
    function vaciar(control) {
        control.value = '';
    }

    function verificarEntrada(control) {
        alert('ingreso:' + control.value);
    }
</script>

</form>
*/
//=========================================================================   DOM onload   ==============================================================================================================================================================================================================================================================
/*Confeccionar una página que muestre un
 mensaje con la función alert inmediatamente después que se cargue. 

 function activar(){
    alert("esta activa")
 }
 */

 //=========================================================================   OBJETO WINDOW   ==============================================================================================================================================================================================================================================================


 /*
    <p>Este programa permite analizar la llamada a distintas responsabilidades del objeto window.</p>
    <form>
        <br>
        <input type="button" value="open()" onClick="abrir()">
        <br>
        <input type="button" value="open con parámetros" onClick="abrirParametros()">
        <br>
        <input type="button" value="alert" onClick="mostrarAlerta()">
        <br>
        <input type="button" value="confirm" onClick="confirmar()">
        <br>
        <input type="button" value="prompt" onClick="cargarCadena()">
    </form>

    <script>
        function abrir() {
            let ventana = open();
            ventana.document.write("Estoy escribiendo en la nueva ventana<br>");
            ventana.document.write("Segunda linea");
        }

        function abrirParametros() {
            let ventana = open('', '', 'status=yes,width=400,height=250,menubar=yes');
            ventana.document.write("Esto es lo primero que aparece<br>");
        }

        function mostrarAlerta() {
            alert("Esta ventana de alerta ya la utilizamos en otros problemas.");
        }

        function confirmar() {
            let respuesta = confirm("Presione alguno de los dos botones");
            if (respuesta == true)
                alert("presionó aceptar");
            else
                alert("presionó cancelar");
        }

        function cargarCadena() {
            let cad = prompt("cargue una cadena:");
            alert("Usted ingreso " + cad);
        }
    </script>
    */
    //=========================================================================   OBJETO WINDOW OPEN() ==============================================================================================================================================================================================================================================================
/*Confeccionar una página que permita abrir otra ventana cuando se presiona un botón. Dicha ventana debe tener como ancho 600 pixeles y alto 300 pixeles. 
    function abrir(){
    let ventana = open('','','width=600,height=300');
    ventana.document.write("Escribo en otra ventana")
}
<input type="button" onclick="abrir()"></input>
*/
    //=========================================================================   OBJETO WINDOW  LOCATION  ==============================================================================================================================================================================================================================================================
/*Confeccionar una página que tenga un botón. Cuando se presione dicho botón 
generar un valor aleatorio entre 0 y 2. Si se genera el 0 llamar al webmail de 
Outlook, si se genera un 1 llamar a gmail en caso de generarse un 2 llamar a yahoo.
Para generar un valor aleatorio utilizar la función random del objeto Math. 

function enviar(){
    let num = Math.random()
    num = parseInt(num * 3)
    if(num === 0){
        window.location = "https://www.microsoft.com";
        }else if(num === 1){
        window.location = "https://mail.google.com";
    }else{
        window.location = "https://login.yahoo.com";
    }
}
*/

//=========================================================================   OBJETO WINDOW  HISTORY ==============================================================================================================================================================================================================================================================

/*
window.history.back();    //Retrocede a la página anterior
window.history.forward(); //Avanza a la página siguiente almacenada en la 
                            cache de la máquina.
window.history.go();  //Avanza o retrocede en la lista de páginas visitadas.

*/
//=========================================================================   OBJETO WINDOW  SCREEN ==============================================================================================================================================================================================================================================================
/*document.write(
`   availWidth = ${screen.availWidth}${"<br>"}
    availHeight = ${screen.availHeight} ${"<br>"}
    height = ${screen.height} ${"<br>"}
    width = ${screen.height}${"<br>"}
    colorDeph = ${screen.colorDepth}
  
`

);

Confeccionar un programa que al presionar un botón aparezca una ventana 
que ocupe todo el ancho del monitor y la mitad de su altura. 

function enviar(){

    open("", "", `width=${screen.width},height=${screen.height/2}`);
}
*/
//=========================================================================   OBJETO WINDOW  NAVEGATOR ==============================================================================================================================================================================================================================================================
/*

appName : almacena el nombre oficial del navegador.
appVersion : almacena la versión del navegador.
cookieEnabled : almacena si las cookies están activas en el navegador.
platform : almacena la plataforma donde el navegador se está ejecutando.
plugins : almacena un array de los plugin cargados en el navegador.


document.write('Valores de las propiedades del objeto navigator:<br>');
document.write('appName :' + navigator.appName + '<br>');
document.write('appVersion :' + navigator.appVersion + '<br>');
document.write('cookieEnabled :' + navigator.cookieEnabled + '<br>');
document.write('plugins :' + navigator.plugins.length + '<br>');

*/

//========================================================================= ==============================================================================================================================================================================================================================================================
/*
function fecha(){
    let fecha = new Date();
    document.write(`hoy es ${fecha.getDay()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`)
}   
*/



//========================================================================= CLASES ==============================================================================================================================================================================================================================================================
/*Confeccionar una clase llamada suma, que contenga dos atributos (valor1, valor2) 
y tres métodos: cargarvalor1, cargarvalor2 y retornarresultado. Implementar 
la clase suma.
La definición de un objeto de la clase que deben plantear es:

let s=new suma();
s.primerValor(10);
s.segundoValor(20);
document.write('La suma de los dos valores es:'+s.retornarResultado());


function suma (valor1, valor2){
    this.valor1 = valor1;
    this.valor2 = valor2;
    this.cargarValor1 = function num1(valor){
        this.valor1 = valor;
    }
    this.cargarValor2 = function num2(valor){
        this.valor2 = valor;
    }
    this.retornResult =     function retornResult(){
        let resultado =  this.valor1 + this.valor2;
        return resultado;
    }
}
let s;
s = new suma(20, 30);
document.write(`El resultado es = ${s.retornResult()}`);

s.cargarValor1(2);
s.cargarValor2(2);
document.write(`El resultado es = ${s.retornResult()}`);
*/
//========================================================================= CLASES ==============================================================================================================================================================================================================================================================

/*Plantear una clase persona (que permita cargar por teclado su nombre y edad).
Por otro lado crear una clase empresa que tenga como atributo la edad tope 
para que una persona pueda ingresar como trabajador en la misma (60 años)
Confeccionar un pequeño programa en JavaScript que defina 3 objetos de la 
clase persona y 1 de la clase empresa. Mostrar cuántas de esas personas 
están inhabilitadas para ingresar como trabajadores de acuerdo a la edad tope.  

//Clase persona.
function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.cargEdad = function(){
        this.edad = parseInt(prompt("Ingresa Tu edad"));
    }
    this.cargNombre = function(){
        this.nombre = prompt("Ingresa tu nombre");
    }
}

function Empresa(){
    this.edad = 60;
}
function validar(a, b, c){
    if(a < b){
        document.write(`${c} Puede ingresar a la empresa como empleado ${"<br>"}`);
    }else{
        document.write(`${c} Es mayor de edad y no se aceptan personas mayores de ${condicionesDeEmpresa.edad}${"<br>"}`);
    }
}
const pers1 = new Persona();
const pers2 = new Persona();
const pers3 = new Persona();
const condicionesDeEmpresa = new Empresa();

pers1.cargNombre();
pers1.cargEdad();
pers2.cargNombre();
pers2.cargEdad();
pers3.cargNombre();
pers3.cargEdad();

validar(pers1.edad, condicionesDeEmpresa.edad, pers1.nombre);
validar(pers2.edad, condicionesDeEmpresa.edad, pers2.nombre);
validar(pers3.edad, condicionesDeEmpresa.edad, pers3.nombre);
*/
//========================================================================= Array compuesto de objetos ==============================================================================================================================================================================================================================================================
/*Confeccionar una clase persona que permita almacenar el nombre y la edad. 
Luego definir un vector de 4 componentes de tipo persona. Imprimir el nombre de la persona de mayor edad; 
decir también si hay más de una persona con la edad mayor. 

class Persona{
    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        this.imprimir = function imprimir(){
            document.write(`${this.nombre}, Tiene una edad de ${this.edad} años ${"<br>"}`)
        }
    }

}

let myArray = []
myArray.push (new Persona("Joaquin", 23), new Persona("Tiziano", 40), new Persona("Gabriel", 25), new Persona("Sol", 50)); 

let v = 0;
for(let i = 0; i < myArray.length; i++){
    if(myArray[i].edad >= 40){
        v++
    }
    myArray[i].imprimir()
}
let newArray = []
for (let i = 0; i < myArray.length; i++) {  
    newArray.push(myArray[i].edad);
}
let personasMasGrandes = Math.max(...newArray);

for (let i = 0; i < myArray.length; i++) {
    if(myArray[i].edad === personasMasGrandes){
        document.write(`El nombre de la persona mas grande es ${myArray[i].nombre}${"<br>"}`)
    }
}

document.write(`Hay una cantidad de ${v} personas que son mayores de edad. ${"<br>"}`);


*/
//========================================================================= Objetos Literales ==============================================================================================================================================================================================================================================================
/*
Crear un objeto que represente los datos de un participante de un juego. Definir las propiedades

 nombre
 puntos

y los métodos:

imprimir (mostrar el nombre de jugador y los puntos actuales)
aumentarPuntos (permite incrementar la cantidad de puntos actuales del jugador)
verificarSiGano (mostrar un mensaje si los puntos superan a 1000)


let juagador = {
    nombre: "Joaquin",
    puntos: 0,
    imprimir: function(){
        document.write(`Nombre del Jugador = ${this.nombre}${"<br>"}Puntos del jugador = ${juagador.puntos}${"<br>"} Para ganar el juego debera de sumarle puntos a su jugador hasta el punto de llegar a 1000${"<br>"}`)
    },
    sumarPuntos: function(puntos){
        this.puntos = this.puntos + puntos;
    },
    imprActua: function(){
        document.write(`Puntos del jugador actuales = ${juagador.puntos}${"<br>"}`);

    }
}

juagador.imprimir();
do{
    juagador.sumarPuntos(parseInt(prompt("Ingrsa los puntos a sumar")));
    juagador.imprActua();
}while( juagador.puntos < 999);

document.write("Felicidades haz ganado");

*/

//========================================================================= Arrays Diferentes formas de crearlos ==============================================================================================================================================================================================================================================================
/*
//arrays indefinidos:
let array = new Array();

let array2 = [];

//Arrays definidos:
let array3 = new Array(20);
array3;
//Creación e inicialización llamando al constructor Array y pasando como parámetros los valores a almacenar en las componentes:
let array4 = new Array(14.3, "juan");

//creacion e inicializacion por medio de corchetes;
let array5 = [14.3, "juan"];

function imprimirArray(array){
    for(let i = 0; i < array1.length; i++){
        document.write(array[i] +"<br>"); 
    }
}


let array1 = ["lunes", "martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
let array2 = new Array("lunes", "Martes", "Miercoles", "Jueves", "viernes", "Sabado", "Domingo");

imprimirArray(array1);
imprimirArray(array2);
*/
//========================================================================= Arrays ==============================================================================================================================================================================================================================================================

/*Crear un vector con 10 valores aleatorios comprendidos entre 1 y 500. 
Luego crear otros dos vectores y copiar los elementos menores a 250 en el segundo vector y los mayores o 
iguales a 250 en el tercer vector. 
Imprimir los tamaños del segundo y tercer vector. Imprimir los tres vectores.

let array1 = [];
for (let i = 0; i < 10; i++) {
    array1[i] = parseInt(1 + Math.random() * 500);
}
let minArray = [];
let indice1 = 0;
let maxArray = [];
let indice2 = 0;


for(let i = 0; i < array1.length; i++){
    if(array1[i] >= 250){
        maxArray[indice1] = array1[i];
        indice1++
    }else if(array1[i] < 250){
        minArray[indice2] = array1[i];
        indice2++
    }
}

document.write(`El tamaño del Segundo vector es = ${maxArray.length}${"<br>"} El tamaño del Tercer vector es = ${minArray.length}
${"<br>"} Contendor del Segundo Array = ${maxArray}
${"<br>"} Contendor del Tercer Array = ${minArray}`)
*/
//========================================================================= Arrays no densos o dispersos ==============================================================================================================================================================================================================================================================

/*Crear un vector disperso que representen premios de una rifa. Listo
Las posiciones indican los números que tienen premio. lsito
Almacenar en dichas posiciones los premios. 
Genera 10 premios con los montos 1000,2000,3000 etc.
La cantidad de números de la rifa son 1000.
Generar valores aleatorios para los números con premio.
Imprimir Los números con premio y los montos de los mismos.

let carton = [];
let cant = 0;

do{
    let premio =  parseInt(Math.random() * 1000)
    carton[premio] = 1000 * (cant + 1);
    cant++

}while(cant != 11)
for(let i = 0; i < carton.length; i++){
    if(carton[i] != undefined){
        document.write("El numero ganadore es " + i + "=" + carton[i] + "<br>")
    }
}
*/
//========================================================================= Arrays push()/pop() ==============================================================================================================================================================================================================================================================
/*Crear un vector con 5 valores aleatorios comprendidos entre 1 y 1000. 
Luego extraer los dos últimos elementos sumarlos y mostrarlos. Imprimir también el tamaño final del vector. 

let array = [];
do{
    let numAleatorio = parseInt(1+ Math.random() * 1000)
    array.push(numAleatorio)
}while(array.length < 5);
document.write(array + "<br>")

let suma = [];
do{
    suma.push(array.pop());
    
}while(array.length > 3);



let total = 0;
for(let i = 0; i < suma.length; i++){
    total = suma[i] + total;
}
document.write(total)*/

//========================================================================= Arrays Sort() reverse() ==============================================================================================================================================================================================================================================================
/*Ordenar elementos de a - z;

let nombres = ['marcos', 'ana', 'luis', 'jorge', 'carlos'];
        document.write('Vector antes de ordenarlo<br>');
        for (let f = 0; f < nombres.length; f++) {
            document.write(nombres[f] + '<br>');
        }
        nombres.sort();
        document.write('Vector después de ordenarlo<br>');
        for (let f = 0; f < nombres.length; f++) {
            document.write(nombres[f] + '<br>');
        }
*/
/*
        //Ordenar elementos numericos de menor a mayor
                let vec = [100, 5, 60, 3, 90];
        document.write('Vector antes de ordenarlo<br>');
        for (let f = 0; f < vec.length; f++) {
            document.write(vec[f] + '<br>');
        }
        vec.sort(function(v1, v2) {
            if (v1 < v2)
                return -1; // v1 es menor que v2
            else
                return 1; // v1 es mayor que v2
        });
        document.write('Vector después de ordenarlo<br>');
        for (let f = 0; f < vec.length; f++) {
            document.write(vec[f] + '<br>');
        }
        */

        /*Cargar los sueldos de un conjunto de empleados. 
        Finalizar la carga al ingresar cero. 
        Mostrar por pantalla los sueldos ordenados de mayor a menor. 

        let sueldoEmpleados = [];
        let cargar;
        let indice = 0;
        do{
            if(cargar != 0){
                cargar = parseInt(prompt("Ingresar Sueldos de empleados"));
                sueldoEmpleados[indice] = cargar;
                indice++;
            }
        }while(cargar != 0)
        sueldoEmpleados.pop();
        sueldoEmpleados.sort(function(v1, v2){
            if(v1 > v2){
                return 1;
            }else{
                return -1;
            }
        });
        sueldoEmpleados.reverse()
        for (let i = 0; i < sueldoEmpleados.length; i++) {
            document.write(`Este es el sueldo del empleado ${i} = ${sueldoEmpleados[i]}${"<br>"}`)            
        }
*/

//========================================================================= Arrays slice() ==============================================================================================================================================================================================================================================================
/*
    Si queremos extraer desde una determinada posición hasta el final del vector debemos llamar al método slice con un solo parámetro:

       let vec=[10,20,30,40,50,60];
       let vec2=vec.slice(2); // vec2 almacena [30,40,50,60]

    Si queremos indicar una posición pero comenzando desde el final del vector debemos indicar un valor negativo en el primer parámetro:

      let vec=[10,20,30,40,50,60];
      let vec2=vec.slice(-2); // vec2 almacena [50,60]

    También podemos indicar el segundo parámetro:

      let vec=[10,20,30,40,50,60];
      let vec2=vec.slice(-3,-1); // vec2 almacena [40,50]  

    Por último podemos indicar el primer parámetro un valor positivo y el segundo un valor negativo indicando una posición desde el final

      let vec=[10,20,30,40,50,60];
      let vec2=vec.slice(1,-1); // vec2 almacena [20,30,40,50]

*/
/*Crear un vector de 10 elementos con valores aleatorios comprendidos entre 0 y 1000. 
Buscar el menor y luego generar otro vector a partir de dicha posición hasta el final.
let array = [];
let indice = 0;
do{
    let numRandom = parseInt(1 + Math.random() * 1000);
    array.push(numRandom);
    document.write(array[indice] + "<br>");
    indice++
}while(array.length < 10);
    let valorMin = Math.min(...array);
    let posicion = array.indexOf(valorMin);
    let arrayNuevo = array.slice(posicion);
    document.write("Aqui esta el array que parte desde el valor minimo del array original = " + arrayNuevo.join("-"));


*/
//========================================================================= Arrays toString() / Join() ==============================================================================================================================================================================================================================================================
/*Crear un vector de 10 elementos. 
Inicializar los valores del vector cuando se crea. 
Inicializar dos variables que resulten de llamar primero al método toString() 
y la segunda variable inicializarla llamando al método join() sin parámetros. Mostrar un mensaje si el resultado de 
la ejecución de los dos métodos retorna el mismo valor (empleando un if para comparar los string) 


let array = [];
for(let i = 0; i < 10; i++){
    let numeroAleat = parseInt(1+ Math.random() * 1000);
    array.push(numeroAleat);
    document.write(array[i] + "<br>")
}
let aPalabra = array.toString();
let insertar = array.join();
if(aPalabra == insertar){
    alert("Son iguales")
}else{
    alert("Son distintos")
}

document.write(array+ "<br>")
document.write(aPalabra+ "<br>")
document.write(insertar+ "<br>")
*/
//========================================================================= Formas de recorrer un arreglo ==============================================================================================================================================================================================================================================================
//indice me devuelve la posicion de los elementos
/*let vec = [10, 20, 30, 40, 50];
for (let indice in vec) {
    document.write('indice:' + indice);
    document.write(' valor=' + vec[indice] + '<br>');
}
*/
/*
//For in no denso, el forIn no accede a componentes inexistentes.

let vec = [10, , 30, , 50];
document.write('Recorredo del vector con un for clásico<br>');
for (let f = 0; f < vec.length; f++) {
    document.write(vec[f] + '-');
}
document.write('<br>');
document.write('Recorredo del vector con un for in<br>');
for (let indice in vec) {
    document.write(vec[indice] + '-');
}
*/
/*
//ForEach
let vec = [10, 20, 30, 40, 50];
vec.forEach(function(componente, indice) {
    document.write('Posición:' + indice + ' = ');
    document.write(componente + '<br>');
})*/

//========================================================================= Functions objeto arguments ==============================================================================================================================================================================================================================================================
