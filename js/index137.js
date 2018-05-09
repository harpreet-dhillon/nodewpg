let numbers = [];
for(let i = 0; i < 1000; i++){
    let temp = numbers.push(i);
}
console.log(`Original Number: ${numbers}`);
const newNumbers = numbers.map(function(num, index){
    let number = num;
    num = num + 10;
    return console.log(`Index: ${index}, Original Number: ${number}, Incremented Value: ${num}`);
});