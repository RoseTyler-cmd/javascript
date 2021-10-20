function diamond(l){
    const abc = ['A','B','C','D','E','F','G','H','I',
'J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z']

let imp = ""
let letter = abc.indexOf(l)
let rep = letter


for(let i=0; i<=letter; i++){
    let dash = "-".repeat(rep)
        imp = dash+abc[i]+dash
        rep --
    if(rep == 0){
        rep = letter
            imp = abc[i]+dash+abc[i]
    } 

    for(let j=0; j<letter+3; j++){
       while(imp.length !== letter+3) 
        imp = imp+abc[i]+dash
        
    }
    console.log(imp)
    }
    for(let i=letter; i>=0; i--){
        rep = 0
        let dash = "-".repeat(rep)
            imp = dash+abc[i]+dash
            rep ++
        for(let j=0; j<letter+3; j++){
           while(imp.length !== letter+3) 
            imp = imp+abc[i]+dash
            
        }
        console.log(imp)
        }
}

diamond('C')