const argv = require('yargs').command('crear', 'crear tarea por hacer', {
descripcion:{
demand: true,
alias: 'd',
desc: 'Descripcion de la tarea por hacer'       
} 
}).command('actualizar', 'actualizar tarea por hacer', {
descripcion:{
demand: true,
alias: 'd',
desc: 'Descripcion de la tarea por hacer'       
}, 
completado: {
demand: true,
alias: 'c',
desc: 'Marca como completado la tarea por hacer'       
}     
}).command('borrar', 'borrar una tarea', {
descripcion:{
demand: true,
alias: 'd',
desc: 'Descripcion de la tarea que se va a borrar'       
},   
})
.help()
.argv



module.exports = {
  argv  
};