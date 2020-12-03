// Requireds
const { rejects } = require('assert');
const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject)=>{
        if(!Number(base)){
            reject(`El valor introducido ${base}, no es un número!`);
            return;
        }else{
            if (!Number(limite)){
                reject(`El valor introducido ${limite}, no es un número!`);
                return;
            }
        }
        
        let data = '';

        for(let i = 1; i<=limite; i++){
            data += `${base} * ${i} = ${base*i}\n`
        }

        if(data){
            resolve(data)
        }else{
            reject(e)
        }
    });
}

let crearArchivo = ( base, limite = 10 ) => {
    return new Promise( (resolve, reject) => {

        if( !Number(base) ){
            reject(`El valor introducido ${base}, no es un número!`);
            return;
        }else{
            if (!Number(limite)){
                reject(`El valor introducido ${limite}, no es un número!`);
                return;
            }
        }

        let data = '';

        for(let i = 1; i<=limite; i++){
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/T-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else 
                resolve(`T-${base}.txt`)
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla,
}



