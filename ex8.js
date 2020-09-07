const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8082');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const port = 8082;

app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json());

app.get('/retorna-json', function(req, res) {
    res.json({data: {fintech: "Paketa"}});
});

app.listen(port);