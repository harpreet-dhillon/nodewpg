function biggerNumber(firstNumber, secondNumber){
    if((typeof firstNumber !=='number') || (typeof secondNumber !=='number')){
        console.log('Only numeric value accepted');
    }
    else{
        if(firstNumber > secondNumber){
            console.log(`Number ${firstNumber} is biggar than ${secondNumber}`);
        }
        else if(firstNumber < secondNumber){
            console.log(`Number ${secondNumber} is biggar than ${firstNumber}`);
        }
        else{
            console.log(`Both numbers are ${firstNumber}`);
        }
    }

}

biggerNumber(3, 5);