console.log("¡¡Hola mundo!!")

function saludo(hora){
    if(hora >= 7 && hora <= 12 ){
        alert("Buenos días");
    }else if(hora >12 && hora <=20){
        alert("Buenas tardes");
    }else if(hora >20 || hora <2){
        alert("Buenas noches");
    }else if(hora >2 && hora <7){
        alert("¿Qué haces despierto a estas horas?");
    }
}
let hoy = new Date();
let hora = hoy.getHours();
console.log(hora);
saludo(hora);

// let hora = 6;
// saludo(hora);
