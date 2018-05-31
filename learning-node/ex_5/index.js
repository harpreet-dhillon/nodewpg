const Logger = require('logplease');
const evenNumber = Logger.create("evenNumber");
const oddNumber = Logger.create("oddNumber");
const numbers = require('./numbers');
const numberArray = [2, 3, 101, 201, 202, 100];
numberArray.forEach(function(num){
    if(numbers(num)){
        evenNumber.info(`${num} is even number`);
    }
    else{
        oddNumber.error(`${num} is Odd number`);
    }
});