//Nos permite conservar la referencia de un scope en particular y utilizarlo en alguna invocacion o algo, para eso nos sirve. en vez de usar lo que vimos en el archivo this
console.log(this);
this.lugar = "contexto global"
console.log(this.lugar);

function saludar(saludo, nombre){
    console.log(`${saludo}, ${nombre} desde ${this.lugar}`);
}
saludar()


//en vez de pasar como un metodo para obj1 la funcion saludar, puedo usar bind, call o apply
const obj1 ={
    lugar: "contexto de Obj1"
}
//le doy a llamar el contexto cuando le doy en el primer argumento de call

//call y apply son exactamente iguales, solo que uno recibe los argumentos por separados y el otro recibe solo 2 argumentos, apply recibe el primer argumeto que se refiere al scope de algun lugar, y el segundo argumento es un array de los parametros que va a tener la funcion con la que trabajamos.
saludar.call(obj1, "Hola", "joaquin")
saludar.apply(obj1, ["Hola", "sol"])
//Si usamos el null en vez de obj1, nos va a dar el this del contexto globla
saludar.apply(null, ["Hola", "sol"])





//BIND

const persona = {
    nombre: "miku",
    saludar: function(){
        console.log(`Hola! ${this.nombre}`);
    }
}
persona.saludar();


const otraPersona = {
    //este proceso me va a dar undefined, ya que estamos usando un metodo de otro objeto, el cual hace referencia a ese mismo objeto, por endem "otraPersona", no va a tener acceso a las propiedades de "persona", por lo que este metodo me va a dar undefinded. Con bind, puedo enlaazar los lugares/scopes de persona y otraPersona, para que "otraPersona" pueda acceder a la propiedad nombre de "persona".
 saludar: persona.saludar.bind(persona)
}
otraPersona.saludar();
