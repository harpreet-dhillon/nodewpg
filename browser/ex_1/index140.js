// Create a new index140.js file
// Define a mutants array with the following values:
// Professor X
// Cyclops
// Iceman
// Angel
// Magneto
// Beast
// Phoenix
// Logan
// Gambit
// Filter the list using the filter method and remove the following mutants:
// Magneto
// Iceman
// Gambit
// Show the filtered list as output
const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];
const newMutants = mutants.filter(function(remove){
    return [remove != 'Magneto', remove != 'Iceman', remove != 'Gambit'];
});
console.log(newMutants);
