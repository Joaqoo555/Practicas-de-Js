//Promesas.

//Para no hacer un callback hell, se realiza un mecanismo que se llaman Promesas

function cuadradoPromise (value){  
    return new Promise((resolve, reject)=>{
            //para detectar un error, lo controlamos con reject, ejemplo, si en (value) = NaN, va a tirar un error
        if(typeof value !== "number"){
            return reject("Error")
        }

        setTimeout(() => {
            //resolve, es el return positivo de la promesa, si es que se cumple
            resolve({
                value, //El valor que nos pasan
                result: value * value
            })
          }, 0 | Math.random() * 100);
    });
}
//Se ejecuta la funcion:
//Cuando nosotros tenemos una funcion, que devuelve una promesa, tenemos 2 metodos para ir trabajando la asincronia.
//then : Es el siguiente bloque que se va a ejecutar una vez que se cumpla la funcion inicial
cuadradoPromise(0)
    //Este then recibe la parte positiva de la promesa, por ende, then recibe el objeto que creamos dentro de resolve, todo lo que entra en el resolve, then lo devuleve en el parametro obj, por lo que si nosotros imprimios ese parametro, obtendremos todo lo del then
    .then(obj=>{
        console.log("Comienza promesa");
        console.log(obj);
        return cuadradoPromise(1)
    })
    .then(obj =>{
        console.log(obj);
        return cuadradoPromise(2)
    })
    .then(obj =>{
        console.log(obj);
        return cuadradoPromise(3)
    })
    .then(obj =>{
        console.log(obj);
        return cuadradoPromise("4")
    })
    .then(obj =>{
        console.log(obj);
        return cuadradoPromise(5)
    })
    .then(obj => console.log(obj))
    //el catch recibe lo que el 
    .catch(err => console.log(err));