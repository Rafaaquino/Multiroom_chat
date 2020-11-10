/*Importar configurações do servidor*/

var app = require('./config/server');

/* Porta de escuta*/
var server = app.listen(80, function(){

	console.log("Servidor On");
})


var io = require('socket.io').listen(server);


app.set('io', io);


io.on('connection', function(socket){

	console.log('usuario conectado');

	socket.on('disconnect', function(){
		console.log('usuario desconectado');
	})



});