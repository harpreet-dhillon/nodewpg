// Create a new index99.js file
// Add all even numbers bettwen 0 and 1000 using for statement
// The iteration must break after finding the first 20 even numbers
// Show the result as output
for(var number = 0; number < 1000; number++){
    console.log('number: ' + number);
    if(number % 2 === 0){
        number += number;
        console.log(number);        
    }
    if(number == 20){
        break;
    }
}
console.log('last number: '+ number);