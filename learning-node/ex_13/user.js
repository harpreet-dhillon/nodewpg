const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send('Please Log to get a user');
});

router.put('/', function(req, res){
    res.send('Please Log to update a user');
});

router.post('/', function(req, res){
    res.send('Please Log to create a user');
});

router.delete('/', function(req, res){
    res.send('Please Log to delete a user');
});

module.exports = router;