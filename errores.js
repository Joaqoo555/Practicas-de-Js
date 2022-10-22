//Tiene una sintaxis como if else, Es una estructura que nos va a permitir evaluar ciertas fracciones de codigo, si llega a ocurrir un error en el codigo, se va a capturar en el catch. Posee la siguiente sintaxis

//Cuando catch captura un error en try, corta el proceso de lectura en el punto donde esta el error y no deja que siga corriendo el programa, es como un return, 
/*
try {
//Codigo que vamos a estar evaluando, Se agrega el codigo a evaluar. Si aqui adentro hay un error, el que captura el error va a ser parte del catch    
console.log('Hola como estas');
noExiste //esto es un error
console.log('Segundo mensaje en el try ');
} catch (error) {
    //Catch captura cualquier error surgido o lanzado en el try
console.log('Capturamos un error');
console.log(error);

}finally{
  //El bloque finally, se ejecutara siempre al final de un bloque try/catch
console.log('Ejecuta todo lo de try');
}

//Errores personalizados.
try{
  let numero = "hola";
  if(isNaN(numero)){
    throw new Error(`${numero} no es un Numero`)
  }
  console.log(numero * numero);
}catch(error){
  console.log(`Se produjo el siguiente error ${error}`);
}

//en al programacion del lado del servidor, siempre lo primero que passan es evaluar si hay un objeto de error, y si no, se lanza y sigue con la ejecucion del codigo

//Con esta estructura podriamos tener mejor programada nuestra app
*/
