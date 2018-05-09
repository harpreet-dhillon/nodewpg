let newName = [];
const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];
mutants.forEach(function(name){
    if(name == 'Iceman' || name == 'Logan' || name == 'Phoenix'){
        let temp = newName.push(name);
    }
});
console.log(newName.toString());