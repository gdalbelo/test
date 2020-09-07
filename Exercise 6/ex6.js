var express    	= require('express');
var app        	= express(); 
var bodyParser 	= require('body-parser');
var path 	   	= require('path');

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
	next();
});

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/ex6.html'));
});

app.listen(8082);

console.log('Impressões rodando na porta ' + 8082);