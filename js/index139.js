let numbers = [];
for(let i = 0; i < 1000; i++){
    let temp = numbers.push(i);
}
const evenNumbers = numbers.filter(function(num){
    if(num % 2 == 0){
        // console.log(num);
        return num;
    }
});
const oddNumbers = numbers.filter(function(num){
    if(num % 2 != 0){
        // console.log(num);
        return num;
    }
});
for(let i = 0; i < 20; i++){
    console.log(evenNumbers[i]);
}
for(let i = 0; i < 10; i++){
    console.log(oddNumbers[oddNumbers.length-1]);
    oddNumbers.length--;
}
// for(let i=19;i>0;i--){
//     console.log(evenNumbers.pop());
// }