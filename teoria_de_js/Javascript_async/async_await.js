function cuadradoPromise(value){
    return new Promise((resolve, reject)=>{
        if(typeof value !== "number") return reject("El valor ingresado no es un numero")
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            }); 
        }, 0 || Math.random * 100);
    });
}

const funcionAsync = async () => {
    //vamos a poner todo el codigo a analizar dentro de try, si existe algun error, lo recibira el catch
    try{
        //guardamos en una variable la llamada a la funcion que crea la promesa, le colocamos un await ya que es una promesa.
        //Cada peticion la podemos guardar en una variable, para evitar el promise hell
        let obj = await cuadradoPromise(0);
        console.log(obj);
         obj = await cuadradoPromise(2);
        console.log(obj);
         obj = await cuadradoPromise(3);
        console.log(obj);
         obj = await cuadradoPromise(4);
        console.log(obj);
         obj = await cuadradoPromise(5);
        console.log(obj);
         obj = await cuadradoPromise("6");
        console.log(obj);
         obj = await cuadradoPromise(7);
        console.log(obj);
    }catch(error){
        console.log(error);
    }
}

async function funcionAsynbc2() {
    try{
        let obj = await cuadradoPromise(10);
        console.log(obj);
         obj = await cuadradoPromise(12);
        console.log(obj);
         obj = await cuadradoPromise(13);
        console.log(obj);
         obj = await cuadradoPromise(14);
        console.log(obj);
         obj = await cuadradoPromise("15");
        console.log(obj);
         obj = await cuadradoPromise(18);
        console.log(obj);
         obj = await cuadradoPromise(17);
        console.log(obj);
    }catch(err){
        console.log(err);
}
}
funcionAsync();
funcionAsynbc2();
