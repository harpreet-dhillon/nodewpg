const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];
const newMutants = [];

mutants.forEach(function(name){
    if(name == 'Professor X' || name == 'Logan' || name == 'Phoenix' || name ==  'Gambit'){
        newMutants.push(`<3 ${name}`);
        // console.log(name);
    }
    else{
        newMutants.push(name);
    }
});
console.log(mutants);
console.log(newMutants);


// const mutants = [
//     'Professor X',
//     'Cyclops',
//     'Iceman',
//     'Angel',
//     'Magneto',
//     'Beast',
//     'Phoenix',
//     'Logan',
//     'Gambit'
// ];
// const target=[
//     'Professor X',
//     'Logan',
//     'Phoenix',
//     'Gambit'
// ];

// const newMutants=mutants.map(function(mutant) {
//     if(target.indexOf(mutant)>-1){
//         mutant = '<3 '+mutant;
//     }
//     return mutant;
// });
// console.log('Original mutant:',mutants);
// console.log('updated mutant:',newMutants);