// Requireds
const fs = require('fs');

let crearArchivo = ( base ) => {
    return new Promise( (resolve, reject) => {

        if( !Number(base) ){
            reject(`El valor introducido ${base}, no es un número!`);
            return;
        }

        let data = '';

        for(let i = 1; i<16; i++){
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
    crearArchivo
}



