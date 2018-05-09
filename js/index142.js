const firstPerson = ['Harpreet', 'Dhillon', 'Winnipeg', 31];
const secondPerson = ['Harpreet', 'Dhillon', 'Sydney', 31];
const firstString = firstPerson.reduce(function(acc, value){
    return acc + value;
});
const secondString = secondPerson.reduce(function(acc, value){
    return acc + value;
});
// console.log(firstString);
// console.log(secondString);
if(firstString === secondString){
    console.log(`They are same person`);
}
else{
    console.log('They aren\'t same person');
}