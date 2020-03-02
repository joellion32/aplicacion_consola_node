const argv = require('../src/config/yargs').argv;
const tarea =  require('../src/controllers/por-hacer')
const colors = require('colors');
// para los comandos
let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('crear tarea')
        let tarea_resultado = tarea.crear(argv.descripcion);
        console.log(tarea_resultado);
    break;

    case 'listar':
        let lista_tarea = tarea.getListado();
       for(let tarea of lista_tarea){
        console.log('============== Por Hacer ================='.green)
        console.log(tarea.descripcion);
        console.log('estado:', tarea.completado);
        console.log('=========================================='.green)
       }
    break;

    case 'actualizar':
       let actualizar = tarea.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar)
    break;

    case 'borrar':
       let borrar = tarea.borrar(argv.descripcion);
        console.log(borrar);
    break;

    default:
        console.log('no existe ningun comando')
    break;
}