//La recurcion es un metodo que consta de crear una funcion y que esta misma se llame dentro de ella. Ej:

function vaciarArray(arr){
  //la funcion recibe un array, que voy a desglozar
  if(arr.length > 0){
    //si el array posee algun elemento voy a hacer este codigo
    console.log(arr);
    
    arr.pop();

    vaciarArray(arr)

  }else if(arr.length === 0){
    arr.push(arr);
  }
}
const arr = [2,3,4,5,6,7];

console.log(arr);

vaciarArray(arr);

console.log(arr);

console.clear();


//Estructuras de datos
//Nos referimos a como se organizan los datos, existeen muchas maneras de armar una estructura de datos 

//La recursividad se ejecuta una y otra vez hasta que se cumple una condicion de salida
const contadorRegresivo = a =>{
  if(a < 10){
    return console.log(a);
  }else{
    contadorRegresivo(a - 1)
  }
}
contadorRegresivo(10)