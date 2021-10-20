function combineArrays(arr1, arr2){
    let combinado = [...arr2, ...arr1];
    console.log(combinado)
}
combineArrays([1,2], [3,4])