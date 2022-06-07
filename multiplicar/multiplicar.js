var colors = require('colors');
const fs = require('fs');
const { Module } = require('module');

let listarTabla = (base,limite)=> {
    console.log('====================='.green);
    console.log(`   Tabla de ${base}`.green);
    console.log('====================='.green)
    
    for(let i = 1; i<=limite;i++){
        console.log(base+' x '+i+' = '+base*i)
    }
}

let crearArchivo = (base,limite) =>{
    return new Promise ((resolve,reject)=>{
        if(!Number(base)){
            reject('El valor introducido no es un Numero')
            return;
        }
        let data =''
        for(i=1;i<=limite;i++) {
            data += base+' * '+i+' = '+ i*base+'\n'
        }
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject (err)
            else resolve(`tablas/tabla-${base}-al-${limite}.txt`)
          });
    })
}
module.exports ={
    crearArchivo,
    listarTabla
}
