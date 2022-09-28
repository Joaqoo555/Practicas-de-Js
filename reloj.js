/*function reloj(){
    let watch = new Date();
    let hr = watch.getHours();
    let min = watch.getMinutes();
    let seg = watch.getSeconds();

    let mT = hr > 12 ? "<span> PM</span>" : "<span> AM</span>";
    hr = hr === 0 ? 12 : hr;
    hr = hr > 12 ? hr - 12 : hr;
    //Se agrega el cero delante de los numeros menores a 10.
    hr = agregarCero(hr);
    min = agregarCero(min);
    seg = agregarCero(seg);
    document.getElementById("horas").innerHTML = hr + ":" + min + ":" + seg + mT;
    
    let day = ["lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

    let elegirDia = day[watch.getDay() -1];
    let mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let elegirMes = mes[watch.getMonth()]
    let año = watch.getFullYear();
    let date = `${elegirDia}, ${elegirMes}, ${año}`;
    document.getElementById("dias").innerHTML = date;

    let time = setTimeout(function(){ reloj() }, 500);
}


function agregarCero(x){
    if(x < 10){
        x = "0" + x;
        return x
    }else{
        return x
    }
}
*/
// function startTime() {
//     var today = new Date();
//     var hr = today.getHours();
//     var min = today.getMinutes();
//     var sec = today.getSeconds();
//     ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
//     hr = (hr == 0) ? 12 : hr;
//     hr = (hr > 12) ? hr - 12 : hr;
//     //Add a zero in front of numbers<10
//     hr = checkTime(hr);
//     min = checkTime(min);
//     sec = checkTime(sec);
//     document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
//     var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     var curWeekDay = days[today.getDay()];
//     var curDay = today.getDate();
//     var curMonth = months[today.getMonth()];
//     var curYear = today.getFullYear();
//     var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
//     document.getElementById("date").innerHTML = date;
    
//     var time = setTimeout(function(){ startTime() }, 500);
// }
// function checkTime(i) {
//     if (i < 10) {
//         i = "0" + i;
//     }
//     return i;
// }