//Que son los callbacks?

/*
Para trabajar la asincronía, js tiene diferentes mecanismos, Una de ellas es una callback, Es una función que se va a ejecutar, luego de que otra lo haga. 
Si se necesitan trabajar varias callbacks anidadas, se forma un callback Hell.
*/

function cuadradoCallback (value, callback){
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | Math.random() * 100);
}
cuadradoCallback(0, 
  (value, resultado)=>{
    console.log("Inicia callback");
    console.log(`callback : ${value}, ${resultado}`);
      cuadradoCallback(1, 
        (value, resultado)=>{
          console.log("Inicia callback");
          console.log(`callback : ${value}, ${resultado}`);
          cuadradoCallback(2, 
            (value, resultado)=>{
              console.log("Inicia callback");
              console.log(`callback : ${value}, ${resultado}`);
              cuadradoCallback(3, 
                (value, resultado)=>{
                  console.log("Inicia callback");
                  console.log(`callback : ${value}, ${resultado}`);
                  cuadradoCallback(4, 
                    (value, resultado)=>{
                      console.log("Inicia callback");
                      console.log(`callback : ${value}, ${resultado}`);
                      cuadradoCallback(5, 
                        (value, resultado)=>{
                          console.log("Inicia callback");
                          console.log(`callback : ${value}, ${resultado}`);
                      
                      });
                  });
              });
          });
      });
        
});