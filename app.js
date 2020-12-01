const { crearArchivo } = require('./multiplicar/multiplicar');

    // let base = '3';

// console.log(process.argv); // [C.., D...]
let argv = process.argv;
let parametro = argv[2]; // --base=x
let base = parametro.split('=')[1] // x

// console.log(base);

crearArchivo(base)
    .then( archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch( err => console.log(err))



