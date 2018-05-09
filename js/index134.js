let numbers = [];
let temp = 0;
let i = 0;
while(i < 1000){
    temp = numbers.push(i);
    if(i % 2 != 0){
    console.log(i);
    }    
    i++;
}
for(i = 0; i<numbers.length; i++){
    temp += numbers[i];
}
if(temp == 500500){
    console.log('Good Job!!!');
}
else{
    console.log('Take a look to see if something is wrong');
}