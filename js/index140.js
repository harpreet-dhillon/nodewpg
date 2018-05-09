const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];
const remove = ['Iceman', 'Magneto', 'Gambit'];
const newMutants = mutants.filter(function(mutant){
    return remove.indexOf(mutant) == -1;
});
console.log(newMutants);