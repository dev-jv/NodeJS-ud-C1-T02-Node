// --------------------------------------------------------------- <> process.argv > 'node app --base=x'
// const { crearArchivo } = require('./multiplicar/multiplicar');

// // let base = '3';

// // console.log(process.argv); // [C.., D...]
// let argv = process.argv;
// let parametro = argv[2]; // --base=x
// let base = parametro.split('=')[1] // x

// // console.log(base);

// crearArchivo(base)
// .then( archivo => console.log(`Archivo creado: ${ archivo }`))
// .catch( err => console.log(err))

// --------------------------------------------------------------------------------- <> yargs > 'node app listar -b x -l y'
const argv = require('yargs')
                .command('listar', 'Imprime en consola la tabla de multiplicar', { 
                    base : {
                        demand: true,
                        alias: 'b', 
                    },
                    limite: {
                        alias: 'l',
                        default: 10,
                    }
                })
                .help()
                .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');


// let argv2 = process.argv;

// console.log(argv2); // Lo normal ...
// console.log(argv); // Con yargs

console.log( ' Base', argv.base);
console.log( ' Limite', argv.limite);


// 'node app listar --base x --limite y'
// 'node app listar -b x -l y'
// 'node app listar --help
// 'node app --help



