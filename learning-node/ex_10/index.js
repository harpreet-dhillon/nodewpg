//require express/one-line-joke
const express = require('express');
const onelinejokes = require('one-liner-joke');
//create express server
const server = express();
//jokes
const randomJoke = onelinejokes.getRandomJoke();
let jokeBody = randomJoke.body;
let jokeCategory = randomJoke.tags;
//  console.log(randomJoke);
// const jokeTags = randomJoke.tags;
//configure the defualt route and send a text to the server
server.get('/', function(request, response){
    response.send('Welcome');
});

server.get('/jokes', function(request, response){
    response.send(`${jokeCategory}, ${jokeBody}`);
});

server.get('/joke', function(request, response){
    response.send(jokeBody);
});
server.post('/joke', function(request, response){
    response.send(`my jokes are too funny, I'm not getting new ones from you..`);
});

server.put('/joke', function(request, response){
    response.send(`no, no, no.. not changing my act dude!`);
});

server.delete('/joke', function(request, response){
    response.send(`good jokes never get to old`);
});

server.all('/joke', function(request, response){
    response.send(`I know I'm so good that you're looking for jokes everywhere`);
});
//configure the listening port 
server.listen(3000, function(err){
    if(err){
        console.log('unable to start server');
    }
    console.log('server is listening on port 3000');
});