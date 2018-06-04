const express = require('express');
const server = express();
const port = 3000;
const route = express.Router();


route.get('/', function(req, res){
    res.json({
        status: 200,
        message: "Este request/response está OK"
      });
});

const requestTime = (req, res, next) => {
    const message = `Request: ${req.baseUrl} ${Date.now()}`;
    console.log(message);
    
    next();
};

server.use(requestTime);


server.listen(3000);