const express = require('express');
const server = express();
const port =  3000;

server.get('/', function(req, res){

});

server.use('/assets',express.static('public'));
server.listen(port);