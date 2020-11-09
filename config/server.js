/* Importar express*/
var express = require('express');

/* Importar consign*/
var consign = require('consign');

/* Importar bodyParser*/
var bodyParser = require('body-parser');

/* Importar expressValidator*/
var expressValidator = require('express-validator');


/*Inicia objeto do express*/
var app = express();

/* Seta variaveis view-engine*/
app.set('view-engine', 'ejs');
app.set('views', './app/views');


/* Configura o middleware*/
app.use(express.static('./app/public'));

/* Configura o body-parser*/
app.use(bodyParser.urlencoded({extended: true}));

/* Configura o body-parser*/
app.use(expressValidator());


/*Efetua o autoload das rotas, models e controllers*/
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);


/*exporta o modulo*/
module.exports = app;