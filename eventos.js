//Eventos
//Eventos: click y dblclick
/*Dos eventos que podemos capturar de cualquier elemento HTML son cuando un usuario hace un 
clic o un doble clic sobre el mismo.
El evento click se produce cuando el usuario hace un solo clic sobre el elemento HTML y 
suelta inmediatamente el botón del mouse en el 
mismo lugar y el dblclick cuando presiona en forma sucesiva en la misma ubicación.

Para probar como registramos estos eventos implementaremos 
una página que muestre dos div y definiremos el evento click para el primero y 
el evento dblclick para el segundo.

document.getElementById('recuadro1').addEventListener('click', presion1);
document.getElementById('recuadro2').addEventListener('dblclick', presion2);

function presion1(){
    alert('Se hizo click');
}
function presion2(){
    alert('Se arrastro el click');
}*/

/*Realizar un programa que muestre en un div el número 2. 
Cada vez que se hace doble clic sobre el mismo duplicar el valor contenido en el div. 

document.getElementById("numero").addEventListener("dblclick", multiplicar)


function multiplicar(){
    let numero = document.getElementById("numero").innerHTML;
    numero = parseInt(numero);
    let resultado = numero * 2;
    document.getElementById("numero").innerHTML = resultado
}
*/

//========================================================================================Mouse down / Mouse upp======================================
/*Registramos los eventos mousedown y mouseup para los dos div, al div recuadro1 procedemos a registrar el evento mousedown y al div recuadro2 procedemos a registrar el evento mouseup:
     document.getElementById('recuadro1').addEventListener("mousedown", presion1);
        document.getElementById('recuadro2').addEventListener('mouseup', presion2);

        function presion1() {
            document.getElementById('recuadro1').innerHTML = 'Se presiona el mouse y todavía no se soltó';
        }

        function presion2() {
            document.getElementById('recuadro2').innerHTML = 'Se presiona el mouse y se soltó';
        }
        */
/*

        //Elaborar un programa que muestre un div de color rojo. Cuando se presione cambiar el color a 
        //amarillo y luego de soltar el botón del mouse volver a pintar de rojo. 
        document.getElementById("recuadro1").addEventListener("mouseup", click1)
        document.getElementById("recuadro1").addEventListener("mousedown", click2)

        
        
        function click1(){
            let recuadro = document.getElementById("recuadro1");
            recuadro.style.background = "red"
        }
        function click2(){
            let recuadro = document.getElementById("recuadro1");
            recuadro.style.background = "yellow"
        }        */




//======================================================================================== mouseHover mouseOut ======================================
/*
document.getElementById('recuadro1').addEventListener('mouseover', entrada);
document.getElementById('recuadro1').addEventListener('mouseout', salida);

function entrada() {
    document.getElementById('recuadro1').style.borderRadius = '30px';
}

function salida() {
    document.getElementById('recuadro1').style.borderRadius = '0px';
}
*/

//======================================================================================== mousemove ======================================
/*mplementaremos para ver su funcionamiento una página que muestre un div que capture el evento mousemove y como acción incrementaremos un contador para saber la cantidad de veces que se disparó el evento.
document.getElementById("contenedor").addEventListener("mousemove", mover)
function mover (){
    let contador = parseInt(document.getElementById("cantidad").innerHTML);
    contador++
    document.getElementById("cantidad").innerHTML = contador;
}
*/

//======================================================================================== Eventos focus, blur ======================================
/*

    <input type="text" id="text1" name="text1" size="30">
    <br>
    <input type="text" id="text2" name="text2" size="30">



document.getElementById('text1').addEventListener('focus', tomarfoco1);
document.getElementById('text2').addEventListener('focus', tomarfoco2);
document.getElementById('text1').addEventListener('blur', perderfoco1);
document.getElementById('text2').addEventListener('blur', perderfoco2);

function tomarfoco1() {
    document.getElementById('text1').style.color = '#ff0000';
}

function tomarfoco2() {
    document.getElementById('text2').style.color = '#ff0000';
}

function perderfoco1() {
    document.getElementById('text1').style.color = '#000000';
}

function perderfoco2() {
    document.getElementById('text2').style.color = '#000000';
}*/

//======================================================================================== Eventos submit ======================================
/*Para probar el funcionamiento del evento submit implementaremos un formulario que solicita la carga de una clave y la repetición de la misma. Luego cuando se presione un botón de tipo "submit" verificaremos que las dos claves ingresadas sean iguales.

    <form method="post" action="procesar.php" id="formulario1">
        Ingrese clave:
        <input type="password" id="clave1" name="clave1" size="20" required>
        <br> Repita clave:
        <input type="password" id="clave2" name="clave2" size="20" required>
        <br>
        <input type="submit" id="confirmar" name="confirmar" value="Confirmar">
    </form>


document.getElementById("formulario1").addEventListener("submit", enviar)

function enviar(evt){
    const texto1 = document.getElementById("clave1").value;
    const texto2 =  document.getElementById("clave2").value;    
    if(texto1 != texto2){
        alert("Las claves ingresadas son incorrectas")
    evt.preventDefault();
    }
}*/
