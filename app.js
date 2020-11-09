/*Importar configurações do servidor*/

var app = require('./config/server');

/* Porta de escuta*/
app.listen(80, function(){

	console.log("Servidor On")
})