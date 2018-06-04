const express = require('express');
const path = require('path');
const server = express();
const port = 3000;

server.get('/', function(req, res){
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

server.get('/products', function(req, res){
    res.status(500).send('Server error, please try it later');
});

server.get('/users', function(req, res){
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

server.listen(port, function(err){
    if(err){
        console.log('not listening');
    }
    console.log('server is listening');
});