const arithmetic = {
    add: function(number1, number2){
        if((typeof number1 != 'number') || (typeof number1 != 'number')){
            console.log('Wrong values entered');
        }
        else{
            console.log('Reminder: ' + number1 + number2);
        }
    },
    substract: function(number1, number2){
        if((typeof number1 != 'number') || (typeof number1 != 'number')){
            console.log('Wrong values entered');
        }
        else{
            console.log('Reminder: ' + number1 - number2);
        }
    },
    multiply: function(number1, number2){
        if((typeof number1 != 'number') || (typeof number1 != 'number')){
            console.log('Wrong values entered');
        }
        else{
            console.log('Reminder: ' + number1 * number2);
        }
    },
    divide: function(number1, number2){
        if((typeof number1 != 'number') || (typeof number1 != 'number')){
            console.log('Wrong values entered');
        }
        else{
            console.log('Reminder: ' + number1 / number2);
        }
    },
    remainder: function(number1, number2){
        if((typeof number1 != 'number') || (typeof number1 != 'number')){
            console.log('Wrong values entered');
        }
        else{
            console.log('Reminder: ' + number1 % number2);
        }
    }
};
arithmetic.add(2, 10);
arithmetic.substract(10, 5);
arithmetic.multiply(3, 100);
arithmetic.divide(40, 2);
arithmetic.remainder(20, 2);