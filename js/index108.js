function sort(number1, number2, number3, highToLow){
    let temp;
    if (number1>number2){
        temp = number1; 
        number1=number2;
        number2=temp; 
    }
    if(number2>number3){
        temp=number2; 
        number2=number3;
        number3=temp;
    }
    if(number1>number2){
        temp = number1;
        number1=number2;
        number2=temp;
    }
    if(highToLow){
        console.log(number3,number2,number1);
    }else{
        console.log(number1,number2,number3);
    }
}
sort(10, 25, 8, true);