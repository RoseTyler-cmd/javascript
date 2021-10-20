const modulos = [
    {
    nombre: 'Sistemas informáticos',
    curso: 1,
    alumnos: [
    'Don Pepito', 'Perico', 'Don José'
    ]
    },
    
    {
    nombre: 'Desarrollo Web en entorno cliente',
    curso: 2,
    alumnos: [
    'Juan', 'Perico', 'Andrés', 'Don Pepito'
    ]
    }
   ]
   let curso1 = [];
   let curso2 = [];

   for(modulo of modulos){
    for(alumno of modulo.alumnos){
        if(modulo.curso == 1 && !curso1.includes(alumno)){
            curso1.push(alumno);
        }else if(modulo.curso == 2 && !curso2.includes(alumno)){
            curso2.push(alumno);
        }
    }
   }

   for(alumno of curso1){
       if(curso2.includes(alumno))
       console.log(alumno);
   }
 
