const express = require('express');
const server = express();
const port = 3000;
const path = require('path');

server.get('/', function(req, res){
    res.sendfile(path.join(__dirname, 'index.html'));
});
server.get('/products', function(req, res){
    res.sendfile(path.join(__dirname, 'products.html'));
});

server.listen(port, function(err){
    if(err){
        console.log('server cant start');
    }
    console.log(`server is listening on port: ${port}`);
});