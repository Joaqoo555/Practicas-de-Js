/*
let arr = [[1,2],[3,4],[5,6]];
let masLargo;
let masLargo2 = []

for(let i = 0; i < arr.length; i++){
    //Pinto cada arreglo que contiene los numeros
    console.log(arr[i]);
    //Asigno a una veriable el numero de la posicion 0 de cada uno de los arreglos chiquitos
    masLargo = arr[i][0];
    //Imprimo el primer numero de cada arreglo chiquito
    console.log("masLargo => " + masLargo);
    for(let j = 0; j < arr[i].length; j++){
        //pinto los numeros que hay en cada arreglo adentro del arreglo grande
        console.log("Imprimo cada numero por separado => " + arr[i][j]);
        if(arr[i][j] > masLargo){
        //si cada numero de cada arreglo chiquito, es mayor que el primer numero de cada arreglo chiquito, voy a ejecutar el siguiente codigo
        //Cada vez que se cumpla la condicion, voy a volver a asignarle un valor nuevo a "masLargo" (El valor que le voy a asignar, va a ser el numero siguiente, hasta que la condicion no se cumpla, osea hasta que encuentre el nnumero mas grande dentro de cada array chiquito)
            masLargo = arr[i][j];
            console.log("encuentra el mas grande => " + masLargo);
        }
        //salgo del segundo bucle for para asignar a mi nuevo array el numero mas grande de cada array chiquito
        masLargo2[i] = masLargo;
    }
}
console.log("Imprime solo los numeros mas grandes =>" + masLargo2)




*/




let arr = [[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]];
let masLargo1 = 20
let masLargo2 = []

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        //si cada valor individual es mayo que el valor que vos pasa como por ejemplo 20, se va a ejecuar el siguiente codigo=>
        //aca esta el primer error, no estas recorriendo el valor de cada array chiquito, por lo que no sabes cuanto va a valer cada uno, por ende, no podes hacer una comparacion de cual va a ser mayor que cual, lo unico que decis es que vas a imprimr todo lo que sea mayor a un numero que vos decis.
        if (arr[i][j] > masLargo1) {

            masLargo1 = arr[i][j]

            console.log(`Imprimo cada valor, si cada valor es mayor a un numero que paso yo => ${masLargo1}`);

            //si J osea si el indice J = 3 (aca no se que quisite decir, estas diciendo que cuando la variable J en tu for sea = 3 osea, si tu array tiene in indice 3 vas a hacer tal codigo)
            if(j === 3){
                //harias que todos los numeros que sean mayores a 20 en este caso,  se pusheen a el segundo arreglo, pero solo si J = 3
                masLargo2.push(masLargo1)
                console.log(masLargo2);
            }
        }        
    }    
} 