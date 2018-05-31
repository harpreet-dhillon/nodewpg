const express = require('express');
const Logger = require('logplease');
const logplease = Logger.create("using logger");
const app = express();

app.get('/', function(response, request){
    logplease.log('Congrats you\'re using your first Node.js and Express as Web Server');
});

app.listen(3000, function(err){
    if(err){
        logplease.log('Unable to start the server on port 3000');
    }
    logplease.log('This HTTP server is running on port 3000');
});