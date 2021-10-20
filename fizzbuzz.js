
function fizzbuzz (num){

    for(i = 0; i<=num; i++){
        let str = String(i);
        if(str.endsWith("3")){
            console.log("fizz, " );
        }else if(str.endsWith("15")){
        console.log("fizzbuzz, " );
        }else if(str.endsWith("5")){
            console.log("buzz, " );
        }else{console.log(str, )}
    }
}

let num = prompt("Dime un número y jugamos a fizzbuzz")
fizzbuzz(num)