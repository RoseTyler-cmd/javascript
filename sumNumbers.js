function sumNumbers(...resto){
    let suma = 0;
    for(item in resto){
        if(typeof resto[item] == 'number'){
            suma += resto[item]
        }
    }
    console.log(suma);
}
sumNumbers("Hola", 3, 7, [6,8])