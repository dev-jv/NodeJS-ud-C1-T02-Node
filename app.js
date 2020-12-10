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

// --------------------------------------------------------------------------------- <> yargs > 'node app listar/crear -b x -l y'

// // ------------------------- <> import en config/yargs.js
//     const argv = require('yargs')
//                     .command('listar', 'Imprime en consola la tabla', { 
//                         base : {
//                             demand: true,
//                             alias: 'b', 
//                         },
//                         limite: {
//                             alias: 'l',
//                             default: 10,
//                         }
//                     })
//                     .command('crear', 'Genera un archivo .txt con la tabla', { 
//                         base : {
//                             demand: true,
//                             alias: 'b', 
//                         },
//                         limite: {
//                             alias: 'l',
//                             default: 10,
//                         }
//                     })
//                     .help()
//                     .argv;
// //

const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
            .then( x => console.log(x))
            .catch( e => console.log(e))
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch( err => console.log(err))
        break;
    default:
        console.log('Comando no reconocido');
}

// let argv2 = process.argv;

// console.log(argv2); // Lo normal ...
// console.log(argv); // Con yargs

console.log( ' Base', argv.base);
console.log( ' Limite', argv.limite);





///// ----------------------------------- cmds
// 'node app listar --base x --limite y'
// 'node app listar -b x -l y'
// 'node app listar --help
// 'node app --help

// 'node app crear --base x --limite y'
// 'node app crear -b x -l y'
// 'node app crear --help
// 'node app --help



