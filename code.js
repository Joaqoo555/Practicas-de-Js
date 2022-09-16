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

*/

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