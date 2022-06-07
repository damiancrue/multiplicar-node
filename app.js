const argv = require('./config/yargs').argv;
var colors = require('colors');

const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar')

let comando = argv._[0];
switch (comando) {
    case 'listar': 
        listarTabla(argv.base,argv.limite);
    break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
.then(archivo =>console.log(colors.green('Archivo creado:'),colors.inverse.red(`tabla-${argv.base}-al-${argv.limite}`),''))
.catch(e=>console.log(e));;
    break;
    default: console.log('comendo no reconocido');
}


//console.log(argv.limite)

