const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];
for(let i = 0; i < mutants.length -1; i++){
    if(mutants[i] == 'Magneto'){
        break;
    }
    else{
        console.log(mutants[i]);
    }
}

let newMutants = [];
for(let i = 0; i < mutants.length; i++){
    let temp = newMutants.push(mutants[i]);
    if(i == mutants.indexOf('Magneto')){
        temp = newMutants.pop();
    }
}
for(let i = 0; i < newMutants.length; i++){
    console.log(`Index: ${i}, ${newMutants[i].toUpperCase()}`);
}