let vector = new Array(20);

// Relleno la matriz con un bucle for
function rellenar(vector){
    for(i=0; i<vector.length; i++){
        vector.fill(Math.floor(Math.random() * 10), i);
    }
    console.log(vector)
}
/* Cuenta las veces que se repite un número para posteriormente comprobar cual
 se repite más usando otra función*/
function verifica(num){
    let cont=0
    for(let j=0; j<vector.length; j++){
        if(num == vector[j]){
            cont++;
        }
    }
    return cont
}
// Saca la moda del vector
function moda(vector){
    let rep=0 // Guardo las veces que se repite un número
    let valor=0 // Aqui se guardará el número que más se haya repetido
    vector.sort() // Ordeno el array para recorrerlo fácilmente
    
    /* Compruebo en cada iteracción mediante la función verifica()
    las veces que se repite el número que está recorriendo*/
    for(let i=0; i<vector.length; i++){
      /* Si rep es menor al resultado de verifica() significa que no es el 
       número que más veces se repite, entonces se guarda el valor del 
       contador */ 
        if(rep<verifica(vector[i])){
            rep=verifica(vector[i])
            valor=vector[i]
        }
    }
    return valor
}
rellenar(vector)
// Muestro el resultado de la moda
 console.log("La moda del Array es: "+moda(vector))