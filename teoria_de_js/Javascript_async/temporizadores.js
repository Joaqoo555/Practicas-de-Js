//De esta manera se puede imprimir en la consola, un reloj en el navegador.
//Estos dos tienen sus cojntrapartes que los cancela
//El el caso de setTimeout es clearTimeout, que enviandole por parametro la funcion guardad en una variable, la va a cancelar ej= 


//recibe una callback o funcion por parametro y lo va a ejecutar luego de que ocurra ese tiempo.
let timeout = 1000;
let tiempo_1 = setTimeout(() => {
    console.log("Inicio");
    console.log("Inicio");
}, timeout);

clearTimeout(tiempo_1);
console.log("SE LIMPIO SET TIMEOUT");


//Cada cierto tiempo va a llamar a la funcion que le pasamos por parametro, lo va a ejecutar indefinidamente.
let interval = 1000;
let tiempo_2 = setInterval(() => {
    console.log("SET");
}, interval);

clearInterval(tiempo_2)
console.log("SE LIMPIO SET INTERVAL");