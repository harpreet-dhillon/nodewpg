const express = require('express');
const home = require('./home');
const user = require('./user');

const server = express();
const port = 3000;

server.use('/', home);
server.use('/user', user);

server.listen(port, function(err){
    if(err){
        console.log('Something is wrong');
    }
    console.log('server is listening');
});